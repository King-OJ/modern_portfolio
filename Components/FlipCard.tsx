"use client";
import { createContext, ReactNode, useState } from "react";

export const FlipCardContext = createContext<{
  isFlipped: boolean;
  flipCard: () => void;
}>({ isFlipped: false, flipCard: () => console.log("unrecognized command") });

function FlipCard({ front, back }: { front: ReactNode; back: ReactNode }) {
  const [isFlipped, setIsFlippped] = useState<boolean>(false);

  const flipCard = () => setIsFlippped(!isFlipped);

  return (
    <FlipCardContext.Provider value={{ flipCard, isFlipped }}>
      <div className="group md:h-full h-[400px] w-full [perspective:1000px]">
        <div
          className={`relative h-full w-full transition-all duration-500 [transform-style:preserve-3d] ${
            isFlipped && "[transform:rotateY(180deg)]"
          }`}
        >
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
    </FlipCardContext.Provider>
  );
}

export default FlipCard;
