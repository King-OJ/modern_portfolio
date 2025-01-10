"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

function Navbar() {
  const links: Array<string> = ["about", "portfolio", "contact"];
  const [lastScrollY, setLastScrollY] = useState<Number>(0);
  const [isNavbarVisible, setIsNavbarVisible] = useState<boolean>(true);

  const handleScroll = () => {
    if (window.scrollY > Number(lastScrollY)) {
      // User is scrolling down
      setIsNavbarVisible(false);
    } else {
      // User is scrolling up
      setIsNavbarVisible(true);
    }
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
    <nav className="fixed z-50 right-6 left-6 top-0 md:left-12 md:right-12">
      <div
        className={`${
          isNavbarVisible
            ? "translate-y-0 mt-3 md:mt-6"
            : "-translate-y-full mt-0"
        } md:flex md:items-center h-12 transition-all duration-300 ease-in-out transform`}
      >
        <Link href={"/"} className="hidden md:block h-full">
          <div className="rounded-full border-2 p-1 h-full">
            <Image
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
          <ul className="h-full rounded-full items-center border bg-muted px-6 md:px-12 flex justify-between">
            {links.map((link, index) => {
              return (
                <li key={index}>
                  <Link
                    href={`/${link}`}
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
