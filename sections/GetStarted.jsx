"use client";

import Info from "@/components/Info";
import Title from "@/components/Title";
import { motion } from "framer-motion";
import { startingFeatures } from "@/constants";
import styles from "@/styles";
import { fadeIn, planetVariants } from "@/utils/motion";

const GetStarted = () => (
  <section
    className={`2xl:max-w-[1280px] w-full my-24 mx-auto   sm:px-16 px-6 flex flex-col md:flex-row gap-8 items-center ${styles.xPaddings}`}
  >
    <div className="flex-[1.2]">
      <motion.img
        src="/get-started.png"
        alt="get-start"
        className="w-full md:w-[76%]"
        variants={planetVariants("left")}
        initial="hidden"
        whileInView="show"
      />
    </div>
    <motion.div
      className="flex flex-col gap-3 flex-[1]"
      variants={fadeIn("left", "tween", 0.2, 1.8)}
      initial="hidden"
      whileInView="show"
    >
      <Title text="How Metaversus Works" customStyle="" />
      <h2 className=" font-bold md:text-[64px] text-[40px] text-white undefined">
        Get started with just a few clicks
      </h2>
      <div className="flex flex-col gap-3">
        {startingFeatures.map((item, index) => (
          <Info index={index} key={index} item={item} />
        ))}
      </div>
    </motion.div>
  </section>
);

export default GetStarted;
