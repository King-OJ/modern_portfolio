"use client";

import Image from "next/image";
import { FieldErrors } from "react-hook-form";
import { X } from "lucide-react";
import { AddProjectType } from "@/utils/types";
import { ImagePreviewType } from "./AddProjectForm";
import { DropzoneInputProps, DropzoneRootProps } from "react-dropzone";

export default function ImagePreview({
  errors,
  isDragActive,
  getRootProps,
  getInputProps,
  removeImage,
  isUploading,
  imagePreviews,
}: {
  isUploading: boolean;
  isDragActive: boolean;
  imagePreviews: ImagePreviewType[];
  removeImage: (index: number) => void;
  errors: FieldErrors<AddProjectType>;
  getRootProps: <T extends DropzoneRootProps>(props?: T) => T;
  getInputProps: <T extends DropzoneInputProps>(props?: T) => T;
}) {
  return (
    <div className="w-full">
      <div
        {...getRootProps()}
        className={`mt-1 flex justify-center rounded-md border-2 cursor-pointer bg-gray-50 border-dashed border-gray-300 px-6 pt-5 pb-6 ${
          isDragActive ? "border-indigo-500" : ""
        }`}
      >
        <div className="space-y-1 text-center">
          <input {...getInputProps()} />
          <div className="space-y-1">
            <p>Drag and drop images here, or click to select</p>
            <p className="text-xs">PNG, JPG, JPEG up to 10MB</p>
          </div>
        </div>
      </div>

      {errors.imageUrls && (
        <p className="mt-1 text-sm text-red-600">{errors.imageUrls.message}</p>
      )}

      {/* Image previews grid */}
      <div className={`${imagePreviews && "mt-4"} grid grid-cols-2 gap-4`}>
        {imagePreviews.map((preview, index) => (
          <div key={preview.preview} className="relative">
            <div className={`relative h-40 w-full`}>
              <Image
                src={preview.preview}
                alt={`Preview ${index + 1}`}
                fill
                className="object-cover rounded-md"
              />
              {isUploading && (
                <div className="h-full w-full bg-black/50 rounded-md absolute inset-0"></div>
              )}
            </div>
            <button
              type="button"
              onClick={() => removeImage(index)}
              className="absolute top-2 right-2 bg-red-500 text-white rounded-full h-8 w-8 grid place-content-center hover:bg-red-600"
            >
              <X size={21} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
