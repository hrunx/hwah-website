import React from "react";

const GOLD = "#D4AF37";
const GOLD_SOFT = "#E6C766";

export default function Footer() {
  return (
    <footer className="relative z-10 border-t bg-black/60" style={{ borderColor: `${GOLD}33` }}>
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm" style={{ color: GOLD_SOFT }}>© {new Date().getFullYear()} HWAH. All rights reserved.</p>
          <div className="flex flex-col items-center gap-2 text-sm sm:flex-row sm:gap-5">
            <div className="flex items-center gap-5">
              <a href="/legal/privacy" className="hover:opacity-90" style={{ color: GOLD_SOFT }}>Privacy</a>
              <a href="/legal/terms" className="hover:opacity-90" style={{ color: GOLD_SOFT }}>Terms</a>
              <a href="/legal/dpa" className="hover:opacity-90" style={{ color: GOLD_SOFT }}>Data Processing Addendum</a>
            </div>
            <div className="flex items-center gap-4" style={{ color: GOLD_SOFT }}>
              <span>Email: <a href="mailto:hrn@hwah.net" className="underline">hrn@hwah.net</a></span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}


