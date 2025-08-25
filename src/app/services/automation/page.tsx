import React from "react";
import Badges from "@/components/Badges";

const GOLD = "#D4AF37";

export default function Automation() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 text-white">
      <h1 className="font-display text-3xl font-bold" style={{ color: GOLD }}>Automation & Workspace Ops</h1>
      <p className="mt-3 text-white/85">Automate the boring. Orchestrate across Google Workspace and SaaS with observability and safe change control.</p>
      <Badges />
      <ul className="mt-4 list-disc space-y-2 pl-6 text-white/85">
        <li>Docs/Sheets/Gmail flows with traceability and approvals</li>
        <li>Idempotent jobs, retries, and alerting for reliability</li>
        <li>Runbooks and handover so workflows survive long term</li>
      </ul>
    </div>
  );
}


