"use client";

import { useState } from "react";
import { Button } from "./Button";

const CopyTextField = () => {
  const walletAddress = "vnmYuE9s9PU0dQwXss8YlXx0i92OWMYmFZrDGnjENwDJ";
  const [text, setText] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(walletAddress);
      setText(true);
      setTimeout(() => setText(false), 2000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  return (
    <div>
      <div className=" p-5 pr-24 xl:h-[60px] md:h-[60px] mx:h-[100px] xl:w-[660px] md:w-[660px] mx:w-[370px] focus:outline-none rounded-2xl bg-primary text-tertiary uppercase font-cinema text-[14px]">
        <div className="mx:w-[215px] xl:w-[650px] md:w-[650px]">
          <span className="mx:break-all flex text-left">{walletAddress}</span>
        </div>
      </div>

      <Button
        onClick={handleCopy}
        className="w-[95px] h-[40px] bg-tertiary rounded-xl absolute z-40 mx:ml-20 xl:ml-[14rem] md:ml-[14rem] xl:-mt-[3.2rem] md:-mt-[3.2rem] mx:-mt-[4.5rem]"
      >
        <span className="text-primary text-[17px] font-bold font-cinema uppercase">
          {text ? "Copyied" : "Copy"}
        </span>
      </Button>
    </div>
  );
};

export default CopyTextField;
