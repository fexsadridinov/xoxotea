"use client";
import { useState } from "react";
export function CityMap({ label, title }: { label: string; title: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div>
      {open ? (
        <iframe
          title={title}
          src="https://www.google.com/maps?q=Mykolaiv%2C%20Ukraine&output=embed"
          width="100%"
          height="240"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          style={{ border: 0 }}
        />
      ) : (
        <button
          className="button outline"
          type="button"
          onClick={() => setOpen(true)}
          data-track="city-map"
        >
          {label} ↗
        </button>
      )}
    </div>
  );
}
