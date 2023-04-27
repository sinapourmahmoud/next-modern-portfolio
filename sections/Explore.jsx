"use client";

import Card from "@/components/Card";
import Title from "@/components/Title";
import { exploreWorlds } from "@/constants";
import styles from "@/styles";
import { useState } from "react";

const Explore = () => {
  const [selected, setSelected] = useState("world-1");
  return (
    <section
      className={`2xl:max-w-[1280px] w-full  mx-auto my-44 sm:px-16 px-6 ${styles.xPaddings}`}
    >
      <Title text="The World" customStyle="text-center" />
      <h1 className="mt-[8px] font-bold md:text-[64px] text-[40px] text-white text-center my-7">
        {" "}
        Choose the world you
        <br className="block md:hidden" />
        want
        <br className="hidden md:block" />
        to explore
      </h1>
      <div className="min-h-[70vh] gap-5  w-full flex flex-col lg:flex-row">
        {exploreWorlds.map((item) => (
          <Card
            {...item}
            key={item.id}
            selected={selected}
            setSelected={setSelected}
          />
        ))}
      </div>
    </section>
  );
};

export default Explore;
