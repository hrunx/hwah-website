import React from "react";

const GOLD = "#D4AF37";

export default function Badges() {
  const items = [
    { k: "OpenAI", v: "Beta Developer" },
    { k: "Google Cloud", v: "Cloud Innovator" },
    { k: "Security", v: "Privacy‑minded by default" },
  ];
  return (
    <div className="mt-6 flex flex-wrap gap-3">
      {items.map((b, i) => (
        <span key={i} className="rounded-full border px-3 py-1 text-xs text-white/90" style={{ borderColor: `${GOLD}55` }}>
          <span style={{ color: GOLD }}>{b.k}</span> · {b.v}
        </span>
      ))}
    </div>
  );
}


