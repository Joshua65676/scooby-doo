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
          <div className="absolute flex xl:top-20 md:top-16 right-0">
            <Image src={BackgroundImageHero2} alt="" className="md:w-[290px] xl:w-[350px]" />
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

          <div className="absolute xl:top-[26rem] md:top-[29rem] left-0 bottom-0">
            <Image src={BackgroundImageHero1} alt="" className="md:w-[280px] xl:w-[350px]"/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
