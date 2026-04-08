import type { Metadata } from "next";

import { ResearchPageComponent } from "@/components/research/research-page";

export const metadata: Metadata = {
  title: "Research | SVIET",
  description:
    "Research excellence at SVIET — funded projects, publications, and innovation across engineering and management domains.",
};

export default function Page() {
  return <ResearchPageComponent />;
}
