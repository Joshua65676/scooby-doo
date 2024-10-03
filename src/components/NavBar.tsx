'use client'

import React, { useState } from "react";
import { Logo } from "@/assets";
import { navLinks, socialLinks } from "@/constants";
import Link from "next/link";
import Image from "next/image";
import { Button } from "./ui/Button";
import SideBar from "./SideBar";
// import { usePathname } from 'next/navigation'

const NavBar: React.FC = () => {
  const [active, setActive] = useState<string>("Home");
  // const pathname = usePathname()

  

  return (
    <nav>
      <main className="container max-w-7xl mx-auto w-full">
        <div className="flex w-full justify-between items-center py-4">

          <div className="xl:flex md:flex mx:hidden xm:hidden items-center gap-[36px]">
            {navLinks.map(({ id, title, link }) => (
              <ul key={id}>
                <Link href={link} onClick={() => setActive(title)}>
                  <span className={`text-[14px] leading-[19.1px] font-semibold font-larken text-primary hover:text-white hover:underline ${
                    active === link ? "border-b-2 border-primary h-10 gap-2"  : " " }`}>
                    {title}
                  </span>
                </Link>
              </ul>
            ))}
          </div>

          <Link href="/">
            <Image src={Logo} alt="" className="w-[30px] h-[60px]" />
          </Link>

          <div className="xl:flex md:flex mx:hidden xm:hidden items-center gap-[24px] py-5">
            {socialLinks.map(({ id, title, link }) => (
              <ul key={id} className="">
                <Link href={link}>
                  <Button className=" bg-primary rounded-xl h-[40px] w-[100px] ">
                   <span className="text-tertiary text-[13px] font-semibold font-cinema leading-[19.1px] uppercase">{title}</span>
                  </Button>
                </Link>
              </ul>
            ))}
          </div>

          <div className="xl:hidden md:hidden mx:flex xm:flex">
            <SideBar />
          </div>
        </div>
      </main>
    </nav>
  );
};

export default NavBar;
