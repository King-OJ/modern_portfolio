import Card from "@/Components/Card";
import ProjectCard from "@/Components/ProjectCard";
import RecentWorks from "@/Components/RecentWorks";
import { Badge } from "@/Components/ui/badge";
import { Button } from "@/Components/ui/button";
import { Plus, Copy, CodeXml, Brush, MonitorSmartphone } from "lucide-react";

export default function Home() {
  return (
    <main className="">
      <section className="my-4">
        <div className="bg-muted px-6 py-10 rounded-xl border">
          <div className="flex justify-between">
            <div className="">
              <h3 className="text-accent-foreground uppercase font-semibold">
                Software Developer
              </h3>

              <div className="space-y-4 mt-10">
                <h2 className="font-bold text-xl">I'm Clement Ojiguo</h2>
                <p className="text-sm max-w-md text-accent-foreground">
                  I develop and improve websites and mobile applications to meet
                  business requirements and satisfy customers.
                </p>
                <div className="flex items-center space-x-3">
                  <Button className="divide-x">
                    Hire Me <Plus />
                  </Button>
                  <Button
                    size={"sm"}
                    variant={"ghost"}
                    className="bg-background"
                  >
                    Copy Email <Copy />
                  </Button>
                </div>
              </div>
            </div>
            <div className="self-start">
              <Badge
                className="rounded-full bg-background"
                variant={"secondary"}
              >
                <div className="flex items-center space-x-2">
                  <Badge className="p-[2px]" variant={"default"} />
                  <p className="uppercase">Available for job</p>
                </div>
              </Badge>
            </div>
          </div>
        </div>
      </section>
      <div className="gap-4 grid md:grid-cols-2 ">
        <div>
          <RecentWorks />
        </div>

        <div className="space-y-4 md:col-start-2">
          <Card text="Web and Mobile Development" icon={<CodeXml />} />
          <div className="grid grid-flow-col grid-cols-2 gap-4">
            <Card text="UI Design" icon={<Brush />} />
            <Card
              text="UX Implementation"
              icon={<MonitorSmartphone />}
              borderLeft
            />
          </div>
        </div>

        <div className="">
          <ProjectCard
            projectTitle={"iOS Social App"}
            projectSubtitle={"SwiftUI, Swift, KingFisher, Firebase"}
            projectLink={"www.test"}
            projectPhotos={"/assets/mobile_app.png"}
          />
        </div>
        <div className="">
          <ProjectCard
            projectTitle={"iOS Social App"}
            projectSubtitle={"SwiftUI, Swift, KingFisher, Firebase"}
            projectLink={"www.test"}
            projectPhotos={"/assets/mobile_app2.png"}
          />
        </div>
      </div>

      {/* 
      <div className="my-4">
            <ProjectCard
              projectTitle={"iOS Social App"}
              projectSubtitle={"SwiftUI, Swift, KingFisher, Firebase"}
              projectLink={"www.test"}
              projectPhotos={"/assets/mobile_app.png"}
            />
          </div>
      */}
    </main>
  );
}
