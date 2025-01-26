"use client";

import { addProjectSchema, AddProjectType, ProjectType } from "@/utils/types";
import FloatingLabel from "./FloatingLabel";
import ImagePreview from "./ImagePreview";
import { useToast } from "@/hooks/use-toast";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";

function AddProjectForm() {
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const {
    register,
    watch,

    handleSubmit,
    formState: { errors },
  } = useForm<AddProjectType>({
    resolver: zodResolver(addProjectSchema),
    defaultValues: {
      title: "",
      subtitle: "",
      description: "",
      liveLink: "",
      codeLink: "",
      type: ProjectType.WebApp,
    },
  });

  function onSubmit(values: AddProjectType) {
    console.log(values);
    console.log("submittted");
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
          error={errors.title}
        />
        <FloatingLabel
          type="text"
          label="project subtitle"
          name="subtitle"
          register={register}
          error={errors.subtitle}
        />
        <FloatingLabel
          type="text"
          label="live link"
          name="liveLink"
          register={register}
          error={errors.liveLink}
        />
        <FloatingLabel
          type="text"
          label="code link"
          name="codeLink"
          register={register}
          error={errors.codeLink}
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
        <div
          className={
            typeState == ProjectType.WebApp
              ? "relative grid grid-cols-2 gap-2"
              : "relative grid"
          }
        >
          {typeState == ProjectType.MobileApp ? (
            <div className="max-w-lg mx-auto w-full">
              <ImagePreview />
            </div>
          ) : (
            <>
              <ImagePreview />
              <ImagePreview />
            </>
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
            className="outline-none placeholder:text-sm text-[16px] md:text-sm text-foreground border-2 p-2 h-24 md:h-32 border-accent-foreground rounded-xl bg-transparent w-full"
            {...register("description")}
            placeholder="Enter atleast 20 characters to describe this project"
          ></textarea>
          {errors.description && (
            <p className="text-sm text-red-500 mt-1">
              {errors.description.message}
            </p>
          )}
        </div>
        <button
          type="submit"
          className={
            isPending
              ? "bg-primary/50 w-full text-white font-bold relative"
              : "w-full bg-primary text-white font-bold relative"
          }
        >
          {isPending ? "Loading..." : "Add Project"}
        </button>
      </div>
    </form>
  );
}

export default AddProjectForm;
