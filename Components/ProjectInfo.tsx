"use client";
import { Redo } from "lucide-react";
import Link from "next/link";
import { useContext } from "react";
import { FlipCardContext } from "./FlipCard";
import { ProjectDetails } from "@/utils/types";

function ProjectInfo({ project }: { project: ProjectDetails }) {
  const { flipCard } = useContext(FlipCardContext);

  return (
    <div className="px-6 py-8 rounded-xl border flex h-[400px] md:h-full flex-col items-center bg-muted">
      <div className="flex items-center justify-between w-full mb-8">
        <h3 className="font-semibold md:text-lg">About Project</h3>

        <button
          onClick={() => flipCard()}
          className="p-1 rounded-full h-8 w-8 bg-primary hover:bg-primary/90 transition-all duration-150 grid place-content-center"
        >
          <Redo />
        </button>
      </div>
      <div className="flex-1 flex flex-col justify-between">
        <p className="text-sm md:text-base text-left">{project.description}</p>
        <div className="flex items-center space-x-4">
          <Link
            target="_blank"
            href={project.liveLink}
            className="bg-primary py-2 px-4 rounded-md h-9 flex items-center text-sm font-bold"
          >
            Visit Site
          </Link>
          <Link
            target="_blank"
            href={project.codeLink}
            className="bg-background py-2 px-4 rounded-md h-9 flex items-center text-sm font-bold"
          >
            View Code
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProjectInfo;
