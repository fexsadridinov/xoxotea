# Lead endpoint contract

POST the configured HTTPS endpoint with `Content-Type: application/json`.

```json
{
  "kind": "meeting",
  "name": "Example visitor",
  "organization": "Optional",
  "ticket": "1",
  "contact": "visitor@example.com",
  "consent": true,
  "locale": "uk",
  "attribution": { "ref": "landlord-a", "utm_source": "email" }
}
```

`kind`: meeting, data-room or waitlist. Ticket values 0–3 map to localized dropdown choices. A Telegram contact must match `@[A-Za-z][A-Za-z0-9_]{4,31}`; waitlist requires email. Name max 100, organization max 150, contact max 254, each attribution field max 150. Fields are plain text, never trusted HTML. The receiver must enforce all constraints again.

Return 2xx only after durable acceptance, 400 for invalid data, 429 for rate limiting, 5xx for transient failure. The client has a 15-second timeout and never clears entered data after failure. Exact retries may require server-side deduplication.

Security: no secrets in the browser. Restrict allowed origins, apply rate limits, validate consent, set a retention policy and an owner-accessible deletion process. Do not publicly expose submissions. Data-room access is a reviewed request, not an authorization system or public download URL. A server-side authenticated file store is required before distributing confidential material.

Plausible events: CTA action, investor section, scroll depth, form submit/success/error, request draft. No form fields or raw referral values are sent to analytics. Ref/UTM values are retained in sessionStorage and sent only with the lead payload.
