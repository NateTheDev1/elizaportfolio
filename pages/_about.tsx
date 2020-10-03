import React, { useEffect } from "react";

import { AboutContainer } from "../components/Index.styled";
import DownButton from "../components/DownButton";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const About = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={{
        visible: { scale: 1 },
        hidden: { scale: 0.5 },
      }}
      style={{ marginTop: "5%" }}
      transition={{ duration: 0.5 }}
    >
      <AboutContainer className="about">
        <div className="left">
          <p id="about">
            <span className="highlight">Hello</span> I'm Eliza and I am a{" "}
            <span className="highlight">graphic</span> designer and{" "}
            <span className="highlight">web</span> designer who loves to create
            rich user <span className="highlight">experiences.</span>
          </p>
          <hr className="divider" />

          <p className="about-sub">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec erat
            nisl, aliquet non velit a, condimentum tempus lorem. Vestibulum
            dictum lacinia sapien et aliquet. Maecenas elementum hendrerit ante,
            faucibus tincidunt ex luctus et. Ut id tempor sapien. Fusce ac
            ligula ac elit condimentum eleifend a sed velit. Donec sed nunc a
            magna lacinia consectetur at at lacus. Morbi dictum metus finibus,
            ultricies.
          </p>

          <div className="down-cta">
            <DownButton location="#down" style="#edcbcc" />
            <p className="cta">SEE MY WORK</p>
          </div>
        </div>

        <img src="https://images.unsplash.com/photo-1493612276216-ee3925520721?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80" />
      </AboutContainer>
    </motion.div>
  );
};

export default About;
