import type { Metadata } from "next";

import AdmissionsPageClient from "@/components/admissions/admissions-page";

export const metadata: Metadata = {
  title: "Admissions 2025 | SVIET",
  description:
    "Apply for admission to B.Tech, MBA, BCA programs at SVIET. Check eligibility, scholarship options, and admission procedure.",
};

export default function AdmissionsPage() {
  return <AdmissionsPageClient />;
}
