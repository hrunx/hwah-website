import React from "react";
import PageHeader from "@/components/PageHeader";

export default function Pricing() {
  return (
    <div className="text-white">
      <PageHeader title="Pricing" subtitle="Clear deliverables and SLOs. Fixed-fee where feasible." />
      <div className="mx-auto max-w-4xl px-4 py-12">
        <ul className="list-disc space-y-2 pl-6 text-white/85">
          <li>Build Sprint (2–4 weeks): prototype + plan + handover.</li>
          <li>Project (4–12 weeks): scoped delivery with milestones.</li>
          <li>Operate (monthly): monitoring, minor improvements, and on-call.</li>
        </ul>
        <p className="mt-6 text-white/80">We price against clearly defined deliverables and SLOs. Fixed-fee where feasible; time & materials for R&D.</p>
      </div>
    </div>
  );
}


