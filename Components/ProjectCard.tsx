import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

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
    <div className="px-6 py-10 rounded-xl border flex flex-col h-full items-center">
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

      <div className="mt-8 flex-1 ">
        <Image
          src={
            typeof projectPhotos == "string" ? projectPhotos : projectPhotos[0]
          }
          alt="chat app"
          width={0}
          height={0}
          sizes="100vw"
          className="object-contain w-full h-full"
        />
      </div>
    </div>
  );
}
export default ProjectCard;
