import React from "react";

const GOLD = "#D4AF37";

export default function Backoffice() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 text-white">
      <h1 className="text-3xl font-bold" style={{ color: GOLD }}>Back-office Automation</h1>
      <ul className="mt-4 list-disc space-y-2 pl-6 text-white/85">
        <li>Sales ops: lead capture, scoring, sequences, shared inbox playbooks.</li>
        <li>HR ops: onboarding/offboarding packs, WPS exports, policy acknowledgments.</li>
        <li>Legal ops: NDA/contract templating, e-sign, archive with retention.</li>
      </ul>
    </div>
  );
}


