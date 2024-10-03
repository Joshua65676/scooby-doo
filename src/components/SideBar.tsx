"use client";

import React, { useState } from "react";
import Link from "next/link";
// import { usePathname } from 'next/navigation'
import { navLinks, socialLinks } from "@/constants";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrClose } from "react-icons/gr";
import { Button } from "./ui/Button";

const SideBar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [active, setActive] = useState<string>("Home");
  //   const pathname = usePathname()

  const toggleIcon = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="py-3">
      <div className="mx:ml-1 sm:-ml-8 xm:pl-3" onClick={toggleIcon}>
        {isOpen ? (
          <GiHamburgerMenu className="w-[50px] h-[40px] text-primary" />
        ) : (
          <div className=" b-white/20 backdrop-blur-s shadow-l flex flex-col gap-[5rem] absolute right-5 top-6">
            <div className="relative pl-[50rem]">
              <GrClose className="w-[50px] h-[40px] text-primary" />
            </div>

            <div className="flex flex-col gap-[20px] items-center justify-center text-center relative left-0 right-0 bg-tertiary container max-w-6xl mx-auto w-[45rem] h-[15rem] pl-[10rem] xm:pl-[30rem] mx:pl-[32.5rem] sm:pl-[25rem]">
              <div className="xl:hidden md:hidden mx:flex xm:flex flex-col gap-5">
                {navLinks.map(({ id, title, link }) => (
                  <ul key={id}>
                    <Link href={link} onClick={() => setActive(title)}>
                      <span
                        className={`text-[14px] leading-[19.1px] font-semibold font-larken text-primary hover:text-white hover:underline ${
                          active === link
                            ? "border-b-2 border-primary h-10 gap-2"
                            : " "
                        }`}
                      >
                        {title}
                      </span>
                    </Link>
                  </ul>
                ))}
              </div>

              <div className="xl:hidden md:hidden mx:flex xm:flex items-center gap-[24px] py-5">
                {socialLinks.map(({ id, title, link }) => (
                  <ul key={id} className="">
                    <Link href={link}>
                      <Button className=" bg-primary rounded-xl h-[40px] w-[100px] ">
                        <span className="text-tertiary text-[13px] font-semibold font-cinema leading-[19.1px] uppercase">
                          {title}
                        </span>
                      </Button>
                    </Link>
                  </ul>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SideBar;
