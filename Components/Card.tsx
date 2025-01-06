import { ReactNode } from "react";

interface CardProps {
  text: string;
  icon: ReactNode;
  borderLeft?: boolean;
}

function Card({ text, icon, borderLeft }: CardProps) {
  return (
    <div className="relative w-full h-full self-start">
      <div
        className={`absolute h-full w-full ${
          borderLeft
            ? "bg-gradient-to-bl -ml-[2px]"
            : "bg-gradient-to-tr ml-[2px] -rotate-[0.2deg]"
        } from-50% from-transparent to-primary rounded-xl`}
      ></div>
      <h5
        className={`absolute h-full w-full ${
          borderLeft ? "-mt-[1px]" : "mt-[1px]"
        } border space-y-1 flex flex-col justify-center items-center bg-muted/70 rounded-xl`}
      >
        <span>{icon}</span>
        <p>{text}</p>
      </h5>
    </div>
  );
}
export default Card;
