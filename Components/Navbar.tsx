"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import ImageLoadingSkeleton from "./ImageLoadingSkeleton";
import { usePathname } from "next/navigation";
import { NavLinks } from "@/utils/types";

function Navbar() {
  const links: Array<NavLinks> = [
    { title: "home", path: "/" },
    { title: "about", path: "/about" },
    { title: "portfolio", path: "/portfolio" },
    { title: "contact", path: "/contact" },
  ];
  const [lastScrollY, setLastScrollY] = useState<number>(0);
  const [isNavbarVisible, setIsNavbarVisible] = useState<boolean>(true);
  const [isImageReady, setIsImageReady] = useState(false);

  const pathname = usePathname();

  const handleScroll = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY < 150) {
        setIsNavbarVisible(true);
      } else {
        if (window.scrollY > Number(lastScrollY)) {
          // User is scrolling down
          setIsNavbarVisible(false);
        } else {
          // User is scrolling up
          setIsNavbarVisible(true);
        }
        setLastScrollY(window.scrollY);
      }
    }
  };

  useEffect(() => {
    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <nav className="fixed z-50 left-0 right-0 top-0 px-4 sm:px-6 md:px-12 lg:px-16 max-w-7xl mx-auto">
      <div
        className={`${
          isNavbarVisible
            ? "translate-y-0 mt-3 md:mt-6"
            : "-translate-y-full mt-0"
        } md:flex md:items-center h-12 transition-all duration-300 ease-in-out transform`}
      >
        <Link href={"/"} className="hidden md:block">
          <div className="rounded-full overflow-hidden border-2 w-12 h-12">
            {!isImageReady && <ImageLoadingSkeleton />}
            <Image
              onLoad={() => setIsImageReady(true)}
              className="w-full h-full object-contain"
              src={"/lightmode_logo.png"}
              alt="Clement Ojiguo logo"
              width={0}
              height={0}
              sizes="100vw"
            />
          </div>
        </Link>

        <div className="flex-1 h-full">
          <ul className="h-full rounded-full items-center font-kodchasan border bg-muted px-3 sm:px-6 md:px-12 flex justify-between">
            {links.map((link, index) => {
              return (
                <li key={index}>
                  <Link
                    href={link.path}
                    className={`${
                      pathname == link.path && "text-primary"
                    } uppercase cursor-pointer p-2 hover:text-primary transition-all duration-150 text-sm md:text-base md:font-medium font-semibold`}
                  >
                    {link.title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
