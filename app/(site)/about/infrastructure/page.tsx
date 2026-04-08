import type { Metadata } from "next";

import { InfrastructurePage } from "@/components/about/infrastructure/infrastructure-page";

export const metadata: Metadata = {
  title: "Infrastructure",
  description:
    "SVIET infrastructure overview including campus facilities, academic spaces, research infrastructure, sports amenities, and sustainability initiatives.",
};

export default function AboutInfrastructurePage() {
  return <InfrastructurePage />;
}