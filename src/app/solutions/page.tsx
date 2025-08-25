import React from "react";
import PageHeader from "@/components/PageHeader";

const GOLD = "#D4AF37";
const GOLD_SOFT = "#E6C766";

export default function Solutions() {
  return (
    <div className="text-white">
      <PageHeader title="Solutions" subtitle="Where we apply the tools to move the needle." />
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          {[{
            href: "/solutions/energy-logistics",
            title: "Energy & Logistics",
            desc: "Fuel telemetry, fleet visibility, and VAT‑ready docs.",
          }, {
            href: "/solutions/industrial",
            title: "Industrial & Field Ops",
            desc: "Work orders and compliance with clear evidence.",
          }, {
            href: "/solutions/backoffice",
            title: "Back‑office Automation",
            desc: "Sales, HR, and legal ops with strong audit trails.",
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


