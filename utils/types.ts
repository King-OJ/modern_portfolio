import { z } from "zod";

export enum ProjectType {
  MobileApp = "MobileApp",
  WebApp = "WebApp",
}

export type ProjectDetails = {
  id: number;
  createdAt: Date;
  title: string;
  type: ProjectType;
  subtitle: string;
  photosUrl: string[];
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

const imgSchema = z
  .instanceof(File, { message: "Please provide the project photo" })
  .refine((file) => allowedImageMimeTypes.includes(file.type), {
    message: "The file must be an image (JPEG, PNG, GIF, or WebP).",
  })
  .refine((file) => file.size <= maxFileSize, {
    message: "The file must be 5MB or smaller.",
  });

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

  imageUrls: z
    .array(z.string().url("Invalid image URL"))
    .min(1, "At least one image is required"),
});
// .refine(
//   (data) => {
//     if (data.type == ProjectType.WebApp && data.images.length < 2) {
//       return false;
//     }
//     return true;
//   },
//   {
//     message:
//       "Please select exactly 2 project photo. First remove this photo and select exactly 2 photos",
//     path: ["images"],
//   }
// )
// .refine(
//   (data) => {
//     if (data.type == ProjectType.WebApp && data.images.length > 2) {
//       return false;
//     }
//     return true;
//   },
//   {
//     message: "Please select exactly 2 project photos",
//     path: ["images"],
//   }
// );

export type AddProjectType = z.infer<typeof addProjectSchema>;
