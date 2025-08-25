import React from "react";

const GOLD = "#D4AF37";

export default function Analytics() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 text-white">
      <h1 className="text-3xl font-bold" style={{ color: GOLD }}>Data & Analytics</h1>
      <ul className="mt-4 list-disc space-y-2 pl-6 text-white/85">
        <li>KPI model + semantic layer</li>
        <li>ETL/ELT into BigQuery/Postgres</li>
        <li>Looker Studio/Metabase/Custom dashboards</li>
        <li>Data quality checks and lineage</li>
      </ul>
    </div>
  );
}


