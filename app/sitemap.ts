import { MetadataRoute } from "next";

import { prisma } from "@/lib/prisma";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const programs = await prisma.program.findMany({
    where: { isActive: true },
    select: { slug: true, updatedAt: true },
  });

  const staticRoutes = [
    "/",
    "/admissions",
    "/programs",
    "/campus-life",
    "/events",
    "/placements",
    "/research",
    "/blog",
    "/contact",
    "/program-finder",
  ].map((route) => ({
    url: `https://sviet.ac.in${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "/" ? 1 : 0.8,
  }));

  const programRoutes = programs.map((program) => ({
    url: `https://sviet.ac.in/programs/${program.slug}`,
    lastModified: program.updatedAt,
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }));

  return [...staticRoutes, ...programRoutes];
}
