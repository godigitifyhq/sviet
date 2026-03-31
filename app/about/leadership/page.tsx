import type { Metadata } from "next";

import { LeadershipPage } from "@/components/about/leadership-page";

export const metadata: Metadata = {
  title: "Leadership",
  description: "Leadership vision, mission, management desk messages, and institutional direction at SVIET.",
};

export default function AboutLeadershipPage() {
  return <LeadershipPage />;
}