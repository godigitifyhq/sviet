import type { Metadata } from "next";

import { AboutOverviewPage } from "@/components/about/about-overview-page";
import type { InstitutionCoursesData } from "@/components/about/institutions-courses-section";
import { prisma } from "@/lib/prisma";
import { COURSE_CATALOG, toSlug } from "@/lib/course-catalog";

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

/**
 * Manual overrides applied on top of database-backed programs.
 * This allows the About page to show add/remove/rename requests
 * without modifying the canonical program records in the DB.
 */
const INSTITUTION_OVERRIDES: Record<
  string,
  {
    add?: string[];
    remove?: string[];
    rename?: Record<string, string>;
  }
> = {
  sviet: {
    add: [
      "Master of Business Administration",
      "Diploma in Civil Engineering",
      "Diploma in Mechanical Engineering",
      "Master of Computer Applications",
    ],
  },
  svfitbm: {
    add: ["Bachelor of Arts"],
    remove: [
      "B.Sc Information Technology",
      "M.Sc Chemistry",
      "M.Sc Math",
      "M.Sc Physics",
      "Master of Business Administration",
      "Master of Commerce",
      "Master of Computer Applications",
      "Bachelor of Arts (Computer Science)",
      "Post Graduate Diploma in Computer Application",
    ],
  },
  svcmt: {
    add: [
      "Bachelor of Business Administration",
      "Bachelor of Computer Applications",
      "M.Sc (Chemistry)",
      "B.A. (Computer science)",
      "B.Sc Information Technology",
    ],
    remove: [
      "B.Sc Cardiac Care Technology",
      "Bachelor in Hospital Administration",
      "M.Sc (medical Microbiology)",
      "M.Sc (Radiology and Imaging Technology)",
    ],
    rename: {
      "B.Sc (Cardiac Care Technology)": "B.Sc Cardiac Care Technology",
    },
  },
  svcp: {
    add: ["Diploma in Pharmacy"],
  },
};

const INSTITUTION_DEFINITIONS: InstitutionDefinition[] = [
  {
    id: "sviet",
    name: "Swami Vivekanand Institute of Engineering & Technology",
    description: "Engineering, technology, and post-graduate management programs",
    departmentSlugs: ["engineering", "management-sviet", "computer-applications-sviet"],
  },
  {
    id: "svcp",
    name: "Swami Vivekanand College of Pharmacy",
    description: "Pharmacy and pharmaceutical sciences",
    departmentSlugs: ["pharmacy"],
  },
  {
    id: "svip",
    name: "Swami Vivekanand Institute of Pharmacy",
    description: "Pharmacy programs and diploma courses",
    departmentSlugs: ["svip-programs"],
  },
  {
    id: "svfitbm",
    name: "Swami Vivekanand Faculty of Information Technology & Business Management",
    description: "Business, IT, science, commerce, and arts pathways",
    departmentSlugs: [
      "management",
      "computer-applications",
      "science",
      "commerce",
      "svfitbm-arts",
    ],
  },
  {
    id: "svftm",
    name: "Swami Vivekanand Faculty of Technology & Management",
    description: "Hotel management, allied health, and interdisciplinary programs",
    departmentSlugs: ["hotel-management", "svftm-programs", "svftm-science"],
  },
  {
    id: "svcmt",
    name: "Swami Vivekanand College of Management & Technology",
    description: "Medical sciences, allied health, management, and technology programs",
    departmentSlugs: ["medical-sciences-allied-health", "svcmt-programs"],
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
