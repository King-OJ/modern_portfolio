import { ReactNode } from "react";

function FlipCard({ front, back }: { front: ReactNode; back: ReactNode }) {
  return (
    <div className="group h-full md:h-[400px] w-full [perspective:1000px]">
      <div className="relative h-full w-full transition-all duration-500 group-hover:[transform:rotateY(180deg)] [transform-style:preserve-3d]">
        {/* front */}
        <div className="absolute inset-0 h-full w-full [backface-visibility:hidden]">
          {front}
        </div>
        {/* back */}
        <div className="absolute inset-0 h-full w-full text-center [transform:rotateY(180deg)] [backface-visibility:hidden]">
          {back}
        </div>
      </div>
    </div>
  );
}

export default FlipCard;
