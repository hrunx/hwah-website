import React from "react";

const GOLD = "#D4AF37";

export default function Industrial() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 text-white">
      <h1 className="text-3xl font-bold" style={{ color: GOLD }}>Industrial & Field Ops</h1>
      <ul className="mt-4 list-disc space-y-2 pl-6 text-white/85">
        <li>Work order automation: form → ticket → SLA clock → closure report.</li>
        <li>Safety & compliance records: timestamped evidence packs and approvals.</li>
      </ul>
    </div>
  );
}


