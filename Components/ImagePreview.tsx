"use client";

import { useState } from "react";
import Image from "next/image";
import {
  FieldErrors,
  UseFormRegister,
  UseFormSetValue,
  UseFormTrigger,
} from "react-hook-form";
import { X } from "lucide-react";
import { AddProjectType } from "@/utils/types";
import { useDropzone } from "react-dropzone";

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
  name: keyof AddProjectType;
  register: UseFormRegister<AddProjectType>;
  errors: FieldErrors<AddProjectType>;
  trigger: UseFormTrigger<AddProjectType>;
  setValue: UseFormSetValue<AddProjectType>;
}) {
  const [imagePreviews, setImagePreviews] = useState<string[]>([]);

  const { acceptedFiles, getRootProps, getInputProps } = useDropzone({
    accept: {
      "image/png": [".png"],
      "image/jpg": [".jpg"],
      "image/jpeg": [".jpeg"],
    },
    multiple: true,
    onDrop: (files) => {
      const previewUrls = files.map((file) => URL.createObjectURL(file));
      setImagePreviews(previewUrls);
      setValue("images", files);
    },
  });

  return (
    <div>
      <div className="w-full">
        <label
          htmlFor="images"
          className="text-accent-foreground text-sm mb-2 block"
        >
          Project Images
        </label>

        {imagePreviews.length > 0 ? (
          <div className="grid md:grid-flow-col md:grid-cols-2 gap-4">
            {imagePreviews.map((url, index) => {
              return (
                <div
                  key={index}
                  className="h-64 w-full relative rounded-lg overflow-hidden"
                >
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setValue("images", []), setImagePreviews([]);
                    }}
                    className="absolute right-2 top-2 bg-primary grid place-content-center h-8 w-8 text-sm font-bold text-white rounded-full z-10"
                  >
                    <X />
                  </button>
                  <Image
                    src={url}
                    quality={100}
                    alt="Preview"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    // Adjust image scaling
                  />
                </div>
              );
            })}
          </div>
        ) : (
          <div
            {...getRootProps()}
            className=" w-full h-56 bg-gray-50 rounded-lg text-white cursor-pointer flex flex-col justify-center items-center"
          >
            <input {...getInputProps()} />
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
                Click to upload a project photo
              </span>
            </p>
            <p className="text-xs text-gray-500">
              SVG, PNG, JPG or GIF (MAX. 5MB)
            </p>
          </div>
        )}
      </div>

      {errors.images && (
        <p className="text-sm text-red-500 mt-1">{errors.images.message}</p>
      )}
    </div>
  );
}
