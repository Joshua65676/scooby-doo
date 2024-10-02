import Image from "next/image";
import React from "react";
import {
  ScoobyHeroImage,
  BackgroundImageHero2,
  BackgroundImageHero1,
} from "@/assets";
import CopyTextField from "./ui/CopyTextField";

const Hero = () => {
  return (
    <section className="pt-[50px]">
      <div className="container max-w-6xl mx-auto w-full">
        <div className="flex flex-col gap-5 text-center items-center">
          <div className="absolute flex top-20 right-0">
            <Image src={BackgroundImageHero2} alt="" />
          </div>

          <div className="flex flex-col">
            <div className="">
              <h1 className="text-primary font-extrabold font-cinema uppercase text-[80px]">
                Scooby-doo
              </h1>
            </div>
            <div className="">
              <p className="text-primary text-[20px] font-medium font-larken leading-[26px]">
                Scooby-Doo is a goofy, snack-loving dog who helps solve spooky
                mysteries with his friends.
              </p>
            </div>
          </div>

          <div className="">
            <Image src={ScoobyHeroImage} alt="" className="w-[365px]" />
          </div>

          <div className=" relative -mt-36">
            <CopyTextField />
          </div>

          <div className="absolute top-[26rem] left-0 bottom-0">
            <Image src={BackgroundImageHero1} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
