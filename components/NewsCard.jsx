import React from "react";

const NewsCard = ({ imgUrl, title, subtitle }) => {
  return (
    <div className="md:w-[250px] w-full  flex flex-col gap-6 ">
      <div className="w-[70px] h-[70px] bg-[#323F5D] flex items-center justify-center rounded-3xl">
        <img src={imgUrl} alt="advs" className="w-8" />
      </div>
      <p className=" font-bold text-[24px] leading-[30.24px] text-white">
        {title}
      </p>
      <p className="flex-1  font-normal text-[18px] text-[#B0B0B0] leading-[32.4px]">
        {subtitle}
      </p>
    </div>
  );
};

export default NewsCard;
