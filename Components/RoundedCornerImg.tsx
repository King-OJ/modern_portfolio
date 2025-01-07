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
      layout="fill"
      objectFit="cover"
      objectPosition={position}
      quality={90}
      sizes="(max-width: 768px) 100vw, 50vw"
      className={border ? "rounded-2xl" : ""}
    />
  );
}

export default RoundedCornerImg;
