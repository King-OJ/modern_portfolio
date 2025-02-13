"use client";

import { addProjectSchema, AddProjectType, ProjectType } from "@/utils/types";
import FloatingLabel from "./FloatingLabel";
import ImagePreview from "./ImagePreview";
import { useToast } from "@/hooks/use-toast";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useCallback, useEffect, useState } from "react";
import axios from "axios";
import { useDropzone } from "react-dropzone";
import { Checkbox } from "./ui/checkbox";

export interface ImagePreviewType {
  file: File;
  preview: string;
}

function AddProjectForm() {
  const { toast } = useToast();
  const [isUploading, setIsUploading] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [imgError, setImgError] = useState<string>("");

  const [imagePreviews, setImagePreviews] = useState<ImagePreviewType[]>([]);

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
    reset,
  } = useForm<AddProjectType>({
    resolver: zodResolver(addProjectSchema),
    defaultValues: {
      title: "",
      subtitle: "",
      description: "",
      liveLink: "",
      codeLink: "",
      type: ProjectType.WebApp,
      imageUrls: [],
      showcase: false,
    },
  });

  // Watch imageUrls to help with debugging
  const imageUrls = watch("imageUrls");
  const showcaseValue = watch("showcase");
  const typeValue = watch("type");

  const removeImage = (index: number) => {
    setImagePreviews((prevs) => {
      const newPreviews = [...prevs];
      URL.revokeObjectURL(newPreviews[index].preview);
      newPreviews.splice(index, 1);
      return newPreviews;
    });

    const newImageUrls = [...imageUrls];
    newImageUrls.splice(index, 1);
    setValue("imageUrls", newImageUrls, {
      shouldValidate: true,
      shouldDirty: true,
      shouldTouch: true,
    });
  };

  const uploadToServer = async (file: File): Promise<string> => {
    const formData = new FormData();
    formData.append("file", file);

    return axios
      .post(`/api/upload-img`, formData)
      .then((response) => response.data.url)
      .catch((error) => {
        throw new Error(`Failed to upload image: ${error.message}`);
      });
  };

  const onDrop = useCallback(
    async (acceptedFiles: File[]) => {
      setImgError("");
      if (typeValue == ProjectType.WebApp && acceptedFiles.length !== 2) {
        setImgError("Please upload exactly 2 photos for Web Project Type");
        return;
      }
      const newPreviews = acceptedFiles.map((file) => ({
        file,
        preview: URL.createObjectURL(file),
      }));

      setImagePreviews((prevs) => [...prevs, ...newPreviews]);

      // Immediately start uploading to Cloudinary
      setIsUploading(true);
      setUploadProgress(0);

      try {
        const uploadPromises = acceptedFiles.map((file) =>
          uploadToServer(file),
        );
        const totalFiles = acceptedFiles.length;
        let completedUploads = 0;

        const urls = await Promise.all(
          uploadPromises.map((promise) =>
            promise.then((url) => {
              completedUploads++;
              setUploadProgress((completedUploads / totalFiles) * 100);
              return url;
            }),
          ),
        );

        setValue("imageUrls", [...imageUrls, ...urls], {
          shouldValidate: true,
          shouldDirty: true,
          shouldTouch: true,
        });
      } catch (error) {
        console.log("Error submitting form:", error);
      } finally {
        setIsUploading(false);
        setUploadProgress(0);
      }
    },
    [setValue, imageUrls, typeValue],
  );

  const { isDragActive, getRootProps, getInputProps } = useDropzone({
    accept: {
      "image/*": [".jpeg", ".jpg", ".png", ".webp"],
    },
    multiple: typeValue == ProjectType.WebApp,
    maxFiles: typeValue == ProjectType.MobileApp ? 1 : 2,
    onDrop,
  });

  async function onSubmit(values: AddProjectType) {
    setIsSubmitting(true);
    await axios
      .post(`/api/add-project`, values)
      .then((result) => {
        toast({ title: `${result.data.title} added succesfully!` });
        setIsSubmitting(false);
      })
      .catch((error) => {
        toast({
          variant: "destructive",
          title: `Failed to add project: ${error.message}`,
        });
        setIsSubmitting(false);
        throw new Error(`Failed to add project: ${error.message}`);
      });

    reset();
    imagePreviews.forEach((preview) => {
      URL.revokeObjectURL(preview.preview);
    });
    setImagePreviews([]);
  }

  // const { mutate, isPending } = useMutation({});

  // Cleanup previews on unmount
  useEffect(() => {
    return () => {
      imagePreviews.forEach((preview) => {
        URL.revokeObjectURL(preview.preview);
      });
    };
  }, [imagePreviews]);

  return (
    <form
      className="text-black h-full rounded-xl p-6 flex items-center"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="space-y-10 w-full">
        <FloatingLabel
          type="text"
          label="project title"
          name="title"
          register={register}
          errors={errors}
        />
        <FloatingLabel
          type="text"
          label="project subtitle"
          name="subtitle"
          register={register}
          errors={errors}
        />
        <FloatingLabel
          type="text"
          label="live link"
          name="liveLink"
          register={register}
          errors={errors}
        />
        <FloatingLabel
          type="text"
          label="code link"
          name="codeLink"
          register={register}
          errors={errors}
        />

        <div className="relative">
          <label htmlFor="type" className="text-accent-foreground">
            Choose project type
          </label>

          <select
            {...register("type")}
            id="type"
            className="focus:outline-none py-2.5 border-b-2 block px-0 w-full bg-transparent text-accent-foreground border-accent-foreground"
          >
            <option value={ProjectType.WebApp}>Web App</option>
            <option value={ProjectType.MobileApp}>Mobile App</option>
          </select>
        </div>

        <div className="max-w-3xl mx-auto w-full relative">
          <div>
            <label
              htmlFor="images"
              className="text-accent-foreground text-sm mb-2 block"
            >
              Project Image
            </label>
            <ImagePreview
              removeImage={removeImage}
              isDragActive={isDragActive}
              errors={errors}
              isUploading={isUploading}
              getRootProps={getRootProps}
              getInputProps={getInputProps}
              imagePreviews={imagePreviews}
            />
            {imgError && <div className="mt-4 text-red-500">{imgError}</div>}
          </div>
        </div>

        {/* Upload progress */}
        {isUploading && (
          <div className="mt-4 relative">
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div
                className="bg-primary h-2.5 rounded-full"
                style={{ width: `${uploadProgress}%` }}
              ></div>
            </div>
            <p className="text-sm text-white mt-1">
              Uploading... {Math.round(uploadProgress)}%
            </p>
          </div>
        )}

        <div className="flex items-center space-x-2 relative">
          <Checkbox
            checked={showcaseValue}
            onCheckedChange={(checked: boolean | "indeterminate") => {
              setValue("showcase", checked === true, { shouldValidate: true });
            }}
          />
          <label
            htmlFor="showcase"
            className="text-sm text-white font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Showcase this project
          </label>
        </div>

        <div className="relative">
          <label
            htmlFor="description"
            className="text-sm pb-2.5 text-accent-foreground block"
          >
            Project description
          </label>
          <textarea
            id="description"
            className="outline-none placeholder:text-sm text-[16px] md:text-sm text-foreground border-2 p-3 h-24 md:h-32 border-accent-foreground rounded-xl bg-transparent w-full"
            {...register("description")}
            placeholder="Describe this project"
          ></textarea>
          {errors.description && (
            <p className="text-sm text-red-500 mt-1">
              {errors.description.message?.toString()}
            </p>
          )}
        </div>

        <button
          type="submit"
          className={
            isUploading
              ? "bg-primary/50 w-full max-w-md mx-auto text-white font-bold relative"
              : "w-full bg-primary max-w-md mx-auto text-white font-bold relative"
          }
          disabled={isUploading || isSubmitting}
        >
          {isUploading ? "Uploading image..." : "Add Project"}
        </button>
      </div>
    </form>
  );
}

export default AddProjectForm;
