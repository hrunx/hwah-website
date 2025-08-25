import React from "react";
import PageHeader from "@/components/PageHeader";

const GOLD = "#D4AF37";

export default function About() {
  return (
    <div className="text-white">
      <PageHeader title="About" subtitle="HWAH is Haroon Shafqat — systems, AI, and ops." />
      <div className="mx-auto max-w-4xl px-4 py-12">
        <p className="text-white/85">I help teams ship faster with fewer clicks: AI copilots, automation, and clean data — designed with security by habit.</p>
        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
          <div className="rounded-2xl border bg-black/50 p-6" style={{ borderColor: `${GOLD}55` }}>
            <h3 className="font-display text-lg font-semibold" style={{ color: GOLD }}>Credentials</h3>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-white/85">
              <li>OpenAI Beta Developer</li>
              <li>Google Cloud Innovator</li>
              <li>Security‑minded builder</li>
            </ul>
          </div>
          <div className="rounded-2xl border bg-black/50 p-6" style={{ borderColor: `${GOLD}55` }}>
            <h3 className="font-display text-lg font-semibold" style={{ color: GOLD }}>Why HWAH</h3>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-white/85">
              <li>Small parts, well‑documented</li>
              <li>Observable by default</li>
              <li>Outcomes over vanity</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}


