export enum ProjectType {
  mobileApp,
  webApp,
}

export type ProjectDetails = {
  title: string;
  type?: ProjectType;
  subtitle: string;
  photosUrl: string[] | string;
  desc?: string;
  liveLink?: string;
  codeLink?: string;
};

export type NavLinks = {
  title: string;
  path: string;
};
