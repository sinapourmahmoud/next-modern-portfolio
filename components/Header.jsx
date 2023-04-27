import React from "react";
import styles from "@/styles";
import { motion } from "framer-motion";
import { navVariants } from "@/utils/motion";
const Header = () => {
  return (
    <motion.header
      variants={navVariants}
      initial="hidden"
      whileInView="show"
      className={`flex items-center justify-between  ${styles.xPaddings} py-3 `}
    >
      <img src="/search.svg" alt="search" />
      <h2 className="text-white font-bold text-2xl">METAVERSUS</h2>
      <img src="/menu.svg" alt="menu" />
    </motion.header>
  );
};

export default Header;
