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
            Build once. Automate forever.
          </motion.h1>
          <motion.p variants={item} className="mx-auto mt-3 max-w-3xl text-balance text-lg" style={{ color: GOLD_SOFT }}>
            We design AI systems and automations that kill busywork and surface truth. Less drag, more signal. Built clean. Shipped fast.
          </motion.p>
          <motion.div variants={item} className="mt-8 flex items-center justify-center gap-3">
            <a href="#contact" className="btn-gold-outline inline-flex items-center gap-2 px-5 py-3 font-medium">
              <Rocket className="h-4 w-4" /> Book a discovery call
            </a>
            <a href="/case-studies" className="btn-gold-outline inline-flex items-center gap-2 px-5 py-3 font-medium">
              See case studies <ArrowRight className="h-4 w-4" />
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
          <span className="rounded-full border px-3 py-1" style={{ borderColor: `${GOLD}44` }}>Security‑minded by default</span>
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
  const cases = [
    { title: "Fuel losses → visibility in 3 weeks", impact: "22% reduction in unexplained losses", scope: "RS‑485 fuel sensor + gateway → MQTT → ThingsBoard; alerts: overfill, unauthorized refuel; weekly variance report." },
    { title: "Document chaos → single source of truth", impact: "60% admin time saved", scope: "Gmail/Drive automations; NDA/contract pipelines with Apps Script; DLP checks." },
    { title: "Field inspections → no spreadsheets", impact: "100% traceable sign‑offs", scope: "Mobile form → validation → PDF pack → dashboard KPIs → audit export." },
  ];
  return (
    <section id="case-studies" className="relative border-t" style={{ borderColor: `${GOLD}33` }}>
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <div className="mb-10 text-center">
          <h2 className="heading-underline font-display text-3xl font-bold tracking-tight sm:text-4xl" style={{ color: GOLD }}>Strategic Vision & Competitive Edge</h2>
          <p className="mt-2 text-white/80">How we operate and why it compounds.</p>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <div className="rounded-2xl border bg-black/50 p-6 backdrop-blur" style={{ borderColor: `${GOLD}55` }}>
            <h3 className="font-display text-lg font-semibold" style={{ color: GOLD }}>Strategic Vision & Leadership</h3>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-white/85">
              <li>Innovation — AI and emerging tech for disruption</li>
              <li>Operational Excellence — automation and transformation</li>
              <li>Scalability — sustainable growth</li>
              <li>Customer‑centric — tailored solutions</li>
              <li>Ethical & Sustainable — responsible practices</li>
            </ul>
          </div>
          <div className="rounded-2xl border bg-black/50 p-6 backdrop-blur" style={{ borderColor: `${GOLD}55` }}>
            <h3 className="font-display text-lg font-semibold" style={{ color: GOLD }}>Competitive Advantages</h3>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-white/85">
              <li>Cross‑industry expertise</li>
              <li>Technology‑driven solutions</li>
              <li>Scalability & global vision</li>
              <li>Leadership & innovation</li>
            </ul>
          </div>
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
      <Solutions />
      <Approach />
      <CaseStudies />
      <Contact />
    </div>
  );
}

