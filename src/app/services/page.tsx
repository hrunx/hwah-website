import React from "react";
import PageHeader from "@/components/PageHeader";

const GOLD = "#D4AF37";

export default function ServicesIndex() {
  const areas = [
    {
      title: "AI Systems & Internal Copilots",
      href: "/services/ai",
      bullets: [
        "Chat + retrieval on your docs and data",
        "Agentic workflows with approvals and logs",
        "Secure prompt design and red‑team testing",
      ],
    },
    {
      title: "Automation & Workspace Ops",
      href: "/services/automation",
      bullets: [
        "Google Workspace and SaaS orchestration",
        "Docs/Sheets/Gmail flows with traceability",
        "Idempotent jobs with retries and alerts",
      ],
    },
    {
      title: "Data Platforms & Analytics",
      href: "/services/data",
      bullets: [
        "Semantic layer + KPI design",
        "Pipelines to BigQuery/Postgres",
        "Operational dashboards and quality checks",
      ],
    },
    {
      title: "Security & Readiness",
      href: "/services/security",
      bullets: [
        "Least privilege and boundary reviews",
        "Secret handling and key hygiene",
        "Audit trails, policies, and training",
      ],
    },
  ];
  return (
    <div className="text-white">
      <PageHeader title="Services" subtitle="Where HWAH compounds value across disciplines." />
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {areas.map((a, i) => (
            <a key={i} href={a.href} className="rounded-2xl border bg-black/50 p-6 backdrop-blur transition hover:bg-white/5" style={{ borderColor: `${GOLD}55` }}>
              <h3 className="font-display text-lg font-semibold" style={{ color: GOLD }}>{a.title}</h3>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-white/85">
                {a.bullets.map((b, j) => (<li key={j}>{b}</li>))}
              </ul>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}


