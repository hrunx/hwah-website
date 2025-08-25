import React from "react";
import PageHeader from "@/components/PageHeader";

export default function Privacy() {
  return (
    <div className="text-white">
      <PageHeader title="Privacy Policy" />
      <div className="mx-auto max-w-3xl px-4 py-12">
        <p className="text-white/85">We collect the minimum data required to operate our services—contact details, project files you choose to share, and usage analytics on hwah.net. We do not sell personal data. We process data under legitimate interest or contract performance, and we honor access/erasure requests. Security measures include encryption in transit, access controls, and audit logging. For questions: privacy@hwah.net.</p>
        <p className="mt-4 text-white/80">Sections to include: Data we collect, How we use data, Legal bases, Sharing, Retention, Security, Your rights, International transfers, Contact.</p>
      </div>
    </div>
  );
}


