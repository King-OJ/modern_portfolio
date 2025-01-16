import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import RoundedCornerImg from "./RoundedCornerImg";

interface MobileProjectCardProps {
  projectTitle: string;
  projectSubtitle: string;
  projectLink: string;
  projectPhotoUrl: string;
}

function MobileProjectCard({
  projectTitle,
  projectLink,
  projectSubtitle,
  projectPhotoUrl,
}: MobileProjectCardProps) {
  return (
    <div className="px-6 pt-8 rounded-xl border flex flex-col h-full items-center bg-muted">
      <div className="flex items-center justify-between w-full">
        <div className="space-y-1">
          <h3 className="font-semibold">{projectTitle}</h3>
          <h5 className="text-accent-foreground text-sm">{projectSubtitle}</h5>
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
