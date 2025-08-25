"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Mail } from "lucide-react";

const GOLD = "#D4AF37";
const GOLD_SOFT = "#E6C766";

export default function Nav() {
  return (
    <nav className="sticky top-0 z-40 border-b bg-black/60 backdrop-blur supports-[backdrop-filter]:bg-black/50" style={{ borderColor: `${GOLD}33` }}>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6">
        <Link href="/" className="group inline-flex items-center gap-3">
          <Image src="/brand/moon-icon.png" alt="HWAH moon icon" width={36} height={36} className="rounded-lg shadow" />
          <span className="text-lg font-semibold tracking-tight" style={{ color: GOLD }}>HWAH INDUSTRIES</span>
        </Link>
        <div className="hidden gap-6 text-sm sm:flex" style={{ color: GOLD_SOFT }}>
          <Link href="/services" className="hover:text-white">Services</Link>
          <Link href="/solutions" className="hover:text-white">Solutions</Link>
          <Link href="/approach" className="hover:text-white">Approach</Link>
          <Link href="/case-studies" className="hover:text-white">Case Studies</Link>
          <Link href="/about" className="hover:text-white">About</Link>
          <Link href="/pricing" className="hover:text-white">Pricing</Link>
          <Link href="/blog" className="hover:text-white">Blog</Link>
        </div>
        <Link href="/contact" className="inline-flex items-center gap-2 rounded-xl px-4 py-2 text-black shadow transition hover:shadow-md" style={{ backgroundColor: GOLD }}>
          <Mail className="h-4 w-4" />
          <span>Get in touch</span>
        </Link>
      </div>
    </nav>
  );
}


