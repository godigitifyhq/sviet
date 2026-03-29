import { PrismaPg } from "@prisma/adapter-pg";
import { loadEnvConfig } from "@next/env";

import { PrismaClient, type Prisma } from "../generated/prisma/client";

loadEnvConfig(process.cwd());

const databaseUrl = process.env.DATABASE_URL;

if (!databaseUrl) {
  throw new Error("DATABASE_URL is required to run seed.");
}

const adapter = new PrismaPg({ connectionString: databaseUrl });
const prisma = new PrismaClient({ adapter });

type ProgramSeedInput = {
  slug: string;
  title: string;
  shortDescription: string;
  department: string;
  durationMonths: number;
  tuitionCents: number;
  mode: string;
  isActive: boolean;
  isFeatured: boolean;
  fullDescription: string;
  highlights: string[];
  eligibility: string;
  outcomes: string[];
  facilities: string[];
  curriculum: Prisma.InputJsonValue;
  faqs: Prisma.InputJsonValue;
};

const PROGRAMS: ProgramSeedInput[] = [
  {
    slug: "btech-cse",
    title: "B.Tech Computer Science & Engineering",
    shortDescription:
      "Industry-focused CSE program with specializations in AI, ML, and Cloud Computing",
    department: "Engineering",
    durationMonths: 48,
    tuitionCents: 12000000,
    mode: "OFFLINE",
    isActive: true,
    isFeatured: true,
    fullDescription:
      "Our B.Tech CSE program prepares students for careers in software development, AI research, and technology leadership. With state-of-the-art labs and industry partnerships, students gain hands-on experience from day one.",
    highlights: [
      "100% Placement Assistance",
      "Industry Mentorship Program",
      "Live Project Experience",
      "AI & ML Specialization",
      "International Exposure",
    ],
    eligibility:
      "10+2 with Physics, Chemistry, Mathematics. Minimum 60% aggregate. Valid JEE score preferred.",
    outcomes: [
      "Software Engineer",
      "AI/ML Engineer",
      "Cloud Architect",
      "Product Manager",
      "Research Scientist",
    ],
    facilities: ["AI Research Lab", "Cloud Computing Centre", "Innovation Hub", "Digital Library"],
    curriculum: {
      "Year 1": [
        "Engineering Mathematics",
        "Physics",
        "Programming Fundamentals",
        "Digital Logic",
      ],
      "Year 2": [
        "Data Structures",
        "Algorithms",
        "Database Systems",
        "Computer Networks",
      ],
      "Year 3": [
        "AI & Machine Learning",
        "Cloud Computing",
        "Software Engineering",
        "Minor Project",
      ],
      "Year 4": [
        "Major Project",
        "Industry Internship",
        "Electives",
        "Research Thesis",
      ],
    },
    faqs: [
      { q: "What is the intake capacity?", a: "120 seats per batch" },
      { q: "Is hostel available?", a: "Yes, separate hostels for boys and girls" },
    ],
  },
  {
    slug: "mba",
    title: "Master of Business Administration",
    shortDescription:
      "Two-year MBA with specializations in Marketing, Finance, HR, and Operations",
    department: "Management",
    durationMonths: 24,
    tuitionCents: 8000000,
    mode: "OFFLINE",
    isActive: true,
    isFeatured: true,
    fullDescription:
      "SVIET's MBA program blends academic rigour with real-world business exposure. Our industry-integrated curriculum, live case studies, and corporate mentorship prepare graduates for leadership roles.",
    highlights: [
      "45 LPA Highest Package",
      "Fortune 500 Recruiters",
      "International Case Competitions",
      "Dual Specialization Option",
    ],
    eligibility:
      "Any bachelor's degree with minimum 50% aggregate. Valid CAT/MAT/CMAT score preferred.",
    outcomes: [
      "Marketing Manager",
      "Financial Analyst",
      "HR Business Partner",
      "Operations Manager",
      "Entrepreneur",
    ],
    facilities: [
      "Business Incubation Centre",
      "Bloomberg Terminal Access",
      "Conference Hall",
      "Case Study Room",
    ],
    curriculum: {
      "Semester 1": [
        "Management Principles",
        "Financial Accounting",
        "Business Statistics",
        "Organizational Behaviour",
      ],
      "Semester 2": [
        "Marketing Management",
        "Corporate Finance",
        "Business Communication",
        "Operations Management",
      ],
      "Semester 3": [
        "Strategic Management",
        "Specialization Electives",
        "Industry Project",
      ],
      "Semester 4": [
        "Dissertation",
        "Corporate Internship",
        "Leadership Practicum",
      ],
    },
    faqs: [
      {
        q: "What specializations are offered?",
        a: "Marketing, Finance, HR, Operations, and International Business",
      },
    ],
  },
  {
    slug: "bca",
    title: "Bachelor of Computer Applications",
    shortDescription:
      "Three-year BCA program focused on software development and modern web technologies",
    department: "Computer Applications",
    durationMonths: 36,
    tuitionCents: 6000000,
    mode: "OFFLINE",
    isActive: true,
    isFeatured: false,
    fullDescription:
      "BCA at SVIET provides a strong foundation in computer science and application development. Students learn modern web technologies, mobile app development, and database management.",
    highlights: [
      "Industry-Ready Curriculum",
      "Live Project Training",
      "Placement Support",
      "Coding Bootcamps",
    ],
    eligibility: "10+2 in any stream with Mathematics. Minimum 55% aggregate.",
    outcomes: [
      "Web Developer",
      "Mobile App Developer",
      "Database Administrator",
      "System Analyst",
    ],
    facilities: ["Programming Lab", "Web Development Studio", "Open Source Lab"],
    curriculum: {
      "Year 1": [
        "Programming in C",
        "Web Technologies",
        "Mathematics",
        "Communication Skills",
      ],
      "Year 2": [
        "Java Programming",
        "Database Management",
        "Data Structures",
        "Operating Systems",
      ],
      "Year 3": [
        "Advanced Web Development",
        "Mobile Applications",
        "Project Work",
        "Internship",
      ],
    },
    faqs: [
      {
        q: "Can I pursue MCA after BCA?",
        a: "Yes, BCA graduates are eligible for direct MCA admission",
      },
    ],
  },
];

async function main() {
  for (const program of PROGRAMS) {
    const { slug, ...data } = program;

    await prisma.program.upsert({
      where: { slug },
      update: data,
      create: {
        slug,
        ...data,
      },
    });
  }

  console.log(`Seed complete: upserted ${PROGRAMS.length} programs.`);
}

main()
  .catch((error) => {
    console.error("Seed failed:", error);
    process.exitCode = 1;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
