import React from "react";
import { motion } from "framer-motion";

const LoadIn = ({ children }) => {
  const variants = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={variants}
      style={{ margin: 0, padding: 0, width: "100%" }}
    >
      {children}{" "}
    </motion.div>
  );
};

export default LoadIn;
