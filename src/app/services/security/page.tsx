import React from "react";
import Badges from "@/components/Badges";
import RevealTimeline from "@/components/RevealTimeline";

const GOLD = "#D4AF37";

export default function SecurityService() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 text-white">
      <h1 className="font-display text-3xl font-bold" style={{ color: GOLD }}>Security & Readiness</h1>
      <p className="mt-3 text-white/85">Bake security into workflows: boundaries, secrets, and logging that meet policy without slowing teams down.</p>
      <Badges />
      <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-3">
        {[{t:"Boundaries", d:"Least‑privilege access reviews"},{t:"Secrets", d:"Rotation, storage, and hygiene"},{t:"Readiness", d:"Audit trails + IR playbooks"}].map((c,i)=> (
          <div key={i} className="rounded-2xl border bg-black/50 p-4" style={{ borderColor: "#D4AF3755" }}>
            <h3 className="font-display text-sm font-semibold" style={{ color: "#D4AF37" }}>{c.t}</h3>
            <p className="mt-2 text-sm text-white/85">{c.d}</p>
          </div>
        ))}
      </div>
      <RevealTimeline title="Security by habit" steps={[
        { k: "Assess", d: "Boundary and secret reviews" },
        { k: "Harden", d: "Policies, least privilege, logs" },
        { k: "Train", d: "Runbooks and awareness" },
        { k: "Evolve", d: "Periodic checks and updates" },
      ]} />
    </div>
  );
}


