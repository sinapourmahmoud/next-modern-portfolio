"use client";

import Card from "@/components/Card";
import Title from "@/components/Title";
import { exploreWorlds } from "@/constants";
import styles from "@/styles";
import { useState } from "react";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/utils/motion";
const Explore = () => {
  const [selected, setSelected] = useState("world-1");
  return (
    <section
      className={`2xl:max-w-[1280px] w-full  mx-auto my-44 sm:px-16 px-6 ${styles.xPaddings}`}
    >
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        <Title text="The World" customStyle="text-center" />
        <motion.h1
          variants={fadeIn("up", "tween", 0.2, 0.8)}
          initial="hidden"
          whileInView="show"
          className="mt-[8px] font-bold md:text-[64px] text-[40px] text-white text-center my-7"
        >
          {" "}
          Choose the world you
          <br className="block md:hidden" />
          want
          <br className="hidden md:block" />
          to explore
        </motion.h1>
        <div className="min-h-[70vh] gap-5  w-full flex flex-col lg:flex-row">
          {exploreWorlds.map((item, index) => (
            <Card
              index={index}
              {...item}
              key={item.id}
              selected={selected}
              setSelected={setSelected}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Explore;
