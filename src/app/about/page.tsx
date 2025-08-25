import React from "react";
import PageHeader from "@/components/PageHeader";

const GOLD = "#D4AF37";

export default function About() {
  return (
    <div className="text-white">
      <PageHeader title="About" subtitle="HWAH is the studio of Haroon Shafqat — engineer, operator, and relentless simplifier." />
      <div className="mx-auto max-w-5xl px-4 py-12">
        <p className="text-white/85">Built in Saudi Arabia, we blend engineering, security, and operations so the work survives Monday morning. We’re allergic to vanity metrics — we ship quieter wins: fewer clicks, faster loops, cleaner data, smaller blast radius.</p>
        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {[{t:"Clarity over complexity",d:"Small parts; fewer surprises."},{t:"Security by habit",d:"Least privilege, logs, and reviews."},{t:"Measure or it didn’t happen",d:"If we can’t quantify it, we don’t ship it."}].map((c,i)=> (
            <div key={i} className="card-star-hover rounded-2xl border bg-black/50 p-6" style={{ borderColor: `${GOLD}55` }}>
              <h3 className="font-display text-sm font-semibold" style={{ color: GOLD }}>{c.t}</h3>
              <p className="mt-2 text-sm text-white/85">{c.d}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
          <div className="rounded-2xl border bg-black/50 p-6" style={{ borderColor: `${GOLD}55` }}>
            <h3 className="font-display text-lg font-semibold" style={{ color: GOLD }}>Saudi Market Edge</h3>
            <p className="mt-3 text-sm text-white/85">ZATCA e‑invoicing, WPS, TGA/traffic, procurement norms, Arabic‑first documentation. Local sensor/telco partners for faster pilots.</p>
          </div>
          <div className="rounded-2xl border bg-black/50 p-6" style={{ borderColor: `${GOLD}55` }}>
            <h3 className="font-display text-lg font-semibold" style={{ color: GOLD }}>Credentials</h3>
            <p className="mt-3 text-sm text-white/85">OpenAI Beta Developer · Google Cloud Innovator · NDA‑friendly delivery.</p>
          </div>
        </div>
      </div>
    </div>
  );
}


