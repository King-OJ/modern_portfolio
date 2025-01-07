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
    <div className="px-6 pt-8 rounded-xl border flex flex-col h-[600px] md:h-full items-center bg-muted">
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

      <div className="mt-10 flex-1 w-full flex justify-center items-center relative">
        <div className="w-72 h-full shadow-md relative">
          <RoundedCornerImg src="/assets/mobile-app-pic.png" position="top" />
        </div>
      </div>
    </div>
  );
}

export default MobileProjectCard;
