import Link from "next/link";
import type { Metadata } from "next";

import { prisma } from "@/lib/prisma";

export const metadata: Metadata = {
  title: "Programs | SVIET",
  description:
    "Explore undergraduate and postgraduate programs at SVIET. Find the right program for your career goals.",
};

function formatDuration(durationMonths: number) {
  const years = durationMonths / 12;
  return `${Number.isInteger(years) ? years : years.toFixed(1)} Years`;
}

function formatFeesPerYear(tuitionCents: number) {
  const annualRupees = tuitionCents / 100;
  const annualLakhs = annualRupees / 100000;
  return `₹${annualLakhs.toFixed(1)} Lakh/year`;
}

function formatMode(mode?: string | null) {
  if (!mode) {
    return "Mode TBA";
  }

  return mode
    .toLowerCase()
    .split("_")
    .map((part) => `${part.charAt(0).toUpperCase()}${part.slice(1)}`)
    .join(" ");
}

export default async function ProgramsPage() {
  const programs = await prisma.program.findMany({
    where: { isActive: true },
    orderBy: [{ isFeatured: "desc" }, { title: "asc" }],
    select: {
      id: true,
      slug: true,
      title: true,
      shortDescription: true,
      department: true,
      durationMonths: true,
      tuitionCents: true,
      mode: true,
      isFeatured: true,
    },
  });

  const featuredPrograms = programs.filter((program) => program.isFeatured);

  return (
    <div className="mx-auto max-w-300 px-4 py-14 md:px-6">
      <header className="rounded-3xl bg-linear-to-r from-[#0f172a] via-[#1e293b] to-[#334155] px-6 py-10 text-white md:px-10">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-orange-300">Academics</p>
        <h1 className="mt-3 text-4xl font-black md:text-5xl">Our Programs</h1>
        <p className="mt-4 max-w-3xl text-sm text-slate-200 md:text-base">
          Explore future-focused undergraduate and postgraduate programs built with industry collaboration,
          practical learning, and strong career outcomes.
        </p>
      </header>

      {featuredPrograms.length > 0 ? (
        <section className="mt-12 space-y-5">
          <h2 className="text-2xl font-extrabold text-slate-900">Featured Programs</h2>
          <div className="grid gap-5 lg:grid-cols-2">
            {featuredPrograms.map((program) => (
              <article
                key={program.id}
                className="rounded-2xl border border-orange-200 bg-linear-to-br from-orange-50 via-white to-white p-6 shadow-sm"
              >
                <div className="flex flex-wrap items-center gap-2">
                  <span className="rounded-full bg-orange-100 px-3 py-1 text-xs font-semibold text-orange-700">
                    {program.department ?? "SVIET Program"}
                  </span>
                  <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">
                    {formatMode(program.mode)}
                  </span>
                </div>

                <h3 className="mt-4 text-2xl font-bold text-slate-900">{program.title}</h3>
                <p className="mt-3 text-sm text-slate-600">{program.shortDescription}</p>

                <div className="mt-5 grid grid-cols-2 gap-3 text-sm">
                  <div className="rounded-lg border border-slate-200 bg-white px-3 py-2">
                    <p className="text-xs text-slate-500">Duration</p>
                    <p className="font-semibold text-slate-900">{formatDuration(program.durationMonths)}</p>
                  </div>
                  <div className="rounded-lg border border-slate-200 bg-white px-3 py-2">
                    <p className="text-xs text-slate-500">Fees</p>
                    <p className="font-semibold text-slate-900">{formatFeesPerYear(program.tuitionCents)}</p>
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap gap-3">
                  <Link
                    href={`/programs/${program.slug}`}
                    className="rounded-lg bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-800"
                  >
                    Explore Program
                  </Link>
                  <Link
                    href={`/admissions?program=${program.slug}`}
                    className="rounded-lg border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-100"
                  >
                    Apply Now
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>
      ) : null}

      <section className="mt-12 space-y-5">
        <h2 className="text-2xl font-extrabold text-slate-900">All Programs</h2>

        {programs.length === 0 ? (
          <div className="rounded-2xl border border-slate-200 bg-white p-6 text-sm text-slate-600">
            No active programs available right now.
          </div>
        ) : (
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {programs.map((program) => (
              <article key={program.id} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">
                    {program.department ?? "SVIET Program"}
                  </span>
                  <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700">
                    {formatMode(program.mode)}
                  </span>
                </div>

                <h3 className="mt-4 text-lg font-bold text-slate-900">{program.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{program.shortDescription}</p>

                <div className="mt-4 grid grid-cols-2 gap-3 text-xs text-slate-700">
                  <div className="rounded-lg bg-slate-50 px-3 py-2">
                    <p className="text-slate-500">Duration</p>
                    <p className="font-semibold">{formatDuration(program.durationMonths)}</p>
                  </div>
                  <div className="rounded-lg bg-slate-50 px-3 py-2">
                    <p className="text-slate-500">Fees</p>
                    <p className="font-semibold">{formatFeesPerYear(program.tuitionCents)}</p>
                  </div>
                </div>

                <div className="mt-5 flex gap-2">
                  <Link
                    href={`/programs/${program.slug}`}
                    className="rounded-lg bg-slate-900 px-3 py-2 text-xs font-semibold text-white transition hover:bg-slate-800"
                  >
                    Explore Program
                  </Link>
                  <Link
                    href={`/admissions?program=${program.slug}`}
                    className="rounded-lg border border-slate-300 px-3 py-2 text-xs font-semibold text-slate-700 transition hover:bg-slate-100"
                  >
                    Apply Now
                  </Link>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
