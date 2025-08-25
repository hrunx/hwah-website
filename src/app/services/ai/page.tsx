import React from "react";
import Badges from "@/components/Badges";

const GOLD = "#D4AF37";

export default function AIService() {
  return (
    <div className="text-white">
      <div className="mx-auto max-w-4xl px-4 py-12">
        <h1 className="font-display text-3xl font-bold" style={{ color: GOLD }}>AI Systems & Internal Copilots</h1>
        <p className="mt-3 text-white/85">Design and deploy copilots that retrieve from your docs and systems, with agentic workflows, safe prompts, and observability.</p>
        <Badges />
        <ul className="mt-6 list-disc space-y-2 pl-5 text-white/85">
          <li>Retrieval‑augmented chat for support, research, and ops</li>
          <li>Task pipelines with approvals, SLAs, and audit logs</li>
          <li>Prompt resilience, red‑team testing, policy alignment</li>
        </ul>
      </div>
    </div>
  );
}


