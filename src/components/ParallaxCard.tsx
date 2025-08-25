"use client";

import React, { useRef } from "react";

export default function ParallaxCard({ children, className }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const onMouseMove = (e: React.MouseEvent) => {
    const el = ref.current; if (!el) return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    el.style.transform = `rotateX(${(-y * 6).toFixed(2)}deg) rotateY(${(x * 6).toFixed(2)}deg) translateZ(0)`;
  };
  const onLeave = () => { const el = ref.current; if (el) el.style.transform = "rotateX(0) rotateY(0)"; };
  return (
    <div ref={ref} onMouseMove={onMouseMove} onMouseLeave={onLeave} className={className} style={{ transition: "transform .25s ease" }}>
      {children}
    </div>
  );
}


