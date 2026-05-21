import { PrismaPg } from "@prisma/adapter-pg";
import { loadEnvConfig } from "@next/env";
import { randomBytes, scryptSync } from "node:crypto";

import courseCatalog from "../data/courses.json";
import { PrismaClient } from "../generated/prisma/client";
import { DbNull } from "../generated/prisma/internal/prismaNamespace";
import type { InputJsonValue } from "../generated/prisma/internal/prismaNamespace";
import type { CourseLevel } from "../generated/prisma/enums";
import { toSlug } from "../lib/course-catalog";

loadEnvConfig(process.cwd());

const databaseUrl = process.env.DIRECT_URL;

if (!databaseUrl) {
  throw new Error("DIRECT_URL is required to run seed.");
}

const adapter = new PrismaPg({ connectionString: databaseUrl });
const prisma = new PrismaClient({ adapter });

const CRM_SEED_EMAIL = (
  process.env.CRM_SEED_USER_EMAIL ?? "crm.admin@sviet.edu"
)
  .trim()
  .toLowerCase();
const CRM_SEED_PASSWORD = process.env.CRM_SEED_USER_PASSWORD ?? "ChangeMe123!";
const CRM_SEED_FIRST_NAME =
  (process.env.CRM_SEED_USER_FIRST_NAME ?? "CRM").trim() || "CRM";
const CRM_SEED_LAST_NAME =
  (process.env.CRM_SEED_USER_LAST_NAME ?? "Admin").trim() || "Admin";
const CRM_SEED_ROLE = parseCrmSeedRole(process.env.CRM_SEED_USER_ROLE);

function parseCrmSeedRole(
  input: string | undefined,
): "COUNSELOR" | "ADMIN" | "SUPER_ADMIN" {
  const normalized = input?.trim().toUpperCase();

  if (normalized === "COUNSELOR" || normalized === "SUPER_ADMIN") {
    return normalized;
  }

  return "ADMIN";
}

function makePasswordHash(password: string): string {
  const salt = randomBytes(16);
  const hash = scryptSync(password, salt, 64);
  return `scrypt$${salt.toString("hex")}$${hash.toString("hex")}`;
}

// ─── Event seed data ─────────────────────────────────────────────────────────

type EventSpeakerSeedInput = {
  name: string;
  photo?: string;
  bio?: string;
  company?: string;
  designation?: string;
  linkedin?: string;
  twitter?: string;
  displayOrder: number;
};

type EventSeedInput = {
  slug: string;
  title: string;
  description: string;
  image: string;
  venue: string;
  images: string[];
  startDate: Date;
  endDate?: Date;
  category: string;
  isFeatured: boolean;
  speakers: EventSpeakerSeedInput[];
};

const EVENTS: EventSeedInput[] = [
  // ── First 5 are FEATURED ────────────────────────────────────────────────────
  {
    slug: "bharattech-xperience-3-0",
    title: "BharatTech Xperience 3.0",
    description:
      "BharatTech Xperience 3.0 is a high-energy technology experience built around collaboration, workshops, and practical building. It spotlights students, creators, and new ideas across the campus tech community.",
    image:
      "https://faggo00g17.ufs.sh/f/nu74sAC4PEsY9xZiMOLQEscoVG7ryk0KAYaUJpWN4xSbuZeL",
    venue: "SVIET Campus",
    images: [
      "https://faggo00g17.ufs.sh/f/nu74sAC4PEsYU8D9rhwKjfi8uhsKxnXHeGdyogSFONZtzVcD",
      "https://faggo00g17.ufs.sh/f/nu74sAC4PEsYmB0UctPHDsU9RwYGrqvX5B1hVAISkWueEa6M",
      "https://faggo00g17.ufs.sh/f/nu74sAC4PEsYDpuh5nsi5PNEuIRfFChjSVrYp6deqMUavx7c",
      "https://faggo00g17.ufs.sh/f/nu74sAC4PEsYCuYfICtJBiYlgsTDkf9pRwjru5CG4ILEHW83",
      "https://faggo00g17.ufs.sh/f/nu74sAC4PEsYH7Sz0EJeDSMPgAiCuspvaQ56t0BVWRlcLTwz",
      "https://faggo00g17.ufs.sh/f/nu74sAC4PEsYvouJlH6zNM7hJpLFY6XCtjfnIGb4W5cBSZER",
      "https://faggo00g17.ufs.sh/f/nu74sAC4PEsYufBtCQVHcU0MSN1JvoltFR2C3Dp6k8TqwyAX",
    ],
    startDate: new Date("2026-03-04T09:00:00.000Z"),
    endDate: new Date("2026-04-04T18:00:00.000Z"),
    category: "tech",
    isFeatured: true,
    speakers: [],
  },
  {
    slug: "dev-fest",
    title: "Dev Fest",
    description:
      "Dev Fest brings developers and curious builders together for learning, sharing, and community-driven exploration. The event focuses on practical sessions, collaboration, and a strong maker mindset.",
    image:
      "https://faggo00g17.ufs.sh/f/nu74sAC4PEsYrxKyFzqoMNr6b1wlSu5GiFCkHdzj0LePTqVt",
    venue: "SVIET Campus",
    images: [
      "https://faggo00g17.ufs.sh/f/nu74sAC4PEsYrxKyFzqoMNr6b1wlSu5GiFCkHdzj0LePTqVt",
      "https://faggo00g17.ufs.sh/f/nu74sAC4PEsYNdoGV9XbQmCYde4BtEfUM8WbDvRPVA7HGyxZ",
      "https://faggo00g17.ufs.sh/f/nu74sAC4PEsYzI60MAYTPIJ264RrtnxVQhFgN9aZHkwbfOyo",
      "https://faggo00g17.ufs.sh/f/nu74sAC4PEsYMSaONzl4xe5F6EkQ8YycI0SR2Up7JwWuTHMB",
      "https://faggo00g17.ufs.sh/f/nu74sAC4PEsYgzoyxh9BFeNJ2ZMVAWUapCPRyrO6X7dH9wuT",
    ],
    startDate: new Date("2025-11-08T09:00:00.000Z"),
    category: "tech",
    isFeatured: true,
    speakers: [],
  },
  {
    slug: "global-futures-summit-3-0",
    title: "Global Futures Summit 3.0",
    description:
      "Global Futures Summit 3.0 is an industry and career-focused summit designed to connect students with professionals, trends, and future-ready skills. It highlights conversations around growth, hiring, and the evolving workplace.",
    image:
      "https://faggo00g17.ufs.sh/f/nu74sAC4PEsYRgBz2rxN0PKhtXz9MUrsZk7RHEdAmSYVnOBC",
    venue: "SVIET Campus",
    images: [
      "https://faggo00g17.ufs.sh/f/nu74sAC4PEsYryfoZrqoMNr6b1wlSu5GiFCkHdzj0LePTqVt",
      "https://faggo00g17.ufs.sh/f/nu74sAC4PEsYxukMqWWhO0zqfeid894GjHvnrBMcZtNlmhLX",
      "https://faggo00g17.ufs.sh/f/nu74sAC4PEsYdpiXnYoYExaLcHRhujgineWf06PN1JrSAbQC",
      "https://faggo00g17.ufs.sh/f/nu74sAC4PEsY9ERlYJLQEscoVG7ryk0KAYaUJpWN4xSbuZeL",
      "https://faggo00g17.ufs.sh/f/nu74sAC4PEsYz8yB07TPIJ264RrtnxVQhFgN9aZHkwbfOyo0",
    ],
    startDate: new Date("2026-11-04T09:00:00.000Z"),
    category: "summit",
    isFeatured: true,
    speakers: [],
  },
  {
    slug: "google-ideate-3-0",
    title: "Google Ideate 3.0",
    description:
      "Google Ideate 3.0 is centered on ideas, prototyping, and collaborative problem solving. It creates a space for students to turn concepts into working demonstrations and meaningful discussion.",
    image:
      "https://faggo00g17.ufs.sh/f/nu74sAC4PEsYS5Ss5pMjkuGA1bHqB8WwVO5vUPF9fe0xo4zg",
    venue: "SVIET Campus",
    images: [
      "https://faggo00g17.ufs.sh/f/nu74sAC4PEsY5eZ1YoFkLnYW2symx7BolS8caE4UvAIG5DdT",
      "https://faggo00g17.ufs.sh/f/nu74sAC4PEsY4XnXukQ6tWRmroBId1upCJLxNa8g3YPDz7qQ",
      "https://faggo00g17.ufs.sh/f/nu74sAC4PEsYCPGrmbTtJBiYlgsTDkf9pRwjru5CG4ILEHW8",
      "https://faggo00g17.ufs.sh/f/nu74sAC4PEsYi2XeFq10SWfZz1b6Kjy5olJ249gEaMFUxCVR",
      "https://faggo00g17.ufs.sh/f/nu74sAC4PEsYdJJdb30oYExaLcHRhujgineWf06PN1JrSAbQ",
    ],
    startDate: new Date("2026-10-04T09:00:00.000Z"),
    category: "tech",
    isFeatured: true,
    speakers: [],
  },
  {
    slug: "icmsrf",
    title: "ICMSRF",
    description:
      "ICMSRF is a research and academic forum highlighting student work, scholarly exchange, and technical ideas. It supports knowledge sharing through presentations, discussion, and innovation.",
    image:
      "https://faggo00g17.ufs.sh/f/nu74sAC4PEsYTz9q4Ty7HsbdWzFU5fMpwvogX8NKPGVDQehT",
    venue: "SVIET Campus",
    images: [
      "https://faggo00g17.ufs.sh/f/nu74sAC4PEsY56kj9zFkLnYW2symx7BolS8caE4UvAIG5DdT",
      "https://faggo00g17.ufs.sh/f/nu74sAC4PEsYtGrgCam1oaK0jhUNXR3BJLnxv45GdeFDpH7u",
      "https://faggo00g17.ufs.sh/f/nu74sAC4PEsYsmCwODgqsH4lP02UW8OnVAe5EiIXwpZDLhvJ",
      "https://faggo00g17.ufs.sh/f/nu74sAC4PEsYHxf3Z6JeDSMPgAiCuspvaQ56t0BVWRlcLTwz",
      "https://faggo00g17.ufs.sh/f/nu74sAC4PEsYtKPYGrm1oaK0jhUNXR3BJLnxv45GdeFDpH7u",
      "https://faggo00g17.ufs.sh/f/nu74sAC4PEsYJ5OyB6ngANXwUZ3mETaFYjzIBWiGHQfh0K8u",
    ],
    startDate: new Date("2026-02-21T09:00:00.000Z"),
    category: "research",
    isFeatured: true,
    speakers: [],
  },
  // ── Remaining events (not featured) ────────────────────────────────────────
  {
    slug: "inkspire",
    title: "Inkspire",
    description:
      "Inkspire is a creative event focused on expression, visual storytelling, and student talent. It gives space for art-driven ideas, campus creativity, and inspired participation.",
    image:
      "https://faggo00g17.ufs.sh/f/nu74sAC4PEsYIYRWxO4QpoVeB1qd7z0Zrcu3UfjhOn9SxEbG",
    venue: "SVIET Campus",
    images: [
      "https://faggo00g17.ufs.sh/f/nu74sAC4PEsYMY2BV1l4xe5F6EkQ8YycI0SR2Up7JwWuTHMB",
      "https://faggo00g17.ufs.sh/f/nu74sAC4PEsYQZdMkMBDxqtdGnRcXmoL4a28i5KgWrVA9pwP",
      "https://faggo00g17.ufs.sh/f/nu74sAC4PEsYl8iO5LUWepS18mVjyY7fEN40w2LbKqhCxdRn",
      "https://faggo00g17.ufs.sh/f/nu74sAC4PEsYtunhXpm1oaK0jhUNXR3BJLnxv45GdeFDpH7u",
      "https://faggo00g17.ufs.sh/f/nu74sAC4PEsYuXMrQmVHcU0MSN1JvoltFR2C3Dp6k8TqwyAX",
      "https://faggo00g17.ufs.sh/f/nu74sAC4PEsYWv695jPu6vbj5KWTePcNtGLE4sUZad32OAgm",
    ],
    startDate: new Date("2026-04-26T09:00:00.000Z"),
    endDate: new Date("2026-04-27T18:00:00.000Z"),
    category: "cultural",
    isFeatured: false,
    speakers: [],
  },
  {
    slug: "lohri-2026",
    title: "Lohri 2026",
    description:
      "Lohri 2026 celebrates cultural warmth, music, dance, and campus togetherness. The event captures the spirit of tradition through a lively and festive student gathering.",
    image:
      "https://faggo00g17.ufs.sh/f/nu74sAC4PEsY9bRez4LQEscoVG7ryk0KAYaUJpWN4xSbuZeL",
    venue: "SVIET Campus",
    images: [
      "https://faggo00g17.ufs.sh/f/nu74sAC4PEsYIvJM6E4QpoVeB1qd7z0Zrcu3UfjhOn9SxEbG",
      "https://faggo00g17.ufs.sh/f/nu74sAC4PEsYCPPvn2ItJBiYlgsTDkf9pRwjru5CG4ILEHW8",
      "https://faggo00g17.ufs.sh/f/nu74sAC4PEsYCFifYotJBiYlgsTDkf9pRwjru5CG4ILEHW83",
      "https://faggo00g17.ufs.sh/f/nu74sAC4PEsYSU1dKqLMjkuGA1bHqB8WwVO5vUPF9fe0xo4z",
      "https://faggo00g17.ufs.sh/f/nu74sAC4PEsYBf9hjrR7OGvlJpMfcNHj90CrxzQAwPW12VhE",
    ],
    startDate: new Date("2026-01-13T09:00:00.000Z"),
    category: "cultural",
    isFeatured: false,
    speakers: [],
  },
  {
    slug: "spontania-2026",
    title: "Spontania 2026",
    description:
      "Spontania 2026 is a cultural showcase built around performances, creativity, and student energy. It celebrates expression, stage presence, and a memorable campus experience.",
    image:
      "https://faggo00g17.ufs.sh/f/nu74sAC4PEsYJtXjQO9ngANXwUZ3mETaFYjzIBWiGHQfh0K8",
    venue: "SVIET Campus",
    images: [
      "https://faggo00g17.ufs.sh/f/nu74sAC4PEsYLYLqDf5roTRpjU3lCxnuBwkNfXe4IPA9dJ82",
      "https://faggo00g17.ufs.sh/f/nu74sAC4PEsYcidnxQkeJx7HnktlXwPsUQZL5p0I4BaA8T96",
      "https://faggo00g17.ufs.sh/f/nu74sAC4PEsYSU0n82wMjkuGA1bHqB8WwVO5vUPF9fe0xo4z",
      "https://faggo00g17.ufs.sh/f/nu74sAC4PEsYvrdBeCT6zNM7hJpLFY6XCtjfnIGb4W5cBSZE",
      "https://faggo00g17.ufs.sh/f/nu74sAC4PEsYhVZBLXgWlkGPT9nydDBIxrmKQ4cu6Y1paX5z",
      "https://faggo00g17.ufs.sh/f/nu74sAC4PEsYFTQ7YIfE6pcCm12AMPsuOKDlifhkxg5ELSG0",
      "https://faggo00g17.ufs.sh/f/nu74sAC4PEsYggcuge9BFeNJ2ZMVAWUapCPRyrO6X7dH9wuT",
      "https://faggo00g17.ufs.sh/f/nu74sAC4PEsYMSZfgul4xe5F6EkQ8YycI0SR2Up7JwWuTHMB",
      "https://faggo00g17.ufs.sh/f/nu74sAC4PEsYIZ6WkR4QpoVeB1qd7z0Zrcu3UfjhOn9SxEbG",
    ],
    startDate: new Date("2026-04-17T09:00:00.000Z"),
    endDate: new Date("2026-04-18T18:00:00.000Z"),
    category: "cultural",
    isFeatured: false,
    speakers: [],
  },
  {
    slug: "sportiva-2026",
    title: "Sportiva 2026",
    description:
      "Sportiva 2026 is the annual sports festival celebrating competition, teamwork, and fitness culture at SVIET. It brings energy to the campus through matches, participation, and school spirit.",
    image:
      "https://faggo00g17.ufs.sh/f/nu74sAC4PEsYdImtUQoYExaLcHRhujgineWf06PN1JrSAbQC",
    venue: "SVIET Campus",
    images: [
      "https://faggo00g17.ufs.sh/f/nu74sAC4PEsYNdSf2ylbQmCYde4BtEfUM8WbDvRPVA7HGyxZ",
      "https://faggo00g17.ufs.sh/f/nu74sAC4PEsYqVxtAIaXgqYmbC9npAwIjW2ie5J7ay1Z3TDF",
      "https://faggo00g17.ufs.sh/f/nu74sAC4PEsY9JOQseLQEscoVG7ryk0KAYaUJpWN4xSbuZeL",
      "https://faggo00g17.ufs.sh/f/nu74sAC4PEsYrpkQNrxqoMNr6b1wlSu5GiFCkHdzj0LePTqV",
      "https://faggo00g17.ufs.sh/f/nu74sAC4PEsYFT6tcpSE6pcCm12AMPsuOKDlifhkxg5ELSG0",
    ],
    startDate: new Date("2026-02-07T09:00:00.000Z"),
    category: "sports",
    isFeatured: false,
    speakers: [],
  },
  {
    slug: "ai-impact-summit-2025",
    title: "AI Impact Summit 2025",
    description:
      "AI Impact Summit 2025 brings students together for talks, demos, and hands-on ideas around artificial intelligence, practical problem solving, and emerging technology.",
    image:
      "https://faggo00g17.ufs.sh/f/nu74sAC4PEsYqOdAVy4aXgqYmbC9npAwIjW2ie5J7ay1Z3TD",
    venue: "SVIET Campus",
    images: [
      "https://faggo00g17.ufs.sh/f/nu74sAC4PEsYoNuBfeHm2OEPZ1j9yC0lTwVDnApIH3eqiv6K",
      "https://faggo00g17.ufs.sh/f/nu74sAC4PEsYdx8Jf7oYExaLcHRhujgineWf06PN1JrSAbQC",
      "https://faggo00g17.ufs.sh/f/nu74sAC4PEsYytOs2EISv4oIGnhDUdKeZTNytcxLJaOAp8wP",
      "https://faggo00g17.ufs.sh/f/nu74sAC4PEsYzI62fFHTPIJ264RrtnxVQhFgN9aZHkwbfOyo",
      "https://faggo00g17.ufs.sh/f/nu74sAC4PEsYbGJPmPZorOfuMl60DKUHtA2d34LVPgYzCTR7",
      "https://faggo00g17.ufs.sh/f/nu74sAC4PEsYmSGle1rPHDsU9RwYGrqvX5B1hVAISkWueEa6",
    ],
    startDate: new Date("2025-12-08T09:00:00.000Z"),
    category: "tech",
    isFeatured: false,
    speakers: [],
  },
  {
    slug: "sportsmania-2025",
    title: "Sportsmania 2025",
    description:
      "Sportsmania 2025 — the annual sports festival of SVIET — brings together students in a vibrant display of athleticism, teamwork and competitive spirit across events like football, basketball, and more.",
    image:
      "https://bmnmsbiymz.ufs.sh/f/1V3V2P4kpAumUFNaeJrVPFul6q2HRvZ8sMIWLa5xwjUytOhi",
    venue: "SVIET Campus",
    images: [],
    startDate: new Date("2025-10-17T09:00:00.000Z"),
    endDate: new Date("2025-10-18T18:00:00.000Z"),
    category: "sports",
    isFeatured: false,
    speakers: [],
  },
  {
    slug: "elevate-2-0",
    title: "Elevate 2.0",
    description:
      "Elevate 2.0 — a flagship cultural & innovation fest at SVIET — brings together creative minds, performances, workshops and peer-networking. The event celebrates innovation, student talent and campus life.",
    image:
      "https://bmnmsbiymz.ufs.sh/f/1V3V2P4kpAumQZ22PWyaj2Z1DfTG5xHuqnQog6vKB4FpJeI8",
    venue: "SVIET Campus",
    images: [],
    startDate: new Date("2025-09-11T09:00:00.000Z"),
    endDate: new Date("2025-09-13T18:00:00.000Z"),
    category: "cultural",
    isFeatured: false,
    speakers: [],
  },
  {
    slug: "tedx-sviet",
    title: "TEDx SVIET",
    description:
      'TEDx SVIET 2025, under the theme "The Power of One", featured thoughtful talks, ideas worth spreading, and engaging conversations aimed at inspiring students.',
    image:
      "https://bmnmsbiymz.ufs.sh/f/1V3V2P4kpAumTJiOaxw6itj04AFlILkGvbdQPE8uOqWpHYsU",
    venue: "SVIET Campus",
    images: [],
    startDate: new Date("2025-08-23T09:00:00.000Z"),
    category: "talks",
    isFeatured: false,
    speakers: [],
  },
  {
    slug: "graduation-ceremony-2025",
    title: "Graduation Ceremony 2025",
    description:
      "The Graduation Ceremony 2025 at SVIET marked a proud milestone for the graduating batches of 2024 & 2025, celebrated with esteemed dignitaries and inspiring speeches.",
    image:
      "https://bmnmsbiymz.ufs.sh/f/1V3V2P4kpAumINSwyyR21jqluvKkFoRaDpPfCGTtxewIs74z",
    venue: "SVIET Campus",
    images: [],
    startDate: new Date("2025-05-01T09:00:00.000Z"),
    category: "ceremony",
    isFeatured: false,
    speakers: [
      {
        name: "Dr. Gurpreet Kaur Mann",
        company: "",
        designation: "Chief Guest (Wife of Hon'ble Chief Minister of Punjab)",
        bio: "Dr. Gurpreet Kaur Mann graced the 15th Graduation Ceremony of SVIET as Chief Guest, inspiring graduates to pursue excellence.",
        displayOrder: 0,
      },
    ],
  },
  {
    slug: "spontania-2025",
    title: "Spontania 2025",
    description:
      "Spontania 2025, the flagship cultural extravaganza of SVIET, captivated hearts with its vibrant three-day celebration of art, culture, and talent with participation from over 600 students.",
    image:
      "https://bmnmsbiymz.ufs.sh/f/1V3V2P4kpAumIyCbVLR21jqluvKkFoRaDpPfCGTtxewIs74z",
    venue: "SVIET Campus",
    images: [],
    startDate: new Date("2025-04-15T09:00:00.000Z"),
    endDate: new Date("2025-04-17T18:00:00.000Z"),
    category: "cultural",
    isFeatured: false,
    speakers: [
      {
        name: "Ms. Neena Mittal",
        company: "Punjab Legislative Assembly",
        designation: "MLA Rajpura",
        bio: "Ms. Neena Mittal, a distinguished political leader and MLA from Rajpura.",
        displayOrder: 0,
      },
      {
        name: "Sh. Kultar Singh Sandhwan",
        company: "Punjab Vidhan Sabha",
        designation: "Hon'ble Speaker",
        bio: "As the Hon'ble Speaker of Punjab Vidhan Sabha, Sh. Kultar Singh Sandhwan brings legislative wisdom.",
        displayOrder: 1,
      },
    ],
  },
  {
    slug: "global-futures-summit-2-0",
    title: "Global Futures Summit 2.0",
    description:
      "Global Futures Summit 2.0 is a premier industry-academia collaboration event bridging students, professionals, and industry leaders with discussions on workforce trends and career growth.",
    image:
      "https://bmnmsbiymz.ufs.sh/f/1V3V2P4kpAumpKvXrQ6ntRyaQormsAvUSgqZTJcibOuXfBWd",
    venue: "SVIET Auditorium, Chandigarh",
    images: [],
    startDate: new Date("2025-03-08T09:00:00.000Z"),
    category: "summit",
    isFeatured: false,
    speakers: [
      {
        name: "Ms. Sonia Aswani",
        company: "Google, Hyderabad",
        designation: "Senior Staffing Lead",
        bio: "Ms. Sonia Aswani brings extensive experience in recruitment and talent acquisition in the tech industry.",
        displayOrder: 0,
      },
      {
        name: "Vani Matta",
        company: "Accenture",
        designation: "Senior Analyst, Talent Acquisition",
        bio: "Vani Matta specializes in talent acquisition and management.",
        displayOrder: 1,
      },
      {
        name: "Ms. Parul Kataria",
        company: "Lenskart",
        designation: "Talent Acquisition",
        bio: "Ms. Parul Kataria leads talent acquisition at Lenskart.",
        displayOrder: 2,
      },
      {
        name: "Dhruv Pratap Singh",
        company: "Swaraj By Mahindra",
        designation: "Dy.GM-HR",
        bio: "Dhruv Pratap Singh brings expertise in human resources and organizational development.",
        displayOrder: 3,
      },
      {
        name: "Sanjeev Kumar Mehra",
        company: "Aplicar",
        designation: "Head Of HR",
        bio: "Sanjeev Kumar Mehra leads HR strategies at Aplicar.",
        displayOrder: 4,
      },
      {
        name: "Mr. Arvind Singh",
        company: "TCS",
        designation: "Project Release Manager",
        bio: "Arvind Singh leads projects that enable seamless execution in tech environments.",
        displayOrder: 5,
      },
    ],
  },
  {
    slug: "bharattech-xperience-2-0",
    title: "Bharat TechXperience 2.0",
    description:
      "Bharat TechXperience 2.0 is a premier national-level 30-hour hackathon that brings together tech enthusiasts, innovators, and problem solvers to create cutting-edge solutions for real-world challenges.",
    image:
      "https://bmnmsbiymz.ufs.sh/f/1V3V2P4kpAumPkm0NoZ89C4GnNKHTXFvruVyAOm6ZwU2Sibo",
    venue: "SVIET Auditorium, Chandigarh",
    images: [],
    startDate: new Date("2025-03-08T09:00:00.000Z"),
    category: "tech",
    isFeatured: false,
    speakers: [
      {
        name: "Vikram R Singh",
        company: "Antier Solutions",
        designation: "Global CEO",
        bio: "",
        displayOrder: 0,
      },
      {
        name: "Shashi Pal",
        company: "Antier Solutions",
        designation: "COO",
        bio: "",
        displayOrder: 1,
      },
    ],
  },
];

// ─── End event seed data ──────────────────────────────────────────────────────

type NormalizedCourse = {
  slug: string;
  title: string;
  department: { slug: string; name: string };
  level: string;
  specializations: { slug: string; name: string }[];
  shortDescription: string | null;
  fullDescription: string | null;
  durationMonths: number;
  tuitionCents: number | null;
  mode: string | null;
  eligibility: string | null;
  highlights: string[] | null;
  outcomes: string[] | null;
  facilities: string[] | null;
  curriculum: InputJsonValue | null;
  faqs: InputJsonValue | null;
  seoTitle: string | null;
  seoDescription: string | null;
  metadata: InputJsonValue | null;
  isFeatured: boolean;
};

const COURSES = courseCatalog as NormalizedCourse[];

async function seedDepartments() {
  const departments = new Map<string, { slug: string; name: string }>();

  for (const course of COURSES) {
    departments.set(course.department.slug, course.department);
  }

  for (const department of departments.values()) {
    await prisma.department.upsert({
      where: { slug: department.slug },
      update: { name: department.name, isActive: true },
      create: department,
    });
  }

  return new Map(
    (
      await prisma.department.findMany({
        where: { slug: { in: [...departments.keys()] } },
        select: { id: true, slug: true },
      })
    ).map((department) => [department.slug, department.id] as const),
  );
}

async function seedSpecializations(departmentIdsBySlug: Map<string, string>) {
  const specializations = new Map<
    string,
    { slug: string; name: string; departmentSlug: string | null }
  >();

  for (const course of COURSES) {
    for (const specialization of course.specializations) {
      specializations.set(specialization.slug, {
        slug: specialization.slug,
        name: specialization.name,
        departmentSlug: course.department.slug,
      });
    }
  }

  for (const specialization of specializations.values()) {
    const departmentId = specialization.departmentSlug
      ? (departmentIdsBySlug.get(specialization.departmentSlug) ?? null)
      : null;

    await prisma.specialization.upsert({
      where: { slug: specialization.slug },
      update: { name: specialization.name, departmentId, isActive: true },
      create: {
        slug: specialization.slug,
        name: specialization.name,
        departmentId,
      },
    });
  }

  return new Map(
    (
      await prisma.specialization.findMany({
        where: { slug: { in: [...specializations.keys()] } },
        select: { id: true, slug: true },
      })
    ).map(
      (specialization) => [specialization.slug, specialization.id] as const,
    ),
  );
}

async function seedCourses(
  departmentIdsBySlug: Map<string, string>,
  specializationIdsBySlug: Map<string, string>,
) {
  let created = 0;
  let updated = 0;

  for (const course of COURSES) {
    const departmentId =
      departmentIdsBySlug.get(course.department.slug) ?? null;

    const upserted = await prisma.program.upsert({
      where: { slug: course.slug },
      update: {
        title: course.title,
        shortDescription: course.shortDescription,
        departmentId,
        level: course.level as CourseLevel,
        mode: course.mode,
        fullDescription: course.fullDescription,
        highlights: course.highlights ?? DbNull,
        eligibility: course.eligibility,
        curriculum: course.curriculum ?? DbNull,
        outcomes: course.outcomes ?? DbNull,
        facilities: course.facilities ?? DbNull,
        faqs: course.faqs ?? DbNull,
        seoTitle: course.seoTitle,
        seoDescription: course.seoDescription,
        metadata: course.metadata ?? DbNull,
        isFeatured: course.isFeatured,
        durationMonths: course.durationMonths,
        tuitionCents: course.tuitionCents,
        isActive: true,
      },
      create: {
        slug: course.slug,
        title: course.title,
        shortDescription: course.shortDescription,
        departmentId,
        level: course.level as CourseLevel,
        mode: course.mode,
        fullDescription: course.fullDescription,
        highlights: course.highlights ?? DbNull,
        eligibility: course.eligibility,
        curriculum: course.curriculum ?? DbNull,
        outcomes: course.outcomes ?? DbNull,
        facilities: course.facilities ?? DbNull,
        faqs: course.faqs ?? DbNull,
        seoTitle: course.seoTitle,
        seoDescription: course.seoDescription,
        metadata: course.metadata ?? DbNull,
        isFeatured: course.isFeatured,
        durationMonths: course.durationMonths,
        tuitionCents: course.tuitionCents,
        isActive: true,
      },
    });

    await prisma.programSpecialization.deleteMany({
      where: { programId: upserted.id },
    });

    if (course.specializations.length > 0) {
      await prisma.programSpecialization.createMany({
        data: course.specializations.map((specialization, index) => ({
          programId: upserted.id,
          specializationId:
            specializationIdsBySlug.get(specialization.slug) ??
            specializationIdsBySlug.get(toSlug(specialization.name)) ??
            (() => {
              throw new Error(
                `Missing specialization seed for ${specialization.name}`,
              );
            })(),
          isPrimary: index === 0,
          sortOrder: index,
        })),
      });
    }

    if (upserted.createdAt.getTime() === upserted.updatedAt.getTime()) {
      created++;
    } else {
      updated++;
    }
  }

  return { created, updated };
}

async function main() {
  await prisma.user.upsert({
    where: { email: CRM_SEED_EMAIL },
    update: {
      firstName: CRM_SEED_FIRST_NAME,
      lastName: CRM_SEED_LAST_NAME,
      role: CRM_SEED_ROLE,
      status: "ACTIVE",
      passwordHash: makePasswordHash(CRM_SEED_PASSWORD),
    },
    create: {
      email: CRM_SEED_EMAIL,
      firstName: CRM_SEED_FIRST_NAME,
      lastName: CRM_SEED_LAST_NAME,
      role: CRM_SEED_ROLE,
      status: "ACTIVE",
      passwordHash: makePasswordHash(CRM_SEED_PASSWORD),
    },
  });

  const departmentIdsBySlug = await seedDepartments();
  const specializationIdsBySlug =
    await seedSpecializations(departmentIdsBySlug);
  const courseStats = await seedCourses(
    departmentIdsBySlug,
    specializationIdsBySlug,
  );

  // ── Seed events ────────────────────────────────────────────────────────────
  for (const event of EVENTS) {
    const { speakers, slug, ...eventData } = event;

    const upserted = await prisma.event.upsert({
      where: { slug },
      update: {
        ...eventData,
        slug,
      },
      create: {
        ...eventData,
        slug,
      },
    });

    // Upsert speakers: delete all existing and re-insert (simplest idempotent approach)
    if (speakers.length > 0) {
      await prisma.eventSpeaker.deleteMany({ where: { eventId: upserted.id } });
      await prisma.eventSpeaker.createMany({
        data: speakers.map((speaker) => ({ ...speaker, eventId: upserted.id })),
      });
    }
  }

  if (!process.env.CRM_SEED_USER_PASSWORD) {
    console.warn(
      "CRM seed user created with default password. Set CRM_SEED_USER_PASSWORD in your environment before shared or production usage.",
    );
  }

  console.log(`CRM seed user ready: ${CRM_SEED_EMAIL} (${CRM_SEED_ROLE})`);
  console.log(
    `Seed complete: upserted ${COURSES.length} courses, ${EVENTS.length} events.`,
  );
}

main()
  .catch((error) => {
    console.error("Seed failed:", error);
    process.exitCode = 1;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
