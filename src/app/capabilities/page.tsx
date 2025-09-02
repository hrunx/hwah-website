import React from "react";
import PageHeader from "@/components/PageHeader";

const GOLD = "#D4AF37";

export default function Capabilities() {
  const areas = [
    { title: "Advisory & Architecture", bullets: ["Workflows mapped, boundaries set, and done = measurable.", "Diagrams, SLOs, and clean owner handover."] },
    { title: "AI Copilots & Knowledge Systems", bullets: ["Drive/DB retrieval chat with policy‑aware prompts.", "Red‑team tested; bilingual with explainable citations."] },
    { title: "Google Workspace Automations", bullets: ["Gmail, Sheets, Docs, Drive, Forms; retries and logs.", "Document pipelines: template → e‑sign → archive."] },
    { title: "IoT & Telemetry", bullets: ["RS‑485/Modbus/4–20 mA sensors, MQTT/HTTP ingest.", "Rules & alerts; Looker/custom dashboards."] },
    { title: "Data & Analytics", bullets: ["KPI modeling, semantic layers, ETL/ELT to BQ/PG.", "Looker/Metabase dashboards; data quality & lineage."] },
    { title: "Security & Observability", bullets: ["Least privilege, secret hygiene, logging, incidents.", "Health checks and practical runbooks."] },
    { title: "Integrations & APIs", bullets: ["Flespi, ThingsBoard, OpenAI/DeepSeek, Supabase/Firestore.", "HubSpot, WhatsApp gateways; versioned adapters."] },
    { title: "Training & Handover", bullets: ["Admin training, bilingual SOPs, DR drills.", "Systems ready for new hires without a sermon."] },
  ];
  return (
    <div className="text-white">
      <PageHeader title="Capabilities" subtitle="Small, composable systems that remove busywork and surface truth." />
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
        <p className="text-white/80">Deliverables across all work: source/config, runbooks, acceptance tests, SLOs, and an owner handover.</p>
        <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {areas.map((a, i) => (
            <div key={i} className="rounded-2xl border bg-black/50 p-6 backdrop-blur" style={{ borderColor: `${GOLD}55` }}>
              <h3 className="font-display text-lg font-semibold" style={{ color: GOLD }}>{a.title}</h3>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-white/85">
                {a.bullets.map((b, j) => (<li key={j}>{b}</li>))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}



