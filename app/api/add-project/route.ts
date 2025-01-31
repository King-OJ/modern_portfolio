import prisma from "@/utils/db";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const projectValues = await req.json();
    const project = await prisma.project.create({ data: projectValues });

    return NextResponse.json(project, { status: 200 });
  } catch (error) {
    console.error("Error saving project:", error);
    return NextResponse.json(
      { error: "Adding project failed!" },
      { status: 500 }
    );
  }
}
