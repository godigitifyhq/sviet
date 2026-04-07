import type { Metadata } from "next";

import { EventsPage as EventsPageView } from "@/components/events/events-page";

export const metadata: Metadata = {
  title: "Events | SVIET",
  description: "Upcoming events, workshops, and cultural festivals at SVIET.",
};

export default function EventsPage() {
  return <EventsPageView />;
}
