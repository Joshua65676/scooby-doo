import React from "react";
import { BgImage1, BgImage2 } from "@/assets";
import Image from "next/image";

const Footer: React.FC = () => {
  return (
    <section className="py-[85px] bg-primary">
      <main className="container max-w-6xl mx-auto w-full xl:h-[350px] md:h-[350px]">
        <div className="flex flex-col gap-5 text-center items-center">
          <div className="flex absolute left-0 mx:pt-8 xl:pt-0 md:pt-0">
            <Image src={BgImage1} alt="" className="md:w-[380px] xl:w-[400px] mx:w-[250px] " />
          </div>

          <div className="flex flex-col xl:gap-[13rem] md:gap-[13rem] mx:gap-[4rem]">
            <div className="flex flex-col gap-2">
              <h2 className="text-tertiary font-extrabold font-cinema uppercase xl:text-[72px] md:text-[55px] mx:text-[40px]">
                Scooby-doo
              </h2>
              <p className="text-tertiary xl:text-[18px] md:text-[18px] mx:text-[12px] font-medium font-larken leading-[26px]">
                Scooby turns every mystery into an adventure, proving that even
                the most unlikely hero can save the day.
              </p>
            </div>
            <div className="md:pt-10 xl:pt-0">
                <span className="text-tertiary xl:text-[18px] md:text-[18px] mx:text-[10px] font-bold font-cinema leading-[26px]">
                   &copy; 2024 by scooby-doo . All Rights reserved!
                </span>
            </div>
          </div>

          <div className="absolute flex right-0 mx:pt-8 xl:pt-0 md:pt-0">
            <Image src={BgImage2} alt="" className="md:w-[380px] xl:w-[400px] mx:w-[250px]" />
          </div>
        </div>
      </main>
    </section>
  );
};

export default Footer;
