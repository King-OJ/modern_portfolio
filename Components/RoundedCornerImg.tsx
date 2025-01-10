import Image from "next/image";

function RoundedCornerImg({
  src,
  position,
  border,
}: {
  src: string;
  position?: string;
  border?: boolean;
}) {
  return (
    <Image
      src={src}
      alt="project photo"
      fill
      quality={100}
      sizes="(max-width: 768px) 100vw, 50vw"
      className={
        border
          ? `rounded-2xl object-cover 
          ${position && position == "right" && "object-right"}
          ${position && position == "left" && "object-left"}
          ${position && position == "top" && "object-top"}
          ${position && position == "center" && "object-center"}
          
          `
          : `object-cover 
           ${position && position == "right" && "object-right"}
          ${position && position == "left" && "object-left"}
          ${position && position == "top" && "object-top"}
          ${position && position == "center" && "object-center"}
          `
      }
    />
  );
}

export default RoundedCornerImg;
