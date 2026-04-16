import type { Metadata } from "next";

import { AwardsPage } from "@/components/about/awards/awards-page";

export const metadata: Metadata = {
  title: "Awards & Recognitions | SVIET",
  description:
    "Explore recognition highlights that reflect SVIET's academic quality, institutional progress, and innovation-led development.",
};

export default function AboutAwardsRecognitionsPage() {
  return <AwardsPage />;
}
