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
  imageUrls: string[];
  description: string;
  liveLink: string;
  codeLink: string;
  showcase: boolean;
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

  liveLink: z.string().url({ message: "Enter project live link" }),

  codeLink: z.string().url({ message: "Enter project code link" }),

  type: z.nativeEnum(ProjectType),

  showcase: z.boolean(),

  imageUrls: z
    .array(z.string().url("Invalid image URL"))
    .min(1, "At least one image is required"),
});

export interface PaginatedResponse {
  projects: ProjectDetails[];
  total: number;
  currentPage: number;
  totalPages: number;
  hasNextPage: boolean;
  hasPrevPage: boolean;
}

export const contactFormSchema = z.object({
  name: z
    .string()
    .min(3, { message: "Name must be at least 3 characters long" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  message: z
    .string()
    .min(3, { message: "Please provide a more detailed message" }),
});

export type ContactFormType = z.infer<typeof contactFormSchema>;

export type AddProjectType = z.infer<typeof addProjectSchema>;
