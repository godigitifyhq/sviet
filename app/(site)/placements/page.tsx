import { Suspense } from "react";
import type { Metadata } from "next";

import { PlacementsPageComponent } from "@/components/placements/placements-page";

export const metadata: Metadata = {
  title: "Placements | SVIET",
  description:
    "SVIET placement record — 45 LPA highest package, 500+ recruiting companies including Infosys, TCS, Wipro, Amazon.",
};

export default function PlacementsPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-white" />}>
      <PlacementsPageComponent />
    </Suspense>
  );
}
