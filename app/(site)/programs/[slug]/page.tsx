import type { Metadata } from "next";
import { notFound } from "next/navigation";

import programCatalog from "@/data/data/data";
import { ProgramDetailPage } from "@/components/programs/program-page";
import { prisma } from "@/lib/prisma";
import type { ProgramFacilityItem } from "@/components/programs/facilities";
import type { ProgramHighlightItem } from "@/components/programs/highlights";
import type { ProgramOutcomeItem } from "@/components/programs/outcomes";

export const revalidate = 3600;
export const dynamicParams = true;

type PageProps = {
  params: Promise<{ slug: string }>;
};

type ProgramCatalogEntry = {
  category?: string;
  course_name?: string;
  event_type?: string;
  program_name?: string;
  program_description?: string;
  program_highlights?: unknown;
  program_outcomes?: unknown;
  labs?: unknown;
  eligibility_criteria?: { eligibility?: unknown } | null;
  header?: {
    title?: unknown;
    background_image?: unknown;
  } | null;
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
      Array.isArray(val)
        ? val.filter((item): item is string => typeof item === "string")
        : [],
    ]),
  );
}

function parseHeroImage(value: unknown) {
  if (!Array.isArray(value)) {
    return null;
  }

  const heroImageEntry = value.find(
    (item) =>
      typeof item === "object" &&
      item !== null &&
      "q" in item &&
      "a" in item &&
      (item as { q?: unknown }).q === "heroImage" &&
      typeof (item as { a?: unknown }).a === "string",
  ) as { a: string } | undefined;

  return heroImageEntry?.a ?? null;
}

function parseFaqEntries(value: unknown) {
  if (!Array.isArray(value)) {
    return [] as Array<{ q: string; a: string }>;
  }

  return value
    .map((item) => {
      if (typeof item !== "object" || item === null) {
        return null;
      }

      const q = "q" in item && typeof item.q === "string" ? item.q : null;
      const a = "a" in item && typeof item.a === "string" ? item.a : null;

      if (!q || !a) {
        return null;
      }

      return { q, a };
    })
    .filter((item): item is { q: string; a: string } => Boolean(item));
}

function normalizeProgramText(value: string) {
  return value
    .toLowerCase()
    .replace(/\([^)]*\)/g, " ")
    .replace(/&/g, " and ")
    .replace(/[^a-z0-9]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function resolveCatalogSlug(item: ProgramCatalogEntry) {
  const category = normalizeProgramText(
    item.course_name ?? item.event_type ?? "",
  );
  const categoryCompact = category.replace(/\s+/g, "");
  const title = normalizeProgramText(
    item.program_name ?? item.header?.title?.toString() ?? "",
  );

  if (categoryCompact.includes("btech")) {
    if (title.includes("artificial intelligence")) return "btech-ai";
    if (title.includes("computer science")) return "btech-cse";
    if (title.includes("electronics") && title.includes("communication"))
      return "btech-ece";
    if (title.includes("electrical")) return "btech-ee";
    if (title.includes("mechanical")) return "btech-me";
    if (title.includes("civil")) return "btech-civil";
  }

  if (categoryCompact.includes("mtech")) {
    if (title.includes("computer science")) return "mtech-cse";
    if (title.includes("civil")) return "mtech-civil";
    if (title.includes("electrical")) return "mtech-ee";
  }

  if (categoryCompact.includes("diploma")) {
    if (title.includes("computer science")) return "diploma-cse";
    if (title.includes("electrical")) return "diploma-ee";
    if (title.includes("mechanical")) return "diploma-me";
    if (title.includes("civil")) return "diploma-civil";
  }

  if (categoryCompact.includes("business")) {
    if (title.includes("master of business administration")) return "mba";
    if (title.includes("business administration")) return "bba";
    if (title.includes("commerce")) return "bcom";
  }

  if (categoryCompact.includes("computerapp")) {
    if (title.includes("master of computer applications")) return "mca";
    if (title.includes("post graduate diploma in computer applications"))
      return "pgdca";
    if (title.includes("information technology")) return "bsc-it";
    if (title.includes("computer applications")) return "bca";
  }

  if (categoryCompact.includes("education")) {
    if (title.includes("master of education")) return "med";
    if (title.includes("bachelor of education")) return "bed";
    if (title.includes("b a program") || title === "ba program") return "ba";
    if (title.includes("bachelor of arts") || title.includes("arts"))
      return "education-arts";
  }

  if (categoryCompact.includes("hm")) {
    if (title.includes("mhmct")) return "mhmct";
    if (title.includes("catering")) return "catering-hospitality";
    if (title.includes("hospitality")) return "bvoc-hospitality";
    if (title.includes("nutrition")) return "bsc-hm";
  }

  if (categoryCompact.includes("law")) {
    if (title.includes("b a ll b") || title.includes("ll b")) return "ba-llb";
    if (title.includes("bachelor of law")) return "llb";
  }

  if (categoryCompact.includes("paramedical")) {
    if (title.includes("diploma in medical laboratory technology"))
      return "dmlt";
    if (title.includes("medical lab sciences")) return "paramedical-lab";
    if (title.includes("medical laboratory science")) return "mls";
    if (title.includes("radiology")) return "radiology";
    if (title.includes("optometry")) return "optometry";
    if (title.includes("physiotherapy")) return "physiotherapy";
    if (title.includes("cardiac")) return "paramedical-cardiac";
    if (title.includes("anesthesia") || title.includes("anasthesia"))
      return title.includes("technolog")
        ? "paramedical-anesthesia"
        : "paramedical-anasthesia";
    if (title.includes("operation theatre")) return "ot";
  }

  if (categoryCompact.includes("pharmacy")) {
    if (title.includes("master of pharmacy")) return "mpharm";
    if (title.includes("diploma in pharmacy")) return "dpharm";
    if (title.includes("pharm d")) return "pharmd";
    if (title.includes("bachelor of pharmacy")) return "bpharm";
  }

  if (categoryCompact.includes("science")) {
    if (title.includes("chemistry")) return "chemistry";
    if (title.includes("mathematics")) return "maths";
    if (title.includes("non medical")) return "non-medical";
    if (title.includes("physics")) return "physics";
  }

  if (title.includes("chartered accountancy")) {
    return "ca";
  }

  return null;
}

function normalizeHighlightItems(value: unknown): ProgramHighlightItem[] {
  if (!Array.isArray(value)) {
    return [];
  }

  return value
    .map((item) => {
      if (typeof item === "string") {
        const [rawTitle, ...rest] = item.split(":");
        return {
          title: rawTitle.trim(),
          description: rest.join(":").trim() || undefined,
        };
      }

      if (typeof item !== "object" || item === null) {
        return null;
      }

      if ("title" in item && typeof item.title === "string") {
        const description =
          "description" in item && typeof item.description === "string"
            ? item.description
            : undefined;
        return { title: item.title, description };
      }

      if ("title" in item && "desc" in item && typeof item.title === "string") {
        const description =
          typeof item.desc === "string" ? item.desc : undefined;
        return { title: item.title, description };
      }

      return null;
    })
    .filter((item): item is ProgramHighlightItem => Boolean(item?.title));
}

function normalizeOutcomeItems(value: unknown): ProgramOutcomeItem[] {
  if (!Array.isArray(value)) {
    return [];
  }

  return value
    .map((item, index) => {
      if (typeof item === "string") {
        return { title: item, description: undefined };
      }

      if (typeof item !== "object" || item === null) {
        return null;
      }

      const title =
        "title" in item && typeof item.title === "string"
          ? item.title
          : `Outcome ${index + 1}`;
      const description =
        "desc" in item && typeof item.desc === "string"
          ? item.desc
          : "description" in item && typeof item.description === "string"
            ? item.description
            : undefined;
      const image =
        "image" in item &&
        typeof item.image === "string" &&
        item.image.startsWith("/")
          ? item.image
          : null;

      return { title, description, image };
    })
    .filter((item): item is ProgramOutcomeItem => Boolean(item?.title));
}

function normalizeFacilityItems(value: unknown): ProgramFacilityItem[] {
  if (!Array.isArray(value)) {
    return [];
  }

  return value
    .map((item, index) => {
      if (typeof item === "string") {
        return { title: item, description: undefined, image: null };
      }

      if (typeof item !== "object" || item === null) {
        return null;
      }

      const title =
        "title" in item && typeof item.title === "string"
          ? item.title
          : `Facility ${index + 1}`;
      const description =
        "description" in item && typeof item.description === "string"
          ? item.description
          : undefined;
      const image =
        "image" in item &&
        typeof item.image === "string" &&
        item.image.startsWith("/")
          ? item.image
          : null;

      return { title, description, image };
    })
    .filter((item): item is ProgramFacilityItem => Boolean(item?.title));
}

function normalizeFaqItems(value: unknown) {
  return parseFaqEntries(value);
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;

  const program = await prisma.program.findUnique({ where: { slug } });

  if (!program) {
    return {};
  }

  return {
    title: `${program.title} | SVGOI`,
    description: program.shortDescription,
    openGraph: {
      title: `${program.title} | SVGOI`,
      description: program.shortDescription,
      type: "website",
    },
  };
}

export async function generateStaticParams() {
  try {
    const programs = await prisma.program.findMany({
      where: { isActive: true },
      select: { slug: true },
    });

    return programs.map((program) => ({ slug: program.slug }));
  } catch (error) {
    // If database is unavailable (e.g., during build), return empty array
    // Pages will be generated on-demand with dynamicParams = true
    console.warn("Failed to generate static params for programs:", error);
    return [];
  }
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
      fullDescription: true,
      eligibility: true,
      highlights: true,
      curriculum: true,
      outcomes: true,
      facilities: true,
      faqs: true,
      isActive: true,
    },
  });

  if (!program || !program.isActive) {
    notFound();
  }

  const catalogProgram = programCatalog
    .map((item) => ({
      ...(item as ProgramCatalogEntry),
      slug: resolveCatalogSlug(item as ProgramCatalogEntry),
    }))
    .find((item) => item.slug === slug);

  const enrichedProgram = {
    slug: program.slug,
    title: program.title,
    department: program.department ?? catalogProgram?.category ?? null,
    durationMonths: program.durationMonths,
    tuitionCents: program.tuitionCents,
    mode: program.mode,
    shortDescription: program.shortDescription,
    fullDescription:
      program.fullDescription ?? catalogProgram?.program_description ?? null,
    eligibility:
      program.eligibility ??
      (catalogProgram?.eligibility_criteria &&
      typeof catalogProgram.eligibility_criteria === "object"
        ? typeof catalogProgram.eligibility_criteria.eligibility === "string"
          ? catalogProgram.eligibility_criteria.eligibility
          : null
        : null),
    highlights: normalizeHighlightItems(
      catalogProgram?.program_highlights ?? program.highlights,
    ),
    curriculum: parseCurriculum(program.curriculum),
    outcomes: normalizeOutcomeItems(
      catalogProgram?.program_outcomes ?? program.outcomes,
    ),
    facilities: normalizeFacilityItems(
      catalogProgram?.labs ?? program.facilities,
    ),
    faqs: normalizeFaqItems(program.faqs),
    heroImage: parseHeroImage(program.faqs),
  };

  return <ProgramDetailPage program={enrichedProgram} />;
}
