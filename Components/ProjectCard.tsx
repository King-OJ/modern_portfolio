"use client";
import { ArrowUpRight } from "lucide-react";
import RoundedCornerImg from "./RoundedCornerImg";
import { useContext } from "react";
import { FlipCardContext } from "./FlipCard";
import { ProjectDetails } from "@/utils/types";

export function TopProjectCard({ photosUrl, subtitle, title }: ProjectDetails) {
  const { flipCard } = useContext(FlipCardContext);

  return (
    <div className="px-6 py-8 rounded-xl border flex flex-col h-full items-center bg-muted">
      <div className="flex items-center justify-between w-full">
        <div className="space-y-1">
          <h3 className="font-semibold">{title}</h3>
          <h5 className="text-accent-foreground text-sm">{subtitle}</h5>
        </div>
        <button
          onClick={() => flipCard()}
          className="p-1 rounded-full h-8 w-8 bg-primary grid place-content-center"
        >
          <ArrowUpRight />
        </button>
      </div>

      <div className="mt-4 flex-1 w-full flex justify-center items-center relative">
        <div className="w-64 h-52 relative rotate-[4deg] -mr-8 -mb-8 rounded-2xl overflow-hidden">
          <RoundedCornerImg border src={photosUrl[0]} position="left" />
        </div>

        <div className="shadow-xl absolute w-64 h-56 -rotate-[6deg] -ml-12">
          <div className="relative h-full w-full rounded-2xl overflow-hidden">
            <RoundedCornerImg border src={photosUrl[1]} position="left" />
          </div>
        </div>
      </div>
    </div>
  );
}

export function BottomProjectCard({
  photosUrl,
  subtitle,
  title,
}: ProjectDetails) {
  const { flipCard } = useContext(FlipCardContext);

  return (
    <div className="px-6 py-8 rounded-xl border flex flex-col h-full items-center bg-muted">
      <div className="flex items-center justify-between w-full">
        <div className="space-y-1">
          <h3 className="font-semibold">{title}</h3>
          <h5 className="text-accent-foreground text-sm">{subtitle}</h5>
        </div>
        <button
          onClick={() => flipCard()}
          className="p-1 rounded-full h-8 w-8 bg-primary grid place-content-center "
        >
          <ArrowUpRight />
        </button>
      </div>

      <div className="mt-4 flex-1 w-full flex justify-center items-center relative">
        <div className="w-64 h-56 relative  -mr-6 -mb-10 rounded-2xl overflow-hidden">
          <RoundedCornerImg border src={photosUrl[0]} position="left" />
        </div>

        <div className="absolute shadow-xl w-64 h-56 -ml-8">
          <div className="relative h-full w-full rounded-2xl overflow-hidden">
            <RoundedCornerImg border src={photosUrl[1]} position="center" />
          </div>
        </div>
      </div>
    </div>
  );
}
