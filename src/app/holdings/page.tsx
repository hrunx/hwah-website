import React from "react";
import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";

const GOLD = "#D4AF37";
const GOLD_SOFT = "#E6C766";

export default function Holdings() {
  return (
    <div className="text-white">
      <PageHeader title="Holdings — HWAH Industries LLC" subtitle="Research • Consulting • Operating — backed by ventures and partners." />
      <Intro />
      <Research />
      <Consulting />
      <Operating />
      <Ventures />
    </div>
  );
}

export const metadata: Metadata = {
  title: "HWAH Holdings: Research • Consulting • Operating — Ventures & Partners",
  description:
    "Parent LLC with three sister units. Research (energy intelligence, agentic AI, telemetry pilots), Consulting (advisory & builds), Operating (COO-level ops).",
};

function Intro() {
  return (
    <section className="border-t" style={{ borderColor: `${GOLD}33` }}>
      <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6">
        <p className="text-white/85">
          HWAH Industries LLC is the parent. We operate through three sister units to cover the full lifecycle—discover → build → operate—backed by a portfolio of ventures and partners.
        </p>
      </div>
    </section>
  );
}

function SectionHeader({ id, title, purpose }: { id: string; title: string; purpose: string }) {
  return (
    <div id={id} className="mb-3">
      <h2 className="font-display text-2xl font-semibold" style={{ color: GOLD }}>{title}</h2>
      <p className="mt-1 text-sm" style={{ color: GOLD_SOFT }}>Purpose: {purpose}</p>
    </div>
  );
}

function Research() {
  return (
    <section className="border-t" style={{ borderColor: `${GOLD}33` }}>
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
        <SectionHeader id="research" title="HWAH Research" purpose="R&D and first-of-a-kind builds. We explore, prototype, and de-risk before scaling—offline-first where needed, security-minded always." />
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <div className="rounded-2xl border bg-black/50 p-6" style={{ borderColor: `${GOLD}55` }}>
            <h3 className="font-display text-lg font-semibold" style={{ color: GOLD }}>What we do</h3>
            <ul className="mt-2 list-disc space-y-2 pl-5 text-sm text-white/85">
              <li>Energy market intelligence: sector → sub-sector → ICP maps; pain points & workflows; bilingual reports and dashboards.</li>
              <li>AI systems & agentic platforms: retrieval-augmented copilots; multi-agent orchestration with role separation, tool use (APIs/DBs), and policy-aware prompts (Arabic/English).</li>
              <li>Telemetry pilots: sensor selection (RS-485/Modbus/4–20 mA), IOT gateways, MQTT ingest, rules/alerts,  dashboards.</li>
              <li>Automation prototypes: Google Workspace (Apps Script) for docs, approvals, and archives with audit trails.</li>
            </ul>
          </div>
          <div className="rounded-2xl border bg-black/50 p-6" style={{ borderColor: `${GOLD}55` }}>
            <h3 className="font-display text-lg font-semibold" style={{ color: GOLD }}>Selected research & builds</h3>
            <ul className="mt-2 list-disc space-y-2 pl-5 text-sm text-white/85">
              <li>Energy deep-dive (KSA): comprehensive landscape of segments, ICPs, and operational pain points; outputs used for product and GTM decisions.</li>
              <li>Multi-agent lead engine: planner/researcher/builder/reviewer agents that source, enrich, and route leads per ICP with supervised review loops.</li>
              <li>AI onboarding & flowbots: policy-aware assistants for customer care and internal ops; measurable effort reduction.</li>
            </ul>
          </div>
        </div>
        <div className="mt-6 rounded-2xl border bg-black/50 p-6" style={{ borderColor: `${GOLD}55` }}>
          <h3 className="font-display text-lg font-semibold" style={{ color: GOLD }}>Role highlights</h3>
          <ul className="mt-2 list-disc space-y-2 pl-5 text-sm text-white/85">
            <li>Head of R&D, Gasable (prev.): built AI + automation programs (OpenAI beta APIs), 90%+ KAM task automation, internal CRM, AI flowbots, market research dashboards.</li>
          </ul>
          <p className="mt-3 text-sm text-white/80">Ownership note: Some systems were designed and implemented by HWAH for partner operators—e.g., ES2 Square (energy audit toolkit) and Leadora (agentic lead-gen)—and are operated by them.</p>
          <p className="mt-2 text-sm" style={{ color: GOLD_SOFT }}>Contact: <a className="underline" href="mailto:hrn@hwah.net">hrn@hwah.net</a></p>
        </div>
      </div>
    </section>
  );
}

function Consulting() {
  return (
    <section className="border-t" style={{ borderColor: `${GOLD}33` }}>
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
        <SectionHeader id="consulting" title="HWAH Consulting" purpose="Blueprints that ship. We turn research into production-grade automations and data systems—with runbooks your team actually follows." />
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <div className="rounded-2xl border bg-black/50 p-6" style={{ borderColor: `${GOLD}55` }}>
            <h3 className="font-display text-lg font-semibold" style={{ color: GOLD }}>Services</h3>
            <ul className="mt-2 list-disc space-y-2 pl-5 text-sm text-white/85">
              <li>Advisory & architecture: SLOs, acceptance tests, owner handover plans.</li>
              <li>Workspace automations: Gmail/Sheets/Docs/Drive flows; doc templating → e-sign → archive; DLP & routing.</li>
              <li>Data & KPIs: semantic layers; ETL/ELT to BigQuery/Postgres; Looker Studio/Metabase; data quality & lineage.</li>
              <li>Integrations: Teltonika, ThingsBoard, Flespi, HubSpot, WhatsApp gateways, OpenAI/DeepSeek, Supabase/Firestore.</li>
            </ul>
          </div>
          <div className="rounded-2xl border bg-black/50 p-6" style={{ borderColor: `${GOLD}55` }}>
            <h3 className="font-display text-lg font-semibold" style={{ color: GOLD }}>Highlights (NDA-friendly)</h3>
            <ul className="mt-2 list-disc space-y-2 pl-5 text-sm text-white/85">
              <li>Documents on autopilot: NDAs/contracts in minutes; &lt;24h standard SLA.</li>
              <li>Sales ops clarity: ICP-driven capture, scoring, sequences; shared inbox playbooks; faster first response.</li>
              <li>Procurement & billing: usage-based invoices; bilingual, ZATCA-ready.</li>
            </ul>
            <p className="mt-3 text-sm" style={{ color: GOLD_SOFT }}>Contact: <a className="underline" href="mailto:hrn@hwah.net">hrn@hwah.net</a></p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Operating() {
  return (
    <section className="border-t" style={{ borderColor: `${GOLD}33` }}>
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
        <SectionHeader id="operating" title="HWAH Operating" purpose="Operations that don’t drift. We run critical workflows with the same discipline we use to operate our own products." />
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <div className="rounded-2xl border bg-black/50 p-6" style={{ borderColor: `${GOLD}55` }}>
            <h3 className="font-display text-lg font-semibold" style={{ color: GOLD }}>What “operate” covers</h3>
            <ul className="mt-2 list-disc space-y-2 pl-5 text-sm text-white/85">
              <li>COO-level execution: end-to-end ops, team leadership and cadence; pricing & growth experiments; partnerships and GTM.</li>
              <li>SLA monitoring & incident playbooks: telemetry dashboards; alerts (WhatsApp/Email); monthly reports.</li>
              <li>Security hygiene: least-privilege, secrets rotation, access reviews, audit logs.</li>
              <li>Change control: versioned configs, rollbacks, and release notes.</li>
            </ul>
          </div>
          <div className="rounded-2xl border bg-black/50 p-6" style={{ borderColor: `${GOLD}55` }}>
            <h3 className="font-display text-lg font-semibold" style={{ color: GOLD }}>Role highlights</h3>
            <ul className="mt-2 list-disc space-y-2 pl-5 text-sm text-white/85">
              <li>COO, Hysabat (current): full-stack operations across product, support, finance/HR/process; pricing models & add-ons; cross-functional cadence; KPI dashboards and reports aligned to execution.</li>
              <li>Strategic partner delivery: onboarding flows, KAM automations, and CRM training that drive adoption across the org.</li>
            </ul>
            <p className="mt-3 text-sm" style={{ color: GOLD_SOFT }}>Contact: <a className="underline" href="mailto:hrn@hwah.net">hrn@hwah.net</a></p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Ventures() {
  const partners = [
    "Gasable — energy marketplace & IoT solutions (research/consulting partner)",
    "Hysabat — ERP/FinTech for SMEs (operating partner; COO role)",
    "BytCorp — product & automation consulting (consulting partner)",
    "Autilent — AI fleet safety (partner)",
    "HeavySooq — industrial marketplace initiatives (partner)",
    "ES2 Square — energy audit toolkit (designed by HWAH; operated by partner)",
    "Leadora — agentic lead-gen (designed by HWAH; operated by partner)",
  ];
  const tools = ["Quantilyst (data utilities)", "Pixelator (design-to-asset helpers)", "Stockler (lightweight ETL)", "Leadora (multi-agent experiments)"];
  return (
    <section className="border-t" style={{ borderColor: `${GOLD}33` }}>
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
        <h2 className="font-display text-2xl font-semibold" style={{ color: GOLD }}>Ventures & Partners</h2>
        <ul className="mt-3 grid grid-cols-1 gap-3 text-sm text-white/85 sm:grid-cols-2">
          {partners.map((p, i) => (
            <li key={i} className="rounded-xl border bg-black/50 px-4 py-3" style={{ borderColor: `${GOLD}44` }}>{p}</li>
          ))}
        </ul>
        <div className="mt-6">
          <h3 className="font-display text-lg font-semibold" style={{ color: GOLD }}>Open tools & repos</h3>
          <p className="mt-1 text-sm text-white/85">{tools.join(" • ")}</p>
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border bg-black/50 p-6" style={{ borderColor: `${GOLD}55` }}>
              <h4 className="font-display text-lg font-semibold" style={{ color: GOLD }}>Quantilyst</h4>
              <p className="mt-2 text-sm text-white/85">Data utilities used across engagements: CSV/Sheets loaders, KPI helpers, Looker Studio connectors, and quick-start semantic layers for operator dashboards.</p>
              <p className="mt-2 text-sm text-white/85">Where it helps: fast KPI prototyping, ETL/ELT scaffolds, and repeatable reporting packs.</p>
            </div>
            <div className="rounded-2xl border bg-black/50 p-6" style={{ borderColor: `${GOLD}55` }}>
              <h4 className="font-display text-lg font-semibold" style={{ color: GOLD }}>Pixelator</h4>
              <p className="mt-2 text-sm text-white/85">Design-to-asset helpers for consistent visuals: text-to-pixel rendering, batch sizing, and export pipelines for web/app artifacts.</p>
              <p className="mt-2 text-sm text-white/85">Where it helps: brand consistency and faster marketing ops.</p>
            </div>
            <div className="rounded-2xl border bg-black/50 p-6" style={{ borderColor: `${GOLD}55` }}>
              <h4 className="font-display text-lg font-semibold" style={{ color: GOLD }}>Stockler</h4>
              <p className="mt-2 text-sm text-white/85">Lightweight ETL building blocks: fetchers/parsers, scheduler hooks, and audit-friendly checkpoints for small, composable pipelines.</p>
              <p className="mt-2 text-sm text-white/85">Where it helps: usage-based billing, ops reconciliations, and telemetry rollups.</p>
            </div>
            <div className="rounded-2xl border bg-black/50 p-6" style={{ borderColor: `${GOLD}55` }}>
              <h4 className="font-display text-lg font-semibold" style={{ color: GOLD }}>Leadora</h4>
              <p className="mt-2 text-sm text-white/85">Agentic lead-gen experiments: planner/researcher/builder/reviewer agents with role separation, tool use (APIs/DBs), supervised review loops, and guardrailed prompts.</p>
              <p className="mt-2 text-sm text-white/85">Where it helps: ICP-driven sourcing, enrichment, and routing with measurable review throughput.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}




