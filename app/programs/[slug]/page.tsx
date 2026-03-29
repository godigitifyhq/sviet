import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ProgramDetailPage } from "@/components/programs/program-page";
import { prisma } from "@/lib/prisma";

export const revalidate = 3600;

type PageProps = {
  params: Promise<{ slug: string }>;
};

function parseStringArray(value: unknown) {
  if (!Array.isArray(value)) {
    return [] as string[];
  }

  return value.filter((item): item is string => typeof item === "string");
}

function parseCurriculum(value: unknown) {
  if (!value || typeof value !== "object" || Array.isArray(value)) {
    return {} as Record<string, string[]>;
  }

  return Object.fromEntries(
    Object.entries(value).map(([key, val]) => [
      key,
      Array.isArray(val) ? val.filter((item): item is string => typeof item === "string") : [],
    ]),
  );
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;

  const program = await prisma.program.findUnique({ where: { slug } });

  if (!program) {
    return {};
  }

  return {
    title: `${program.title} | SVIET`,
    description: program.shortDescription,
    openGraph: {
      title: `${program.title} | SVIET`,
      description: program.shortDescription,
      type: "website",
    },
  };
}

export async function generateStaticParams() {
  const programs = await prisma.program.findMany({
    where: { isActive: true },
    select: { slug: true },
  });

  return programs.map((program) => ({ slug: program.slug }));
}

export default async function ProgramSlugPage({ params }: PageProps) {
  const { slug } = await params;

  const program = await prisma.program.findUnique({
    where: { slug },
    select: {
      slug: true,
      title: true,
      department: true,
      durationMonths: true,
      tuitionCents: true,
      mode: true,
      shortDescription: true,
      highlights: true,
      curriculum: true,
      outcomes: true,
      facilities: true,
      isActive: true,
    },
  });

  if (!program || !program.isActive) {
    notFound();
  }

  return (
    <ProgramDetailPage
      program={{
        slug: program.slug,
        title: program.title,
        department: program.department,
        durationMonths: program.durationMonths,
        tuitionCents: program.tuitionCents,
        mode: program.mode,
        shortDescription: program.shortDescription,
        highlights: parseStringArray(program.highlights),
        curriculum: parseCurriculum(program.curriculum),
        outcomes: parseStringArray(program.outcomes),
        facilities: parseStringArray(program.facilities),
      }}
    />
  );
}
