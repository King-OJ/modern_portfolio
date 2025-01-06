import Image from "next/image";

function RoundedCornerImg({ src }: { src: string }) {
  return (
    <Image
      src={src}
      alt="chat app"
      width={0}
      height={0}
      sizes="100vw"
      className="rounded-xl w-auto h-auto object-cover max-w-[260px] min-h-[220px] object-left-top"
    />
  );
}

export default RoundedCornerImg;
