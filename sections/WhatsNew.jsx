"use client";

import NewsCard from "@/components/NewsCard";
import Title from "@/components/Title";
import { newFeatures } from "@/constants";
import styles from "@/styles";
import { motion } from "framer-motion";
import { fadeIn, planetVariants } from "@/utils/motion";

const WhatsNew = () => (
  <section
    className={`2xl:max-w-[1280px] w-full  mx-auto   sm:px-16 px-6 flex flex-col md:flex-row gap-6 items-center ${styles.xPaddings}`}
  >
    <motion.div
      className="flex flex-col gap-9 flex-[1.2]"
      variants={fadeIn("right", "tween", 0.2, 1.8)}
      initial="hidden"
      whileInView="show"
    >
      <Title text="How Metaversus Works" />
      <h2 className="font-bold md:text-[64px] text-[40px] text-white ">
        What's new about Metaversus?
      </h2>
      <div className="flex flex-wrap gap-8">
        {newFeatures.map((item, index) => (
          <NewsCard key={index} {...item} />
        ))}
      </div>
    </motion.div>
    <div className="flex-1">
      <motion.img
        src="/whats-new.png"
        alt="circle"
        className="lg:w-[80%] w-[90%] text-center"
        variants={planetVariants("right")}
        initial="hidden"
        whileInView="show"
      />
    </div>
  </section>
);

export default WhatsNew;
