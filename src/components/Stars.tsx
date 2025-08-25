"use client";

import React, { useEffect, useRef } from "react";

const GOLD = "#D4AF37";
const GOLD_SOFT = "#E6C766";

type Star = {
  x: number;
  y: number;
  r: number;
  baseAlpha: number;
  amp: number;
  speed: number;
  warm: boolean;
};

export default function Stars() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    const dpr = Math.max(1, Math.min(2, window.devicePixelRatio || 1));
    let width = 0;
    let height = 0;
    let stars: Star[] = [];
    let start = performance.now();

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      // density scales with area; tuned for a sparse, premium look; reduce on small screens
      const base = Math.round((width * height) / 12000);
      const isSmall = width < 640;
      const count = Math.min(900, Math.max(isSmall ? 180 : 250, isSmall ? Math.floor(base * 0.75) : base));
      stars = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        r: Math.random() * 0.9 + 0.3,
        baseAlpha: Math.random() * 0.35 + 0.25,
        amp: Math.random() * 0.25 + 0.1,
        speed: Math.random() * 1.2 + 0.4,
        warm: Math.random() > 0.4,
      }));
    };

    const draw = (t: number) => {
      ctx.clearRect(0, 0, width, height);
      // Deep black background with slight vignette handled in DOM; canvas only draws stars
      for (let i = 0; i < stars.length; i += 1) {
        const s = stars[i];
        const phase = ((t - start) / 1000) * s.speed;
        const alpha = s.baseAlpha + Math.sin(phase) * s.amp;
        ctx.globalAlpha = Math.max(0, Math.min(1, alpha));
        ctx.fillStyle = s.warm ? GOLD : GOLD_SOFT;
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.globalAlpha = 1;
      rafRef.current = requestAnimationFrame(draw);
    };

    const onVisibility = () => {
      if (document.hidden) {
        if (rafRef.current) cancelAnimationFrame(rafRef.current);
        rafRef.current = null;
      } else if (!rafRef.current) {
        start = performance.now();
        rafRef.current = requestAnimationFrame(draw);
      }
    };

    resize();
    start = performance.now();
    rafRef.current = requestAnimationFrame(draw);
    window.addEventListener("resize", resize);
    document.addEventListener("visibilitychange", onVisibility);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", resize);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" style={{ backgroundColor: "#050505" }}>
      {/* Subtle golden central glow */}
      <div
        className="absolute -top-40 left-1/2 h-[42rem] w-[42rem] -translate-x-1/2 rounded-full blur-3xl"
        style={{ background: `radial-gradient(closest-side, ${GOLD}26, transparent 70%)` }}
      />
      {/* Horizon line */}
      <div className="absolute bottom-0 left-0 right-0 h-px" style={{ background: `linear-gradient(90deg, transparent, ${GOLD}55, transparent)` }} />

      {/* Procedural stars */}
      <canvas ref={canvasRef} className="absolute inset-0" />

      {/* Film grain + vignette for that deep black, premium finish */}
      <div className="absolute inset-0" style={{
        backgroundImage: `
          radial-gradient(circle at 20% 10%, #000000 0%, transparent 60%),
          radial-gradient(circle at 80% 0%, #000000 0%, transparent 55%)
        `,
        mixBlendMode: "normal",
        opacity: 0.75,
      }} />
      <div className="absolute inset-0" style={{
        backgroundImage: `
          repeating-linear-gradient(0deg, rgba(255,255,255,0.02) 0, rgba(255,255,255,0.02) 1px, transparent 1px, transparent 2px),
          repeating-linear-gradient(90deg, rgba(255,255,255,0.02) 0, rgba(255,255,255,0.02) 1px, transparent 1px, transparent 2px)
        `,
        opacity: 0.06,
      }} />
      {/* Strong vignette to push edges to deep black */}
      <div className="absolute inset-0" style={{ maskImage: "radial-gradient(ellipse at center, black 55%, transparent 90%)" }} />
    </div>
  );
}


