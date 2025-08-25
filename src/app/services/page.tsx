import React from "react";
import PageHeader from "@/components/PageHeader";

const GOLD = "#D4AF37";
const GOLD_SOFT = "#E6C766";

export default function ServicesIndex() {
  return (
    <div className="text-white">
      <PageHeader title="Services" subtitle="Small, composable systems that survive contact with reality." />
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[{
            href: "/services/automation",
            title: "AI & Automation",
            desc: "Internal copilots and Workspace flows that stick.",
          }, {
            href: "/services/iot",
            title: "IoT & Telemetry",
            desc: "Sensors → ingest → rules/alerts → dashboards.",
          }, {
            href: "/services/analytics",
            title: "Data & Analytics",
            desc: "KPI model, pipelines, and dashboards that matter.",
          }, {
            href: "/services/lab",
            title: "Security R&D Lab",
            desc: "Defensive research and validation patterns.",
          }].map((c, i) => (
            <a key={i} href={c.href} className="rounded-2xl border bg-black/50 p-6 shadow-sm backdrop-blur transition hover:bg-white/5" style={{ borderColor: `${GOLD}55` }}>
              <h3 className="text-lg font-semibold" style={{ color: GOLD }}>{c.title}</h3>
              <p className="mt-2 text-sm text-white/80">{c.desc}</p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}


