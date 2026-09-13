"use client";
import { useEffect, useRef, useState } from "react";
export function Film({
  pause,
  play,
  pour = false,
}: {
  pause: string;
  play: string;
  pour?: boolean;
}) {
  const mobile = useRef<HTMLVideoElement>(null),
    desktop = useRef<HTMLVideoElement>(null);
  const [allowed, setAllowed] = useState(false),
    [playing, setPlaying] = useState(true);
  useEffect(() => {
    const mq = matchMedia("(prefers-reduced-motion: reduce)");
    const connection = (
      navigator as Navigator & {
        connection?: {
          saveData?: boolean;
          effectiveType?: string;
          addEventListener?: (t: string, f: () => void) => void;
          removeEventListener?: (t: string, f: () => void) => void;
        };
      }
    ).connection;
    const viewport = matchMedia("(max-width: 767px)");
    const update = () => {
      const ok =
        !mq.matches &&
        !connection?.saveData &&
        !["slow-2g", "2g", "3g"].includes(connection?.effectiveType || "");
      setAllowed(ok);
      const small = !pour && viewport.matches;
      const selected = small ? mobile.current : desktop.current;
      for (const video of [mobile.current, desktop.current]) {
        if (video && video !== selected) video.pause();
        if (!ok && video?.getAttribute("src")) {
          video.pause();
          video.removeAttribute("src");
          video.load();
        }
      }
      if (ok) {
        const video = selected;
        if (video) {
          if (!video.getAttribute("src"))
            video.src = pour
              ? "/assets/pour.mp4"
              : small
                ? "/assets/hero-mobile-fast.mp4"
                : "/assets/hero-desktop.mp4";
          if (video.paused)
            video
              .play()
              .then(() => setPlaying(true))
              .catch(() => setPlaying(false));
        }
      }
    };
    if (document.readyState === "complete") update();
    else window.addEventListener("load", update, { once: true });
    mq.addEventListener("change", update);
    viewport.addEventListener("change", update);
    connection?.addEventListener?.("change", update);
    return () => {
      window.removeEventListener("load", update);
      mq.removeEventListener("change", update);
      viewport.removeEventListener("change", update);
      connection?.removeEventListener?.("change", update);
    };
  }, [pour]);
  return (
    <>
      <link
        rel="preload"
        as="image"
        href={
          pour
            ? "/assets/pour-poster-960.webp"
            : "/assets/hero-mobile-poster-960.webp"
        }
        media={pour ? undefined : "(max-width: 767px)"}
        fetchPriority="high"
      />
      {!pour && (
        <link
          rel="preload"
          as="image"
          href="/assets/hero-desktop-poster-960.webp"
          media="(min-width: 768px)"
          fetchPriority="high"
        />
      )}
      {!pour && (
        <video
          id="hero-film-mobile"
          suppressHydrationWarning
          ref={mobile}
          className="film film-mobile"
          muted
          autoPlay
          playsInline
          loop
          preload="none"
          poster="/assets/hero-mobile-poster-960.webp"
          aria-hidden="true"
        />
      )}
      <video
        id={pour ? "pour-film" : "hero-film-desktop"}
        suppressHydrationWarning
        ref={desktop}
        className={`film ${pour ? "" : "film-desktop"}`}
        muted
        autoPlay
        playsInline
        loop
        preload="none"
        poster={
          pour
            ? "/assets/pour-poster-960.webp"
            : "/assets/hero-desktop-poster-960.webp"
        }
        aria-hidden="true"
      />
      <script
        dangerouslySetInnerHTML={{
          __html: `(()=>{const c=navigator.connection;if(matchMedia('(prefers-reduced-motion: reduce)').matches||c?.saveData||['slow-2g','2g','3g'].includes(c?.effectiveType))return;const small=${pour ? "false" : "matchMedia('(max-width: 767px)').matches"};const v=document.getElementById(small?'hero-film-mobile':'${pour ? "pour-film" : "hero-film-desktop"}');if(v){v.muted=true;v.src=small?'/assets/hero-mobile-fast.mp4':'${pour ? "/assets/pour.mp4" : "/assets/hero-desktop.mp4"}';v.play().catch(()=>{});}})();`,
        }}
      />
      {allowed && (
        <button
          className="film-toggle"
          aria-label={playing ? pause : play}
          onClick={() => {
            const v = [mobile.current, desktop.current].find((v) =>
              v?.getAttribute("src"),
            );
            if (v) {
              if (playing) {
                v.pause();
                setPlaying(false);
              } else
                v.play()
                  .then(() => setPlaying(true))
                  .catch(() => setPlaying(false));
            }
          }}
        >
          {playing ? "Ⅱ" : "▷"}
        </button>
      )}
    </>
  );
}
