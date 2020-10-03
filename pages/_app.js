import Head from "next/head";
import React, { useRef, useState } from "react";
import FadeIn from "react-fade-in";
import { Container } from "./components/Index.styled";
import LoadIn from "./components/LoadIn";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import { IconButton } from "@material-ui/core";
import { motion } from "framer-motion";
import About from "./_about";

import Typer from "./components/Typer";

const App = () => {
  const [uiState, setUIState] = useState({ about: false });

  return (
    <>
      <LoadIn>
        <Container>
          <Head>
            <title>Eliza Christopher</title>
            <link rel="icon" href="/favicon" />
          </Head>

          <div className="home">
            <FadeIn transitionDuration={1000} delay={200}>
              <h1>ELIZA CHRISTOPHER</h1>

              <Typer />

              <a href="#about">
                <motion.button
                  onClick={() => setUIState({ ...uiState, about: true })}
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
                      style={{ fontSize: "30px", color: "black" }}
                    />
                  </IconButton>
                </motion.button>
              </a>

              <p className="cta">See My Work</p>
            </FadeIn>
          </div>
        </Container>
        {uiState.about && <About />}
      </LoadIn>
      <style global jsx>{`
        html {
          line-height: 1.15; /* 1 */
          -webkit-text-size-adjust: 100%; /* 2 */
        }

        body {
          margin: 0;
        }

        main {
          display: block;
        }

        h1 {
          font-size: 2em;
          margin: 0.67em 0;
        }

        hr {
          box-sizing: content-box; /* 1 */
          height: 0; /* 1 */
          overflow: visible; /* 2 */
        }

        pre {
          font-family: monospace, monospace; /* 1 */
          font-size: 1em; /* 2 */
        }

        a {
          background-color: transparent;
        }

        abbr[title] {
          border-bottom: none; /* 1 */
          text-decoration: underline; /* 2 */
          text-decoration: underline dotted; /* 2 */
        }

        b,
        strong {
          font-weight: bolder;
        }

        code,
        kbd,
        samp {
          font-family: monospace, monospace; /* 1 */
          font-size: 1em; /* 2 */
        }

        small {
          font-size: 80%;
        }

        sub,
        sup {
          font-size: 75%;
          line-height: 0;
          position: relative;
          vertical-align: baseline;
        }

        sub {
          bottom: -0.25em;
        }

        sup {
          top: -0.5em;
        }

        img {
          border-style: none;
        }

        button,
        input,
        optgroup,
        select,
        textarea {
          font-family: inherit; /* 1 */
          font-size: 100%; /* 1 */
          line-height: 1.15; /* 1 */
          margin: 0; /* 2 */
        }

        button,
        input {
          /* 1 */
          overflow: visible;
        }

        button,
        select {
          /* 1 */
          text-transform: none;
        }

        button,
        [type="button"],
        [type="reset"],
        [type="submit"] {
          -webkit-appearance: button;
        }

        button::-moz-focus-inner,
        [type="button"]::-moz-focus-inner,
        [type="reset"]::-moz-focus-inner,
        [type="submit"]::-moz-focus-inner {
          border-style: none;
          padding: 0;
        }

        button:-moz-focusring,
        [type="button"]:-moz-focusring,
        [type="reset"]:-moz-focusring,
        [type="submit"]:-moz-focusring {
          outline: 1px dotted ButtonText;
        }

        fieldset {
          padding: 0.35em 0.75em 0.625em;
        }

        legend {
          box-sizing: border-box; /* 1 */
          color: inherit; /* 2 */
          display: table; /* 1 */
          max-width: 100%; /* 1 */
          padding: 0; /* 3 */
          white-space: normal; /* 1 */
        }

        progress {
          vertical-align: baseline;
        }

        textarea {
          overflow: auto;
        }

        [type="checkbox"],
        [type="radio"] {
          box-sizing: border-box; /* 1 */
          padding: 0; /* 2 */
        }

        [type="number"]::-webkit-inner-spin-button,
        [type="number"]::-webkit-outer-spin-button {
          height: auto;
        }

        [type="search"] {
          -webkit-appearance: textfield; /* 1 */
          outline-offset: -2px; /* 2 */
        }

        [type="search"]::-webkit-search-decoration {
          -webkit-appearance: none;
        }

        ::-webkit-file-upload-button {
          -webkit-appearance: button; /* 1 */
          font: inherit; /* 2 */
        }

        details {
          display: block;
        }

        summary {
          display: list-item;
        }

        template {
          display: none;
        }

        [hidden] {
          display: none;
        }

        html {
          scroll-behavior: smooth;
        }

        ::-webkit-scrollbar {
          width: 12px !important;
        }

        ::-webkit-scrollbar-track {
          -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3) !important;
          border-radius: 10px !important;
        }

        ::-webkit-scrollbar-thumb {
          border-radius: 10px;
          -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.5);
        }
      `}</style>
    </>
  );
};

export default App;
