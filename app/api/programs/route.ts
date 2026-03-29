import { NextResponse } from "next/server";

import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const programs = await prisma.program.findMany({
      where: { isActive: true },
      select: {
        id: true,
        slug: true,
        title: true,
        shortDescription: true,
        department: true,
        eligibility: true,
        mode: true,
        durationMonths: true,
        tuitionCents: true,
      },
      orderBy: { title: "asc" },
    });

    return NextResponse.json({ success: true, data: programs });
  } catch {
    return NextResponse.json({ success: false, error: "Failed to fetch programs" }, { status: 500 });
  }
}
