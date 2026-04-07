import type { Metadata } from "next";

import { AwardsPage } from "@/components/about/awards/awards-page";

export const metadata: Metadata = {
  title: "Awards, Rankings & Ratings | SVIET",
  description:
    "Explore awards, rankings, and recognitions earned by SVIET across national and international platforms.",
};

export default function AboutAwardsRecognitionsPage() {
  return <AwardsPage />;
}
