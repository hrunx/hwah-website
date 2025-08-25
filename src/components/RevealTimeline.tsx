"use client";

import React from "react";
import { motion } from "framer-motion";

const GOLD = "#D4AF37";
const GOLD_SOFT = "#E6C766";

type Step = { k: string; d: string };

export default function RevealTimeline({ steps, title }: { steps: Step[]; title?: string }) {
  return (
    <div className="mt-10">
      {title ? (
        <h3 className="font-display text-lg font-semibold" style={{ color: GOLD }}>{title}</h3>
      ) : null}
      <ol className="relative mt-4 space-y-6 border-l pl-6" style={{ borderColor: `${GOLD}55` }}>
        {steps.map((s, i) => (
          <motion.li
            key={i}
            initial={{ opacity: 0, x: -12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ type: "spring", stiffness: 120, damping: 18 }}
          >
            <div className="absolute -left-[9px] top-1 h-4 w-4 rounded-full" style={{ background: `linear-gradient(135deg, ${GOLD}, ${GOLD_SOFT})` }} />
            <h4 className="font-display text-sm font-semibold" style={{ color: GOLD }}>{i + 1}. {s.k}</h4>
            <p className="text-sm text-white/85">{s.d}</p>
          </motion.li>
        ))}
      </ol>
    </div>
  );
}


