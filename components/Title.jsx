import styles from "@/styles";
import React from "react";

const Title = ({ text }) => {
  return (
    <p className="font-normal text-[14px] text-secondary-white text-center">
      {" "}
      | {text}
    </p>
  );
};

export default Title;
