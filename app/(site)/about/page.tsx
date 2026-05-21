import type { Metadata } from "next";

import { AboutOverviewPage } from "@/components/about/about-overview-page";
import type { InstitutionCoursesData } from "@/components/about/institutions-courses-section";
import { prisma } from "@/lib/prisma";

type ProgramLevel =
  | "UG"
  | "PG"
  | "DIPLOMA"
  | "VOCATIONAL"
  | "PROFESSIONAL"
  | "CERTIFICATE";

type InstitutionDefinition = {
  id: string;
  name: string;
  description: string;
  departmentSlugs: string[];
};

const LEVEL_LABELS: Record<ProgramLevel, string> = {
  UG: "Undergraduate",
  PG: "Postgraduate",
  DIPLOMA: "Diploma",
  VOCATIONAL: "Vocational",
  PROFESSIONAL: "Professional",
  CERTIFICATE: "Certificate",
};

const LEVEL_ORDER: ProgramLevel[] = [
  "UG",
  "PG",
  "PROFESSIONAL",
  "DIPLOMA",
  "VOCATIONAL",
  "CERTIFICATE",
];

const INSTITUTION_DEFINITIONS: InstitutionDefinition[] = [
  {
    id: "sviet",
    name: "Swami Vivekanand Institute of Engineering & Technology",
    description: "Engineering and technology programs",
    departmentSlugs: ["engineering"],
  },
  {
    id: "svcp",
    name: "Swami Vivekanand College of Pharmacy",
    description: "Pharmacy and pharmaceutical sciences",
    departmentSlugs: ["pharmacy"],
  },
  {
    id: "svfitbm",
    name: "Swami Vivekanand Faculty of Information Technology & Business Management",
    description: "Business, IT, science, and commerce pathways",
    departmentSlugs: [
      "management",
      "computer-applications",
      "science",
      "commerce",
    ],
  },
  {
    id: "svftm",
    name: "Swami Vivekanand Faculty of Technology & Management",
    description: "Hotel management and interdisciplinary programs",
    departmentSlugs: ["hotel-management"],
  },
  {
    id: "svcmt",
    name: "Swami Vivekanand College of Management & Technology",
    description: "Medical sciences and allied health programs",
    departmentSlugs: ["medical-sciences-allied-health"],
  },
  {
    id: "svce",
    name: "Swami Vivekanand College of Education",
    description: "Education and arts programs",
    departmentSlugs: ["arts-education"],
  },
  {
    id: "svpc",
    name: "Swami Vivekanand Polytechnic College",
    description: "Polytechnic diploma tracks",
    departmentSlugs: ["diploma"],
  },
  {
    id: "svitc",
    name: "SVIET-ITI",
    description: "Industrial vocational trades",
    departmentSlugs: ["vocational-iti"],
  },
  {
    id: "svcl",
    name: "Swami Vivekanand College of Law",
    description: "Law and legal studies",
    departmentSlugs: ["law"],
  },
];

async function getInstitutionCourses(): Promise<InstitutionCoursesData[]> {
  try {
    const programs = await prisma.program.findMany({
      where: { isActive: true, department: { isActive: true } },
      orderBy: [{ title: "asc" }],
      select: {
        id: true,
        slug: true,
        title: true,
        durationMonths: true,
        level: true,
        department: {
          select: { slug: true },
        },
      },
    });

    return INSTITUTION_DEFINITIONS.map((institution) => {
      const institutionCourses = programs.filter((program) => {
        const departmentSlug = program.department?.slug;
        return Boolean(
          departmentSlug &&
          institution.departmentSlugs.includes(departmentSlug),
        );
      });

      const coursesByCategory = LEVEL_ORDER.map((level) => {
        const levelCourses = institutionCourses.filter(
          (course) => course.level === level,
        );

        return {
          category: LEVEL_LABELS[level],
          courses: levelCourses,
        };
      }).filter((entry) => entry.courses.length > 0);

      return {
        id: institution.id,
        name: institution.name,
        description: institution.description,
        coursesByCategory,
      };
    });
  } catch (error) {
    console.warn("Unable to load institution courses for About page", error);

    return INSTITUTION_DEFINITIONS.map((institution) => ({
      id: institution.id,
      name: institution.name,
      description: institution.description,
      coursesByCategory: [],
    }));
  }
}

export const metadata: Metadata = {
  title: "About",
  description:
    "Overview of SVGOI, its mission, academic environment, and institutional focus.",
};

export default async function AboutPage() {
  const institutions = await getInstitutionCourses();

  return <AboutOverviewPage institutions={institutions} />;
}
