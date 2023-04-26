"use client";

import Title from "@/components/Title";
import styles from "@/styles";

const World = () => (
  <section className="2xl:max-w-[1280px] w-full  mx-auto my-44   sm:px-16 px-6 ">
    <Title text="People on the World" customStyle=" text-center text-base" />
    <h2
      className={`mt-[8px] font-bold md:text-[64px] text-[40px] text-white text-center ${styles.xPaddings}`}
    >
      Track friends around you and invite them to play together in the same
      world
    </h2>
    <div className="w-full relative">
      <img
        src="/people-01.png"
        alt="person"
        className="w-10 absolute bottom-[30px] right-12 z-10 md:w-16 lg:right-24 lg:bottom-[80px]"
      />
      <img
        src="/people-02.png"
        alt="person"
        className="w-10 absolute top-[30px] left-12 z-10 md:w-16 lg:left-28"
      />
      <img
        src="/people-03.png"
        alt="person"
        className="w-10 absolute top-[30px] left-[50%] z-10 md:w-16 "
      />
      <img src="/map.png" className="w-full object-contain" alt="world" />
    </div>
  </section>
);

export default World;
