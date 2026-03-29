import { NextRequest, NextResponse } from "next/server";

import { prisma } from "@/lib/prisma";

export async function GET(
  _req: NextRequest,
  { params }: { params: Promise<{ slug: string }> },
) {
  try {
    const { slug } = await params;

    const program = await prisma.program.findUnique({
      where: { slug },
    });

    if (!program) {
      return NextResponse.json({ success: false, error: "Program not found" }, { status: 404 });
    }

    return NextResponse.json({ success: true, data: program });
  } catch {
    return NextResponse.json({ success: false, error: "Failed to fetch program" }, { status: 500 });
  }
}
