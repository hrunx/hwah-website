import React from "react";
import Badges from "@/components/Badges";
import RevealTimeline from "@/components/RevealTimeline";
import DraggableTimeline from "@/components/DraggableTimeline";

const GOLD = "#D4AF37";

export default function AIService() {
  return (
    <div className="text-white">
      <div className="mx-auto max-w-4xl px-4 py-12">
        <h1 className="font-display text-3xl font-bold" style={{ color: GOLD }}>AI Systems & Internal Copilots</h1>
        <p className="mt-3 text-white/85">Design and deploy copilots that retrieve from your docs and systems, with agentic workflows, safe prompts, and observability.</p>
        <Badges />
        <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {[
            { t: "Retrieval Chat", d: "Answers sourced from your Drive/DB with citations." },
            { t: "Agent Workflows", d: "Multi‑step tasks with approvals, SLAs, and logs." },
            { t: "Prompt Safety", d: "Red‑team tests, policies, and fallbacks baked in." },
          ].map((c, i) => (
            <div key={i} className="rounded-2xl border bg-black/50 p-4" style={{ borderColor: "#D4AF3755" }}>
              <h3 className="font-display text-sm font-semibold" style={{ color: "#D4AF37" }}>{c.t}</h3>
              <p className="mt-2 text-sm text-white/85">{c.d}</p>
            </div>
          ))}
        </div>
        <DraggableTimeline title="How we ship" steps={[
          { k: "Discovery", d: "Use‑cases, data sources, and risk mapping." },
          { k: "Prototype", d: "Vertical slice in 1–2 weeks with real content." },
          { k: "Integrate", d: "AuthN/Z, logging, dashboards, and handover." },
          { k: "Operate", d: "Observability, reviews, and quarterly upgrades." },
        ]} />
      </div>
    </div>
  );
}


