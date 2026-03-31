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

type SourceProgramInput = {
  category: string;
  course: string;
  slug: string;
  title: string;
  imagePath: string;
};

const PROGRAMS: ProgramSeedInput[] = [
  {
    slug: "btech-cse",
    title: "B.Tech Computer Science & Engineering",
    shortDescription:
      "Future-ready engineering program with strong coding foundations, AI exposure, and placement-focused training.",
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
      "Industry-integrated MBA focused on leadership, strategy, and real-world business decision making.",
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
      "Application-oriented computing degree with practical training in software, web, and emerging technologies.",
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
  {
    slug: "btech-ai",
    title: "B.Tech Artificial Intelligence & Machine Learning",
    shortDescription:
      "Specialized B.Tech program in AI and ML with hands-on labs, projects, and industry-aligned curriculum.",
    department: "Engineering",
    durationMonths: 48,
    tuitionCents: 12500000,
    mode: "OFFLINE",
    isActive: true,
    isFeatured: true,
    fullDescription:
      "The B.Tech AI & ML program builds deep technical expertise in data science, machine learning, and intelligent systems. Students gain practical exposure through labs, projects, and mentorship from experienced faculty.",
    highlights: [
      "AI and ML Focused Curriculum",
      "Real-World Project Experience",
      "Placement Preparation and Mentorship",
      "Modern Computing Labs",
      "Industry Interaction Sessions",
    ],
    eligibility:
      "10+2 with Physics, Chemistry, Mathematics. Minimum 60% aggregate. Valid JEE score preferred.",
    outcomes: [
      "Machine Learning Engineer",
      "Data Analyst",
      "AI Developer",
      "NLP Engineer",
      "Research Associate",
    ],
    facilities: ["AI Lab", "Data Science Lab", "Innovation Centre", "Digital Library"],
    curriculum: {
      "Year 1": ["Engineering Mathematics", "Programming Fundamentals", "Digital Electronics", "Communication Skills"],
      "Year 2": ["Data Structures", "Probability & Statistics", "Database Systems", "Computer Networks"],
      "Year 3": ["Machine Learning", "Deep Learning", "Data Mining", "Minor Project"],
      "Year 4": ["Advanced AI Electives", "Major Project", "Industry Internship", "Professional Ethics"],
    },
    faqs: [
      { q: "Is coding experience required before admission?", a: "No, foundational coding is taught from the first semester." },
    ],
  },
  {
    slug: "bba",
    title: "Bachelor of Business Administration",
    shortDescription:
      "Career-focused management program covering finance, marketing, operations, and entrepreneurial skills.",
    department: "Management",
    durationMonths: 36,
    tuitionCents: 6500000,
    mode: "OFFLINE",
    isActive: true,
    isFeatured: false,
    fullDescription:
      "BBA at SVIET develops strong business fundamentals with practical case-based learning, communication training, and exposure to contemporary management practices.",
    highlights: [
      "Industry-Relevant Business Curriculum",
      "Case Study and Presentation Training",
      "Personality and Communication Development",
      "Internship Support",
    ],
    eligibility: "10+2 in any stream with minimum 50% aggregate.",
    outcomes: [
      "Business Development Executive",
      "Marketing Associate",
      "Operations Executive",
      "HR Executive",
      "Entrepreneur",
    ],
    facilities: ["Management Labs", "Seminar Hall", "Digital Library", "Incubation Support"],
    curriculum: {
      "Year 1": ["Principles of Management", "Business Communication", "Microeconomics", "Accounting Basics"],
      "Year 2": ["Marketing Management", "Financial Management", "Human Resource Management", "Business Statistics"],
      "Year 3": ["Strategic Management", "Entrepreneurship", "Project Work", "Industry Internship"],
    },
    faqs: [
      { q: "Can BBA students pursue MBA later?", a: "Yes, BBA provides an excellent foundation for MBA and related postgraduate programs." },
    ],
  },
  {
    slug: "bpharm",
    title: "Bachelor of Pharmacy",
    shortDescription:
      "Comprehensive pharmacy program with strong laboratory practice, clinical orientation, and industry readiness.",
    department: "Pharmacy",
    durationMonths: 48,
    tuitionCents: 9000000,
    mode: "OFFLINE",
    isActive: true,
    isFeatured: false,
    fullDescription:
      "The B.Pharm program at SVIET combines pharmaceutical sciences, practical lab training, and patient-focused learning to prepare students for healthcare and pharma careers.",
    highlights: [
      "Modern Pharmaceutical Laboratories",
      "Experienced Faculty and Mentorship",
      "Hospital and Industry Exposure",
      "Regulatory and Clinical Orientation",
    ],
    eligibility: "10+2 with Physics, Chemistry, and Biology/Mathematics. Minimum 50% aggregate.",
    outcomes: [
      "Pharmacist",
      "Quality Control Analyst",
      "Medical Representative",
      "Clinical Research Associate",
      "Drug Safety Associate",
    ],
    facilities: ["Pharmaceutics Lab", "Pharmacology Lab", "Medicinal Chemistry Lab", "Digital Library"],
    curriculum: {
      "Year 1": ["Human Anatomy and Physiology", "Pharmaceutics", "Pharmaceutical Analysis", "Communication Skills"],
      "Year 2": ["Pathophysiology", "Pharmaceutical Organic Chemistry", "Pharmacology", "Biochemistry"],
      "Year 3": ["Medicinal Chemistry", "Pharmaceutical Microbiology", "Pharmacognosy", "Industrial Pharmacy"],
      "Year 4": ["Clinical Pharmacy", "Pharmacy Practice", "Project Work", "Hospital Training"],
    },
    faqs: [
      { q: "Is practical training included in B.Pharm?", a: "Yes, the program includes extensive lab work and practical exposure." },
    ],
  },
];

const SOURCE_PROGRAMS: SourceProgramInput[] = [
  { category: "BTech", course: "civil", slug: "btech-civil", title: "B.Tech Civil Engineering", imagePath: "/assets/programs/BTech/civil/civil.png" },
  { category: "BTech", course: "cse", slug: "btech-cse", title: "B.Tech Computer Science & Engineering", imagePath: "/assets/programs/BTech/cse/CSEheader.jpg" },
  { category: "BTech", course: "ece", slug: "btech-ece", title: "B.Tech Electronics & Communication Engineering", imagePath: "/assets/programs/BTech/ece/Header.jpg" },
  { category: "BTech", course: "ee", slug: "btech-ee", title: "B.Tech Electrical Engineering", imagePath: "/assets/programs/BTech/ee/EEheader.jpg" },
  { category: "BTech", course: "me", slug: "btech-me", title: "B.Tech Mechanical Engineering", imagePath: "/assets/programs/BTech/me/MEheader.jpg" },
  { category: "Business", course: "BBA", slug: "bba", title: "Bachelor of Business Administration", imagePath: "/assets/programs/Business/BBA/bbaHeader.jpg" },
  { category: "Business", course: "commerce", slug: "bcom", title: "Bachelor of Commerce", imagePath: "/assets/programs/Business/commerce/commerce.jpg" },
  { category: "Business", course: "MBA", slug: "mba", title: "Master of Business Administration", imagePath: "/assets/programs/Business/MBA/mba.jpg" },
  { category: "CA", course: "CA", slug: "ca", title: "Chartered Accountancy", imagePath: "/assets/programs/CA/data.avif" },
  { category: "ComputerApp", course: "BCA", slug: "bca", title: "Bachelor of Computer Applications", imagePath: "/assets/programs/ComputerApp/BCA/data.jpg" },
  { category: "ComputerApp", course: "BscIt", slug: "bsc-it", title: "B.Sc Information Technology", imagePath: "/assets/programs/ComputerApp/BscIt/cyber.avif" },
  { category: "ComputerApp", course: "MCA", slug: "mca", title: "Master of Computer Applications", imagePath: "/assets/programs/ComputerApp/MCA/cloud.avif" },
  { category: "ComputerApp", course: "pgdca", slug: "pgdca", title: "Post Graduate Diploma in Computer Applications", imagePath: "/assets/programs/ComputerApp/pgdca/consultant.avif" },
  { category: "diploma", course: "civil", slug: "diploma-civil", title: "Diploma in Civil Engineering", imagePath: "/assets/programs/diploma/civil/civilheader.jpg" },
  { category: "diploma", course: "cse", slug: "diploma-cse", title: "Diploma in Computer Science Engineering", imagePath: "/assets/programs/diploma/cse/cse.jpg" },
  { category: "diploma", course: "ee", slug: "diploma-ee", title: "Diploma in Electrical Engineering", imagePath: "/assets/programs/diploma/ee/ee.jpg" },
  { category: "diploma", course: "me", slug: "diploma-me", title: "Diploma in Mechanical Engineering", imagePath: "/assets/programs/diploma/me/me.jpg" },
  { category: "Education", course: "Arts", slug: "education-arts", title: "Bachelor of Arts", imagePath: "/assets/programs/Education/Arts/curriculum.avif" },
  { category: "Education", course: "BA", slug: "ba", title: "B.A. Program", imagePath: "/assets/programs/Education/BA/comms.avif" },
  { category: "Education", course: "Bachelor", slug: "bed", title: "Bachelor of Education", imagePath: "/assets/programs/Education/Bachelor/expertise.avif" },
  { category: "Education", course: "Masters", slug: "med", title: "Master of Education", imagePath: "/assets/programs/Education/Masters/header.avif" },
  { category: "HM", course: "Bsc", slug: "bsc-hm", title: "B.Sc in Hospitality & Nutrition", imagePath: "/assets/programs/HM/Bsc/header.jpg" },
  { category: "HM", course: "BVoc", slug: "bvoc-hospitality", title: "B.Voc in Hospitality", imagePath: "/assets/programs/HM/BVoc/Bvoc.jpg" },
  { category: "HM", course: "catering", slug: "catering-hospitality", title: "Catering & Hospitality Management", imagePath: "/assets/programs/HM/catering/catering.jpg" },
  { category: "HM", course: "mhmct", slug: "mhmct", title: "MHMCT", imagePath: "/assets/programs/HM/mhmct/Mhmct.jpg" },
  { category: "Law", course: "Bachelors", slug: "ba-llb", title: "B.A. LL.B", imagePath: "/assets/programs/Law/Bachelors/header.avif" },
  { category: "Law", course: "LLB", slug: "llb", title: "Bachelor of Law (LLB)", imagePath: "/assets/programs/Law/LLB/header.avif" },
  { category: "MTech", course: "civil", slug: "mtech-civil", title: "M.Tech Civil Engineering", imagePath: "/assets/programs/MTech/civil/header.avif" },
  { category: "MTech", course: "cse", slug: "mtech-cse", title: "M.Tech Computer Science Engineering", imagePath: "/assets/programs/MTech/cse/Header.jpg" },
  { category: "MTech", course: "ee", slug: "mtech-ee", title: "M.Tech Electrical Engineering", imagePath: "/assets/programs/MTech/ee/Header.jpg" },
  { category: "paramedical", course: "Anasthesia", slug: "paramedical-anasthesia", title: "Anasthesia Technology", imagePath: "/assets/programs/paramedical/Anasthesia/header.avif" },
  { category: "paramedical", course: "Anesthesia", slug: "paramedical-anesthesia", title: "Anesthesia Technology", imagePath: "/assets/programs/paramedical/Anesthesia/anestehsia.jpg" },
  { category: "paramedical", course: "Cardiac", slug: "paramedical-cardiac", title: "Cardiac Care Technology", imagePath: "/assets/programs/paramedical/Cardiac/header.avif" },
  { category: "paramedical", course: "DMLT", slug: "dmlt", title: "Diploma in Medical Laboratory Technology", imagePath: "/assets/programs/paramedical/DMLT/header.avif" },
  { category: "paramedical", course: "Lab", slug: "paramedical-lab", title: "Medical Lab Sciences", imagePath: "/assets/programs/paramedical/Lab/header.avif" },
  { category: "paramedical", course: "MLS", slug: "mls", title: "Medical Laboratory Science", imagePath: "/assets/programs/paramedical/MLS/mls.jpg" },
  { category: "paramedical", course: "Optometry", slug: "optometry", title: "Optometry", imagePath: "/assets/programs/paramedical/Optometry/header.avif" },
  { category: "paramedical", course: "OT", slug: "ot", title: "Operation Theatre Technology", imagePath: "/assets/programs/paramedical/OT/ot.jpg" },
  { category: "paramedical", course: "Physiotherapy", slug: "physiotherapy", title: "Physiotherapy", imagePath: "/assets/programs/paramedical/Physiotherapy/header.avif" },
  { category: "paramedical", course: "Radiology", slug: "radiology", title: "Radiology & Imaging Technology", imagePath: "/assets/programs/paramedical/Radiology/radiology.jpg" },
  { category: "pharmacy", course: "diploma", slug: "dpharm", title: "Diploma in Pharmacy", imagePath: "/assets/programs/pharmacy/diploma/Diploma.jpg" },
  { category: "pharmacy", course: "Mpharma", slug: "mpharm", title: "Master of Pharmacy", imagePath: "/assets/programs/pharmacy/Mpharma/Mpharma.jpg" },
  { category: "pharmacy", course: "pharm", slug: "bpharm", title: "Bachelor of Pharmacy", imagePath: "/assets/programs/pharmacy/pharm/Bpharma.jpg" },
  { category: "pharmacy", course: "pharmD", slug: "pharmd", title: "Pharm.D", imagePath: "/assets/programs/pharmacy/pharmD/pharmd.jpg" },
  { category: "Science", course: "Chemistry", slug: "chemistry", title: "Chemistry", imagePath: "/assets/programs/Science/Chemistry/header.avif" },
  { category: "Science", course: "Maths", slug: "maths", title: "Mathematics", imagePath: "/assets/programs/Science/Maths/header.avif" },
  { category: "Science", course: "Non-medical", slug: "non-medical", title: "Non-Medical Sciences", imagePath: "/assets/programs/Science/Non-medical/header.avif" },
  { category: "Science", course: "Physics", slug: "physics", title: "Physics", imagePath: "/assets/programs/Science/Physics/header.avif" },
];

function inferDurationMonths(title: string, category: string) {
  const normalizedTitle = title.toLowerCase();
  const normalizedCategory = category.toLowerCase();

  if (normalizedTitle.includes("pharm.d")) {
    return 72;
  }

  if (normalizedTitle.startsWith("post graduate") || normalizedTitle.includes("pgdca")) {
    return 12;
  }

  if (normalizedTitle.includes("master") || normalizedTitle.startsWith("mba") || normalizedTitle.startsWith("m.tech") || normalizedTitle.startsWith("mca") || normalizedTitle.startsWith("mhmct") || normalizedTitle.startsWith("m.pharm")) {
    return 24;
  }

  if (normalizedCategory === "diploma" || normalizedTitle.startsWith("diploma")) {
    return 36;
  }

  if (normalizedTitle.startsWith("b.tech") || normalizedTitle.startsWith("b.pharm") || normalizedTitle.includes("ll.b")) {
    return 48;
  }

  return 36;
}

function inferTuitionCents(durationMonths: number) {
  if (durationMonths >= 72) {
    return 11000000;
  }

  if (durationMonths >= 48) {
    return 9000000;
  }

  if (durationMonths >= 36) {
    return 6500000;
  }

  if (durationMonths >= 24) {
    return 7500000;
  }

  return 4500000;
}

function normalizeDepartment(category: string) {
  const map: Record<string, string> = {
    btech: "Engineering",
    mtech: "Engineering",
    business: "Management",
    ca: "Commerce",
    computerapp: "Computer Applications",
    diploma: "Diploma",
    education: "Education",
    hm: "Hotel Management",
    law: "Law",
    paramedical: "Paramedical",
    pharmacy: "Pharmacy",
    science: "Science",
  };

  return map[category.toLowerCase()] ?? category;
}

function normalizeSourceProgram(input: SourceProgramInput): ProgramSeedInput {
  const durationMonths = inferDurationMonths(input.title, input.category);

  return {
    slug: input.slug,
    title: input.title,
    shortDescription: `${input.title} program at SVIET with practical learning and career support.`,
    department: normalizeDepartment(input.category),
    durationMonths,
    tuitionCents: inferTuitionCents(durationMonths),
    mode: "OFFLINE",
    isActive: true,
    isFeatured: false,
    fullDescription: `${input.title} is offered under the ${normalizeDepartment(input.category)} stream at SVIET. Please connect with admissions for detailed curriculum and fee breakup.`,
    highlights: [
      "Industry-aligned academic delivery",
      "Hands-on learning and lab exposure",
      "Placement and career guidance support",
    ],
    eligibility: "Eligibility varies by course. Contact admissions for detailed criteria.",
    outcomes: [
      "Domain specialist roles",
      "Higher education pathways",
      "Industry and practical career readiness",
    ],
    facilities: [
      "Modern labs and infrastructure",
      "Experienced faculty guidance",
      "Career support ecosystem",
    ],
    curriculum: {
      overview: [
        "Foundation modules",
        "Core domain subjects",
        "Practical training",
        "Project-based learning",
      ],
    },
    faqs: [
      { q: "Where can I view course details?", a: "Please contact admissions for latest curriculum and intake information." },
      { q: "heroImage", a: input.imagePath },
    ],
  };
}

function withImageFaq(program: ProgramSeedInput) {
  const sourceMatch = SOURCE_PROGRAMS.find((sourceProgram) => sourceProgram.slug === program.slug);

  if (!sourceMatch) {
    return program;
  }

  const currentFaqs = Array.isArray(program.faqs) ? [...program.faqs] : [];
  const hasHeroImageEntry = currentFaqs.some(
    (item) =>
      typeof item === "object" &&
      item !== null &&
      "q" in item &&
      "a" in item &&
      (item as { q?: unknown }).q === "heroImage",
  );

  if (!hasHeroImageEntry) {
    currentFaqs.push({ q: "heroImage", a: sourceMatch.imagePath });
  }

  return {
    ...program,
    faqs: currentFaqs,
  };
}

const SOURCE_PROGRAM_SEEDS = SOURCE_PROGRAMS.map(normalizeSourceProgram);
const PROGRAM_MAP = new Map<string, ProgramSeedInput>();

for (const sourceProgram of SOURCE_PROGRAM_SEEDS) {
  PROGRAM_MAP.set(sourceProgram.slug, sourceProgram);
}

for (const program of PROGRAMS) {
  PROGRAM_MAP.set(program.slug, withImageFaq(program));
}

const ALL_PROGRAMS = [...PROGRAM_MAP.values()];

async function main() {
  for (const program of ALL_PROGRAMS) {
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

  console.log(`Seed complete: upserted ${ALL_PROGRAMS.length} programs.`);
}

main()
  .catch((error) => {
    console.error("Seed failed:", error);
    process.exitCode = 1;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
