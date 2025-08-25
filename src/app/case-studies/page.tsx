import React from "react";
import PageHeader from "@/components/PageHeader";

const GOLD = "#D4AF37";
const GOLD_SOFT = "#E6C766";

export default function CaseStudies() {
  return (
    <div className="text-white">
      <PageHeader title="Case Studies" subtitle="Anonymized snapshots. Names available under NDA." />
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          {[{
            title: "Fuel losses → visibility in 3 weeks",
            scope: "RS‑485 fuel sensor + Teltonika → MQTT → ThingsBoard; alerts: overfill, unauthorized refuel; weekly variance report.",
            impact: "22% reduction in unexplained losses; refuel accountability by driver/vehicle."
          }, {
            title: "Document chaos → single source of truth",
            scope: "Gmail/Drive automations; NDA/contract pipelines with Apps Script; DLP checks.",
            impact: "60% time saved in admin, <24h turnaround for standard docs."
          }, {
            title: "Field inspections, no spreadsheets",
            scope: "Mobile form → validation → PDF pack → dashboard KPIs → monthly audit export.",
            impact: "0 missing photos, 100% traceable sign-offs."
          }].map((c, i) => (
            <div key={i} className="rounded-2xl border bg-black/50 p-6 shadow-sm backdrop-blur" style={{ borderColor: `${GOLD}55` }}>
              <h3 className="text-lg font-semibold" style={{ color: GOLD }}>{c.title}</h3>
              <p className="mt-2 text-sm text-white/85">{c.scope}</p>
              <p className="mt-2 text-sm" style={{ color: GOLD_SOFT }}>Impact: {c.impact}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}


