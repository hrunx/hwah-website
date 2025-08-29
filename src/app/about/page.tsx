import React from "react";
import PageHeader from "@/components/PageHeader";
import DraggableTimeline from "@/components/DraggableTimeline";
import { Info, User, Handshake, Building2, Sparkles, Mail, Linkedin, Github, ArrowRight, ShieldCheck } from "lucide-react";

const GOLD = "#D4AF37";

export default function About() {
  const principles = [
    { t: "Clarity over complexity", d: "Small parts; fewer surprises." },
    { t: "Security by habit", d: "Least privilege, logs, and reviews." },
    { t: "Measure or it didn’t happen", d: "If we can’t quantify it, we don’t ship it." },
  ];

  const owned = [
    {
      k: "HWAH Lab",
      v: "Private, offline‑first R&D for secure automation patterns, prompt‑injection resilience, and blue‑team validation.",
    },
    {
      k: "ES2 Square",
      v: "Smart energy audit toolkit (web + OCR + AI) for commercial and residential audits; bilingual reporting and export.",
    },
    {
      k: "Quantilyst / R&D",
      v: "Data tools, scrapers, and internal assistants; code artifacts and playbooks used across the portfolio.",
    },
    {
      k: "Stockler",
      v: "Open‑source Firebase/Next.js starter and experiments.",
      href: "https://github.com/hrunx/stockler",
    },
    {
      k: "Pixelator",
      v: "Open‑source text‑to‑pixel image generator.",
      href: "https://github.com/hrunx/pixelator",
    },
  ];

  const partners = [
    { k: "Gasable", v: "AI‑powered energy marketplace & IoT solutions: fuel telemetry, driver/vehicle authorization, usage‑based billing, and procurement automations across KSA.", href: "https://gasable.net" },
    { k: "ES2 Square", v: "Smart energy audit toolkit (web + OCR + AI) for commercial and residential audits; bilingual reporting and export." },
    { k: "Hysabat", v: "ERP/FinTech for SMEs: ZATCA e‑invoicing, WPS, POS integrations, analytics dashboards, and compliance‑first workflows.", href: "https://hysabat.com" },
    { k: "Autilent", v: "AI dash‑cam & fleet‑safety stack (edge + cloud) with NVIDIA‑class hardware, safety scoring, and incident packs.", href: "https://autilent.com" },
    { k: "Bytecorp", v: "Applied AI and data initiatives; product and data partnerships across the region.", href: "https://bytecorp.io" },
    { k: "HeavySooq", v: "Industrial marketplace initiatives: product data models, supplier onboarding flows, and bulk‑catalog tooling." },
  ];

  const highlights = [
    {
      t: "Fuel losses → visibility in 3 weeks",
      d: "RS‑485 level sensor + gateway → MQTT → ThingsBoard; rules for overfill, unauthorized refuel, and variance.",
      r: "Result: fewer unexplained losses; weekly variance report to finance.",
    },
    {
      t: "Documents on autopilot",
      d: "NDA/contract templates → e‑sign → archive; DLP checks; Gmail routing.",
      r: "Result: hours → minutes; standard docs in <24h.",
    },
    {
      t: "Field inspections without spreadsheets",
      d: "Mobile form → validations → PDF evidence pack → KPI dashboards.",
      r: "Result: traceable sign‑offs; zero missing photos.",
    },
    {
      t: "Fleet truth for mixers",
      d: "Drum RPM segmentation, site geofences, idle vs. pour windows; alerts to WhatsApp/Email.",
      r: "Result: utilization baselines; fewer disputes.",
    },
  ];

  const steps = [
    { k: "Discover", d: "Map reality; list risk and constraints." },
    { k: "Blueprint", d: "Architecture, SLOs, acceptance tests, and owner handover plan." },
    { k: "Pilot", d: "Thin vertical slice in 1–2 weeks, measured." },
    { k: "Production", d: "Harden, document, train." },
    { k: "Operate", d: "Observability, change control, and monthly improvements." },
  ];

  return (
    <div className="text-white">
      <PageHeader title="About HWAH" subtitle="Build once. Automate forever." />

      <div className="mx-auto max-w-5xl px-4 py-12">
        {/* About HWAH */}
        <div className="rounded-2xl border bg-black/50 p-6" style={{ borderColor: `${GOLD}55` }}>
          <div className="mb-3 inline-flex items-center gap-2 rounded-xl p-4 text-black" style={{ backgroundColor: GOLD }}>
            <Info className="h-8 w-8" />
          </div>
          <p className="text-white/85">
            HWAH Industries is a holding + systems studio led by Haroon Shafqat. We build small, auditable systems that turn messy operations into measurable outcomes—then we operate them. The portfolio blends ownership, equity stakes, and deep operating partnerships across energy, logistics, industrial IoT, and back‑office automation in Saudi Arabia.
          </p>
        </div>

        {/* Founder */}
        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-3">
          <div className="card-star-hover rounded-2xl border border-2 bg-black/50 p-7 shadow-md sm:col-span-2" style={{ borderColor: `${GOLD}99` }}>
            <div className="mb-3 inline-flex items-center gap-2 rounded-xl p-4 text-black" style={{ backgroundColor: GOLD }}>
              <User className="h-8 w-8" />
            </div>
            <h3 className="font-display text-2xl font-bold" style={{ color: GOLD }}>Founder — Haroon Shafqat</h3>
            <p className="mt-1 text-sm text-white/80">Engineer • Operator • Relentless Simplifier</p>
            <p className="mt-4 text-sm text-white/85">
              Haroon designs lean, secure workflows from the field to the boardroom: AI copilots for knowledge work, telemetry for assets, and clean data pipelines that survive Monday morning. He’s bilingual (Arabic/English), Saudi‑born, and NDA‑friendly. When not wiring sensors or wrangling Sheets, he’s shaving clicks off processes and writing the runbooks teams actually follow.
            </p>
            <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <h4 className="font-display text-sm font-semibold" style={{ color: GOLD }}>Focus</h4>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-white/85">
                  <li>AI copilots · Google Workspace automations · IoT/RS‑485/Modbus</li>
                  <li>MQTT ingest · ThingsBoard dashboards · KPI models</li>
                  <li>Security hygiene</li>
                </ul>
              </div>
              <div>
                <h4 className="font-display text-sm font-semibold" style={{ color: GOLD }}>Edge</h4>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-white/85">
                  <li>KSA delivery (WPS, ZATCA e‑invoicing, Arabic‑first artifacts)</li>
                  <li>Vendor networks for sensors/APNs/hardware</li>
                </ul>
              </div>
            </div>
            <div className="mt-5 flex flex-wrap gap-3">
              <a
                href="https://www.linkedin.com/in/haroon-shafqat/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold-outline inline-flex items-center gap-2 px-3 py-2 text-sm"
              >
                <Linkedin className="h-6 w-6" /> LinkedIn
              </a>
              <a
                href="https://github.com/hrunx"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold-outline inline-flex items-center gap-2 px-3 py-2 text-sm"
              >
                <Github className="h-6 w-6" /> GitHub
              </a>
            </div>
          </div>
          <div className="rounded-2xl border bg-black/50 p-3 w-full max-w-xs justify-self-start self-start" style={{ borderColor: `${GOLD}55` }}>
            <h4 className="font-display text-lg font-semibold" style={{ color: GOLD }}>Tagline</h4>
            <p className="mt-2 text-sm text-white/85">Build once. Automate forever.</p>
          </div>
        </div>

        {/* What HWAH is / isn’t + principles */}
        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
          <div className="rounded-2xl border bg-black/50 p-3 w-full max-w-xl" style={{ borderColor: `${GOLD}55` }}>
            <h3 className="font-display text-lg font-semibold" style={{ color: GOLD }}>What HWAH is (and isn’t)</h3>
            <p className="mt-3 text-sm text-white/85">
              HWAH is a focused holding & execution studio: we take ownership, invest sweat equity, and ship production‑grade automations and telemetry.
            </p>
            <p className="mt-2 text-sm text-white/85">
              HWAH isn’t a generic agency—we avoid vanity dashboards, fragile prototypes, and endless slideware.
            </p>
          </div>
          <div className="rounded-2xl border bg-black/50 p-6" style={{ borderColor: `${GOLD}55` }}>
            <h3 className="font-display text-lg font-semibold" style={{ color: GOLD }}>Operating principles</h3>
            <div className="mt-3 grid grid-cols-1 gap-4">
              {principles.map((c, i) => (
                <div key={i} className="card-star-hover rounded-xl border bg-black/50 p-4" style={{ borderColor: `${GOLD}55` }}>
                  <h4 className="font-display text-sm font-semibold" style={{ color: GOLD }}>{c.t}</h4>
                  <p className="mt-1 text-sm text-white/85">{c.d}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Holdings & Partnerships */}
        <div className="mt-8">
          <div className="mb-4 flex items-center gap-2">
            <Building2 className="h-7 w-7" style={{ color: GOLD }} />
            <h3 className="font-display text-xl font-semibold" style={{ color: GOLD }}>Holdings, Ventures & Partnerships</h3>
          </div>
          <p className="text-sm text-white/70">Names and logos are used when public. Client‑specific identities remain anonymized under NDA.</p>
          <div className="mt-4 grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div className="rounded-2xl border bg-black/50 p-6" style={{ borderColor: `${GOLD}55` }}>
              <h4 className="font-display text-lg font-semibold" style={{ color: GOLD }}>Owned & Incubated</h4>
              <ul className="mt-3 space-y-3 text-sm text-white/85">
                {owned.map((o, i) => (
                  <li key={i} className="">
                    {"href" in o && o.href ? (
                      <a href={o.href} target="_blank" rel="noopener noreferrer" className="underline" style={{ color: GOLD }}>{o.k}</a>
                    ) : (
                      <span className="font-medium" style={{ color: GOLD }}>{o.k}</span>
                    )}
                    {" "+"—"+" "}{o.v}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border bg-black/50 p-6" style={{ borderColor: `${GOLD}55` }}>
              <div className="mb-2 inline-flex items-center gap-2 text-white/85"><Handshake className="h-6 w-6" style={{ color: GOLD }} /><h4 className="font-display text-lg font-semibold" style={{ color: GOLD }}>Operating/Equity Partnerships</h4></div>
              <ul className="mt-1 space-y-3 text-sm text-white/85">
                {partners.map((p, i) => (
                  <li key={i} className="">
                    {"href" in p && p.href ? (
                      <a href={p.href} target="_blank" rel="noopener noreferrer" className="underline" style={{ color: GOLD }}>{p.k}</a>
                    ) : (
                      <span className="font-medium" style={{ color: GOLD }}>{p.k}</span>
                    )}
                    {p.v ? (<> {"—"} {p.v}</>) : null}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="mt-4 rounded-2xl border bg-black/50 p-6" style={{ borderColor: `${GOLD}55` }}>
            <h4 className="font-display text-lg font-semibold" style={{ color: GOLD }}>Where we help</h4>
            <p className="mt-2 text-sm text-white/85">
              Architecture & SLOs; Apps Script pipelines (Gmail/Sheets/Docs/Drive); IoT sensor selection and integration (RS‑485/Modbus, 4–20 mA); ingest via MQTT/HTTP; alerting and dashboards (ThingsBoard/Looker Studio/custom); DLP and credential hygiene; bilingual deliverables.
            </p>
          </div>
        </div>

        {/* Highlights */}
        <div className="mt-8">
          <div className="mb-4 flex items-center gap-2">
            <Sparkles className="h-7 w-7" style={{ color: GOLD }} />
            <h3 className="font-display text-xl font-semibold" style={{ color: GOLD }}>Highlights (anonymized)</h3>
          </div>
          <div className="grid grid-cols-1 gap-4">
            {highlights.map((h, i) => (
              <div key={i} className="card-star-hover rounded-2xl border bg-black/50 p-5" style={{ borderColor: `${GOLD}55` }}>
                <h4 className="font-display text-base font-semibold" style={{ color: GOLD }}>{h.t}</h4>
                <p className="mt-1 text-sm text-white/85">{h.d}</p>
                <p className="mt-1 text-sm" style={{ color: GOLD }}>{h.r}</p>
              </div>
            ))}
          </div>
          <p className="mt-3 text-sm text-white/70">We walk through live dashboards in private sessions. Client names available under NDA.</p>
        </div>

        {/* How we work */}
        <div className="mt-8 rounded-2xl border bg-black/50 p-6" style={{ borderColor: `${GOLD}55` }}>
          <h3 className="font-display text-xl font-semibold" style={{ color: GOLD }}>How we work</h3>
          <p className="mt-1 text-sm text-white/85">Discover → Blueprint → Pilot → Production → Operate</p>
          <div className="mt-2">
            <DraggableTimeline steps={steps} />
          </div>
          <div className="mt-4 rounded-xl border bg-black/40 p-4" style={{ borderColor: `${GOLD}44` }}>
            <h4 className="font-display text-sm font-semibold" style={{ color: GOLD }}>Artifacts you receive</h4>
            <p className="mt-1 text-sm text-white/85">Diagrams, runbooks, admin checklists, incident playbooks, and code/config under version control.</p>
          </div>
        </div>

        {/* Contact */}
        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
          <div className="rounded-2xl border bg-black/50 p-6" style={{ borderColor: `${GOLD}55` }}>
            <div className="mb-2 inline-flex items-center gap-2 text-white/85"><Mail className="h-6 w-6" style={{ color: GOLD }} /><h3 className="font-display text-lg font-semibold" style={{ color: GOLD }}>Contact</h3></div>
            <p className="text-sm text-white/85">Ready to trade busywork for signal? Email <a href="mailto:hrn@hwah.net" className="underline" style={{ color: GOLD }}>hrn@hwah.net</a> or use the form. Typical response: within 1 business day.</p>
            <div className="mt-4">
              <a href="/contact" className="btn-gold-outline inline-flex items-center gap-2 px-4 py-2 text-sm">
                Go to contact form <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Legal & Confidentiality */}
          <div className="rounded-2xl border bg-black/50 p-6" style={{ borderColor: `${GOLD}55` }}>
            <div className="mb-2 inline-flex items-center gap-2 text-white/85"><ShieldCheck className="h-6 w-6" style={{ color: GOLD }} /><h3 className="font-display text-lg font-semibold" style={{ color: GOLD }}>Legal & Confidentiality</h3></div>
            <p className="text-sm text-white/85">We work under strict confidentiality. NDAs are standard. Data is minimized, encrypted in transit, and access‑controlled; secrets are rotated and audited. Security incidents are disclosed without undue delay as per contract.</p>
          </div>
        </div>
      </div>
    </div>
  );
}


