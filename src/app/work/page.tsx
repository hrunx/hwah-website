import React from "react";
import PageHeader from "@/components/PageHeader";

const GOLD = "#D4AF37";

export default function Work() {
  const items = [
    { t: "Fuel losses → visibility in 3 weeks", s: "RS‑485 fuel level sensor + Teltonika gateway → MQTT → ThingsBoard; rules: overfill, unauthorized refuel, variance.", i: "22% fewer unexplained losses; driver/vehicle accountability; weekly variance to finance." },
    { t: "Documents on autopilot", s: "Gmail/Drive automations; NDA/contract templating; e‑sign; DLP checks; archive.", i: "60% admin time saved; standard docs in <24h." },
    { t: "Field inspections without spreadsheets", s: "Mobile form → validation → PDF evidence pack → KPI dashboard → audit export.", i: "100% traceable sign‑offs; zero missing photos." },
    { t: "Ready‑mix fleet truth", s: "Drum RPM + trip segmentation; plant/site geofences; idle vs. pour windows; alerts to WhatsApp/Email.", i: "Utilization baselines; fewer fuel disputes." },
    { t: "Sales ops clarity", s: "Lead capture → scoring → SDR sequences; shared inbox playbooks; cycle‑time dashboard.", i: "Faster first response; cleaner pipeline hygiene; repeatable outreach." },
    { t: "OCR‑assisted energy audit", s: "OCR bill + floor‑plan extraction; merge room data; auto‑prefill assessment; AI summary; exportable bilingual report.", i: "Surveys pre‑filled; fewer on‑site revisits; consistent outputs." },
    { t: "Fleet telemetry pilot (ultrasonic)", s: "Ultrasonic level sensors via RS‑485 to Teltonika → MQTT ingest; alerts (sudden drop/leakage) + weekly variance.", i: "Early leak detection; cleaner reconciliation against fueling." },
    { t: "Legal ops pipeline", s: "Apps Script templating for NDAs/contracts; AR/EN variants; e‑sign; archive; routing and permissions.", i: "No more manual formatting; one‑click doc packs; audit trail." },
  ];
  return (
    <div className="text-white">
      <PageHeader title="Work" subtitle="Names under NDA; we show real dashboards privately." />
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
        <p className="text-white/80">We prefer measurable outcomes over big logos.</p>
        <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
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


