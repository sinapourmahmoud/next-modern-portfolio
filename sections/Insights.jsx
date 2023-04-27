"use client";

import InsightCard from "@/components/InsightCard";
import Title from "@/components/Title";
import { insights } from "@/constants";
import { fadeIn } from "@/utils/motion";
import { motion } from "framer-motion";
const Insights = () => (
  <section className="2xl:max-w-[1280px] w-full relative  mx-auto my-44   sm:px-16 px-6 ">
    <Title text="Inside" customStyle="text-center text-lg" />
    <motion.h2
      variants={fadeIn("up", "tween", 0.2, 0.6)}
      initial="hidden"
      whileInView="show"
      className="mt-[8px] mb-16 font-bold md:text-[64px] text-[40px] text-white text-center"
    >
      Insight about metaverse
    </motion.h2>
    <div className="gradient-04 " />
    <div className="flex flex-col gap-7">
      {insights.map((item, index) => (
        <InsightCard {...item} key={index} index={index} />
      ))}
    </div>
  </section>
);

export default Insights;
