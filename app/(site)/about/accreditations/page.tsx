import type { Metadata } from "next";

import { AccreditationsPage } from "@/components/about/accreditations/accreditations-page";

export const metadata: Metadata = {
  title: "Accreditations & Approvals",
  description:
    "SVIET accreditations and approvals page covering NAAC status, regulatory recognitions, approvals, and institutional memberships.",
};

export default function AboutAccreditationsPage() {
  return <AccreditationsPage />;
}