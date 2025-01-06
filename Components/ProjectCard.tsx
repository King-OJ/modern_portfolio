import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import RoundedCornerImg from "./RoundedCornerImg";

interface ProjectCardProps {
  projectTitle: string;
  projectSubtitle: string;
  projectLink: string;
  projectPhotos: [string] | string;
}

function ProjectCard({
  projectLink,
  projectPhotos,
  projectSubtitle,
  projectTitle,
}: ProjectCardProps) {
  return (
    <div className="px-6 py-8 rounded-xl border flex flex-col h-full items-center">
      <div className="flex items-center justify-between w-full">
        <div className="space-y-1">
          <h3 className="font-semibold">{projectTitle}</h3>
          <h5 className="text-accent-foreground text-sm">{projectSubtitle}</h5>
        </div>
        <Link
          href={projectLink}
          className="p-1 rounded-full h-6 w-6 md:h-8 md:w-8 bg-primary grid place-content-center"
        >
          <ArrowUpRight />
        </Link>
      </div>

      <div className="mt-4 flex-1 w-full flex justify-center items-center relative">
        <div className="rotate-[5deg] -mr-16 mt-7 shadow-md">
          <RoundedCornerImg src="/assets/krist-ecommerce.png" />
        </div>
        <div className="absolute -rotate-[4deg] -ml-8">
          <RoundedCornerImg src="/assets/krist-ecommerce2.png" />
        </div>
      </div>
    </div>
  );
}
export default ProjectCard;
