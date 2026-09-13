"use client";
import { useState, type FormEvent } from "react";
import { connection, type Copy, type Locale } from "@/lib/investor-content";
import { getAttribution, track } from "./Behavior";
export function LeadForm({
  c,
  locale,
  waitlist = false,
}: {
  c: Copy["contact"];
  locale: Locale;
  waitlist?: boolean;
}) {
  const [state, setState] = useState<
    "idle" | "sending" | "sent" | "error" | "draft"
  >("idle");
  const id = waitlist ? "waitlist" : "meeting";
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const contact = String(data.get("contact") || "").trim();
    const nameInput = form.elements.namedItem(
      "name",
    ) as HTMLInputElement | null;
    if (nameInput && !nameInput.value.trim()) {
      nameInput.setCustomValidity(c.nameInvalid);
      nameInput.reportValidity();
      return;
    }
    const input = form.elements.namedItem("contact") as HTMLInputElement;
    if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contact) &&
      (!/^@[A-Za-z][A-Za-z0-9_]{4,31}$/.test(contact) || waitlist)
    ) {
      input.setCustomValidity(c.invalid);
      input.reportValidity();
      return;
    }
    if (data.get("website")) return;
    const payload = {
      kind: waitlist ? "waitlist" : String(data.get("kind") || "meeting"),
      name: String(data.get("name") || "")
        .trim()
        .slice(0, 100),
      organization: String(data.get("organization") || "")
        .trim()
        .slice(0, 150),
      ticket: String(data.get("ticket") || ""),
      contact,
      consent: true,
      locale,
      attribution: getAttribution(),
    };
    if (!connection.endpoint) {
      const blob = new Blob([JSON.stringify(payload, null, 2)], {
        type: "text/plain;charset=utf-8",
      });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `xoxo-${id}-request.txt`;
      a.click();
      setTimeout(() => URL.revokeObjectURL(url), 1000);
      setState("draft");
      track("Request draft", { kind: payload.kind });
      return;
    }
    setState("sending");
    track("Form submit", { kind: payload.kind });
    try {
      const controller = new AbortController();
      const timer = setTimeout(() => controller.abort(), 15000);
      let response: Response;
      try {
        response = await fetch(connection.endpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
          signal: controller.signal,
        });
      } finally {
        clearTimeout(timer);
      }
      if (!response.ok) throw new Error("Delivery failed");
      setState("sent");
      track("Form success", { kind: payload.kind });
      form.reset();
    } catch {
      setState("error");
      track("Form error", { kind: payload.kind });
    }
  }
  if (state === "sent")
    return (
      <div className="confirmation" role="status">
        <h3>{c.sent}</h3>
        <p>{c.sentBody}</p>
        <button className="button" onClick={() => setState("idle")}>
          {c.again}
        </button>
      </div>
    );
  return (
    <form className="lead-form" onSubmit={submit}>
      <div className="honeypot" aria-hidden="true">
        <input
          name="website"
          tabIndex={-1}
          autoComplete="off"
          aria-label="website"
        />
      </div>
      {!waitlist && (
        <>
          <label htmlFor={`${id}-name`}>
            {c.name}
            <input
              id={`${id}-name`}
              name="name"
              required
              maxLength={100}
              autoComplete="name"
              onInput={(e) => e.currentTarget.setCustomValidity("")}
            />
          </label>
          <label htmlFor={`${id}-org`}>
            {c.org}
            <input
              id={`${id}-org`}
              name="organization"
              maxLength={150}
              autoComplete="organization"
            />
          </label>
          <label htmlFor={`${id}-ticket`}>
            {c.ticket}
            <select id={`${id}-ticket`} name="ticket">
              {c.ranges.map((r) => (
                <option key={r} value={r}>
                  {r}
                </option>
              ))}
            </select>
          </label>
          <label htmlFor={`${id}-kind`}>
            {c.room}
            <select id={`${id}-kind`} name="kind">
              <option value="meeting">{c.send}</option>
              <option value="data-room">{c.room}</option>
            </select>
          </label>
        </>
      )}
      <label className="span-all" htmlFor={`${id}-contact`}>
        {waitlist ? c.emailOnly : c.email}
        <input
          id={`${id}-contact`}
          name="contact"
          type={waitlist ? "email" : "text"}
          autoComplete="email"
          required
          maxLength={254}
          onInput={(e) => e.currentTarget.setCustomValidity("")}
        />
      </label>
      <label className="consent span-all">
        <input type="checkbox" required name="consent" />
        {c.consent}
      </label>
      {!connection.endpoint && <p className="note span-all">{c.unavailable}</p>}
      <button
        className="button primary span-all"
        type="submit"
        disabled={state === "sending"}
        data-track={id}
      >
        {state === "sending"
          ? c.sending
          : connection.endpoint
            ? waitlist
              ? c.waitlist
              : c.send
            : c.draft}
        <span aria-hidden="true">↗</span>
      </button>
      <div className="span-all" role="status">
        {state === "error" && <p>{c.error}</p>}
        {state === "draft" && <p>{c.draftNote}</p>}
      </div>
      {connection.email && (
        <a
          className="span-all text-link"
          href={`mailto:${connection.email}`}
          data-track="email"
        >
          {connection.email}
        </a>
      )}
    </form>
  );
}
