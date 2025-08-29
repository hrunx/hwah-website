import React from "react";
import PageHeader from "@/components/PageHeader";

const GOLD = "#D4AF37";

export default function Industries() {
  const sectors = [
    { t: "Energy & Fuels", d: "Fuel telemetry and control, driver/vehicle auth, usage‑based billing, procurement automations, variance reports." },
    { t: "Construction & Ready‑Mix", d: "Drum RPM, site geofences, idle vs. pour windows, incident alerts, fleet KPIs." },
    { t: "Logistics & Fleet", d: "Trip segmentation, tank level monitoring (ultrasonic/RS‑485), refuel accountability, geofence compliance, uptime." },
    { t: "Industrial & Field Ops", d: "Work‑order automation, photo evidence packs, timestamped safety/compliance, SLA dashboards." },
    { t: "SME & SaaS Back‑Office", d: "Sales ops automations, shared inbox playbooks, bilingual legal ops, HR onboarding/offboarding, WPS/ZATCA flows." },
    { t: "e‑Mobility & Hydrogen (strategy)", d: "Pilot design, charging/fueling telemetry, ESG reporting, partnership enablement." },
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


