import React from "react";
import { LuZap } from "react-icons/lu";

const Logo = () => {
  return (
    <div className="flex items-center justify-center w-14 h-14 bg-linear-to-b from-[#00FF88] to-[#00D4FF] text-black rounded-lg">
      <LuZap size={32}/>
    </div>
  );
};

export default Logo;
