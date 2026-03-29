import type { Metadata } from "next";

import { HomePage } from "@/components/home/homepage";

export const metadata: Metadata = {
  title: "SVIET | Swami Vivekanand Institute of Engineering & Technology",
  description:
    "Top engineering and management college in Punjab. 100% placement assistance, industry partnerships, and world-class infrastructure.",
  openGraph: {
    title: "SVIET | Premier Engineering College in Punjab",
    description: "Admissions open for B.Tech, MBA, BCA programs. Apply now.",
    type: "website",
  },
};

export default function Page() {
  return <HomePage />;
}
