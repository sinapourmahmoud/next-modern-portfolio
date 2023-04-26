import React from "react";

const Card = ({ id, imgUrl, title, selected, setSelected }) => {
  return (
    <div
      onClick={() => {
        setSelected(id);
      }}
      className={`${
        selected === id ? "flex-[1.2]" : "lg:flex-[0.3]"
      } lg:h-[650px] h-[45px]  rounded-3xl w-full relative cursor-pointer transition-all duration-300`}
    >
      <img
        src={imgUrl}
        alt="poster"
        className="w-full h-full object-cover rounded-3xl"
      />
      {selected === id ? (
        <div className="absolute bottom-0 left-0 right-0 p-4 w-full top-0 lg:top-auto h-full  lg:h-[30%] bg-[rgba(0,0,0,0.5)] rounded-3xl lg:rounded-t-none flex flex-col gap-3 justify-between lg:justify-start">
          <div className="p-3 glassmorphism rounded-xl w-12 flex items-center lg:w-16 lg:p-4">
            <img src="/headset.svg" className="w-full  " alt="headset" />
          </div>
          <p className="font-normal text-[16px] leading-[20.16px] text-white uppercase">
            ENTER METAVESE
          </p>
          <h2 className=" font-semibold mt-4   text-[24px] text-white">
            {title}
          </h2>
        </div>
      ) : (
        <p className="font-semibold sm:text-[26px] text-[18px] text-white absolute z-0 lg:bottom-20 lg:rotate-[-90deg] lg:origin-[0,0] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] lg:translate-0 lg:top-auto">
          {title}
        </p>
      )}
    </div>
  );
};

export default Card;
