import React from "react";
import Link from "next/link";
import Card from "./Card";
import { Badge } from "./ui/badge";

function Footer() {
  const socialLinks: Array<{ title: string; href: string }> = [
    { title: "GitHub", href: "#" },
    { title: "LinkedIn", href: "#" },
    { title: "Whatsapp", href: "#" },
  ];
  return (
    <div className="mt-6">
      <footer className="h-20">
        <Card
          content={
            <div className="flex flex-col-reverse justify-center items-center h-full md:flex-row w-full md:justify-between px-4">
              <div className="flex justify-between items-center w-full mt-4 md:mt-0">
                <p className="text-xs md:text-base font-extrabold">
                  King OJ{" "}
                  <span className="text-xs md:text-sm">
                    &copy; {new Date().getFullYear().toString()}
                  </span>
                </p>
                <ul className="space-x-4 md:flex text-sm font-semibold hidden">
                  {socialLinks.map((link, index) => {
                    return (
                      <li
                        key={index}
                        className={index == 0 ? "text-primary" : ""}
                      >
                        <Link
                          href={link.href}
                          className="hover:text-primary transition-all duration-150"
                        >
                          {link.title}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
                <Badge
                  className="rounded-full bg-background max-w-fit px-4"
                  variant={"secondary"}
                >
                  <div className="flex items-center space-x-2">
                    <Badge className="p-[2px]" variant={"default"} />
                    <p className="uppercase text-[10px] md:text-xs">
                      Available for job
                    </p>
                  </div>
                </Badge>
              </div>

              <ul className="space-x-4 flex text-xs md:text-sm font-semibold md:hidden">
                {socialLinks.map((link, index) => {
                  return (
                    <li
                      key={index}
                      className={index == 0 ? "text-primary" : ""}
                    >
                      <Link href={link.href}>{link.title}</Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          }
          borderLeft
          reducedGradient
        />
      </footer>
    </div>
  );
}

export default Footer;
