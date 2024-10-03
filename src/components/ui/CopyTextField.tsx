"use client";

import { useState } from "react";
import { Button } from "./Button";

const CopyTextField = () => {
  const [text, setText] = useState("");

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      alert("Text copied to clipboard!");
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter Address Here...."
        className=" p-2 pl-5 h-[60px] xl:w-[650px] md:w-[650px] mx:w-[370px] rounded-2xl bg-primary text-tertiary uppercase font-cinema text-[14px]"
      />
      
        <Button
          onClick={handleCopy}
          className="w-[90px] h-[40px] bg-tertiary rounded-xl absolute -ml-28 mt-2"
        >
          <span className="text-primary text-[17px] font-bold font-cinema uppercase">Copy</span>
        </Button>
      
    </div>
  );
};

export default CopyTextField;
