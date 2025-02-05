// import { log } from "console";
// import cloudinary from "./cloudinary";
import prisma from "./db";
import { AddProjectType, ProjectDetails, ProjectType } from "./types";

// export async function getProjects(): Promise<ProjectDetails[] | null> {
//   try {
//     const projects = await prisma.project.findMany();
//     // console.log(projects);
//     return projects;
//   } catch (error) {
//     console.log(error);
//     return [];
//   }
// }

// export async function addProject(project: AddProjectType) {
//   let data: AddProjectType;
//   if (project) {
//     if (project.type == ProjectType.MobileApp) {
//       project = { ...project, webImage1: undefined, webImage2: undefined };
//       const { mobileImage } = project;
//       try {
//         console.log(mobileImage);

//         // const uploadImgResponse = await cloudinary.v2.uploader.upload(mobileImage!)
//       } catch (error) {
//         console.log(error);
//       }
//     } else {
//       project = { ...project, mobileImage: undefined };
//     }
//   }
// }
