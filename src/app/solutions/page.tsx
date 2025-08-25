import React from "react";
import PageHeader from "@/components/PageHeader";

const GOLD = "#D4AF37";

export default function Solutions() {
  const areas = [
    {
      title: "Information Technology (IT) & Digital Transformation",
      bullets: [
        "Enterprise software tailored to business needs",
        "AI, cloud, and cybersecurity to enhance efficiency",
        "Modernize processes and optimize workflows",
      ],
    },
    {
      title: "Logistics & Supply Chain Management",
      bullets: [
        "Strategic planning to improve supply chain efficiency",
        "Real‑time tracking, fleet management, automated logistics",
        "End‑to‑end warehousing, distribution, last‑mile",
      ],
    },
    {
      title: "Business Development & Market Expansion",
      bullets: [
        "Market research and competitive analysis",
        "Expansion into emerging industries with new models",
        "Partnerships and collaborations to grow revenue",
      ],
    },
    {
      title: "Technology Innovation & R&D",
      bullets: [
        "Investment to stay ahead of trends",
        "AI, blockchain, and IoT automation focus",
        "Proprietary tech to boost efficiency",
      ],
    },
  ];
  const principles = [
    "Innovation — AI and emerging tech for disruption",
    "Operational Excellence — automation and transformation",
    "Scalability — sustainable growth",
    "Customer‑centric — tailored solutions",
    "Ethical & Sustainable — responsible practices",
  ];
  const advantages = [
    "Cross‑industry expertise",
    "Technology‑driven solutions",
    "Scalability & global vision",
    "Leadership & innovation",
  ];
  return (
    <div className="text-white">
      <PageHeader title="Core Business Areas" subtitle="Where HWAH compounds value across disciplines." />
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {areas.map((a, i) => (
            <div key={i} className="rounded-2xl border bg-black/50 p-6 backdrop-blur" style={{ borderColor: `${GOLD}55` }}>
              <h3 className="font-display text-lg font-semibold" style={{ color: GOLD }}>{a.title}</h3>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-white/85">
                {a.bullets.map((b, j) => (<li key={j}>{b}</li>))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
          <div className="rounded-2xl border bg-black/50 p-6 backdrop-blur" style={{ borderColor: `${GOLD}55` }}>
            <h3 className="font-display text-lg font-semibold" style={{ color: GOLD }}>Strategic Vision & Leadership</h3>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-white/85">
              {principles.map((p, i) => (<li key={i}>{p}</li>))}
            </ul>
          </div>
          <div className="rounded-2xl border bg-black/50 p-6 backdrop-blur" style={{ borderColor: `${GOLD}55` }}>
            <h3 className="font-display text-lg font-semibold" style={{ color: GOLD }}>Competitive Advantages</h3>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-white/85">
              {advantages.map((p, i) => (<li key={i}>{p}</li>))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}


