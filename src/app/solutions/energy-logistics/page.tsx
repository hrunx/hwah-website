import React from "react";

const GOLD = "#D4AF37";

export default function EnergyLogistics() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 text-white">
      <h1 className="text-3xl font-bold" style={{ color: GOLD }}>Energy & Logistics</h1>
      <ul className="mt-4 list-disc space-y-2 pl-6 text-white/85">
        <li>Fuel telemetry & control: tank levels, dispenser events, RFID vehicle/driver auth, anomaly alerts.</li>
        <li>Fleet & site visibility: asset status, geofences, drum RPM (mixers), L/hr & KM/L analytics.</li>
        <li>Procurement & billing: auto-generated POs, usage-based invoicing, VAT-ready docs.</li>
      </ul>
    </div>
  );
}


