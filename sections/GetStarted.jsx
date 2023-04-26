"use client";

import Info from "@/components/Info";
import Title from "@/components/Title";
import { startingFeatures } from "@/constants";
import styles from "@/styles";

const GetStarted = () => (
  <section
    className={`2xl:max-w-[1280px] w-full my-24 mx-auto   sm:px-16 px-6 flex flex-col md:flex-row gap-8 items-center ${styles.xPaddings}`}
  >
    <div className="flex-[1.2]">
      <img
        src="/get-started.png"
        alt="get-start"
        className="w-full md:w-[76%]"
      />
    </div>
    <div className="flex flex-col gap-3 flex-[1]">
      <Title text="How Metaversus Works" customStyle="" />
      <h2 className=" font-bold md:text-[64px] text-[40px] text-white undefined">
        Get started with just a few clicks
      </h2>
      <div className="flex flex-col gap-3">
        {startingFeatures.map((item, index) => (
          <Info index={index} key={index} item={item} />
        ))}
      </div>
    </div>
  </section>
);

export default GetStarted;
