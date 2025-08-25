import React from "react";
import PageHeader from "@/components/PageHeader";

export default function Approach() {
  return (
    <div className="text-white">
      <PageHeader title="Approach" subtitle="Small parts, well-documented. No mystery boxes." />
      <div className="mx-auto max-w-4xl px-4 py-12">
        <ol className="list-decimal space-y-2 pl-6 text-white/85">
          <li>Discover: map the real workflow and constraints.</li>
          <li>Prototype: a thin vertical slice in 1–2 weeks.</li>
          <li>Integrate: harden, test, document, train.</li>
          <li>Operate: SLOs, observability, and change control.</li>
        </ol>
        <p className="mt-6 text-white/80">Artifacts: diagrams, runbooks, admin checklists, and owner handover.</p>
      </div>
    </div>
  );
}


