"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import ImageLoadingSkeleton from "./ImageLoadingSkeleton";

function Navbar() {
  const links: Array<string> = ["home", "about", "portfolio", "contact"];
  const [lastScrollY, setLastScrollY] = useState<Number>(0);
  const [isNavbarVisible, setIsNavbarVisible] = useState<boolean>(true);
  const [isImageReady, setIsImageReady] = useState(false);

  const handleScroll = () => {
    if (window.scrollY == 0 || window.scrollY < Number(lastScrollY)) {
      setIsNavbarVisible(true);
    } else {
      setIsNavbarVisible(false);
    }
    // if (window.scrollY > Number(lastScrollY)) {
    //   // User is scrolling down
    //   setIsNavbarVisible(false);
    // } else {
    //   // User is scrolling up
    //   setIsNavbarVisible(true);
    // }
    setLastScrollY(window.scrollY);
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
    <nav className="fixed z-50 left-0 right-0 top-0 px-2 sm:px-6 md:px-12 lg:px-16 max-w-7xl mx-auto">
      <div
        className={`${
          isNavbarVisible
            ? "translate-y-0 mt-3 md:mt-6"
            : "-translate-y-full mt-0"
        } md:flex md:items-center h-12 transition-all duration-300 ease-in-out transform`}
      >
        <Link href={"/"} className="hidden md:block">
          <div className="rounded-full overflow-hidden border-2 p-1 w-12 h-12">
            {!isImageReady && <ImageLoadingSkeleton />}
            <Image
              onLoad={() => setIsImageReady(true)}
              className="w-auto h-full"
              src={"/lightmode_logo.png"}
              alt="Clement Ojiguo logo"
              width={0}
              height={0}
              sizes="100vw"
              priority
            />
          </div>
        </Link>

        <div className="flex-1 h-full">
          <ul className="h-full rounded-full items-center font-kodchasan border bg-muted px-2 sm:px-6 md:px-12 flex justify-between">
            {links.map((link, index) => {
              return (
                <li key={index}>
                  <Link
                    href={`/${index == 0 ? "/" : link}`}
                    className="uppercase cursor-pointer p-2 hover:text-primary transition-all duration-150 text-sm md:text-base md:font-medium font-semibold"
                  >
                    {link}
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
