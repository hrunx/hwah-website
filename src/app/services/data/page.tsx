import React from "react";

const GOLD = "#D4AF37";

export default function DataService() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 text-white">
      <h1 className="font-display text-3xl font-bold" style={{ color: GOLD }}>Data Platforms & Analytics</h1>
      <p className="mt-3 text-white/85">Design KPIs that matter, ship clean pipelines, and surface truth through dashboards with lineage and quality checks.</p>
      <ul className="mt-4 list-disc space-y-2 pl-6 text-white/85">
        <li>Semantic layer and metric definitions</li>
        <li>ETL/ELT to BigQuery/Postgres with testing</li>
        <li>Operational dashboards and alerts</li>
      </ul>
    </div>
  );
}


