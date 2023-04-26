import React from "react";

const Info = ({ index, item }) => {
  return (
    <div className="flex items-center gap-8">
      <div className="bg-[#323F5D] w-[70px] h-[70px] text-white font-semibold text-xl rounded-3xl flex items-center justify-center">
        0 {index + 1}
      </div>
      <p className="flex-1 font-normal text-[18px] text-[#B0B0B0] leading-[32.4px]">
        {item}
      </p>
    </div>
  );
};

export default Info;
