import React from "react";
import PageHeader from "@/components/PageHeader";

const GOLD = "#D4AF37";

export default function About() {
  return (
    <div className="text-white">
      <PageHeader title="About" subtitle="Boutique systems studio headquartered in Saudi Arabia." />
      <div className="mx-auto max-w-4xl px-4 py-12">
        <p className="text-white/85">HWAH blends engineering, operations, and security thinking to remove friction where it hurts your margins.</p>
        <ul className="mt-6 list-disc space-y-2 pl-6 text-white/85">
          <li>Clarity over complexity — small parts, well-documented.</li>
          <li>Security by habit — least privilege, logs, and reviews.</li>
          <li>Measurable outcomes — if we can’t measure it, we don’t ship it.</li>
        </ul>
        <p className="mt-6 text-white/80">Where we work: KSA-first with remote-friendly delivery.</p>
      </div>
    </div>
  );
}


