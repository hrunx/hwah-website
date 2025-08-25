import React from "react";

const GOLD = "#D4AF37";
const GOLD_SOFT = "#E6C766";

export default function Automation() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 text-white">
      <h1 className="text-3xl font-bold" style={{ color: GOLD }}>AI & Automation</h1>
      <p className="mt-3 text-white/85">We design small, composable automations that outlive hype cycles. Think less “magic” and more reliable gears.</p>
      <h2 className="mt-8 text-xl font-semibold" style={{ color: GOLD_SOFT }}>What we build</h2>
      <ul className="mt-2 list-disc space-y-2 pl-6 text-white/85">
        <li>Internal copilots (chat + retrieval from Drive/DB)</li>
        <li>Google Workspace automations (Gmail, Sheets, Docs, Drive, Forms, Calendar)</li>
        <li>Process orchestration (Zapier/Make/Cloud Functions) with retries and logging</li>
        <li>Doc pipelines: templating, e-sign, archiving, audit trails</li>
      </ul>
      <p className="mt-6 text-white/80">Pattern: Discover → Prototype in 1–2 weeks → Harden & document → Operate with SLOs</p>
    </div>
  );
}


