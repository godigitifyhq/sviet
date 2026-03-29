import type { Metadata } from "next";

import { EventsPageReplica } from "@/components/campus/sviet-replica";

export const metadata: Metadata = {
  title: "Events | SVIET",
  description: "Upcoming events, workshops, and cultural festivals at SVIET.",
};

export default function EventsPage() {
  return <EventsPageReplica />;
}
