import Image from "next/image";
import React from "react";
import { TokenomicsImg, Line1, Line2, Line3, Line4 } from "@/assets";
import { Button } from "./ui/Button";
const Tokenomics: React.FC = () => {
  return (
    <section className="py-[85px] bg-secondary">
      <main className="container max-w-6xl mx-auto w-full">
        <div className="flex flex-col items-center gap-[20px]">
          <h3 className="text-[59px] leading-[39.2px] text-center text-primary font-bold uppercase">
            Tokenomics
          </h3>

          <div className="">
            <div className="flex flex-row justify-between gap-[00] relative top-[80px]">
              <div className="flex flex-row pl-32">
                <Button className="bg-primary rounded-3xl w-[180px] h-[80px]">
                  <span className="text-tertiary font-bold text-[20px] uppercase">
                    $scooby
                  </span>
                </Button>
                <Image src={Line1} alt="" />
              </div>

              <div className="flex flex-row-reverse pl-56 top-10 relative">
                <Button className="bg-primary rounded-3xl w-[300px] h-[81px]">
                  <span className="text-tertiary font-bold text-[20px] uppercase">
                    LP token burned
                  </span>
                </Button>
                <Image src={Line3} alt="" />
              </div>
            </div>

            <div className="pl-[20rem] flex items-center">
              <Image src={TokenomicsImg} alt="" />
            </div>

            <div className="flex flex-row justify-between gap-[200p] relative -top-[80px]">
              <div className="flex flex-row -ml-10">
                <Button className="bg-primary rounded-3xl w-[300px] h-[114px]">
                  <span className="text-tertiary font-bold text-[20px] uppercase w-[300px] text-left pl-6 leading-[26.5px] -tracking-[2.5%]">
                    500,000,ooo,ooo <br /> token supply
                  </span>
                </Button>
                <Image src={Line2} alt="" />
              </div>
              <div className="flex flex-row-reverse relative -top-12 pr-10">
                <Button className="bg-primary rounded-3xl w-[170px] h-[81px]">
                  <span className="text-tertiary font-bold text-[20px] uppercase">
                    no Taxes
                  </span>
                </Button>
                <Image src={Line4} alt="" />
              </div>
            </div>
          </div>

          <div className="">
            <Button className="bg-tokeno w-[217px] h-[65px] rounded-3xl">
              <span className="text-primary text-[20px] font-bold uppercase">
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
