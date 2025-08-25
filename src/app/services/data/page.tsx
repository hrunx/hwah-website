import React from "react";
import Badges from "@/components/Badges";
import RevealTimeline from "@/components/RevealTimeline";
import DraggableTimeline from "@/components/DraggableTimeline";

const GOLD = "#D4AF37";

export default function DataService() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 text-white">
      <h1 className="font-display text-3xl font-bold" style={{ color: GOLD }}>Data Platforms & Analytics</h1>
      <p className="mt-3 text-white/85">Design KPIs that matter, ship clean pipelines, and surface truth through dashboards with lineage and quality checks.</p>
      <Badges />
      <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-3">
        {[{t:"KPI Model", d:"Metrics that matter, not vanity"},{t:"Pipelines", d:"ETL/ELT with tests and lineage"},{t:"Dashboards", d:"Ops visibility and alerts"}].map((c,i)=> (
          <div key={i} className="rounded-2xl border bg-black/50 p-4" style={{ borderColor: "#D4AF3755" }}>
            <h3 className="font-display text-sm font-semibold" style={{ color: "#D4AF37" }}>{c.t}</h3>
            <p className="mt-2 text-sm text-white/85">{c.d}</p>
          </div>
        ))}
      </div>
      <DraggableTimeline title="Data lifecycle" steps={[
        { k: "Model", d: "Agree on metrics and owners" },
        { k: "Ingest", d: "Pipelines to BigQuery/Postgres" },
        { k: "Validate", d: "Tests, lineage, and reviews" },
        { k: "Visualize", d: "Dashboards and alerts that drive action" },
      ]} />
    </div>
  );
}


