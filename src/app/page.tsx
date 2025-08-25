"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
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
          <motion.h1 variants={item} className="mx-auto max-w-4xl text-4xl font-extrabold tracking-tight sm:text-6xl" style={{ color: GOLD }}>
            Build once. Automate forever.
          </motion.h1>
          <motion.p variants={item} className="mx-auto mt-3 max-w-3xl text-balance text-lg" style={{ color: GOLD_SOFT }}>
            HWAH designs lean, secure systems that remove busywork and surface truth—AI copilots, IoT telemetry, and clean data pipelines. Faster ops, fewer clicks, better decisions.
          </motion.p>
          <motion.div variants={item} className="mt-8 flex items-center justify-center gap-3">
            <a href="#contact" className="btn-gold-outline inline-flex items-center gap-2 px-5 py-3 font-medium">
              <Rocket className="h-4 w-4" /> Book a discovery call
            </a>
            <a href="#case-studies" className="btn-gold-outline inline-flex items-center gap-2 px-5 py-3 font-medium">
              See case studies <ArrowRight className="h-4 w-4" />
            </a>
          </motion.div>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ type: "spring", stiffness: 120, damping: 18 }} className="mx-auto mt-14 grid max-w-5xl grid-cols-1 gap-4 sm:grid-cols-3">
          {[
            { icon: Cpu, title: "Automation that sticks.", desc: "Lightweight workflows across Workspace, APIs, and your stack—documented and observable." },
            { icon: Radar, title: "Instrumentation at the edge.", desc: "From sensors to dashboards: fuel, fleet, and fixed equipment to decisions." },
            { icon: ShieldCheck, title: "Security-minded by default.", desc: "Least privilege, audit trails, and data minimization built in." },
          ].map((f, i) => (
            <motion.div key={i} variants={item} className="group rounded-2xl border bg-black/50 p-5 shadow-sm backdrop-blur transition hover:shadow" style={{ borderColor: `${GOLD}55` }}>
              <div className="mb-3 inline-flex rounded-xl p-2 text-black" style={{ backgroundColor: GOLD }}>
                <f.icon className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold" style={{ color: GOLD }}>{f.title}</h3>
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
    { icon: Cpu, title: "AI & Automation", points: ["Internal copilots (Drive/DB retrieval)", "Apps Script: Gmail/Sheets/Docs flows", "Process orchestration with retries & logs", "Doc templating + e-sign + archives"], tag: "Reliable gears" },
    { icon: Gauge, title: "Data & Analytics", points: ["KPI model + semantic layer", "ETL/ELT → BigQuery/Postgres", "Looker Studio / Metabase dashboards", "Data quality checks & lineage"], tag: "Metrics that matter" },
    { icon: Cable, title: "IoT & Telemetry", points: ["Sensor selection, RS‑485/Modbus", "MQTT/HTTP ingest, rules & alerts", "ThingsBoard or custom dashboards", "RFID/UHF authorization flows"], tag: "Physical ops, observable" },
  ];
  return (
    <section id="services" className="relative border-t" style={{ borderColor: `${GOLD}33` }}>
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl" style={{ color: GOLD }}>Services</h2>
          <p className="mt-2 text-white/80">Small, composable systems that survive contact with reality.</p>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          {cards.map((c, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, type: "spring", stiffness: 110, damping: 16 }}
              className="relative overflow-hidden rounded-2xl border bg-black/50 p-6 shadow-sm backdrop-blur"
              style={{ borderColor: `${GOLD}55` }}
            >
              <div className="mb-4 inline-flex items-center gap-2 rounded-xl px-3 py-2 text-black" style={{ backgroundColor: GOLD }}>
                <c.icon className="h-4 w-4" />
                <span className="text-xs font-medium">{c.tag}</span>
              </div>
              <h3 className="text-xl font-semibold" style={{ color: GOLD }}>{c.title}</h3>
              <ul className="mt-3 space-y-2 text-sm text-white/80">
                {c.points.map((p, j) => (
                  <li key={j} className="flex items-start gap-2"><span className="mt-2 h-1.5 w-1.5 rounded-full" style={{ backgroundColor: GOLD }} />{p}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Solutions() {
  const rows = [
    { title: "Energy & Logistics", bullets: ["Fuel telemetry & control: tank levels, dispenser events, RFID auth", "Fleet visibility: geofences, drum RPM (mixers), L/hr & KM/L", "Procurement & billing automations, VAT-ready docs"] },
    { title: "Industrial & Field Ops", bullets: ["Work orders: form → ticket → SLA clock → closure report", "Safety/compliance records with timestamped evidence"] },
    { title: "Back-office Automation", bullets: ["Sales ops: lead capture, sequences, shared inbox playbooks", "HR ops: onboarding/offboarding packs, WPS exports", "Legal ops: NDA/contract templating, e-sign, archive"] },
  ];
  return (
    <section id="solutions" className="relative border-t" style={{ borderColor: `${GOLD}33` }}>
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl" style={{ color: GOLD }}>Solutions</h2>
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
    { k: "Discover", d: "Map the real workflow and constraints." },
    { k: "Prototype", d: "A thin vertical slice in 1–2 weeks." },
    { k: "Integrate", d: "Harden, test, document, train." },
    { k: "Operate", d: "SLOs, observability, and change control." },
  ];
  return (
    <section id="approach" className="relative border-t" style={{ borderColor: `${GOLD}33` }}>
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl" style={{ color: GOLD }}>Approach</h2>
          <p className="mt-2 text-white/80">Small parts, well-documented. No mystery boxes.</p>
        </div>
        <div className="mx-auto max-w-4xl">
          <ol className="relative space-y-6 border-l pl-6" style={{ borderColor: `${GOLD}55` }}>
            {steps.map((s, i) => (
              <motion.li key={i} initial={{ opacity: 0, x: -12 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ type: "spring", stiffness: 120, damping: 18 }}>
                <div className="absolute -left-[9px] top-1 h-4 w-4 rounded-full" style={{ background: `linear-gradient(135deg, ${GOLD}, ${GOLD_SOFT})` }} />
                <h3 className="text-lg font-semibold" style={{ color: GOLD }}>{i + 1}. {s.k}</h3>
                <p className="text-sm text-white/80">{s.d}</p>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

function CaseStudies() {
  const cases = [
    { title: "Fuel losses → visibility in 3 weeks", impact: "22% reduction in unexplained losses", scope: "RS‑485 fuel sensor + gateway → MQTT → ThingsBoard; alerts: overfill, unauthorized refuel; weekly variance report." },
    { title: "Document chaos → single source of truth", impact: "60% admin time saved", scope: "Gmail/Drive automations; NDA/contract pipelines with Apps Script; DLP checks." },
    { title: "Field inspections → no spreadsheets", impact: "100% traceable sign‑offs", scope: "Mobile form → validation → PDF pack → dashboard KPIs → audit export." },
  ];
  return (
    <section id="case-studies" className="relative border-t" style={{ borderColor: `${GOLD}33` }}>
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl" style={{ color: GOLD }}>Case Studies</h2>
          <p className="mt-2 text-white/80">Anonymized snapshots. Names available under NDA.</p>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          {cases.map((c, i) => (
            <motion.div key={i} initial={{ opacity: 0, scale: 0.96 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ type: "spring", stiffness: 120, damping: 18 }} className="rounded-2xl border bg-black/50 p-6 shadow-sm backdrop-blur" style={{ borderColor: `${GOLD}55` }}>
              <h3 className="text-lg font-semibold" style={{ color: GOLD }}>{c.title}</h3>
              <p className="mt-1 text-sm" style={{ color: GOLD_SOFT }}>Impact: {c.impact}</p>
              <p className="mt-2 text-sm text-white/80">{c.scope}</p>
            </motion.div>
          ))}
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
          <p className="mt-2 text-white/80">Email <a href="mailto:hello@hwah.net" className="underline" style={{ color: GOLD_SOFT }}>hello@hwah.net</a>. We reply within one business day.</p>
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
    <div className="relative min-h-screen bg-black text-white">
      <Hero />
      <Services />
      <Solutions />
      <Approach />
      <CaseStudies />
      <Contact />
    </div>
  );
}

