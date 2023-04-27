import { socials } from "@/constants";
import styles from "@/styles";
import React from "react";
import { motion } from "framer-motion";
import { footerVariants } from "@/utils/motion";
const Footer = () => {
  return (
    <motion.footer
      variants={footerVariants}
      initial="hidden"
      whileInView="show"
      className={`2xl:max-w-[1280px] w-full my-8 mx-auto  sm:px-16 px-6 ${styles.xPaddings} relative`}
    >
      <div className="footer-gradient " />
      <div className="flex items-center lg:justify-between flex-col lg:flex-row">
        <h2 className="font-bold md:text-[64px] text-[44px] text-white">
          Enter the Metaverse
        </h2>
        <button className="bg-[#26638C] font-medium text-lg text-white flex items-center gap-3 px-5 py-4 rounded-[50px]">
          <img src="/headset.svg" alt="headset" className="w-7" />
          Enter Metaverse
        </button>
      </div>
      <hr className="mt-6 mb-12 opacity-[0.2]" />
      <div className="flex flex-col gap-5 md:justify-between md:items-center md:flex-row">
        <h4 className="font-extrabold text-[24px] text-white">METAVERUS</h4>
        <p className="font-normal text-[14px] text-white opacity-50">
          Copyright © 2021 - 2022 Metaversus. All rights reserved.
        </p>
        <div className="flex items-center gap-3">
          {socials.map((item, index) => (
            <img
              src={item.url}
              alt={item.name}
              className="w-6 cursor-pointer"
            />
          ))}
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
