import prisma from "./db";
import { AddProjectType, ProjectDetails } from "./types";

export async function getProjects(): Promise<ProjectDetails[] | null> {
  try {
    const projects = await prisma.project.findMany();
    // console.log(projects);
    return projects;
  } catch (error) {
    console.log(error);
    return [];
  }
}

export async function addProject(project: AddProjectType) {}
