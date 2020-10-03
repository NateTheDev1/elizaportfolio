import styled from "styled-components";

export const Container = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;700&family=Source+Sans+Pro:wght@400;600;700&display=swap");

  font-family: "Noto Sans JP", sans-serif;
  font-weight: 400;
  max-width: 1440px;
  min-width: 500px;
  margin: 0 auto;

  width: 100%;
  height: 100vh;
  font-size: 100%;

  .home {
    color: black;
    height: 100vh;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    flex-wrap: wrap;
    word-wrap: wrap;

    h1 {
      font-size: 3.5rem;
      letter-spacing: 10px;
      font-weight: 600;
    }

    .sub {
      font-size: 1.2rem;
      font-size: 600;
      letter-spacing: 5px;
    }

    .cta {
      margin-top: 25px;
      opacity: 0.5;
      text-transform: uppercase;
      letter-spacing: 2px;
    }
  }
`;

export const AboutContainer = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;700&family=Source+Sans+Pro:wght@400;600;700&display=swap");

  font-family: "Noto Sans JP", sans-serif;
  font-weight: 400;
  max-width: 1440px;
  min-width: 500px;
  margin: 0 auto;
  margin-bottom: 50px;
  padding: 2%;
  width: 100%;
  padding-bottom: 100px;
  border-radius: 25px;

  font-size: 100%;
  display: flex;
  justify-content: space-around;

  background: #282828;
  color: white;
  box-shadow: 18px 10px 41px -1px rgba(0, 0, 0, 0.75);

  .left {
    width: 55%;

    display: flex;
    flex-direction: column;

    #about {
      font-weight: 600;
      font-size: 2rem;
      line-height: 50px;
    }

    .divider {
      width: 500px;
      margin-left: 0;
    }

    .about-sub {
      font-weight: 400;
      font-size: 1.2rem;
      line-height: 50px;
    }

    .highlight {
      color: #edcbcc;
    }

    .cta {
      opacity: 0.7;
      margin-left: 15px;
      text-transform: uppercase;
      letter-spacing: 2px;
    }

    .down-cta {
      display: flex;
      align-items: baseline;
      p {
        transition: 0.2s;
      }
    }

    .down-cta:hover {
      color: white;

      p {
        opacity: 1;
      }
    }
  }

  img {
    width: 30%;
    border-radius: 15px;
  }
`;

export const ProjectsContainer = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;700&family=Source+Sans+Pro:wght@400;600;700&display=swap");

  font-family: "Noto Sans JP", sans-serif;
  font-weight: 400;
  max-width: 1440px;
  min-width: 500px;
  margin: 0 auto;
  margin-bottom: 50px;
  padding: 2%;
  width: 100%;
  padding-bottom: 100px;
  border-radius: 25px;

  font-size: 100%;
  display: flex;
  justify-content: space-around;

  background: #282828;
  color: white;
  box-shadow: 18px 10px 41px -1px rgba(0, 0, 0, 0.75);
`;

import React from "react";

const Sample = () => {
  return <>Hello</>;
};

export default Sample;
