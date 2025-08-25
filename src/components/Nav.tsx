"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Mail, Menu, X } from "lucide-react";

const GOLD = "#D4AF37";
const GOLD_SOFT = "#E6C766";

export default function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="sticky top-0 z-20 border-b bg-black/40 backdrop-blur supports-[backdrop-filter]:bg-black/30" style={{ borderColor: `${GOLD}33` }}>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6">
        <Link href="/" className="group inline-flex items-center gap-3">
          <Image src="/brand/moon-icon.png" alt="HWAH moon icon" width={36} height={36} className="rounded-lg shadow" />
          <span className="text-lg font-semibold tracking-tight" style={{ color: GOLD }}>HWAH INDUSTRIES</span>
        </Link>
        <div className="hidden gap-6 text-sm sm:flex" style={{ color: GOLD_SOFT }}>
          <Link href="/services" className="hover:text-white">Services</Link>
          <Link href="/industries" className="hover:text-white">Industries</Link>
          <Link href="/work" className="hover:text-white">Portfolio</Link>
          <Link href="/about" className="hover:text-white">About</Link>
        </div>
        <div className="flex items-center gap-2">
          <Link href="/contact" className="btn-gold-outline hidden items-center gap-2 px-4 py-2 font-medium sm:inline-flex">
            <Mail className="h-4 w-4" />
            <span>Get in touch</span>
          </Link>
          <button aria-label="Open menu" onClick={() => setOpen(true)} className="btn-gold-outline inline-flex items-center gap-2 px-3 py-2 sm:hidden">
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </div>
      {open ? (
        <div className="fixed inset-0 z-40 bg-black/80 backdrop-blur sm:hidden">
          <div className="absolute inset-x-3 top-3 rounded-2xl border bg-black/90 p-4" style={{ borderColor: `${GOLD}55` }}>
            <div className="flex items-center justify-between">
              <div className="inline-flex items-center gap-3">
                <Image src="/brand/moon-icon.png" alt="HWAH moon icon" width={28} height={28} className="rounded-md" />
                <span className="text-base font-semibold" style={{ color: GOLD }}>HWAH INDUSTRIES</span>
              </div>
              <button aria-label="Close menu" onClick={() => setOpen(false)} className="btn-gold-outline inline-flex items-center gap-2 px-3 py-2">
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="mt-3 grid gap-2 text-sm" style={{ color: GOLD_SOFT }}>
              <Link href="/services" onClick={() => setOpen(false)} className="card-star-hover rounded-xl border bg-black/60 px-4 py-3">Services</Link>
              <Link href="/industries" onClick={() => setOpen(false)} className="card-star-hover rounded-xl border bg-black/60 px-4 py-3">Industries</Link>
              <Link href="/work" onClick={() => setOpen(false)} className="card-star-hover rounded-xl border bg-black/60 px-4 py-3">Portfolio</Link>
              <Link href="/about" onClick={() => setOpen(false)} className="card-star-hover rounded-xl border bg-black/60 px-4 py-3">About</Link>
              <Link href="/contact" onClick={() => setOpen(false)} className="btn-gold-outline mt-2 inline-flex items-center justify-center gap-2 px-4 py-3 font-medium">
                <Mail className="h-4 w-4" />
                <span>Get in touch</span>
              </Link>
            </div>
          </div>
        </div>
      ) : null}
    </nav>
  );
}


