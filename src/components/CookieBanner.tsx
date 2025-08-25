"use client";

import React, { useEffect, useState } from "react";

const GOLD = "#D4AF37";

export default function CookieBanner() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const v = localStorage.getItem("cookie-consent");
    if (!v) setOpen(true);
  }, []);
  if (!open) return null;
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 mx-auto max-w-4xl p-3">
      <div className="rounded-2xl border bg-black/70 p-4 backdrop-blur" style={{ borderColor: `${GOLD}55` }}>
        <p className="text-sm text-white/85">We use minimal analytics to understand traffic. No cross‑site ads.</p>
        <div className="mt-3 flex flex-col gap-2 sm:flex-row sm:gap-3">
          <button
            className="btn-gold-outline px-4 py-2 text-sm"
            onClick={() => { localStorage.setItem("cookie-consent", "accepted"); setOpen(false); }}
          >
            Accept
          </button>
          <button className="btn-gold-outline px-4 py-2 text-sm" onClick={() => setOpen(false)}>Settings</button>
        </div>
      </div>
    </div>
  );
}


