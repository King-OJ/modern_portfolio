import { NextResponse } from "next/server";
import prisma from "@/utils/db";
import { AddProjectType } from "@/utils/types";

export async function POST(req: Request) {
  try {
    const data: AddProjectType = await req.json();

    // Save form data to PostgreSQL using Prisma
    const newFormData = await prisma.project.create({
      data,
    });

    return NextResponse.json(newFormData);
  } catch (error) {
    console.error("Error in API route:", error);
    return NextResponse.json(
      { error: "Failed to upload project. Try Again" },
      { status: 500 }
    );
  }
}
