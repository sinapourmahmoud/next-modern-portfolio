"use client";

import Title from "@/components/Title";
import styles from "@/styles";

const About = () => (
  <section className="2xl:max-w-[1280px] w-full mx-auto p-5">
    <Title text="About Metaversus" />
    <p className="mt-[8px] font-normal sm:text-[32px] text-[20px] md:px-6 text-center text-secondary-white">
      <span className="font-extrabold text-white">Metaverse</span> is a new
      thing in the future, where you can enjoy the virtual world by feeling like
      it's really real, you can feel what you feel in this metaverse world,
      because this is really the{" "}
      <span className="font-extrabold text-white">
        madness of the metaverse
      </span>{" "}
      of today, using only VR devices you can easily explore the metaverse world
      you want, turn your dreams into reality. Let's{" "}
      <span className="text-white font-extrabold">explore</span> the madness of
      the metaverse by scrolling down
    </p>
    <img
      src="/arrow-down.svg"
      alt="arrwo"
      className="w-4 mx-auto mt-4 md:mt-5"
    />
  </section>
);

export default About;
