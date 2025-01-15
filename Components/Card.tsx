import { ReactNode } from "react";

interface CardProps {
  borderLeft?: boolean;
  content: ReactNode;
  reducedGradient?: boolean;
}

function Card({ borderLeft, content, reducedGradient }: CardProps) {
  return (
    <div className="relative w-full h-full">
      <div
        className={`absolute h-full w-full ${
          borderLeft
            ? "bg-gradient-to-bl -ml-[2px]"
            : "bg-gradient-to-tr ml-[2px] -rotate-[0.2deg]"
        } ${
          reducedGradient ? "from-80%" : "from-50%"
        }  from-transparent to-primary rounded-xl`}
      ></div>
      <div
        className={`absolute h-full w-full ${
          borderLeft ? "-mt-[1px]" : "mt-[1px]"
        } border space-y-1 flex flex-col justify-center items-center bg-muted/90 rounded-xl`}
      >
        {content}
      </div>
    </div>
  );
}
export default Card;
