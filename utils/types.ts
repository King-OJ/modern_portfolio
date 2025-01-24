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
