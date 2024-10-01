import React from "react";
import { AboutImage } from "@/assets";
import { Button } from "./ui/Button";
import Image from "next/image";

const About: React.FC = () => {
  return (
    <section className="py-[85px] mt-16 bg-primary">
      <div className="container max-w-6xl mx-auto w-full h-[400px]">
        <div className="flex flex-col items-center gap-[20px]">
          <h3 className="text-[59px] leading-[39.2px] text-center text-tertiary font-bold uppercase">
            About
          </h3>

          <div className="flex flex-row gap-40 py-[94.5px] w-full relative">
            <div className="flex flex-col gap-10">
              <p className="leading-[26.5px] -tracking-[2.5%] max-w-[705px] text-[16px] text-tertiary font-medium">
                Scooby-Doo, the world’s most lovable Great Dane, is known for
                his goofy antics, endless appetite for &quot;Scooby
                Snacks,&quot; and unexpected bravery. Though terrified of ghosts
                and monsters, Scooby&apos;s clumsy curiosity often puts him
                right in the middle of the mystery, where he accidentally
                uncovers the clues that solve the case. Alongside his best
                friend Shaggy and the Mystery Inc. gang, Scooby shows that even
                the most unlikely hero can outsmart villains and bring the truth
                to light—one snack at a time.
              </p>

              <div className="flex flex-row gap-5">
                <Button className="rounded-xl text-primary bg-tertiary font-bold text-[17px]">
                  Dexscreener
                </Button>
                <Button className="rounded-xl text-primary bg-tertiary font-bold text-[17px]">
                  Dexview
                </Button>
              </div>
            </div>

            <div className="relative -top-10">
              <Image src={AboutImage} alt="" className="w-[300px]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
