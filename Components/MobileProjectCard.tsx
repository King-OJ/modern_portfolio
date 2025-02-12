import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import RoundedCornerImg from "./RoundedCornerImg";
import { ProjectDetails } from "@/utils/types";

function MobileProjectCard({ project }: { project: ProjectDetails }) {
  return (
    <div className="px-6 pt-8 rounded-xl border flex flex-col h-full items-center bg-muted">
      <div className="flex items-center justify-between w-full">
        <div className="space-y-1">
          <h3 className="font-semibold">{project.title}</h3>
          <h5 className="text-accent-foreground text-sm">{project.subtitle}</h5>
        </div>
        <button className="p-1 rounded-full h-8 w-8 grid place-content-center bg-primary">
          <ArrowUpRight />
        </button>
      </div>

      <div className="mt-10 flex-1 w-full flex justify-center items-center relative">
        <div className="w-72 h-full shadow-md relative rounded-tl-2xl rounded-tr-2xl overflow-hidden">
          <RoundedCornerImg src="/assets/mobile-app-pic.png" position="top" />
        </div>
      </div>
    </div>
  );
}

export default MobileProjectCard;
