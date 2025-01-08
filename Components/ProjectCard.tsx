import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import RoundedCornerImg from "./RoundedCornerImg";

interface ProjectCardProps {
  projectTitle: string;
  projectSubtitle: string;
  projectLink: string;
  projectPhotosUrl: string[] | string;
}

export function TopProjectCard({
  projectLink,
  projectPhotosUrl,
  projectSubtitle,
  projectTitle,
}: ProjectCardProps) {
  return (
    <div className="px-6 py-8 rounded-xl border flex flex-col h-full items-center bg-muted">
      <div className="flex items-center justify-between w-full">
        <div className="space-y-1">
          <h3 className="font-semibold">{projectTitle}</h3>
          <h5 className="text-accent-foreground text-sm">{projectSubtitle}</h5>
        </div>
        <button className="p-1 rounded-full h-8 w-8 bg-primary grid place-content-center">
          <ArrowUpRight />
        </button>
      </div>

      <div className="mt-4 flex-1 w-full flex justify-center items-center relative">
        <div className="w-64 h-52 relative rotate-[4deg] -mr-8 -mb-8">
          <RoundedCornerImg border src={projectPhotosUrl[0]} position="left" />
        </div>

        <div className="shadow-xl absolute w-64 h-56 -rotate-[6deg] -ml-12">
          <div className="relative h-full w-full">
            <RoundedCornerImg
              border
              src={projectPhotosUrl[1]}
              position="left"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export function BottomProjectCard({
  projectLink,
  projectPhotosUrl,
  projectSubtitle,
  projectTitle,
}: ProjectCardProps) {
  return (
    <div className="px-6 py-8 rounded-xl border flex flex-col h-full items-center bg-muted">
      <div className="flex items-center justify-between w-full">
        <div className="space-y-1">
          <h3 className="font-semibold">{projectTitle}</h3>
          <h5 className="text-accent-foreground text-sm">{projectSubtitle}</h5>
        </div>
        <button className="p-1 rounded-full h-8 w-8 bg-primary grid place-content-center ">
          <ArrowUpRight />
        </button>
      </div>

      <div className="mt-4 flex-1 w-full flex justify-center items-center relative">
        <div className="w-64 h-56 relative  -mr-6 -mb-10">
          <RoundedCornerImg border src={projectPhotosUrl[0]} position="left" />
        </div>

        <div className="absolute shadow-xl w-64 h-56 -ml-8">
          <div className="relative h-full w-full">
            <RoundedCornerImg
              border
              src={projectPhotosUrl[1]}
              position="center"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
