import React from "react";

const GOLD = "#D4AF37";

export default function Iot() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 text-white">
      <h1 className="text-3xl font-bold" style={{ color: GOLD }}>IoT & Telemetry</h1>
      <ul className="mt-4 list-disc space-y-2 pl-6 text-white/85">
        <li>Sensor selection, RS‑485/Modbus/4–20mA, edge devices</li>
        <li>Ingest via MQTT/HTTP, rules & alerts</li>
        <li>Dashboards (ThingsBoard or custom), reports, rollouts</li>
        <li>RFID/UHF authorization flows</li>
      </ul>
    </div>
  );
}


