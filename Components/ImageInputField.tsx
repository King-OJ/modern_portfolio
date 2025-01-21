"use client";

// components/ImagePreview.tsx
import { useRef, useState } from "react";
import Image from "next/image";

interface ImageFile {
  name: string;
  size: number;
}

export default function ImagePreview() {
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [image, setImage] = useState<ImageFile | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  // Handle image file selection
  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (file) {
      console.log(event.target.files);

      // Create a FileReader to read the file
      const reader = new FileReader();

      reader.onloadend = () => {
        // Set the image preview URL and file data
        setImageUrl(reader.result as string);
        setImage({
          name: file.name,
          size: file.size,
        });
      };

      reader.readAsDataURL(file); // Read the file as a Data URL
    }
  };

  return (
    <div className="relative">
      <div
        className="w-full h-64 md:h-72 border-accent-foreground border rounded-lg cursor-pointer bg-gray-50 overflow-hidden max-w-md mx-auto"
        onClick={() => {
          fileInputRef.current?.click();
        }}
      >
        {!imageUrl && (
          <div className="flex flex-col items-center justify-center pt-5 pb-6 h-full">
            <svg
              className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 16"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
              />
            </svg>
            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
              <span className="font-semibold">Click to upload</span>
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              SVG, PNG, JPG or GIF (MAX. 800x400px)
            </p>
          </div>
        )}

        {imageUrl && (
          <div className="h-full w-full relative">
            <Image
              src={imageUrl}
              quality={100}
              alt="Preview"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              // Adjust image scaling
            />
          </div>
        )}
      </div>
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        className="hidden"
        multiple
      />
    </div>
  );
}
