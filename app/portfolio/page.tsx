import React from "react";
import FlipCard from "@/Components/FlipCard";
import { Pagination } from "@/Components/Pagination";
import { BottomProjectCard, TopProjectCard } from "@/Components/ProjectCard";
import ProjectInfo from "@/Components/ProjectInfo";
import prisma from "@/utils/db";
import { ProjectDetails } from "@/utils/types";

interface PageProps {
  searchParams: Promise<{ page: string }>;
}

async function PortfolioPage({ searchParams }: PageProps) {
  const { page } = await searchParams;
  const currentPage = Number(page) || 1;
  const limit = 4;

  const [projects, total] = await Promise.all([
    prisma.project.findMany({
      where: {
        type: "WebApp",
      },
      skip: (currentPage - 1) * limit,
      take: limit,
      orderBy: {
        createdAt: "desc",
      },
    }),
    prisma.project.count(),
  ]);

  const totalPages = Math.ceil(total / limit);

  return (
    <main className="mt-14 md:mt-12">
      <h2 className="text-2xl font-extrabold my-4 md:my-8 ">
        Project Collections
      </h2>
      <ul className="grid md:grid-cols-2 gap-4 md:grid-rows-[repeat(2,minmax(400px,1fr))] my-8">
        {projects.map((project: ProjectDetails, index: number) => {
          return (
            <li key={index}>
              <FlipCard
                front={
                  index == 0 || index == 3 ? (
                    <TopProjectCard project={project} />
                  ) : (
                    <BottomProjectCard project={project} />
                  )
                }
                back={<ProjectInfo project={project} />}
              />
            </li>
          );
        })}
      </ul>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        hasNextPage={currentPage < totalPages}
        hasPrevPage={currentPage > 1}
      />
    </main>
  );
}

export default PortfolioPage;
