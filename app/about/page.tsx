import GradientLine from "@/Components/GradientLine";
import ProfilePhoto from "@/Components/ProfilePhoto";
import { Button } from "@/Components/ui/button";
import {
  Boxes,
  Brush,
  CodeXml,
  Copy,
  MonitorSmartphone,
  Plus,
} from "lucide-react";
import React from "react";

function AboutPage() {
  return (
    <main className="mt-10 md:mt-12 ">
      <div className="flex flex-col justify-center min-h-[80vh]">
        <h2 className="text-2xl font-extrabold my-4 md:my-8">About Me</h2>
        <div className="flex flex-col-reverse md:flex-row md:items-center gap-4 md:gap-8 mb-10">
          <p className="leading-7 flex-1 mb-4 md:mb-0">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Exercitationem maxime, eos dolorum saepe repellat voluptatibus atque
            numquam iste provident earum cum deserunt neque aut perferendis
            aperiam possimus consequatur tempore dignissimos nemo voluptates
            odio facilis quasi quis fuga. Necessitatibus hic vel itaque amet
            quaerat earum nihil, suscipit natus tenetur sapiente quibusdam!
          </p>
          <ProfilePhoto />
        </div>
        <ul className="my-5  grid">
          <li className="relative before:hidden md:before:block flex flex-col md:flex-row items-start before:content-[''] before:absolute before:w-[2px] before:h-24 before:bottom-0  before:left-1/2 before:bg-gradient-to-t before:from-primary before:to-transparent">
            <div className="box md:pr-14">
              <span>
                <CodeXml size={30} />
              </span>
              <h5 className="font-bold text-sm sm:text-base md:text-lg lg:text-xl">
                Web & Mobile Development
              </h5>
              <p className="text-sm leading-6 md:leading-7">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
                distinctio magnam dolore qui commodi enim deserunt modi.
                Mollitia adipisci corporis eaque ad porro repellat cupiditate,
                suscipit consequuntur commodi quasi corrupti!
              </p>
            </div>
            <GradientLine />
            <div className="box md:pl-14">
              <span>
                <Brush size={30} />
              </span>
              <h5 className="font-bold text-sm sm:text-base md:text-lg lg:text-xl">
                Turn UI design to code
              </h5>
              <p className="text-sm leading-6 md:leading-7">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
                distinctio magnam dolore qui commodi enim deserunt modi.
                Mollitia adipisci corporis eaque ad porro repellat cupiditate,
                suscipit consequuntur commodi quasi corrupti!
              </p>
            </div>
          </li>
          <GradientLine />
          <li className="relative flex flex-col md:flex-row items-start before:content-[''] before:absolute before:w-[2px] before:hidden md:before:block before:h-24 before:top-0  before:left-1/2 before:bg-gradient-to-b before:from-primary before:to-transparent">
            <div className="box md:pr-14">
              <span>
                <MonitorSmartphone size={30} />
              </span>
              <h5 className="font-bold text-sm sm:text-base md:text-lg lg:text-xl">
                Best UX concepts
              </h5>
              <p className="text-sm leading-6 md:leading-7">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
                distinctio magnam dolore qui commodi enim deserunt modi.
                Mollitia adipisci corporis eaque ad porro repellat cupiditate,
                suscipit consequuntur commodi quasi corrupti!
              </p>
            </div>
            <GradientLine />
            <div className="box md:pl-14">
              <span>
                <Boxes size={30} />
              </span>
              <h5 className="font-bold text-sm sm:text-base md:text-lg lg:text-xl">
                Ready to collaborate
              </h5>
              <p className="text-sm leading-6 md:leading-7">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
                distinctio magnam dolore qui commodi enim deserunt modi.
                Mollitia adipisci corporis eaque ad porro repellat cupiditate,
                suscipit consequuntur commodi quasi corrupti!
              </p>
            </div>
          </li>
        </ul>
        <div className="flex items-center justify-center space-x-3 my-8">
          <button className="bg-primary flex items-center">
            Hire Me <Plus />
          </button>
          <Button size={"sm"} variant={"ghost"} className="bg-background">
            Copy Email <Copy />
          </Button>
        </div>
      </div>
    </main>
  );
}

export default AboutPage;
