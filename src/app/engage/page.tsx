import React from "react";
import PageHeader from "@/components/PageHeader";

const GOLD = "#D4AF37";

export default function Engage() {
  const faqs = [
    { q: "What deliverables do we get?", a: "Source/config, runbooks, acceptance tests, SLOs, and an owner handover." },
    { q: "How do you handle support windows?", a: "We establish response and change windows aligned to risk and cost." },
    { q: "How is security handled?", a: "Least privilege, secret hygiene, logs, and incident playbooks. NDA‑standard." },
  ];
  const packages = [
    { t: "Discover & Blueprint", d: "Current‑state map, risks, acceptance tests, and architecture with SLOs." },
    { t: "Pilot", d: "1–2 week thin vertical slice with real data under flags; measured outcomes." },
    { t: "Production & Operate", d: "Harden, train, document; observability and controlled changes." },
  ];
  return (
    <div className="text-white">
      <PageHeader title="Engage" subtitle="Clear packages with real deliverables and SLOs." />
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          {packages.map((p, i) => (
            <div key={i} className="rounded-2xl border bg-black/50 p-6" style={{ borderColor: `${GOLD}55` }}>
              <h3 className="font-display text-lg font-semibold" style={{ color: GOLD }}>{p.t}</h3>
              <p className="mt-2 text-sm text-white/85">{p.d}</p>
            </div>
          ))}
        </div>
        <div className="mx-auto mt-8 max-w-3xl">
          <h2 className="font-display text-xl font-semibold" style={{ color: GOLD }}>FAQ</h2>
          <div className="mt-3 grid grid-cols-1 gap-3">
            {faqs.map((f, i) => (
              <div key={i} className="rounded-2xl border bg-black/50 p-5" style={{ borderColor: `${GOLD}55` }}>
                <h3 className="text-sm font-semibold" style={{ color: GOLD }}>{f.q}</h3>
                <p className="mt-1 text-sm text-white/85">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}



