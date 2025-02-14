import CopyEmailButton from "@/Components/CopyEmailButton";
import GradientLine from "@/Components/GradientLine";
import ProfilePhoto from "@/Components/ProfilePhoto";
import {
  Boxes,
  Brush,
  CodeXml,
  MonitorSmartphone,
  Plus,
} from "lucide-react";
import Link from "next/link";
import React from "react";

function AboutPage() {

  const currentYear = new Date().getFullYear()
  const experience = 9;
  const experienceYear = 2025;

    function getExperienceYears() {
    if (currentYear > experienceYear) {
      const diffInYears = currentYear - experienceYear;
      return experience + diffInYears;
    }
    return experience;
  }

  return (
    <main className="mt-14 md:mt-12">
      <div className="flex flex-col justify-center min-h-[80vh] text-center md:text-left">
        <h2 className="text-2xl font-extrabold my-4 md:my-8 ">About Me</h2>
        <div className="flex flex-col-reverse items-center md:flex-row md:items-center gap-4 md:gap-8 mb-10">
          <p className="leading-7 flex-1 mb-4 md:mb-0 ">
            I am a website designer and developer from Nigeria, Africa. I currently have <b>{getExperienceYears()} years</b> of hands-on experience in building website applications and creating functionalities to simplify complex features with MERN Stack and Next JS. I have worked with some of the best tools to optimize, speed up and secure websites.
          </p>
          <ProfilePhoto />
        </div>
        <ul className="my-5  grid">
          <li className="relative before:hidden md:before:block grid md:grid-cols-2 before:content-[''] before:absolute before:w-[2px] before:h-24 before:bottom-0  before:left-1/2 before:bg-gradient-to-t before:from-primary before:to-transparent">
            <div className="about_box md:pr-14">
              <span>
                <CodeXml size={30} />
              </span>
              <h5 className="font-bold text-sm sm:text-base md:text-lg lg:text-xl">
                Web & Mobile Development
              </h5>
              <p className="text-sm leading-6 md:leading-7">
                I implement both frontend and backend development for websites with security for all api and pages routes. I implement API rate limiting and user role based access to data with authorization. I offer modern authentication UX and use cookies to transfer secure data on the websites.
              </p>
            </div>
            <GradientLine />
            <div className="about_box md:pl-14">
              <span>
                <Brush size={30} />
              </span>
              <h5 className="font-bold text-sm sm:text-base md:text-lg lg:text-xl">
                Turn UI design to code
              </h5>
              <p className="text-sm leading-6 md:leading-7">
               I convert UI/UX figma designs into code with proper search engine optimization, page and api routing structure and ensure responsiveness of all the pages. I set up a custom configurations for all the styles on the websites to ensure that the UI can be updated easily for changes.
              </p>
            </div>
          </li>
          <GradientLine />
          <li className="relative grid md:grid-cols-2 before:content-[''] before:absolute before:w-[2px] before:hidden md:before:block before:h-24 before:top-0  before:left-1/2 before:bg-gradient-to-b before:from-primary before:to-transparent">
            <div className="about_box md:pr-14">
              <span>
                <MonitorSmartphone size={30} />
              </span>
              <h5 className="font-bold text-sm sm:text-base md:text-lg lg:text-xl">
                Best developer concepts
              </h5>
              <p className="text-sm leading-6 md:leading-7">
                With great attention to detail and documentations, I can effectively use Data Models, Object Relational Models such as Mongoose and Prisma, variety of State management and validation tools including Zod, Tanstack Query, Zustand and Redux Toolkit. I'm experienced in API routing, API calls and testing with Postman, setting proper HTTP requests and responses, middlewares, authentication and authorization.
              </p>
            </div>
            <GradientLine />
            <div className="about_box md:pl-14">
              <span>
                <Boxes size={30} />
              </span>
              <h5 className="font-bold text-sm sm:text-base md:text-lg lg:text-xl">
                Education
              </h5>
              <p className="text-sm leading-6 md:leading-7">
                I am a Computer Science Graduate, B.Sc from the prestigious University of Abuja, Nigeria. I am also a Computer Science Graduate OND from Delta State Polytechnic Oghara, Nigeria, having completed high school and earning the relevant high school certificates. Education has no end, so I am consistently on a learning curve.
              </p>
            </div>
          </li>
        </ul>
        <div className="flex items-center justify-center space-x-3 my-8">
          <Link href={"/contact"} className=" btn flex items-center bg-primary">
            <span className="h-full flex items-center pr-2">Hire Me</span>
            <span className="border-l-2 h-full flex items-center pl-2">
              <Plus size={19} />
            </span>
          </Link>
          <CopyEmailButton />
        </div>
      </div>
    </main>
  );
}

export default AboutPage;
