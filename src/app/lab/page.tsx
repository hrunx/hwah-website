import React from "react";
import PageHeader from "@/components/PageHeader";

const GOLD = "#D4AF37";

export default function LabPage() {
  return (
    <div className="text-white">
      <PageHeader title="Lab" subtitle="Offline‑first R&D for secure automation patterns." />
      <div className="mx-auto max-w-5xl px-4 py-12">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          <div className="rounded-2xl border bg-black/50 p-6 sm:col-span-2" style={{ borderColor: `${GOLD}55` }}>
            <h2 className="font-display text-xl font-semibold" style={{ color: GOLD }}>What the Lab does</h2>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-white/85">
              <li>Hardens automation pipelines and access boundaries</li>
              <li>Validates secret handling, rotation, and key hygiene</li>
              <li>Red‑teams policy/prompt design for safer agentic patterns</li>
            </ul>
          </div>
          <div className="rounded-2xl border bg-black/50 p-6" style={{ borderColor: `${GOLD}55` }}>
            <h2 className="font-display text-xl font-semibold" style={{ color: GOLD }}>What we don’t do</h2>
            <p className="mt-2 text-sm text-white/85">No offensive tooling, spyware, or illegal services. Research is defensive and compliance‑oriented.</p>
          </div>
        </div>
        <div className="mt-6 rounded-2xl border bg-black/50 p-6" style={{ borderColor: `${GOLD}55` }}>
          <h2 className="font-display text-xl font-semibold" style={{ color: GOLD }}>Outputs</h2>
          <p className="mt-2 text-sm text-white/85">Internal playbooks, secure starter kits, and micro‑tools we later productionize in client work.</p>
        </div>
      </div>
    </div>
  );
}



