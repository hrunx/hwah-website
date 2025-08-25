"use client";

import React from "react";
import { motion } from "framer-motion";

const GOLD = "#D4AF37";
const GOLD_SOFT = "#E6C766";

export default function PageHeader({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div className="relative overflow-hidden border-b" style={{ borderColor: `${GOLD}33` }}>
      <div className="absolute inset-0" style={{ background: `linear-gradient(180deg, rgba(212,175,55,0.10), transparent)` }} />
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
        <motion.h1 initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ type: "spring", stiffness: 120, damping: 14 }} className="text-3xl font-bold sm:text-4xl" style={{ color: GOLD }}>
          {title}
        </motion.h1>
        {subtitle ? (
          <motion.p initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.05, type: "spring", stiffness: 120, damping: 14 }} className="mt-2 text-white/80">
            {subtitle}
          </motion.p>
        ) : null}
      </div>
    </div>
  );
}


