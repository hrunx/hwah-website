import React from "react";
import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import DraggableTimeline from "@/components/DraggableTimeline";
import { Info, User, Handshake, Building2, Sparkles, Mail, Linkedin, Github, ShieldCheck } from "lucide-react";

const GOLD = "#D4AF37";
const GOLD_SOFT = "#E6C766";

export default function About() {
  return (
    <div className="text-white">
      <PageHeader title="About HWAH Industries LLC" subtitle="Founder & Recognitions" />
      {/* JSON-LD: Organization */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "HWAH Industries LLC",
            url: "https://www.hwah.net",
            logo: "https://www.hwah.net/brand/hwah-logo-gold.jpg",
            email: "hrn@hwah.net",
            sameAs: [
              "https://www.linkedin.com/in/haroon-shafqat/",
              "https://github.com/hrunx",
            ],
            subOrganization: [
              { "@type": "Organization", name: "HWAH Research", url: "https://www.hwah.net/holdings#research" },
              { "@type": "Organization", name: "HWAH Consulting", url: "https://www.hwah.net/holdings#consulting" },
              { "@type": "Organization", name: "HWAH Operating", url: "https://www.hwah.net/holdings#operating" },
            ],
          }),
        }}
      />
      {/* JSON-LD: Person (Founder) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Haroon Shafqat",
            jobTitle: "Founder",
            worksFor: { "@type": "Organization", name: "HWAH Industries LLC" },
            url: "https://www.hwah.net/about",
            sameAs: [
              "https://www.linkedin.com/in/haroon-shafqat/",
              "https://github.com/hrunx",
            ],
          }),
        }}
      />
      {/* JSON-LD: ProfessionalService */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            name: "HWAH — Holding & Systems Studio",
            url: "https://www.hwah.net/holdings",
            areaServed: { "@type": "Country", name: "Saudi Arabia" },
            availableLanguage: ["ar", "en"],
            serviceType: [
              "Agentic AI platforms",
              "Internal AI copilots",
              "Google Workspace automation",
              "IoT telemetry (Teltonika/ThingsBoard)",
              "KPI modeling and dashboards",
            ],
          }),
        }}
      />
      {/* JSON-LD: Person awards & memberships */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Haroon Shafqat",
            jobTitle: "Founder",
            worksFor: { "@type": "Organization", name: "HWAH Industries LLC" },
            award: "Middle East's 10 Most Influential Business Leaders to Follow in 2025",
            memberOf: [
              { "@type": "ProgramMembership", name: "OpenAI Beta Access" },
              { "@type": "ProgramMembership", name: "Google Cloud Innovators" },
            ],
            url: "https://www.hwah.net/about",
            sameAs: [
              "https://www.linkedin.com/in/haroon-shafqat/",
              "https://github.com/hrunx",
            ],
          }),
        }}
      />
      <Intro />
      <FounderCard />
      <WhatIsHwah />
      <Principles />
      <HoldingsPartners />
      <HowWeWork />
      <WorkArtifactsAndLegal />
      <Contacts />
    </div>
  );
}

export const metadata: Metadata = {
  title: "About HWAH Industries LLC — Founder & Recognitions",
  description:
    "Led by Haroon Shafqat (OpenAI Beta Access, Google Cloud Innovator, CIO Magazine 2025 list).",
};

function Intro() {
  return (
    <section className="border-t" style={{ borderColor: `${GOLD}33` }}>
      <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6">
        <p className="text-white/85">
          We exist to make operations observable, automatic, and secure. Work runs through HWAH Research, HWAH Consulting, and HWAH Operating so you can move from idea to production to steady-state operations without switching teams.
        </p>
      </div>
    </section>
  );
}

function IconBadge({ children }: { children: React.ReactNode }) {
  return <div className="mb-3 inline-flex items-center gap-2 rounded-xl p-4 text-black" style={{ backgroundColor: GOLD }}>{children}</div>;
}

function FounderCard() {
  return (
    <section className="border-t" style={{ borderColor: `${GOLD}33` }}>
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          <div className="card-star-hover rounded-2xl border border-2 bg-black/50 p-7 shadow-md sm:col-span-2" style={{ borderColor: `${GOLD}99` }}>
            <IconBadge><User className="h-8 w-8" /></IconBadge>
            <h3 className="font-display text-2xl font-bold" style={{ color: GOLD }}>Founder — Haroon Shafqat</h3>
            <p className="mt-1 text-sm text-white/80">Engineer • Operator • Relentless Simplifier</p>
            <p className="mt-4 text-sm text-white/85">Led AI, automation, and telemetry programs across energy, logistics, and SaaS in KSA; bilingual; NDA-friendly; happiest when a dashboard removes an argument.</p>
            <div className="mt-5 flex flex-wrap gap-3">
              <a href="https://www.linkedin.com/in/haroon-shafqat/" target="_blank" rel="noopener noreferrer" className="btn-gold-outline inline-flex items-center gap-2 px-3 py-2 text-sm"><Linkedin className="h-6 w-6" /> LinkedIn</a>
              <a href="https://github.com/hrunx" target="_blank" rel="noopener noreferrer" className="btn-gold-outline inline-flex items-center gap-2 px-3 py-2 text-sm"><Github className="h-6 w-6" /> GitHub</a>
              <a href="mailto:hrn@hwah.net" className="btn-gold-outline inline-flex items-center gap-2 px-3 py-2 text-sm"><Mail className="h-6 w-6" /> Email</a>
            </div>
          </div>
          <div className="rounded-2xl border bg-black/50 p-3 w-full max-w-xs justify-self-start self-start" style={{ borderColor: `${GOLD}55` }}>
            <h4 className="font-display text-lg font-semibold" style={{ color: GOLD }}>Tagline</h4>
            <p className="mt-2 text-sm text-white/85">Build once. Automate forever.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function WhatIsHwah() {
  return (
    <section className="border-t" style={{ borderColor: `${GOLD}33` }}>
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
        <div className="rounded-2xl border bg-black/50 p-6" style={{ borderColor: `${GOLD}55` }}>
          <IconBadge><Info className="h-8 w-8" /></IconBadge>
          <h3 className="font-display text-lg font-semibold" style={{ color: GOLD }}>What HWAH is (and isn’t)</h3>
          <p className="mt-2 text-sm text-white/85">HWAH is a focused holding & execution studio: we take ownership, invest sweat equity, and ship production‑grade automations and telemetry.</p>
          <p className="mt-2 text-sm text-white/85">HWAH isn’t a generic agency—we avoid vanity dashboards, fragile prototypes, and endless slideware.</p>
        </div>
      </div>
    </section>
  );
}

function Principles() {
  const principles = [
    { t: "Clarity over complexity", d: "Small parts; fewer surprises." },
    { t: "Security by habit", d: "Least privilege, logs, and reviews." },
    { t: "Measure or it didn’t happen", d: "If we can’t quantify it, we don’t ship it." },
  ];
  return (
    <section className="border-t" style={{ borderColor: `${GOLD}33` }}>
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
        <h2 className="font-display text-2xl font-semibold" style={{ color: GOLD }}>Operating principles</h2>
        <div className="mt-3 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {principles.map((p, i) => (
            <div key={i} className="card-star-hover rounded-2xl border bg-black/50 p-5" style={{ borderColor: `${GOLD}55` }}>
              <div className="mb-2 inline-flex rounded-xl p-2 text-black" style={{ backgroundColor: GOLD }}>
                <ShieldCheck className="h-5 w-5" />
              </div>
              <h4 className="font-display text-sm font-semibold" style={{ color: GOLD }}>{p.t}</h4>
              <p className="mt-1 text-sm text-white/85">{p.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function HoldingsPartners() {
  return (
    <section className="border-t" style={{ borderColor: `${GOLD}33` }}>
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
        <div className="mb-4 flex items-center gap-2">
          <Building2 className="h-7 w-7" style={{ color: GOLD }} />
          <h3 className="font-display text-xl font-semibold" style={{ color: GOLD }}>Holdings, Ventures & Partnerships</h3>
        </div>
        <p className="text-sm text-white/70">Names and logos are used when public. Client‑specific identities remain anonymized under NDA.</p>
        <div className="mt-4 rounded-2xl border bg-black/50 p-6" style={{ borderColor: `${GOLD}55` }}>
          <h4 className="font-display text-lg font-semibold" style={{ color: GOLD }}>Where we help</h4>
          <p className="mt-2 text-sm text-white/85">Architecture & SLOs; Apps Script pipelines (Gmail/Sheets/Docs/Drive); IoT sensor selection and integration (RS‑485/Modbus, 4–20 mA); ingest via MQTT/HTTP; alerting and dashboards (ThingsBoard/Looker Studio/custom); DLP and credential hygiene; bilingual deliverables.</p>
        </div>
      </div>
    </section>
  );
}

function HowWeWork() {
  const steps = [
    { k: "Discover", d: "Map reality; list risk and constraints." },
    { k: "Blueprint", d: "Architecture, SLOs, acceptance tests, and owner handover plan." },
    { k: "Pilot", d: "Thin vertical slice in 1–2 weeks, measured." },
    { k: "Production", d: "Harden, document, train." },
    { k: "Operate", d: "Observability, change control, and monthly improvements." },
  ];
  return (
    <section className="border-t" style={{ borderColor: `${GOLD}33` }}>
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
        <h3 className="font-display text-xl font-semibold" style={{ color: GOLD }}>How we work</h3>
        <div className="mt-2 rounded-2xl border bg-black/50 p-6" style={{ borderColor: `${GOLD}55` }}>
          <DraggableTimeline steps={steps} />
        </div>
      </div>
    </section>
  );
}

function WorkArtifactsAndLegal() {
  return (
    <section className="border-t" style={{ borderColor: `${GOLD}33` }}>
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <div className="rounded-2xl border bg-black/50 p-6" style={{ borderColor: `${GOLD}55` }}>
            <h4 className="font-display text-lg font-semibold" style={{ color: GOLD }}>Artifacts you receive</h4>
            <p className="mt-2 text-sm text-white/85">Diagrams, runbooks, admin checklists, incident playbooks, and code/config under version control.</p>
          </div>
          <div className="rounded-2xl border bg-black/50 p-6" style={{ borderColor: `${GOLD}55` }}>
            <div className="mb-1 inline-flex items-center gap-2 text-white/85"><ShieldCheck className="h-5 w-5" style={{ color: GOLD }} /><span className="font-display text-lg font-semibold" style={{ color: GOLD }}>Legal & Confidentiality</span></div>
            <p className="mt-2 text-sm text-white/85">We work under strict confidentiality. NDAs are standard. Data is minimized, encrypted in transit, and access‑controlled; secrets are rotated and audited. Security incidents are disclosed without undue delay as per contract.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Contacts() {
  return (
    <section className="border-t" style={{ borderColor: `${GOLD}33` }}>
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
        <div className="rounded-2xl border bg-black/50 p-6" style={{ borderColor: `${GOLD}55` }}>
          <p className="text-sm" style={{ color: GOLD_SOFT }}>Let’s trade busywork for signal. Email <a href="mailto:hrn@hwah.net" className="underline">hrn@hwah.net</a>. We reply within 1 business day.</p>
        </div>
      </div>
    </section>
  );
}



