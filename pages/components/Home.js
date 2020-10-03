import React from "react";
import FadeIn from "react-fade-in";
import DownButton from "./DownButton.tsx";

import Typer from "./Typer";

const Home = React.memo((_) => {
  return (
    <div className="home">
      <FadeIn transitionDuration={1000} delay={200}>
        <h1>ELIZA CHRISTOPHER</h1>

        <Typer />

        <DownButton location="#about" />

        <p className="cta">About Me</p>
      </FadeIn>
    </div>
  );
});

export default Home;
