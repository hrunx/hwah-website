"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import DraggableTimeline from "@/components/DraggableTimeline";
import { ArrowRight, Rocket, Cpu, Radar, ShieldCheck, Building2, ClipboardCheck, Sparkles } from "lucide-react";

const GOLD = "#D4AF37";
const GOLD_SOFT = "#E6C766";

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.08 } },
} satisfies Variants;

const item = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 120, damping: 16 } },
} satisfies Variants;

export default function Page() {
  return (
    <div className="relative min-h-screen text-white">
      <Hero />
      <Achievements />
      <FeatureTriplet />
      <HoldingsGrid />
      <Outcomes />
      <WhatWeShip />
      <Solutions />
      <Approach />
      <ThinkBand />
      <CaseStudies />
      <Newsletter />
      <Contact />
    </div>
  );
}

function Hero() {
  return (
    <section className="relative">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0" style={{ backgroundImage: "url('/hero/sungrazer.gif')", backgroundSize: "cover", backgroundPosition: "center" }} />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(0,0,0,.92), rgba(0,0,0,.68) 30%, rgba(0,0,0,.92))" }} />
      </div>
      <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6">
        <motion.div variants={container} initial="hidden" animate="show" className="text-center">
          <motion.h1 variants={item} className="font-display mx-auto max-w-4xl text-4xl font-extrabold tracking-tight sm:text-6xl" style={{ color: GOLD }}>ENDLESS POSSIBILITIES</motion.h1>
          <motion.p variants={item} className="mx-auto mt-3 max-w-3xl text-balance text-lg" style={{ color: GOLD_SOFT }}>
            HWAH Industries LLC is a Saudi-born holding and systems studio. We design, build, and operate small, auditable systems that turn messy operations into measurable outcomes. Today we execute through three sister units—Research, Consulting, and Operating—so ideas become pilots, pilots become production, and production keeps improving.
          </motion.p>
          <motion.div variants={item} className="mt-8 flex items-center justify-center gap-3">
            <a href="/contact" className="btn-gold-outline inline-flex items-center gap-2 px-5 py-3 font-medium">
              <Rocket className="h-4 w-4" /> Book a discovery call
            </a>
            <a href="/holdings" className="btn-gold-outline inline-flex items-center gap-2 px-5 py-3 font-medium">
              Explore our holdings <ArrowRight className="h-4 w-4" />
            </a>
          </motion.div>
        </motion.div>
        <div className="mx-auto mt-10 max-w-5xl text-center text-sm" style={{ color: GOLD_SOFT }}>
          <span className="rounded-full border px-3 py-1" style={{ borderColor: `${GOLD}44` }}>Built in KSA</span>
          <span className="mx-2">•</span>
          <span className="rounded-full border px-3 py-1" style={{ borderColor: `${GOLD}44` }}>Arabic/English</span>
          <span className="mx-2">•</span>
          <span className="rounded-full border px-3 py-1" style={{ borderColor: `${GOLD}44` }}>NDA‑friendly</span>
          <span className="mx-2">•</span>
          <span className="rounded-full border px-3 py-1" style={{ borderColor: `${GOLD}44` }}>Security by habit</span>
        </div>
      </div>
    </section>
  );
}

function Achievements() {
  return (
    <section className="relative border-t" style={{ borderColor: `${GOLD}33` }}>
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6">
        <div className="rounded-2xl border bg-black/40 p-4 text-center text-sm" style={{ borderColor: `${GOLD}55`, color: GOLD_SOFT }}>
          <span>OpenAI Beta Access</span>
          <span className="mx-2">•</span>
          <span>Google Cloud Innovator</span>
          <span className="mx-2">•</span>
          <span>Named in “Middle East’s 10 Most Influential Business Leaders to Follow in 2025” (CIO Magazine) </span>
        </div>
      </div>
    </section>
  );
}

function FeatureTriplet() {
  const feats = [
    { icon: Cpu, title: "Systems that stick.", desc: "Small parts. Strong docs. Observable pipelines." },
    { icon: Radar, title: "Signals over noise.", desc: "Dashboards and alerts that actually move decisions." },
    { icon: ShieldCheck, title: "Secure by habit.", desc: "Least privilege, logs, reviews — day one." },
  ];
  return (
    <section className="relative" style={{ borderColor: `${GOLD}33` }}>
      <div className="mx-auto max-w-7xl px-4 pb-2 sm:px-6">
        <div className="mx-auto mt-6 grid max-w-5xl grid-cols-1 gap-4 sm:grid-cols-3">
          {feats.map((f, i) => (
            <motion.div key={i} variants={item} initial="hidden" whileInView="show" viewport={{ once: true }} className="group rounded-2xl border bg-black/50 p-5 shadow-sm backdrop-blur transition hover:shadow" style={{ borderColor: `${GOLD}55` }}>
              <div className="mb-3 inline-flex rounded-xl p-2 text-black" style={{ backgroundColor: GOLD }}>
                <f.icon className="h-5 w-5" />
              </div>
              <h3 className="font-display text-lg font-semibold" style={{ color: GOLD }}>{f.title}</h3>
              <p className="mt-1 text-sm text-white/80">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhatWeShip() {
  const items = [
    "AI copilots for internal teams",
    "Agentic AI platforms (multi-agent orchestration)",
    "Workspace automations (Gmail/Sheets/Docs/Drive)",
    "IoT telemetry (RS-485/Modbus → MQTT)",
    "KPI models & dashboards",
    "Contract/NDA pipelines",
    "Security & observability",
  ];
  return (
    <section className="relative border-t" style={{ borderColor: `${GOLD}33` }}>
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <div className="mb-6 text-center">
          <h2 className="heading-underline text-3xl font-bold tracking-tight sm:text-4xl" style={{ color: GOLD }}>What we actually ship</h2>
        </div>
        <div className="mx-auto max-w-5xl">
          <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {items.map((v, i) => (
              <li key={i} className="card-star-hover rounded-xl border bg-black/50 px-4 py-3 text-sm text-white/85" style={{ borderColor: `${GOLD}44` }}>
                {v}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function HoldingsGrid() {
  const [active, setActive] = useState<"research" | "consulting" | "operating">("research");
  const cards = [
    { key: "research" as const, icon: Sparkles, title: "HWAH Research", desc: "R&D and first‑of‑a‑kind builds." },
    { key: "consulting" as const, icon: ClipboardCheck, title: "HWAH Consulting", desc: "Blueprints that ship." },
    { key: "operating" as const, icon: Building2, title: "HWAH Operating", desc: "Operations that don’t drift." },
  ];
  const details: Record<typeof active, { heading: string; bullets: string[]; note?: string }> = {
    research: {
      heading: "What we do",
      bullets: [
        "Energy market intelligence; ICP maps; bilingual reports & dashboards",
        "Agentic platforms & copilots; role separation; policy‑aware prompts",
        "Telemetry pilots: sensor selection (RS‑485/Modbus/4–20 mA), IoT gateways, MQTT ingest, rules/alerts, dashboards",
        "Automation prototypes: Google Workspace (Apps Script); docs → approvals → archive",
      ],
      note: "Contact: hrn@hwah.net",
    },
    consulting: {
      heading: "Services",
      bullets: [
        "Advisory & architecture: SLOs, acceptance tests, handover",
        "Workspace automations: templating → e‑sign → archive; DLP & routing",
        "Data & KPIs: semantic layers; ETL/ELT to BigQuery/Postgres; Looker/Metabase",
        "Integrations: Teltonika/ThingsBoard/Flespi, HubSpot, WhatsApp, OpenAI/DeepSeek",
      ],
      note: "Contact: hrn@hwah.net",
    },
    operating: {
      heading: "Operate covers",
      bullets: [
        "COO‑level execution: cadence, pricing/growth, GTM & partnerships",
        "SLA monitoring & incident playbooks; telemetry dashboards; alerts",
        "Security hygiene: least‑privilege, rotation, access reviews, logs",
        "Change control: versioned configs, rollbacks, release notes",
      ],
      note: "Contact: hrn@hwah.net",
    },
  };
  return (
    <section id="holdings" className="relative border-t" style={{ borderColor: `${GOLD}33` }}>
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <div className="mb-10 text-center">
          <h2 className="heading-underline text-3xl font-bold tracking-tight sm:text-4xl" style={{ color: GOLD }}>Holdings</h2>
          <p className="mt-2 text-white/80">Three sister units — discover → build → operate.</p>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          {cards.map((c) => (
            <button
              key={c.key}
              onClick={() => setActive(c.key)}
              className="card-star-hover rounded-2xl border bg-black/50 p-6 text-left backdrop-blur transition hover:bg-white/5"
              style={{ borderColor: active === c.key ? `${GOLD}99` : `${GOLD}55` }}
            >
              <div className="mb-3 inline-flex rounded-xl p-2 text-black" style={{ backgroundColor: GOLD }}>
                <c.icon className="h-5 w-5" />
              </div>
              <h3 className="font-display text-lg font-semibold" style={{ color: GOLD }}>{c.title}</h3>
              <p className="mt-2 text-sm text-white/80">{c.desc}</p>
            </button>
          ))}
        </div>
        <div className="mx-auto mt-8 max-w-3xl rounded-2xl border bg-black/50 p-6" style={{ borderColor: `${GOLD}55` }}>
          <h3 className="font-display text-lg font-semibold" style={{ color: GOLD }}>{details[active].heading}</h3>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-white/85">
            {details[active].bullets.map((b, i) => (<li key={i}>{b}</li>))}
          </ul>
          {details[active].note ? <p className="mt-3 text-sm" style={{ color: GOLD_SOFT }}>{details[active].note}</p> : null}
          <div className="mt-4">
            <a href={`/holdings#${active}`} className="btn-gold-outline inline-flex items-center gap-2 px-4 py-2 text-sm">See details <ArrowRight className="h-4 w-4" /></a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Outcomes() {
  const items = [
    "22% fewer unexplained fuel losses",
    "<24h turnaround for standard contracts",
    "100% traceable field sign-offs",
    "COO-level cadence for a SaaS/ERP platform",
  ];
  return (
    <section className="relative border-t" style={{ borderColor: `${GOLD}33` }}>
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <div className="mb-6 text-center">
          <h2 className="heading-underline text-3xl font-bold tracking-tight sm:text-4xl" style={{ color: GOLD }}>Outcomes (anonymized)</h2>
        </div>
        <div className="mx-auto max-w-4xl">
          <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {items.map((v, i) => (
              <li key={i} className="card-star-hover rounded-xl border bg-black/50 px-4 py-3 text-sm text-white/85" style={{ borderColor: `${GOLD}44` }}>
                {v}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function Solutions() {
  const rows = [
    { title: "AI Systems & Copilots", bullets: ["Retrieval chat for your docs", "Agentic workflows with SLAs", "Prompt safety & audits"] },
    { title: "Automation & Ops", bullets: ["Workspace + SaaS orchestration", "Approvals, retries, alerts", "Runbooks and change control"] },
    { title: "Data & Readiness", bullets: ["KPIs and semantic layers", "Pipelines + lineage + tests", "Security reviews and logging"] },
  ];
  return (
    <section id="solutions" className="relative border-t" style={{ borderColor: `${GOLD}33` }}>
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <div className="mb-10 text-center">
          <h2 className="heading-underline text-3xl font-bold tracking-tight sm:text-4xl" style={{ color: GOLD }}>Solutions</h2>
          <p className="mt-2 text-white/80">Where we apply the tools to move the needle.</p>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          {rows.map((r, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.07, type: "spring", stiffness: 110, damping: 16 }} className="rounded-2xl border bg-black/50 p-6 shadow-sm backdrop-blur" style={{ borderColor: `${GOLD}55` }}>
              <h3 className="text-xl font-semibold" style={{ color: GOLD }}>{r.title}</h3>
              <ul className="mt-3 space-y-2 text-sm text-white/80">
                {r.bullets.map((b, j) => (
                  <li key={j} className="flex items-start gap-2"><span className="mt-2 h-1.5 w-1.5 rounded-full" style={{ backgroundColor: GOLD }} />{b}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Approach() {
  const steps = [
    { k: "Discover", d: "Interviews, current‑state map, risks, and outcomes that matter." },
    { k: "Prototype", d: "A thin vertical slice in 1–2 weeks with real data behind flags." },
    { k: "Integrate", d: "Auth, logs, dashboards, runbooks; safe change controls in place." },
    { k: "Operate", d: "Observability, reviews, and quarterly upgrades with cost/perf guardrails." },
  ];
  return (
    <section id="approach" className="relative border-t" style={{ borderColor: `${GOLD}33` }}>
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <div className="mb-10 text-center">
          <h2 className="heading-underline text-3xl font-bold tracking-tight sm:text-4xl" style={{ color: GOLD }}>Approach</h2>
          <p className="mt-2 text-white/80">Drag through the steps — we make momentum inevitable.</p>
        </div>
        <div className="mx-auto max-w-4xl">
          <DraggableTimeline steps={steps} />
        </div>
      </div>
    </section>
  );
}

function CaseStudies() {
  const proofs = [
    "22% fewer unexplained fuel losses",
    "<24h doc turnaround",
    "100% traceable field sign‑offs",
    "Ready‑mix fleet utilization made measurable",
  ];
  const quotes = [
    "Delivered measurable outcomes under tight constraints.",
    "Understands KSA ops and compliance.",
    "Writes the runbooks our team actually follows.",
  ];
  return (
    <section id="proof" className="relative border-t" style={{ borderColor: `${GOLD}33` }}>
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <div className="mb-8 text-center">
          <h2 className="heading-underline font-display text-3xl font-bold tracking-tight sm:text-4xl" style={{ color: GOLD }}>What clients say</h2>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-4 sm:grid-cols-2">
          {proofs.map((p, i) => (
            <div key={i} className="card-star-hover rounded-2xl border bg-black/50 p-5 text-center" style={{ borderColor: `${GOLD}55` }}>
              <p className="text-sm text-white/85">{p}</p>
            </div>
          ))}
        </div>
        <div className="mx-auto mt-10 max-w-4xl text-center">
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
            {quotes.map((q, i) => (
              <div key={i} className="rounded-xl border bg-black/50 p-4" style={{ borderColor: `${GOLD}55` }}>
                <p className="text-sm text-white/80">“{q}”</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ThinkBand() {
  return (
    <section className="relative border-t" style={{ borderColor: `${GOLD}33` }}>
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
        <div className="rounded-2xl border bg-black/50 p-6 text-center" style={{ borderColor: `${GOLD}55` }}>
          <p className="text-sm text-white/85">We’re allergic to vanity metrics. We aim for the quietly obvious: fewer clicks, faster loops, cleaner data, smaller blast radius. Systems you can hand to new hires without a two‑hour sermon.</p>
        </div>
      </div>
    </section>
  );
}

function Newsletter() {
  return (
    <section id="newsletter" className="relative border-t" style={{ borderColor: `${GOLD}33` }}>
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h3 className="heading-underline font-display text-2xl font-semibold" style={{ color: GOLD }}>Dispatches from the Lab</h3>
          <p className="mt-2 text-white/80">Short notes on automation patterns, telemetry pitfalls, and better dashboards. No fluff, no spam.</p>
          <form name="newsletter" method="POST" data-netlify="true" action="/?newsletter=success#newsletter" className="mx-auto mt-5 flex max-w-xl items-center gap-2">
            <input type="hidden" name="form-name" value="newsletter" />
            <input name="email" type="email" required placeholder="you@company.com" className="flex-1 rounded-xl border bg-black/60 px-4 py-3 text-white outline-none" style={{ borderColor: `${GOLD}44` }} />
            <button className="btn-gold-outline px-4 py-3">Subscribe</button>
          </form>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="relative border-t" style={{ borderColor: `${GOLD}33` }}>
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl" style={{ color: GOLD }}>Let’s make your ops observable & automatic</h2>
          <p className="mt-2 text-white/80">Email <a href="mailto:hrn@hwah.net" className="underline" style={{ color: GOLD_SOFT }}>hrn@hwah.net</a>. We reply within one business day.</p>
        </div>
        <div className="mx-auto mt-8 max-w-2xl">
          <form name="contact" method="POST" data-netlify="true" className="grid gap-4 rounded-2xl border bg-black/50 p-6 shadow-sm backdrop-blur" style={{ borderColor: `${GOLD}55` }}>
            <input type="hidden" name="form-name" value="contact" />
            <div className="grid gap-2">
              <label className="text-sm font-medium" style={{ color: GOLD_SOFT }}>Name</label>
              <input name="name" required className="rounded-xl border bg-black/60 px-4 py-3 text-white outline-none focus:ring-2" style={{ borderColor: `${GOLD}44` }} />
            </div>
            <div className="grid gap-2">
              <label className="text-sm font-medium" style={{ color: GOLD_SOFT }}>Work email</label>
              <input type="email" name="email" required className="rounded-xl border px-4 py-3 text-white outline-none focus:ring-2" style={{ borderColor: `${GOLD}44`, backgroundColor: "#0f0f0f" }} />
            </div>
            <div className="grid gap-2">
              <label className="text-sm font-medium" style={{ color: GOLD_SOFT }}>What do you want to improve?</label>
              <textarea name="message" rows={5} className="rounded-xl border px-4 py-3 text-white outline-none focus:ring-2" style={{ borderColor: `${GOLD}44`, backgroundColor: "#0f0f0f" }} />
            </div>
            <button className="inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 font-medium text-black shadow transition hover:shadow-md" style={{ backgroundColor: GOLD }}>
              <ArrowRight className="h-4 w-4" /> Send
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}


