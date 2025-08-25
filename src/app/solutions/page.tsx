import React from "react";
import PageHeader from "@/components/PageHeader";

const GOLD = "#D4AF37";

export default function Solutions() {
  return (
    <div className="text-white">
      <PageHeader title="Solutions" subtitle="Case studies and implemented solutions will appear here soon." />
      <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
        <p className="text-white/80">We’re assembling anonymized case studies and solution breakdowns. Meanwhile, explore the Services section for our core business areas.</p>
        <a href="/services" className="btn-gold-outline mt-6 inline-block px-5 py-3">Explore Services</a>
      </div>
    </div>
  );
}


