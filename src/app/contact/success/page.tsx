import React from "react";
import Link from "next/link";

const GOLD = "#D4AF37";

export default function ContactSuccess() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-20 text-center text-white">
      <h1 className="text-3xl font-bold" style={{ color: GOLD }}>Got it — your note is in orbit</h1>
      <p className="mt-3 text-white/85">We’ll reply within one business day from <a className="underline" href="mailto:hrn@hwah.net" style={{ color: GOLD }}>hrn@hwah.net</a>.</p>
      <Link href="/" className="btn-gold-outline inline-block mt-8 px-5 py-3">Back to home</Link>
    </div>
  );
}


