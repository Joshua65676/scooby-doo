import Image from "next/image";
import React from "react";
import { TokenomicsImg, Line1, Line2, Line3, Line4 } from "@/assets";
import { Button } from "./ui/Button";
const Tokenomics: React.FC = () => {
  return (
    <section className="py-[85px] bg-secondary">
      <main className="container max-w-6xl mx-auto w-full">
        <div className="flex flex-col items-center gap-[20px]">
          <h3 className="text-[59px] leading-[39.2px] text-center text-primary font-bold font-cinema uppercase">
            Tokenomics
          </h3>

          <div className="">
            <div className="flex flex-row justify-between gap-[00] relative top-[80px]">
              <div className="flex flex-row xl:pl-32 md:pl-28">
                <Button className="bg-primary rounded-3xl w-[180px] h-[80px]">
                  <span className="text-tertiary font-bold font-cinema text-[17px] uppercase">
                    $scooby
                  </span>
                </Button>
                <Image src={Line1} alt="" className="md:hidden xl:flex"/>
              </div>

              <div className="flex flex-row-reverse pl-56 top-10 relative">
                <Button className="bg-primary rounded-3xl w-[300px] h-[81px]">
                  <span className="text-tertiary font-bold font-cinema text-[17px] uppercase">
                    LP token burned
                  </span>
                </Button>
                <Image src={Line3} alt="" className="md:hidden xl:flex" />
              </div>
            </div>

            <div className="xl:pl-[22rem] md:pl-[16rem] md:pt-16 xl:pt-3 flex  items-center">
              <Image src={TokenomicsImg} alt="" className="md:w-[300px] xl:w-[400px]" />
            </div>

            <div className="flex flex-row justify-between relative xl:-top-[80px] md:-top-[40px]">
              <div className="flex flex-row xl:-ml-10">
                <Button className="bg-primary rounded-3xl w-[300px] h-[114px]">
                  <span className="text-tertiary font-bold font-cinema text-[17px] uppercase w-[300px] text-left pl-6 leading-[26.5px] -tracking-[2.5%]">
                    500,000,ooo,ooo <br /> token supply
                  </span>
                </Button>
                <Image src={Line2} alt="" className="md:hidden xl:flex" />
              </div>
              <div className="flex flex-row-reverse relative xl:-top-10 xl:pr-10 md:pr-28">
                <Button className="bg-primary rounded-3xl w-[170px] h-[81px]">
                  <span className="text-tertiary font-bold font-cinema text-[17px] uppercase">
                    no Taxes
                  </span>
                </Button>
                <Image src={Line4} alt="" className="md:hidden xl:flex" />
              </div>
            </div>
          </div>

          <div className="">
            <Button className="bg-tokeno w-[217px] h-[65px] rounded-3xl">
              <span className="text-primary text-[20px] font-bold font-cinema uppercase">
                Buy $SCOOBY
              </span>
            </Button>
          </div>
        </div>
      </main>
    </section>
  );
};

export default Tokenomics;
