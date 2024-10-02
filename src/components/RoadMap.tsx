import React from "react";
import { roadMap } from "@/constants";
import Image from "next/image";

const RoadMap: React.FC = () => {
  return (
    <section className="py-[85px]">
      <main className="container max-w-6xl mx-auto w-full h-[450px]">
        <div className="flex flex-col items-center gap-[20px]">
          <h3 className="text-[59px] leading-[39.2px] text-center text-primary font-bold font-cinema uppercase">
            RoadMap
          </h3>

          <div className="flex items-center justify-center gap-[80px] relative -top-20">
           {roadMap.map(({id, phase, span1, span2, bgImg}) => (
             <div key={id}>
               <div className="bg-secondary w-[350px] h-[235px]  border-8 border-primary rounded-3xl ml-5 relative top-52">
                 <div className="text-center bg-primary w-[139px] h-[60px] p-2 border-8 border-secondary rounded-3xl relative -top-6 flex flex-col ml-24">
                    <span className="text-secondary text-[14px] font-bold font-cinema uppercase">{phase}</span>
                 </div>
                 <div className="text-primary font-bold font-cinema text-[14px] p-5 pl-14 flex flex-col gap-2">
                    <span className="">{span1}</span>
                    <span className="">{span2}</span>
                 </div>
               </div>
               <div className="">
                  <Image src={bgImg} alt="" className="" />
               </div>
             </div>
           ))}
          </div>
        </div>
      </main>
    </section>
  );
};

export default RoadMap;
