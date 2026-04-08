import { Suspense } from "react";
import type { Metadata } from "next";

import { PlacementsPageComponent } from "@/components/placements/placements-page";

export const metadata: Metadata = {
  title: "Placements",
  description:
    "SVIET placements overview covering recruiter network, placement statistics, student outcomes, training support, and FAQs.",
};

export default function AboutPlacementsPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-white" />}>
      <PlacementsPageComponent />
    </Suspense>
  );
}