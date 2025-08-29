"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import DraggableTimeline from "@/components/DraggableTimeline";
import type { Variants } from "framer-motion";
import { Rocket, Cpu, Radar, ShieldCheck, ArrowRight, Gauge, Cable } from "lucide-react";

const GOLD = "#D4AF37"; // classic metallic gold
const GOLD_SOFT = "#E6C766"; // lighter accent

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.08 } },
} satisfies Variants;

const item = {
  hidden: { opacity: 0, y: 12 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 120, damping: 16 },
  },
} satisfies Variants;
// Stars moved to layout
// Nav moved to layout

function Hero() {
  return (
    <section id="home" className="relative">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0" style={{ backgroundImage: "url('/hero/sungrazer.gif')", backgroundSize: "cover", backgroundPosition: "center" }} />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(0,0,0,.92), rgba(0,0,0,.68) 30%, rgba(0,0,0,.92))" }} />
      </div>
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 md:py-28">
        <motion.div variants={container} initial="hidden" animate="show" className="text-center">
          <motion.h1 variants={item} className="font-display mx-auto max-w-4xl text-4xl font-extrabold tracking-tight sm:text-6xl" style={{ color: GOLD }}>
            ENDLESS POSSIBILITIES
          </motion.h1>
          <motion.p variants={item} className="mx-auto mt-3 max-w-3xl text-balance text-lg" style={{ color: GOLD_SOFT }}>
            A Saudi‑born systems studio for serious operators. We design small, composable automations that remove busywork and surface truth—AI copilots, IoT telemetry, and clean data pipelines—delivered with security by design.
          </motion.p>
          <motion.div variants={item} className="mt-8 flex items-center justify-center gap-3">
            <a href="#contact" className="btn-gold-outline inline-flex items-center gap-2 px-5 py-3 font-medium">
              <Rocket className="h-4 w-4" /> Book a discovery call
            </a>
            <a href="/work" className="btn-gold-outline inline-flex items-center gap-2 px-5 py-3 font-medium">
              See the work <ArrowRight className="h-4 w-4" />
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
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ type: "spring", stiffness: 120, damping: 18 }} className="mx-auto mt-14 grid max-w-5xl grid-cols-1 gap-4 sm:grid-cols-3">
          {[
            { icon: Cpu, title: "Systems that stick.", desc: "Small parts. Strong docs. Observable pipelines." },
            { icon: Radar, title: "Signals over noise.", desc: "Dashboards and alerts that actually move decisions." },
            { icon: ShieldCheck, title: "Secure by habit.", desc: "Least privilege, logs, reviews — day one." },
          ].map((f, i) => (
            <motion.div key={i} variants={item} className="group rounded-2xl border bg-black/50 p-5 shadow-sm backdrop-blur transition hover:shadow" style={{ borderColor: `${GOLD}55` }}>
              <div className="mb-3 inline-flex rounded-xl p-2 text-black" style={{ backgroundColor: GOLD }}>
                <f.icon className="h-5 w-5" />
              </div>
              <h3 className="font-display text-lg font-semibold" style={{ color: GOLD }}>{f.title}</h3>
              <p className="mt-1 text-sm text-white/80">{f.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function Services() {
  const cards = [
    { icon: Cpu, title: "Information Technology (IT) & Digital Transformation", desc: "Software delivery, AI, cloud, and cybersecurity.", href: "/services" },
    { icon: Cable, title: "Logistics & Supply Chain", desc: "Real‑time tracking, fleet mgmt, warehousing, last‑mile.", href: "/services" },
    { icon: Gauge, title: "Business Development & Expansion", desc: "Research, market entry, partnerships, revenue ops.", href: "/services" },
    { icon: ShieldCheck, title: "Technology Innovation & R&D", desc: "AI, blockchain, IoT — proprietary innovation.", href: "/services" },
  ];
  return (
    <section id="services" className="relative border-t" style={{ borderColor: `${GOLD}33` }}>
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <div className="mb-10 text-center">
          <h2 className="heading-underline text-3xl font-bold tracking-tight sm:text-4xl" style={{ color: GOLD }}>Services</h2>
          <p className="mt-2 text-white/80">Small, composable systems that outlive hype cycles.</p>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((c, i) => (
            <motion.a
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, type: "spring", stiffness: 110, damping: 16 }}
              href={c.href}
              className="card-star-hover relative overflow-hidden rounded-2xl border bg-black/50 p-6 shadow-sm backdrop-blur transition hover:bg-white/5"
              style={{ borderColor: `${GOLD}55` }}
            >
              <div className="mb-3 inline-flex rounded-xl p-2 text-black" style={{ backgroundColor: GOLD }}>
                <c.icon className="h-5 w-5" />
              </div>
              <h3 className="font-display text-lg font-semibold" style={{ color: GOLD }}>{c.title}</h3>
              <p className="mt-2 text-sm text-white/80">{c.desc}</p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}

function Outcomes() {
  const tiles = [
    { t: "Fewer clicks, faster flows.", d: "Routine processes cut by 30–70% steps." },
    { t: "From field to decision.", d: "Sensors → rules/alerts → dashboards with explainable metrics." },
    { t: "Clear ownership.", d: "Who did what, when, and why—no more email archaeology." },
    { t: "KSA‑ready.", d: "WPS exports, ZATCA e‑invoicing, bilingual artifacts." },
  ];
  return (
    <section id="outcomes" className="relative border-t" style={{ borderColor: `${GOLD}33` }}>
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <div className="mb-10 text-center">
          <h2 className="heading-underline text-3xl font-bold tracking-tight sm:text-4xl" style={{ color: GOLD }}>Outcomes</h2>
          <p className="mt-2 text-white/80">Operator‑level wins you can measure.</p>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {tiles.map((c, i) => (
            <div key={i} className="card-star-hover rounded-2xl border bg-black/50 p-6 backdrop-blur" style={{ borderColor: `${GOLD}55` }}>
              <h3 className="font-display text-lg font-semibold" style={{ color: GOLD }}>{c.t}</h3>
              <p className="mt-2 text-sm text-white/85">{c.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhatWeShip() {
  const items = [
    "AI copilots for internal teams",
    "Workspace automations (Gmail/Sheets/Docs/Drive)",
    "IoT ingest → rules/alerts → dashboards",
    "Contract/NDA pipelines",
    "KPI models and data quality",
    "Secrets & access hygiene",
    "Runbooks and observability",
  ];
  return (
    <section id="what-we-ship" className="relative border-t" style={{ borderColor: `${GOLD}33` }}>
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <div className="mb-6 text-center">
          <h2 className="heading-underline text-3xl font-bold tracking-tight sm:text-4xl" style={{ color: GOLD }}>What we ship</h2>
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
          <h2 className="heading-underline font-display text-3xl font-bold tracking-tight sm:text-4xl" style={{ color: GOLD }}>Proof snapshots (anonymized)</h2>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-4 sm:grid-cols-2">
          {proofs.map((p, i) => (
            <div key={i} className="card-star-hover rounded-2xl border bg-black/50 p-5 text-center" style={{ borderColor: `${GOLD}55` }}>
              <p className="text-sm text-white/85">{p}</p>
            </div>
          ))}
        </div>
        <div className="mx-auto mt-10 max-w-4xl text-center">
          <h3 className="font-display text-xl font-semibold" style={{ color: GOLD }}>What clients say</h3>
          <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-3">
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

// Footer moved to layout

export default function Page() {
  return (
    <div className="relative min-h-screen text-white">
      <Hero />
      <Services />
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

