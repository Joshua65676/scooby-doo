import React from "react";
import { BgImage1, BgImage2 } from "@/assets";
import Image from "next/image";

const Footer: React.FC = () => {
  return (
    <section className="py-[85px] bg-primary">
      <main className="container max-w-6xl mx-auto w-full h-[350px]">
        <div className="flex flex-col gap-5 text-center items-center">
          <div className="absolute flex left-0">
            <Image src={BgImage1} alt="" className="md:w-[380px] xl:w-[400px]" />
          </div>

          <div className="flex flex-col gap-[13rem]">
            <div className="flex flex-col gap-2">
              <h2 className="text-tertiary font-extrabold font-cinema uppercase xl:text-[72px] md:text-[55px]">
                Scooby-doo
              </h2>
              <p className="text-tertiary text-[18px] font-medium font-larken leading-[26px]">
                Scooby turns every mystery into an adventure, proving that even
                the most unlikely hero can save the day.
              </p>
            </div>
            <div className="md:pt-10 xl:pt-0">
                <span className="text-tertiary text-[18px] font-bold font-cinema leading-[26px]">
                   &copy; 2024 by scooby-doo . All Rights reserved!
                </span>
            </div>
          </div>

          <div className="absolute flex right-0">
            <Image src={BgImage2} alt="" className="md:w-[380px] xl:w-[400px]" />
          </div>
        </div>
      </main>
    </section>
  );
};

export default Footer;
