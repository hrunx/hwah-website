import React from "react";
import PageHeader from "@/components/PageHeader";

const GOLD = "#D4AF37";

export default function About() {
  return (
    <div className="text-white">
      <PageHeader title="About" subtitle="HWAH is Haroon Shafqat — builder of useful systems." />
      <div className="mx-auto max-w-4xl px-4 py-12">
        <p className="text-white/85">I build lean, durable systems that turn mess into momentum — AI copilots, automation, and data that actually inform decisions. Less ceremony, more signal.</p>
        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
          <div className="rounded-2xl border bg-black/50 p-6" style={{ borderColor: `${GOLD}55` }}>
            <h3 className="font-display text-lg font-semibold" style={{ color: GOLD }}>Credentials</h3>
            <p className="mt-3 text-sm text-white/85">OpenAI Beta Developer · Google Cloud Innovator · Security‑minded builder</p>
          </div>
          <div className="rounded-2xl border bg-black/50 p-6" style={{ borderColor: `${GOLD}55` }}>
            <h3 className="font-display text-lg font-semibold" style={{ color: GOLD }}>Why HWAH</h3>
            <p className="mt-3 text-sm text-white/85">Small parts, well‑documented. Observable by default. Outcomes over vanity.</p>
          </div>
        </div>
      </div>
    </div>
  );
}


