"use client";
import React from "react";
import Image from "next/image";
import { useState } from "react";
import ImageLoadingSkeleton from "./ImageLoadingSkeleton";

function RoundedCornerImg({
  src,
  position,
  border,
}: {
  src: string;
  position?: string;
  border?: boolean;
}) {
  const [isImageReady, setIsImageReady] = useState(false);

  return (
    <>
      {!isImageReady && <ImageLoadingSkeleton />}
      <Image
        onLoad={() => setIsImageReady(true)}
        src={src}
        alt="project photo"
        fill
        quality={100}
        sizes="(max-width: 768px) 100vw, 50vw"
        className={
          border
            ? `object-cover 
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
    </>
  );
}

export default RoundedCornerImg;
