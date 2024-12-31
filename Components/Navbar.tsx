"use client";
import { useTheme } from "next-themes";
import Image from "next/image";
import ModeToggle from "./ToggleTheme";

import { Menubar, MenubarMenu, MenubarTrigger } from "./ui/menubar";

function Navbar() {
  const { theme } = useTheme();
  const links: Array<string> = ["about", "portfolio", "contact"];
  return (
    <div className="flex items-center h-12">
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
      <nav className="flex-1 h-full mr-6">
        <Menubar className="h-full rounded-full justify-between bg-muted px-12">
          {links.map((link, index) => {
            return (
              <MenubarMenu key={index}>
                <MenubarTrigger className="uppercase">{link}</MenubarTrigger>
              </MenubarMenu>
            );
          })}
        </Menubar>
      </nav>

      <ModeToggle />
    </div>
  );
}
export default Navbar;
