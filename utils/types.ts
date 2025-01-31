import { z } from "zod";

export enum ProjectType {
  MobileApp = "MobileApp",
  WebApp = "WebApp",
}

export type ProjectDetails = {
  id: number;
  createdAt: Date;
  title: string;
  type: ProjectType | string;
  subtitle: string;
  photosUrl: string[] | string;
  description: string;
  liveLink: string;
  codeLink: string;
};

export type NavLinks = {
  title: string;
  path: string;
};

const maxFileSize = 5 * 1024 * 1024; // 5MB
const allowedImageMimeTypes = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/webp",
];

export const addProjectSchema = z
  .object({
    title: z
      .string()
      .min(3, { message: "Title must be at least 3 characters long" }),

    subtitle: z
      .string()
      .min(3, { message: "Subtitle must be at least 3 characters long" }),

    description: z
      .string()
      .min(20, { message: "Description must be at least 20 characters long" }),

    liveLink: z.string().url({ message: "Enter project live link" }),

    codeLink: z.string().url({ message: "Enter project code link" }),

    type: z.nativeEnum(ProjectType),

    mobileImage: z
      .instanceof(File, { message: "Please provide the mobile app photo" })
      .refine((file) => allowedImageMimeTypes.includes(file.type), {
        message: "The file must be an image (JPEG, PNG, GIF, or WebP).",
      })
      .refine((file) => file.size <= maxFileSize, {
        message: "The file must be 5MB or smaller.",
      })
      .optional(),
    webImage1: z
      .instanceof(File, { message: "Please provide the website photo1" })
      .refine((file) => allowedImageMimeTypes.includes(file.type), {
        message: "The file must be an image (JPEG, PNG, GIF, or WebP).",
      })
      .refine((file) => file.size <= maxFileSize, {
        message: "The file must be 5MB or smaller.",
      })
      .optional(),
    webImage2: z
      .instanceof(File, { message: "Please provide the website photo2" })
      .refine((file) => allowedImageMimeTypes.includes(file.type), {
        message: "The file must be an image (JPEG, PNG, GIF, or WebP).",
      })
      .refine((file) => file.size <= maxFileSize, {
        message: "The file must be 5MB or smaller.",
      })
      .optional(),
  })
  .refine(
    (data) => {
      if (data.type == ProjectType.MobileApp && data.mobileImage == undefined) {
        return false;
      }
      return true;
    },
    {
      message: "Please upload a project photo",
      path: ["mobileImage"],
    }
  )
  .refine(
    (data) => {
      if (data.type == ProjectType.WebApp && data.webImage1 == undefined) {
        return false;
      }
      return true;
    },
    {
      message: "Please upload project photo 1",
      path: ["webImage1"],
    }
  )
  .refine(
    (data) => {
      if (data.type == ProjectType.WebApp && data.webImage2 == undefined) {
        return false;
      }
      return true;
    },
    {
      message: "Please upload project photo 2",
      path: ["webImage2"],
    }
  );

export type AddProjectType = z.infer<typeof addProjectSchema>;
