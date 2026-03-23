import Link from "next/link";

import { createLeadAction } from "@/app/actions/admissions";
import { registerForEventAction } from "@/app/actions/events";
import { SubmitButton } from "@/components/forms/submit-button";
import { Reveal } from "@/components/motion/reveal";
import { PLATFORM_CONFIG } from "@/lib/config/platform";
import { getAdmissionsFunnelCounts, listActivePrograms } from "@/lib/dal/admissions";
import { listActiveAnnouncements, listPublishedBlogPosts } from "@/lib/dal/cms";
import { listUpcomingEvents } from "@/lib/dal/events";

export default async function Home() {
  const [programs, upcomingEvents, announcements, recentBlogs, funnel] =
    await Promise.all([
      listActivePrograms(PLATFORM_CONFIG.pagination.homePrograms),
      listUpcomingEvents(PLATFORM_CONFIG.pagination.homeEvents),
      listActiveAnnouncements(3),
      listPublishedBlogPosts(PLATFORM_CONFIG.pagination.homeBlogs),
      getAdmissionsFunnelCounts(),
    ]);

  const applicantRate =
    funnel.leads > 0 ? ((funnel.applicants / funnel.leads) * 100).toFixed(1) : "0.0";
  const enrollRate =
    funnel.applicants > 0
      ? ((funnel.enrolled / funnel.applicants) * 100).toFixed(1)
      : "0.0";

  return (
    <div className="space-y-10 py-8">
      <Reveal className="card p-8" delay={0.05}>
        <p className="mb-2 text-sm uppercase tracking-[0.2em] text-[var(--ink-700)]">
          College Growth Platform
        </p>
        <h1 className="text-4xl leading-tight md:text-5xl">
          Unify Admissions, Events, and Content in one operational system.
        </h1>
        <p className="mt-4 max-w-3xl text-[var(--ink-700)]">
          Built with Server Components and Server Actions for lower latency and fewer
          moving parts.
        </p>
      </Reveal>

      <section className="grid gap-4 md:grid-cols-3">
        <Reveal className="card p-6" delay={0.1}>
          <p className="text-sm text-[var(--ink-700)]">Leads</p>
          <p className="text-3xl font-semibold">{funnel.leads}</p>
        </Reveal>
        <Reveal className="card p-6" delay={0.15}>
          <p className="text-sm text-[var(--ink-700)]">Lead to Applicant</p>
          <p className="text-3xl font-semibold">{applicantRate}%</p>
        </Reveal>
        <Reveal className="card p-6" delay={0.2}>
          <p className="text-sm text-[var(--ink-700)]">Applicant to Enrolled</p>
          <p className="text-3xl font-semibold">{enrollRate}%</p>
        </Reveal>
      </section>

      <section className="grid gap-6 lg:grid-cols-2">
        <Reveal className="card p-6" delay={0.25}>
          <h2 className="text-2xl">Start Admissions Lead</h2>
          <form action={createLeadAction} className="mt-4 grid gap-3">
            <input name="firstName" required placeholder="First name" className="rounded-lg border border-[var(--line)] bg-white px-3 py-2" />
            <input name="lastName" required placeholder="Last name" className="rounded-lg border border-[var(--line)] bg-white px-3 py-2" />
            <input name="email" type="email" required placeholder="Email" className="rounded-lg border border-[var(--line)] bg-white px-3 py-2" />
            <input name="phone" placeholder="Phone" className="rounded-lg border border-[var(--line)] bg-white px-3 py-2" />
            <select name="intendedProgramId" className="rounded-lg border border-[var(--line)] bg-white px-3 py-2">
              <option value="">Select program</option>
              {programs.map((program) => (
                <option key={program.id} value={program.id}>
                  {program.title}
                </option>
              ))}
            </select>
            <input type="hidden" name="source" value="WEBSITE" />
            <textarea name="notes" placeholder="Notes" className="min-h-24 rounded-lg border border-[var(--line)] bg-white px-3 py-2" />
            <SubmitButton label="Create Lead" pendingLabel="Creating lead..." className="w-fit" />
          </form>
        </Reveal>

        <Reveal className="card p-6" delay={0.3}>
          <h2 className="text-2xl">Register for Upcoming Event</h2>
          <form action={registerForEventAction} className="mt-4 grid gap-3">
            <select name="eventId" required className="rounded-lg border border-[var(--line)] bg-white px-3 py-2">
              <option value="">Select event</option>
              {upcomingEvents.map((event) => (
                <option key={event.id} value={event.id}>
                  {event.title}
                </option>
              ))}
            </select>
            <input name="fullName" required placeholder="Full name" className="rounded-lg border border-[var(--line)] bg-white px-3 py-2" />
            <input name="email" type="email" required placeholder="Email" className="rounded-lg border border-[var(--line)] bg-white px-3 py-2" />
            <input name="phone" placeholder="Phone" className="rounded-lg border border-[var(--line)] bg-white px-3 py-2" />
            <SubmitButton label="Register" pendingLabel="Registering..." className="w-fit" />
          </form>
        </Reveal>
      </section>

      <section className="grid gap-6 lg:grid-cols-2">
        <Reveal className="card p-6" delay={0.35}>
          <div className="flex items-center justify-between">
            <h2 className="text-2xl">Announcements</h2>
            <Link href="/admin" className="text-sm font-semibold underline-offset-4 hover:underline">
              Manage
            </Link>
          </div>
          <ul className="mt-4 space-y-4">
            {announcements.map((announcement) => (
              <li key={announcement.id}>
                <p className="font-semibold">{announcement.title}</p>
                <p className="text-sm text-[var(--ink-700)]">{announcement.body}</p>
              </li>
            ))}
            {announcements.length === 0 ? (
              <li className="text-sm text-[var(--ink-700)]">No active announcements.</li>
            ) : null}
          </ul>
        </Reveal>

        <Reveal className="card p-6" delay={0.4}>
          <div className="flex items-center justify-between">
            <h2 className="text-2xl">Latest Blogs</h2>
            <Link href="/blog" className="text-sm font-semibold underline-offset-4 hover:underline">
              View all
            </Link>
          </div>
          <ul className="mt-4 space-y-4">
            {recentBlogs.map((post) => (
              <li key={post.id}>
                <p className="font-semibold">{post.title}</p>
                <p className="text-sm text-[var(--ink-700)]">{post.excerpt}</p>
              </li>
            ))}
            {recentBlogs.length === 0 ? (
              <li className="text-sm text-[var(--ink-700)]">No published posts yet.</li>
            ) : null}
          </ul>
        </Reveal>
      </section>
    </div>
  );
}
