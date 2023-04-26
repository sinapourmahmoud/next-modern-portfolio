"use client";

import NewsCard from "@/components/NewsCard";
import Title from "@/components/Title";
import { newFeatures } from "@/constants";
import styles from "@/styles";

const WhatsNew = () => (
  <section
    className={`2xl:max-w-[1280px] w-full  mx-auto   sm:px-16 px-6 flex flex-col md:flex-row gap-6 items-center ${styles.xPaddings}`}
  >
    <div className="flex flex-col gap-9 flex-[1.2]">
      <Title text="How Metaversus Works" />
      <h2 className="font-bold md:text-[64px] text-[40px] text-white ">
        What's new about Metaversus?
      </h2>
      <div className="flex flex-wrap gap-8">
        {newFeatures.map((item, index) => (
          <NewsCard key={index} {...item} />
        ))}
      </div>
    </div>
    <div className="flex-1">
      <img
        src="/whats-new.png"
        alt="circle"
        className="lg:w-[80%] w-[90%] text-center"
      />
    </div>
  </section>
);

export default WhatsNew;
