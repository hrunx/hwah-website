"use client";

import React from "react";
import { ArrowRight } from "lucide-react";

const GOLD = "#D4AF37";
const GOLD_SOFT = "#E6C766";

export default function ContactPage() {
  return (
    <div className="relative min-h-screen bg-black text-white">
      <section className="relative border-t" style={{ borderColor: `${GOLD}33` }}>
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl" style={{ color: GOLD }}>Let’s make your operations observable and automatic</h1>
            <p className="mt-2 text-white/80">Email <a href="mailto:hello@hwah.net" className="underline" style={{ color: GOLD_SOFT }}>hello@hwah.net</a> or use the form below. Response within one business day.</p>
          </div>
          <div className="mx-auto mt-8 max-w-2xl">
            <form name="contact" method="POST" data-netlify="true" className="grid gap-4 rounded-2xl border bg-black/50 p-6 shadow-sm backdrop-blur" style={{ borderColor: `${GOLD}55` }}>
              <input type="hidden" name="form-name" value="contact" />
              <div className="grid gap-2">
                <label className="text-sm font-medium" style={{ color: GOLD_SOFT }}>Name</label>
                <input name="name" required className="rounded-xl border bg-black/60 px-4 py-3 text-white outline-none focus:ring-2" style={{ borderColor: `${GOLD}44` }} />
              </div>
              <div className="grid gap-2">
                <label className="text-sm font-medium" style={{ color: GOLD_SOFT }}>Company</label>
                <input name="company" className="rounded-xl border bg-black/60 px-4 py-3 text-white outline-none focus:ring-2" style={{ borderColor: `${GOLD}44` }} />
              </div>
              <div className="grid gap-2">
                <label className="text-sm font-medium" style={{ color: GOLD_SOFT }}>Work email</label>
                <input type="email" name="email" required className="rounded-xl border px-4 py-3 text-white outline-none focus:ring-2" style={{ borderColor: `${GOLD}44`, backgroundColor: "#0f0f0f" }} />
              </div>
              <div className="grid gap-2">
                <label className="text-sm font-medium" style={{ color: GOLD_SOFT }}>Phone (optional)</label>
                <input name="phone" className="rounded-xl border px-4 py-3 text-white outline-none focus:ring-2" style={{ borderColor: `${GOLD}44`, backgroundColor: "#0f0f0f" }} />
              </div>
              <div className="grid gap-2">
                <label className="text-sm font-medium" style={{ color: GOLD_SOFT }}>What do you want to improve?</label>
                <textarea name="message" rows={5} className="rounded-xl border px-4 py-3 text-white outline-none focus:ring-2" style={{ borderColor: `${GOLD}44`, backgroundColor: "#0f0f0f" }} />
              </div>
              <div className="grid gap-2">
                <label className="text-sm font-medium" style={{ color: GOLD_SOFT }}>Budget range</label>
                <input name="budget" className="rounded-xl border px-4 py-3 text-white outline-none focus:ring-2" style={{ borderColor: `${GOLD}44`, backgroundColor: "#0f0f0f" }} />
              </div>
              <div className="grid gap-2">
                <label className="text-sm font-medium" style={{ color: GOLD_SOFT }}>When do you need this?</label>
                <input name="timeline" className="rounded-xl border px-4 py-3 text-white outline-none focus:ring-2" style={{ borderColor: `${GOLD}44`, backgroundColor: "#0f0f0f" }} />
              </div>
              <button className="inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 font-medium text-black shadow transition hover:shadow-md" style={{ backgroundColor: GOLD }}>
                <ArrowRight className="h-4 w-4" /> Send
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}


