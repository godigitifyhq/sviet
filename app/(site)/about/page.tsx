import type { Metadata } from "next";

import { AboutOverviewPage } from "@/components/about/about-overview-page";

export const metadata: Metadata = {
  title: "About",
  description: "Overview of SVIET, its mission, academic environment, and institutional focus.",
};

export default function AboutPage() {
  return <AboutOverviewPage />;
}
