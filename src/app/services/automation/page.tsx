import React from "react";
import Badges from "@/components/Badges";
import RevealTimeline from "@/components/RevealTimeline";

const GOLD = "#D4AF37";

export default function Automation() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 text-white">
      <h1 className="font-display text-3xl font-bold" style={{ color: GOLD }}>Automation & Workspace Ops</h1>
      <p className="mt-3 text-white/85">Automate the boring. Orchestrate across Google Workspace and SaaS with observability and safe change control.</p>
      <Badges />
      <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-3">
        {[{t:"Workspace Flows", d:"Docs/Sheets/Gmail with traceability"},{t:"Reliable Jobs", d:"Retries + alerts, no duplicates"},{t:"Runbooks", d:"Ops guides and safe change control"}].map((c,i)=> (
          <div key={i} className="rounded-2xl border bg-black/50 p-4" style={{ borderColor: "#D4AF3755" }}>
            <h3 className="font-display text-sm font-semibold" style={{ color: "#D4AF37" }}>{c.t}</h3>
            <p className="mt-2 text-sm text-white/85">{c.d}</p>
          </div>
        ))}
      </div>
      <RevealTimeline title="Path to live" steps={[
        { k: "Map", d: "Steps, owners, integrations" },
        { k: "Slice", d: "Prototype within 1–2 weeks" },
        { k: "Harden", d: "Auth, logs, alerts, docs" },
        { k: "Operate", d: "SLOs and continuous improvements" },
      ]} />
    </div>
  );
}


