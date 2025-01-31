"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import {
  FieldErrors,
  FieldValues,
  UseFormRegister,
  UseFormSetValue,
  UseFormTrigger,
} from "react-hook-form";
import { X } from "lucide-react";

type ImageTypes = {
  mobileImage?: string;
  webImage1?: string;
  webImage2?: string;
};

export default function SingleImagePreview({
  register,
  errors,
  trigger,
  setValue,
  name,
}: {
  name: string;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors<FieldValues>;
  trigger: UseFormTrigger<FieldValues>;
  setValue: UseFormSetValue<FieldValues>;
}) {
  const [imageUrl, setImageUrl] = useState<ImageTypes | any>({
    mobileImage: "",
    webImage1: "",
    webImage2: "",
  });
  const imgInputRef = useRef<HTMLInputElement | null>(null);

  // Handle image file selection
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file: File | undefined = e.target.files?.[0];

    if (file) {
      setValue(name, file);
      trigger(name);
      // Create a FileReader to read the file
      const reader = new FileReader();
      reader.onloadend = () => {
        // Set the image preview URL and file data
        setImageUrl({ ...imageUrl, [name]: reader.result as string });
      };
      reader.readAsDataURL(file); // Read the file as a Data URL
    }
  };

  return (
    <div>
      <div
        className="w-full h-72 md:h-80  "
        onClick={() => {
          imgInputRef.current?.click();
        }}
      >
        {imageUrl[name] == "" ? (
          <div className="flex flex-col items-center justify-center pt-5 pb-6 h-full border-accent-foreground border rounded-lg cursor-pointer bg-gray-50 overflow-hidden">
            <svg
              className="w-8 h-8 mb-4 text-gray-500 "
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
            <p className="mb-2 text-sm text-gray-500 ">
              <span className="font-semibold">
                Click to upload 1 project photo
              </span>
            </p>
            <p className="text-xs text-gray-500">
              SVG, PNG, JPG or GIF (MAX. 5MB)
            </p>
          </div>
        ) : (
          <div className="h-full w-full relative rounded-lg overflow-hidden">
            <button
              onClick={(e) => {
                e.stopPropagation();
                setValue(name, undefined),
                  setImageUrl({ ...imageUrl, [name]: "" });
              }}
              className="absolute right-2 top-2 bg-primary grid place-content-center h-8 w-8 text-sm font-bold text-white rounded-full z-10"
            >
              <X />
            </button>
            <Image
              src={imageUrl[name]}
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
        {...register(name)}
        ref={imgInputRef}
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        className="hidden"
      />
      {errors[name] && (
        <p className="text-sm text-red-500 mt-1">
          {errors[name].message?.toString()}
        </p>
      )}
    </div>
  );
}
