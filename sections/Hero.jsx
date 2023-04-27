"use client";
import Header from "@/components/Header";
import { textVariant, slideIn } from "@/utils/motion";
import { motion } from "framer-motion";
const Hero = () => {
  return (
    <>
      <section
        className={`2xl:max-w-[1280px] w-full mx-auto p-5 relative z-20`}
      >
        <div className="absolute gradient-01 w-[50%] z-10 top-0 left-0 h-[100%]" />

        <Header />
      </section>
      <div className="flex flex-col my-12">
        <div className="flex flex-col items-center relative z-10">
          <motion.h1
            variants={textVariant(1)}
            initial="hidden"
            whileInView="show"
            className="font-bold lg:text-[144px] md:text-[100px] sm:text-[60px] text-[44px] lg:leading-[158.4px] md:leading-[114.4px] sm:leading-[74.4px] leading-[64.4px] uppercase text-white"
          >
            METAVERSE
          </motion.h1>
          <motion.div
            variants={textVariant(1.6)}
            initial="hidden"
            whileInView="show"
            className="flex items-center"
          >
            <h1 className="font-bold lg:text-[144px] md:text-[100px] sm:text-[60px] text-[44px] lg:leading-[158.4px] md:leading-[114.4px] sm:leading-[74.4px] leading-[64.4px] uppercase text-white">
              MA
            </h1>
            <div className="md:w-[212px] sm:w-[80px] w-[60px] md:h-[108px] sm:h-[48px] h-[38px] md:border-[18px] border-[9px] rounded-r-[50px] border-white sm:mx-2 mx-[6px]"></div>
            <h1 className="font-bold lg:text-[144px] md:text-[100px] sm:text-[60px] text-[44px] lg:leading-[158.4px] md:leading-[114.4px] sm:leading-[74.4px] leading-[64.4px] uppercase text-white">
              NESS
            </h1>
          </motion.div>
        </div>
        <motion.div
          variants={slideIn("right", "tween", 0, 1.1)}
          initial="hidden"
          whileInView="show"
          className="flex flex-col pl-16  sm:pl-40 -mt-10 "
        >
          <div className="w-full h-40 hero-gradient rounded-tl-[130px]" />
          <img
            src="/cover.png"
            alt="hero"
            className="w-full h-[70vh] object-cover rounded-tl-[130px] -mt-32"
          />
          <a href="#explore">
            <img
              src="/stamp.png"
              alt="circle"
              className="w-[95px] object-contain cursor-pointer  ml-auto mr-5 md:mr-9 md:w-[125px]  -mt-10"
            />
          </a>
        </motion.div>
      </div>
    </>
  );
};

export default Hero;
