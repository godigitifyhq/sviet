import { registerForEventAction } from "@/app/actions/events";
import { SubmitButton } from "@/components/forms/submit-button";
import { listUpcomingEvents } from "@/lib/dal/events";

export default async function EventsPage() {
  const events = await listUpcomingEvents();

  return (
    <div className="space-y-6 py-8">
      <h1 className="text-4xl">Events</h1>
      <div className="grid gap-4 lg:grid-cols-2">
        {events.map((event) => (
          <article className="card p-5" key={event.id}>
            <h2 className="text-2xl">{event.title}</h2>
            <p className="mt-1 text-[var(--ink-700)]">{event.summary}</p>
            <p className="mt-2 text-sm text-[var(--ink-700)]">Venue: {event.venue}</p>
            <p className="text-sm text-[var(--ink-700)]">
              Starts: {event.startsAt.toLocaleString()}
            </p>
            <form action={registerForEventAction} className="mt-4 grid gap-2">
              <input type="hidden" name="eventId" value={event.id} />
              <input name="fullName" required placeholder="Full name" className="rounded-lg border border-[var(--line)] bg-white px-3 py-2" />
              <input name="email" type="email" required placeholder="Email" className="rounded-lg border border-[var(--line)] bg-white px-3 py-2" />
              <input name="phone" placeholder="Phone" className="rounded-lg border border-[var(--line)] bg-white px-3 py-2" />
              <SubmitButton label="Reserve seat" pendingLabel="Reserving..." className="w-fit" />
            </form>
          </article>
        ))}
        {events.length === 0 ? <p>No upcoming events.</p> : null}
      </div>
    </div>
  );
}
