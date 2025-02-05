import { NextResponse } from "next/server";
import prisma from "@/utils/db";
import { AddProjectType } from "@/utils/types";

export async function POST(req: Request) {
  const {
    subtitle,
    title,
    liveLink,
    codeLink,
    photosUrl,
    type,
  }: AddProjectType = await req.json();

  // Save form data to PostgreSQL using Prisma
  const newFormData = await prisma.project.create({
    data: {
      subtitle,
      title,
      liveLink,
      codeLink,
      type,
    },
  });

  return NextResponse.json(newFormData);
}
