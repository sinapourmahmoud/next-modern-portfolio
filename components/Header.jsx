import React from "react";
import styles from "@/styles";
const Header = () => {
  return (
    <header
      className={`flex items-center justify-between  ${styles.xPaddings} py-3`}
    >
      <img src="/search.svg" alt="search" />
      <h2 className="text-white font-bold text-xl">METAVERSUS</h2>
      <img src="/menu.svg" alt="menu" />
    </header>
  );
};

export default Header;
