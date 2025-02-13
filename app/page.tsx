import React from "react";
import Card from "@/Components/Card";
import FlipCard from "@/Components/FlipCard";
import MobileProjectCard from "@/Components/MobileProjectCard";
import ProfilePhoto from "@/Components/ProfilePhoto";
import { BottomProjectCard, TopProjectCard } from "@/Components/ProjectCard";
import ProjectInfo from "@/Components/ProjectInfo";
import RecentWorks from "@/Components/RecentWorks";
import { Badge } from "@/Components/ui/badge";
import { Button } from "@/Components/ui/button";
import prisma from "@/utils/db";
import { Plus, Copy, CodeXml, Brush, MonitorSmartphone } from "lucide-react";
import Link from "next/link";
import { Prisma } from "@prisma/client";

export default async function Home() {
  const projects = await prisma.project.findMany({
    where: {
      showcase: true,
    } as Prisma.ProjectWhereInput,
    orderBy: {
      createdAt: "desc",
    },
  });

  const webProjects = projects.filter((project) => project.type == "WebApp");
  const mobileProjects = projects.filter(
    (project) => project.type == "MobileApp",
  );

  return (
    <main className="mt-14 md:mt-12">
      <section className="my-4">
        <div className="bg-muted px-6 py-10 rounded-xl border space-y-2">
          <div className="flex-col-reverse md:flex-row flex md:justify-between">
            <h3 className="text-accent-foreground uppercase text-sm font-semibold mt-3 md:mt-0">
              Software Developer
            </h3>
            <Badge
              className="rounded-full bg-background max-w-fit px-4"
              variant={"secondary"}
            >
              <div className="flex items-center space-x-2">
                <Badge className="p-[2px]" variant={"default"} />
                <p className="uppercase">Available for job</p>
              </div>
            </Badge>
          </div>
          <div className="flex flex-col-reverse md:flex-row md:justify-between">
            <div className="mt-4 md:mt-10">
              <h2 className="font-bold text-xl mb-2">
                I&apos;m Clement Ojiguo
              </h2>
              <p className="text-sm md:text-base max-w-md text-accent-foreground">
                I develop and improve websites and mobile applications to meet
                business requirements and satisfy customers.
              </p>
              <div className="flex items-center space-x-3 mt-4">
                <Link
                  href={"/contact"}
                  className=" btn flex items-center bg-primary"
                >
                  <span className="h-full flex items-center pr-2">Hire Me</span>
                  <span className="border-l-2 h-full flex items-center pl-2">
                    <Plus size={19} />
                  </span>
                </Link>
                <Button size={"sm"} variant={"ghost"} className="bg-background">
                  Copy Email <Copy />
                </Button>
              </div>
            </div>

            <div className="md:self-end space-y-4">
              <ProfilePhoto />
            </div>
          </div>
        </div>
      </section>
      <div className="grid grid-cols-1 md:grid-cols-2 md:grid-rows-[200px_200px_200px_200px_200px] gap-4">
        <div className="row-span-2">
          <RecentWorks />
        </div>

        <div className="h-full grid grid-rows-[100px_100px] md:grid-rows-2 gap-4 md:row-span-1">
          <Card
            content={
              <div className="px-2 text-center flex flex-col items-center space-y-2">
                <span>
                  <CodeXml />
                </span>
                <p className="text-sm font-medium sm:text-base">
                  Web & Mobile Development
                </p>
              </div>
            }
          />
          <div className="grid grid-flow-col grid-cols-2 gap-4">
            <Card
              content={
                <div className="px-2 text-center flex flex-col items-center space-y-2">
                  <span>
                    <Brush />
                  </span>
                  <p className="text-sm font-medium sm:text-base">
                    Turn UI design to code
                  </p>
                </div>
              }
            />
            <Card
              content={
                <div className="px-2 text-center flex flex-col items-center space-y-2">
                  <span>
                    <MonitorSmartphone />
                  </span>
                  <p className="text-sm font-medium sm:text-base">
                    Best UX concepts
                  </p>
                </div>
              }
              borderLeft
            />
          </div>
        </div>

        <div className="md:col-start-1 md:row-span-3 h-[600px] md:h-full">
          <MobileProjectCard project={mobileProjects[0]} />
        </div>
        <div className="md:row-span-2 md:row-start-2 md:col-start-2 md:h-full h-[400px]">
          <FlipCard
            front={<TopProjectCard project={webProjects[0]} />}
            back={<ProjectInfo project={webProjects[0]} />}
          />
        </div>
        <div className="md:row-span-2 md:col-start-2 md:h-full h-[400px]">
          <FlipCard
            front={<BottomProjectCard project={webProjects[1]} />}
            back={<ProjectInfo project={webProjects[1]} />}
          />
        </div>
      </div>
    </main>
  );
}
