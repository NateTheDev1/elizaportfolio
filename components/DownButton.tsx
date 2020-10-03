import React from "react";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import { IconButton } from "@material-ui/core";
import { motion } from "framer-motion";

const DownButton = React.memo(
  ({ location, style }: { location: string; style?: string }) => {
    return (
      <a href={location}>
        <motion.button
          whileHover={{ scale: 1.5 }}
          whileTap={{ scale: 0.9 }}
          transition={{ duration: 0.3 }}
          style={{
            border: "none",
            background: "none",
            marginTop: "50px",
          }}
        >
          <IconButton aria-label="down" size="medium">
            <ArrowDownwardIcon
              style={{ fontSize: "30px", color: style ? style : "black" }}
            />
          </IconButton>
        </motion.button>
      </a>
    );
  }
);

export default DownButton;
