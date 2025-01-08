import Card from "@/Components/Card";
import FlipCard from "@/Components/FlipCard";
import MobileProjectCard from "@/Components/MobileProjectCard";
import { BottomProjectCard, TopProjectCard } from "@/Components/ProjectCard";
import RecentWorks from "@/Components/RecentWorks";
import { Badge } from "@/Components/ui/badge";
import { Button } from "@/Components/ui/button";
import {
  Plus,
  Copy,
  CodeXml,
  Brush,
  MonitorSmartphone,
  Redo,
} from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <main>
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
            <div className="space-y-3 md:space-y-4 mt-4 md:mt-10">
              <h2 className="font-bold text-xl">I'm Clement Ojiguo</h2>
              <p className="text-sm max-w-md text-accent-foreground">
                I develop and improve websites and mobile applications to meet
                business requirements and satisfy customers.
              </p>
              <div className="flex items-center space-x-3">
                <Button className="divide-x">
                  Hire Me <Plus />
                </Button>
                <Button size={"sm"} variant={"ghost"} className="bg-background">
                  Copy Email <Copy />
                </Button>
              </div>
            </div>

            <div className="md:self-end space-y-4">
              <div className="h-36 w-36 md:h-40 md:w-40 rounded-full relative overflow-hidden bg-neutral-300 border-[10px]">
                <Image
                  src={"/assets/profile_pic.png"}
                  alt="chat app"
                  layout="fill"
                  objectFit="cover"
                  objectPosition={"center"}
                  quality={100}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className={"transform scale-x-[-1]"}
                />
              </div>
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
          <MobileProjectCard
            projectTitle={"Media X"}
            projectSubtitle={"SwiftUI, Firebase, KingFisher"}
            projectLink={"www.test"}
            projectPhotoUrl={"/assets/krist-ecommerce.png"}
          />
        </div>
        <div className="md:row-span-2 md:row-start-2 md:col-start-2 md:h-full h-[400px]">
          <FlipCard
            front={
              <TopProjectCard
                projectTitle={"Responsive UI design"}
                projectSubtitle={"HTML, CSS"}
                projectLink={"https://singlepageapp-beryl.vercel.app/"}
                projectPhotosUrl={[
                  "/assets/showcase_1.png",
                  "/assets/showcase.png",
                ]}
              />
            }
            back={
              <div className="px-6 py-8 rounded-xl border flex h-[400px] md:h-full flex-col items-center bg-muted">
                <div className="flex items-center justify-between w-full mb-8">
                  <h3 className="font-semibold md:text-lg">About Project</h3>

                  <button className="p-1 rounded-full h-8 w-8 bg-primary hover:bg-primary/90 transition-all duration-150 grid place-content-center">
                    <Redo />
                  </button>
                </div>
                <div className="flex-1 flex flex-col justify-between">
                  <p className="text-sm md:text-base text-left">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Facere tenetur consequatur quidem itaque reprehenderit,
                    commodi, aliquam adipisci quas enim dolore expedita tempora
                    nobis qui nam quis impedit delectus, consectetur amet!
                  </p>
                  <div className="flex items-center space-x-4">
                    <button className="bg-primary py-2 px-4 rounded-md h-9 flex items-center text-sm font-bold">
                      Visit Site
                    </button>
                    <button className="bg-background py-2 px-4 rounded-md h-9 flex items-center text-sm font-bold">
                      View Code
                    </button>
                  </div>
                </div>
              </div>
            }
          />
        </div>
        <div className="md:row-span-2 md:col-start-2 md:h-full h-[400px]">
          <FlipCard
            front={
              <BottomProjectCard
                projectTitle={"Krist Ecommerce"}
                projectSubtitle={"NextJs, Prisma, Firebase, TailwindCss"}
                projectLink={"www.test"}
                projectPhotosUrl={[
                  "/assets/krist-ecommerce.png",
                  "/assets/krist-ecommerce2.png",
                ]}
              />
            }
            back={
              <div className="px-6 py-8 rounded-xl border flex h-[400px] md:h-full flex-col items-center bg-muted">
                <div className="flex items-center justify-between w-full mb-8">
                  <h3 className="font-semibold md:text-lg">About Project</h3>

                  <button className="p-1 rounded-full h-8 w-8 bg-primary hover:bg-primary/90 transition-all duration-150 grid place-content-center">
                    <Redo />
                  </button>
                </div>
                <div className="flex-1 flex flex-col justify-between">
                  <p className="text-sm md:text-base text-left">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Facere tenetur consequatur quidem itaque reprehenderit,
                    commodi, aliquam adipisci quas enim dolore expedita tempora
                    nobis qui nam quis impedit delectus, consectetur amet!
                  </p>
                  <div className="flex items-center space-x-4">
                    <button className="bg-primary py-2 px-4 rounded-md h-9 flex items-center text-sm font-bold">
                      Visit Site
                    </button>
                    <button className="bg-background py-2 px-4 rounded-md h-9 flex items-center text-sm font-bold">
                      View Code
                    </button>
                  </div>
                </div>
              </div>
            }
          />
        </div>
      </div>
    </main>
  );
}
