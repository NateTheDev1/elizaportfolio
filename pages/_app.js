import Head from "next/head";
import React from "react";
import FadeIn from "react-fade-in";
import { Container } from "./components/Index.styled";
import LoadIn from "./components/LoadIn";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import { IconButton } from "@material-ui/core";
import { motion } from "framer-motion";

const App = () => {
  return (
    <LoadIn>
      <Container>
        <Head>
          <title>Eliza Christopher</title>
          <link rel="icon" href="/favicon" />
        </Head>

        <div className="home">
          <FadeIn transitionDuration={1000} delay={250}>
            <h1>ELIZA CHRISTOPHER</h1>
            <p>FRONT END DEVELOPER</p>

            <motion.button
              whileHover={{ scale: 1.5 }}
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.3 }}
              style={{ border: "none", background: "none", marginTop: "50px" }}
            >
              <IconButton aria-label="down" size="medium">
                <ArrowDownwardIcon
                  style={{ fontSize: "30px", color: "black" }}
                />
              </IconButton>
            </motion.button>
          </FadeIn>
        </div>
      </Container>
    </LoadIn>
  );
};

export default App;
