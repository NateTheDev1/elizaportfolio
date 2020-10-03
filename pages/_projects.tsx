import React, { useEffect } from "react";

import { ProjectsContainer } from "../components/Index.styled";
import DownButton from "../components/DownButton";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Projects = () => {
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
      <ProjectsContainer className="projects">
        <div className="right">
          <p id="projects">Projects.</p>
          <hr className="divider" />
        </div>
      </ProjectsContainer>
    </motion.div>
  );
};

export default Projects;
