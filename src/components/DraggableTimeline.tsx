"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import { motion, useMotionValue, animate } from "framer-motion";

const GOLD = "#D4AF37";
const GOLD_SOFT = "#E6C766";

type Step = { k: string; d: string };

export default function DraggableTimeline({ steps, title }: { steps: Step[]; title?: string }) {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const [trackWidth, setTrackWidth] = useState(0);
  const [active, setActive] = useState(0);
  const x = useMotionValue(0);

  // measure width
  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    const ro = new ResizeObserver(() => setTrackWidth(el.clientWidth));
    ro.observe(el);
    setTrackWidth(el.clientWidth);
    return () => ro.disconnect();
  }, []);

  const positions = useMemo(() => {
    const n = Math.max(steps.length - 1, 1);
    return steps.map((_, i) => (trackWidth * i) / n);
  }, [steps, trackWidth]);

  // snap handle to active step
  useEffect(() => {
    if (!positions.length) return;
    const controls = animate(x, positions[active], { type: "spring", stiffness: 220, damping: 24 });
    return () => controls.stop();
  }, [active, positions]);

  const onDragEnd = () => {
    if (!positions.length) return;
    const current = x.get();
    const nearestIndex = positions.reduce((bestIdx, val, idx) => {
      return Math.abs(val - current) < Math.abs(positions[bestIdx] - current) ? idx : bestIdx;
    }, 0);
    setActive(nearestIndex);
  };

  return (
    <div className="mt-10">
      {title ? (
        <h3 className="font-display text-lg font-semibold" style={{ color: GOLD }}>{title}</h3>
      ) : null}
      <div className="mt-4">
        <div ref={trackRef} className="relative h-10 w-full select-none">
          <div
            className="absolute top-1/2 h-1 w-full -translate-y-1/2 rounded-full"
            style={{ background: `linear-gradient(90deg, ${GOLD}99, ${GOLD_SOFT}66)` }}
          />
          {positions.map((left, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setActive(i)}
              className="absolute top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full"
              style={{ left, background: i === active ? GOLD : `${GOLD}66` }}
              aria-label={`Step ${i + 1}`}
            />
          ))}
          <motion.div
            className="absolute top-1/2 h-5 w-5 -translate-x-1/2 -translate-y-1/2 cursor-grab rounded-full shadow"
            style={{ x, background: `radial-gradient(circle, ${GOLD}, ${GOLD_SOFT})` }}
            drag="x"
            dragConstraints={{ left: 0, right: Math.max(positions[positions.length - 1] || 0, 0) }}
            dragElastic={0.05}
            onDragEnd={onDragEnd}
            aria-label="Timeline handle"
          />
        </div>
        <div className="mt-5 rounded-2xl border bg-black/50 p-4" style={{ borderColor: `${GOLD}55` }}>
          <h4 className="font-display text-sm font-semibold" style={{ color: GOLD }}>{active + 1}. {steps[active]?.k}</h4>
          <p className="mt-1 text-sm text-white/85">{steps[active]?.d}</p>
        </div>
      </div>
    </div>
  );
}


