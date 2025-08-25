import React from "react";

const GOLD = "#D4AF37";
const GOLD_SOFT = "#E6C766";

export default function Lab() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 text-white">
      <h1 className="text-3xl font-bold" style={{ color: GOLD }}>Security R&D Lab</h1>
      <p className="mt-3 text-white/85">A private, offline-first lab for secure prototyping and blue-team minded validation. Research only; lawful scope only.</p>
      <h2 className="mt-8 text-xl font-semibold" style={{ color: GOLD_SOFT }}>Focus areas</h2>
      <ul className="mt-2 list-disc space-y-2 pl-6 text-white/85">
        <li>Hardening automation pipelines and access boundaries</li>
        <li>Secure credential handling, secret rotation, and key hygiene</li>
        <li>Adversarial testing of chat/agent workflows</li>
      </ul>
      <p className="mt-6 text-white/75">Policy: We do not provide illegal/offensive tooling. Lab work is defensive and compliance‑oriented.</p>
    </div>
  );
}


