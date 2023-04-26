import styles from "@/styles";
import React from "react";

const Title = ({ text, customStyle }) => {
  return (
    <p
      className={`${customStyle} font-normal text-[14px] text-secondary-white `}
    >
      {" "}
      | {text}
    </p>
  );
};

export default Title;
