"use client";

import InsightCard from "@/components/InsightCard";
import Title from "@/components/Title";
import { insights } from "@/constants";

const Insights = () => (
  <section className="2xl:max-w-[1280px] w-full relative  mx-auto my-44   sm:px-16 px-6 ">
    <Title text="Inside" customStyle="text-center text-lg" />
    <h2 className="mt-[8px] mb-16 font-bold md:text-[64px] text-[40px] text-white text-center">
      Insight about metaverse
    </h2>
    <div className="gradient-04 " />
    <div className="flex flex-col gap-7">
      {insights.map((item, index) => (
        <InsightCard {...item} key={index} />
      ))}
    </div>
  </section>
);

export default Insights;
