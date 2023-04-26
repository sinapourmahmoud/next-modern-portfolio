import React from "react";

const InsightCard = ({ imgUrl, title, subtitle }) => {
  return (
    <div className="flex  flex-col md:flex-row md:items-center gap-24">
      <img
        src={imgUrl}
        alt="insight"
        className="w-full md:w-[250px] h-[270px] rounded-3xl object-cover"
      />
      <div className="max-w-[750px] ">
        <h4 className="font-normal lg:text-[42px] text-[26px] text-white">
          {title}
        </h4>

        <p className="mt-[16px] font-normal lg:text-[20px] text-[14px] text-secondary-white">
          {subtitle}
        </p>
      </div>
      <div className="flex-1"></div>
      <div className="rounded-full border border-white p-8  items-center justify-center hidden md:flex">
        <img src="/arrow.svg" alt="arrow" className="w-10" />
      </div>
    </div>
  );
};

export default InsightCard;
