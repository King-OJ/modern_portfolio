"use client";

import { addProjectSchema, ProjectType } from "@/utils/types";
import FloatingLabel from "./FloatingLabel";
import SingleImagePreview from "./ImagePreview";
import { useToast } from "@/hooks/use-toast";
import { FieldValues, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import axios from "axios";

function AddProjectForm() {
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const [loading, setLoading] = useState(false);

  const {
    register,
    watch,
    trigger,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FieldValues>({
    resolver: zodResolver(addProjectSchema),
    defaultValues: {
      title: "Loop Studios",
      subtitle: "HTML",
      description: "sadsdadsdsadsdsassdaddasdssddssaddasadsadsa",
      liveLink: "https://www.link.com",
      codeLink: "https://www.link.com",
      type: ProjectType.WebApp,
      mobileImage: undefined,
      webImage1: undefined,
      webImage2: undefined,
    },
    mode: "all",
  });
  async function uploadImageToCloudinary(image: File) {
    const response = await axios.post(
      "https://api.cloudinary.com/v1_1/your_cloud_name/upload",
      image
    );
  }

  async function onSubmit(values: FieldValues) {
    console.log(values);
    try {
      setLoading(true);
    } catch (error) {}
  }

  const { mutate, isPending } = useMutation({});

  const typeState = watch("type");

  return (
    <form
      encType="multipart/form-data"
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
            defaultValue={ProjectType.WebApp}
            className="focus:outline-none py-2.5 border-b-2 block px-0 w-full bg-transparent text-accent-foreground border-accent-foreground"
          >
            <option value={ProjectType.WebApp}>Web App</option>
            <option value={ProjectType.MobileApp}>Mobile App</option>
          </select>
        </div>

        <div className="max-w-3xl mx-auto w-full relative">
          {typeState == ProjectType.MobileApp ? (
            <div className="max-w-md mx-auto">
              <SingleImagePreview
                setValue={setValue}
                trigger={trigger}
                register={register}
                errors={errors}
                name="mobileImage"
              />
            </div>
          ) : (
            <div className="grid grid-cols-2 gap-4">
              <SingleImagePreview
                setValue={setValue}
                trigger={trigger}
                register={register}
                errors={errors}
                name="webImage1"
              />
              <SingleImagePreview
                setValue={setValue}
                trigger={trigger}
                register={register}
                errors={errors}
                name="webImage2"
              />
            </div>
          )}
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
            isPending
              ? "bg-primary/50 w-full max-w-md mx-auto text-white font-bold relative"
              : "w-full bg-primary max-w-md mx-auto text-white font-bold relative"
          }
          disabled={loading}
        >
          {isPending ? "Loading..." : "Add Project"}
        </button>
      </div>
    </form>
  );
}

export default AddProjectForm;
