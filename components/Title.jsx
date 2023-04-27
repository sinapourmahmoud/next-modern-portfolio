import styles from "@/styles";
import { textVariant2, textContainer } from "@/utils/motion";
import { motion } from "framer-motion";
import React from "react";

const Title = ({ text, customStyle }) => {
  return (
    <motion.p
      variants={textContainer}
      initial="hidden"
      whileInView="show"
      className={`${customStyle} font-normal text-[14px] text-secondary-white `}
    >
      {" "}
      |{" "}
      {Array.from(text).map((letter, index) => (
        <motion.span key={index} variants={textVariant2}>
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </motion.p>
  );
};

export default Title;
