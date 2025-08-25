import React from "react";
import Badges from "@/components/Badges";

const GOLD = "#D4AF37";

export default function SecurityService() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 text-white">
      <h1 className="font-display text-3xl font-bold" style={{ color: GOLD }}>Security & Readiness</h1>
      <p className="mt-3 text-white/85">Bake security into workflows: boundaries, secrets, and logging that meet policy without slowing teams down.</p>
      <Badges />
      <ul className="mt-4 list-disc space-y-2 pl-6 text-white/85">
        <li>Least‑privilege reviews and access boundaries</li>
        <li>Secret handling, rotation, and key hygiene</li>
        <li>Audit trails, incident response, and training</li>
      </ul>
    </div>
  );
}


