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
        <div className="flex flex-col xl:gap-5 md:gap-5 xm:gap-10 text-center items-center">
          <div className="absolute flex xl:top-20 md:top-16 mx:top-20 right-0">
            <Image src={BackgroundImageHero2} alt="" className="md:w-[290px] xl:w-[350px] mx:w-[200px]" />
          </div>

          <div className="flex flex-col">
            <div className="">
              <h1 className="text-primary font-extrabold font-cinema uppercase xl:text-[80px] md:text-[80px] mx:text-[64px]">
                Scooby-doo
              </h1>
            </div>
            <div className="">
              <p className="text-primary mx:text-[17.5px] mx:text-left xl:text-[20px] md:text-[20px] md:text-center font-medium font-larken leading-[26px]">
                Scooby-Doo is a goofy, snack-loving dog who helps solve spooky
                mysteries with his friends.
              </p>
            </div>
          </div>

          <div className="">
            <Image src={ScoobyHeroImage} alt="" className="w-[365px]" />
          </div>

          <div className=" relative xl:-mt-36 md:-mt-28 mx:mt-10 xm:-mt-5">
            <CopyTextField />
          </div>

          <div className="absolute xl:top-[26rem] md:top-[29rem] mx:top-[44rem] xm:top-[46rem] left-0 bottom-0">
            <Image src={BackgroundImageHero1} alt="" className="md:w-[280px] xl:w-[350px] mx:w-[200px]"/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
