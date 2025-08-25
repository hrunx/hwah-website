import React from "react";
import PageHeader from "@/components/PageHeader";

const GOLD = "#D4AF37";

export default function Industries() {
  const sectors = [
    { t: "Energy & Logistics", d: "Telemetry, auth, and consumption analytics; usage‑based docs." },
    { t: "Construction & Materials", d: "Ready‑mix, geofences, drum RPM, utilization and variance." },
    { t: "Industrial & Field Ops", d: "Work orders, photo evidence packs, safety/compliance." },
    { t: "SME & SaaS back‑office", d: "Sales ops, HR onboarding/offboarding, bilingual legal ops." },
    { t: "e‑Mobility & Hydrogen", d: "Strategy, pilots, telemetry and reporting." },
  ];
  return (
    <div className="text-white">
      <PageHeader title="Industries" subtitle="Where we build with context." />
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {sectors.map((s, i) => (
            <div key={i} className="card-star-hover rounded-2xl border bg-black/50 p-6 backdrop-blur" style={{ borderColor: `${GOLD}55` }}>
              <h3 className="font-display text-lg font-semibold" style={{ color: GOLD }}>{s.t}</h3>
              <p className="mt-2 text-sm text-white/85">{s.d}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}


