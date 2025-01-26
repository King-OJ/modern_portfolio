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

export const addProjectSchema = z.object({
  title: z
    .string()
    .min(3, { message: "Title must be at least 3 characters long" }),

  subtitle: z
    .string()
    .min(3, { message: "Subtitle must be at least 3 characters long" }),

  description: z
    .string()
    .min(20, { message: "Description must be at least 20 characters long" }),

  liveLink: z.string().url({ message: "Field must be a URL" }),

  codeLink: z.string().url({ message: "Field must be a URL" }),

  type: z.nativeEnum(ProjectType),
});

export type AddProjectType = z.infer<typeof addProjectSchema>;
