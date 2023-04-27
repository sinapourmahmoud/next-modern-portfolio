"use client";

import Title from "@/components/Title";
import styles from "@/styles";
import { fadeIn } from "@/utils/motion";
import { motion } from "framer-motion";
const World = () => (
  <section className="2xl:max-w-[1280px] w-full  mx-auto my-44 relative   sm:px-16 px-6 ">
    <Title text="People on the World" customStyle=" text-center text-base" />
    <motion.h2
      variants={fadeIn("up", "tween", 0.2, 0.6)}
      initial="hidden"
      whileInView="show"
      className={`mt-[8px] font-bold md:text-[64px] text-[40px] text-white text-center ${styles.xPaddings}`}
    >
      Track friends around you and invite them to play together in the same
      world
    </motion.h2>
    <motion.div
      className="w-full relative mt-10"
      variants={fadeIn("up", "tween", 0.6, 0.6)}
      initial="hidden"
      whileInView="show"
    >
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
    </motion.div>
  </section>
);

export default World;
