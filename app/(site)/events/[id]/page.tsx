import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

import events from "@/data/data/event";

type PageProps = {
  params: Promise<{ id: string }>;
};

export async function generateStaticParams() {
  return events.map((event) => ({ id: String(event.id) }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const event = events.find((e) => String(e.id) === id);
  if (!event) return {};
  return {
    title: `${event.name} | SVGOI Events`,
    description: event.overview?.slice(0, 160),
  };
}

function shouldBypassOptimization(src: string) {
  return src.includes(".ufs.sh/") || src.includes("utfs.io");
}

export default async function EventDetailPage({ params }: PageProps) {
  const { id } = await params;
  const event = events.find((e) => String(e.id) === id);

  if (!event) notFound();

  const speakers = Array.isArray(event.speakers) ? event.speakers : [];

  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative w-full overflow-hidden bg-[#0f172a]">
        <div className="relative h-72 w-full md:h-[420px] lg:h-[520px]">
          {event.headerImage ? (
            <Image
              src={event.headerImage}
              alt={event.name}
              fill
              priority
              sizes="100vw"
              unoptimized={shouldBypassOptimization(event.headerImage)}
              className="object-cover object-center opacity-70"
            />
          ) : null}
          <div className="absolute inset-0 bg-linear-to-t from-[#0f172a] via-[#0f172a]/40 to-transparent" />
        </div>

        <div className="absolute inset-0 flex flex-col justify-end px-4 pb-10 md:px-8 md:pb-14">
          <div className="mx-auto w-full max-w-5xl">
            <Link
              href="/events"
              className="mb-4 inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-[0.18em] text-white/60 hover:text-white"
            >
              ← All Events
            </Link>
            <h1 className="text-3xl font-black leading-tight text-white md:text-5xl lg:text-6xl">
              {event.name}
            </h1>
            <div className="mt-3 flex flex-wrap gap-4 text-sm text-white/70">
              {event.date ? (
                <span className="flex items-center gap-1">
                  <span className="text-[#f7941d]">📅</span> {event.date}
                </span>
              ) : null}
              {event.venue ? (
                <span className="flex items-center gap-1">
                  <span className="text-[#f7941d]">📍</span> {event.venue}
                </span>
              ) : null}
            </div>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="px-4 py-12 md:px-8 md:py-16">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-10 lg:grid-cols-[1fr_320px]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#f7941d]">
                Event Overview
              </p>
              <p className="mt-4 text-base leading-relaxed text-[#374151] md:text-lg">
                {event.overview}
              </p>

              {event.photogallery ? (
                <a
                  href={event.photogallery}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-2 rounded-none bg-[#f7941d] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#d97706]"
                >
                  View Photo Gallery →
                </a>
              ) : null}
            </div>

            {/* Sidebar info card */}
            <aside className="rounded-2xl border border-[#e5e7eb] bg-[#f8faff] p-6">
              <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-[#6b7280]">
                Event Details
              </h3>
              <dl className="mt-4 space-y-4">
                {event.date ? (
                  <div>
                    <dt className="text-xs font-semibold text-[#9ca3af]">Date</dt>
                    <dd className="mt-1 text-sm font-medium text-[#111827]">{event.date}</dd>
                  </div>
                ) : null}
                {event.venue ? (
                  <div>
                    <dt className="text-xs font-semibold text-[#9ca3af]">Venue</dt>
                    <dd className="mt-1 text-sm font-medium text-[#111827]">{event.venue}</dd>
                  </div>
                ) : null}
                {speakers.length > 0 ? (
                  <div>
                    <dt className="text-xs font-semibold text-[#9ca3af]">Speakers</dt>
                    <dd className="mt-1 text-sm font-medium text-[#111827]">{speakers.length} Speaker{speakers.length !== 1 ? "s" : ""}</dd>
                  </div>
                ) : null}
              </dl>
            </aside>
          </div>
        </div>
      </section>

      {/* Speakers */}
      {speakers.length > 0 ? (
        <section className="border-t border-[#e5e7eb] bg-[#f5f7fb] px-4 py-12 md:px-8 md:py-16">
          <div className="mx-auto max-w-5xl">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#f7941d]">
              Guest Speakers
            </p>
            <h2 className="mt-2 text-2xl font-bold text-[#111827] md:text-3xl">
              Meet the Speakers
            </h2>

            <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {speakers.map((speaker) => (
                <article
                  key={speaker.id}
                  className="rounded-2xl border border-[#dce7ff] bg-white p-5 shadow-sm"
                >
                  {speaker.image ? (
                    <div className="relative mb-4 h-20 w-20 overflow-hidden rounded-full border-2 border-[#f7941d]/20 bg-[#eef4ff]">
                      <Image
                        src={speaker.image}
                        alt={speaker.name}
                        fill
                        sizes="80px"
                        className="object-cover object-top"
                        unoptimized
                      />
                    </div>
                  ) : (
                    <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-[#eef4ff] text-2xl font-bold text-[#1d4ed8]">
                      {speaker.name.charAt(0)}
                    </div>
                  )}
                  <h3 className="text-base font-bold text-[#111827]">{speaker.name}</h3>
                  {speaker.designation ? (
                    <p className="mt-0.5 text-xs font-semibold text-[#f7941d]">
                      {speaker.designation}
                    </p>
                  ) : null}
                  {speaker.company ? (
                    <p className="mt-1 text-xs text-[#6b7280]">{speaker.company}</p>
                  ) : null}
                  {speaker.bio ? (
                    <p className="mt-3 text-xs leading-relaxed text-[#4b5563]">
                      {speaker.bio}
                    </p>
                  ) : null}
                </article>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {/* CTA */}
      <section className="bg-[#111827] px-4 py-12 text-center md:px-8">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-2xl font-bold text-white md:text-3xl">
            Experience SVGOI&apos;s Vibrant Campus Life
          </h2>
          <p className="mt-3 text-sm text-white/70">
            Events like this are just one part of what makes SVGOI a hub for learning, innovation, and growth.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <Link
              href="/events"
              className="rounded-none border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              ← Back to Events
            </Link>
            <Link
              href="/admissions"
              className="rounded-none bg-[#f7941d] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#d97706]"
            >
              Apply Now
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
