import React, { useEffect, useState } from "react";
import Typing from "react-typing-animation";

const Typer = React.memo((_) => {
  const [word, setWord] = useState("WEB DESIGN");

  const changeWord = () => {
    if (word === "GRAPHIC DESIGN") {
      setWord("WEB DESIGN");
    } else {
      setWord("GRAPHIC DESIGN");
    }
  };

  let typer = (
    <Typing loop={true} onFinishedTyping={() => changeWord()} speed={50}>
      <span className="sub">{word}</span>
      <Typing.Backspace count={22} delay={500} />
    </Typing>
  );

  return <>{typer}</>;
});

export default Typer;
