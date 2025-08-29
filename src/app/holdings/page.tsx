import React from "react";
import PageHeader from "@/components/PageHeader";

const GOLD = "#D4AF37";

export default function Holdings() {
  const owned = [
    { k: "HWAH Lab", v: "Private, offline‑first R&D for secure automation patterns, prompt‑injection resilience, and blue‑team validation." },
    { k: "Quantilyst", v: "Data utilities and research assistants used across engagements." },
    { k: "Pixelator", v: "Design‑to‑asset helpers and marketing tooling.", href: "https://github.com/hrunx/pixelator" },
    { k: "Stockler", v: "Lightweight data pipelines/ETL helpers for market & ops data.", href: "https://github.com/hrunx/stockler" },
  ];
  const operating = [
    { k: "ES2 Square", v: "Smart energy audit toolkit (web + OCR + AI) for commercial/home; RTL + export." },
    { k: "Gasable", v: "Energy marketplace + IoT: fuel telemetry, driver/vehicle auth, usage‑based billing, procurement automations.", href: "https://gasable.net" },
    { k: "Leadora", v: "Multi‑agent lead generation experiments (agentic orchestration + tools)." },
    { k: "Hysabat", v: "ERP/FinTech for SMEs: ZATCA e‑invoicing, WPS, POS integrations, analytics, compliance‑first.", href: "https://hysabat.com" },
    { k: "Autilent", v: "AI dash‑cam & fleet‑safety stack with edge hardware, safety scoring, incident packs.", href: "https://autilent.com" },
    { k: "HeavySooq", v: "Industrial marketplace: product data models, supplier onboarding, bulk catalog tooling." },
  ];
  return (
    <div className="text-white">
      <PageHeader title="Holdings & Ventures" subtitle="Owned assets and operating partnerships." />
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <div className="rounded-2xl border bg-black/50 p-6" style={{ borderColor: `${GOLD}55` }}>
            <h2 className="font-display text-xl font-semibold" style={{ color: GOLD }}>Owned</h2>
            <ul className="mt-3 space-y-3 text-sm text-white/85">
              {owned.map((o, i) => (
                <li key={i}>
                  {o.href ? (
                    <a href={o.href} className="underline" target="_blank" rel="noopener noreferrer" style={{ color: GOLD }}>{o.k}</a>
                  ) : (
                    <span className="font-medium" style={{ color: GOLD }}>{o.k}</span>
                  )}
                  {" — "}{o.v}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border bg-black/50 p-6" style={{ borderColor: `${GOLD}55` }}>
            <h2 className="font-display text-xl font-semibold" style={{ color: GOLD }}>Operating / Partner</h2>
            <ul className="mt-3 space-y-3 text-sm text-white/85">
              {operating.map((p, i) => (
                <li key={i}>
                  {p.href ? (
                    <a href={p.href} className="underline" target="_blank" rel="noopener noreferrer" style={{ color: GOLD }}>{p.k}</a>
                  ) : (
                    <span className="font-medium" style={{ color: GOLD }}>{p.k}</span>
                  )}
                  {" — "}{p.v}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}



