import { Button } from "@/Components/ui/button";
import { Brush, CodeXml, Copy, MonitorSmartphone, Plus } from "lucide-react";
import React from "react";

function AboutPage() {
  return (
    <main className="mt-10 md:mt-12 ">
      <div className="flex flex-col justify-center min-h-[80vh]">
        <h2 className="text-2xl font-extrabold">About Me</h2>
        <div className="my-8 leading-7">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Exercitationem maxime, eos dolorum saepe repellat voluptatibus atque
          numquam iste provident earum cum deserunt neque aut perferendis
          aperiam possimus consequatur tempore dignissimos nemo voluptates odio
          facilis quasi quis fuga. Necessitatibus hic vel itaque amet quaerat
          earum nihil, suscipit natus tenetur sapiente quibusdam!
        </div>
        <ul className="my-5 md:my-10 grid md:grid-cols-3 gap-8">
          <li className="space-y-4 md:space-y-6">
            <span>
              <CodeXml size={40} />
            </span>
            <h5 className="font-bold text-base md:text-xl">
              Web & Mobile Development
            </h5>
            <p className="text-sm leading-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
              distinctio magnam dolore qui commodi enim deserunt modi. Mollitia
              adipisci corporis eaque ad porro repellat cupiditate, suscipit
              consequuntur commodi quasi corrupti!
            </p>
          </li>
          <li className="space-y-4 md:space-y-6">
            <span>
              <Brush size={40} />
            </span>
            <h5 className="font-bold text-base md:text-xl">
              Turn UI design to code
            </h5>
            <p className="text-sm leading-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
              distinctio magnam dolore qui commodi enim deserunt modi. Mollitia
              adipisci corporis eaque ad porro repellat cupiditate, suscipit
              consequuntur commodi quasi corrupti!
            </p>
          </li>
          <li className="space-y-4 md:space-y-6">
            <span>
              <MonitorSmartphone size={40} />
            </span>
            <h5 className="font-bold text-base md:text-xl">Best UX concepts</h5>
            <p className="text-sm leading-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
              distinctio magnam dolore qui commodi enim deserunt modi. Mollitia
              adipisci corporis eaque ad porro repellat cupiditate, suscipit
              consequuntur commodi quasi corrupti!
            </p>
          </li>
        </ul>
        <div className="flex items-center justify-center space-x-3 mt-4">
          <Button className="divide-x">
            Hire Me <Plus />
          </Button>
          <Button size={"sm"} variant={"ghost"} className="bg-background">
            Copy Email <Copy />
          </Button>
        </div>
      </div>
    </main>
  );
}

export default AboutPage;
