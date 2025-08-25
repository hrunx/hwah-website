import React from "react";
import PageHeader from "@/components/PageHeader";

const GOLD = "#D4AF37";

export default function Work() {
  const items = [
    { t: "Fuel losses → visibility in 3 weeks", s: "RS‑485 sensor + MQTT + ThingsBoard; rules for overfill and variance.", i: "22% fewer unexplained losses; driver/vehicle accountability." },
    { t: "Documents on autopilot", s: "Gmail/Drive automations; NDA/contract templating; e‑sign; DLP checks.", i: "60% admin time saved; standard docs in <24h." },
    { t: "Field inspections without spreadsheets", s: "Mobile form → validations → PDF pack → KPI dashboard.", i: "100% traceable sign‑offs; zero missing photos." },
    { t: "Fleet truth without drama", s: "RPM + trip segmentation; geofences; pour windows; alerts.", i: "Clear utilization baselines; fewer debates." },
    { t: "Sales ops clarity", s: "Lead capture → scoring → SDR sequences; shared inbox playbooks.", i: "Faster first response; cleaner pipeline; repeatable outreach." },
  ];
  return (
    <div className="text-white">
      <PageHeader title="Work" subtitle="Names available under NDA. We prefer outcomes over big logos." />
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {items.map((c, i) => (
            <div key={i} className="card-star-hover rounded-2xl border bg-black/50 p-6 backdrop-blur" style={{ borderColor: `${GOLD}55` }}>
              <h3 className="font-display text-lg font-semibold" style={{ color: GOLD }}>{c.t}</h3>
              <p className="mt-2 text-sm text-white/85">{c.s}</p>
              <p className="mt-1 text-sm" style={{ color: "#E6C766" }}>Impact: {c.i}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}


