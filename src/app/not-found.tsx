import React from "react";
import Link from "next/link";

const GOLD = "#D4AF37";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-20 text-center text-white">
      <h1 className="text-3xl font-bold" style={{ color: GOLD }}>Lost in space?</h1>
      <p className="mt-3 text-white/85">The page you’re after drifted past the moon. Head back Home or ping <a href="mailto:hrn@hwah.net" className="underline" style={{ color: GOLD }}>hrn@hwah.net</a>.</p>
      <Link href="/" className="btn-gold-outline inline-block mt-8 px-5 py-3">Back to home</Link>
    </div>
  );
}



