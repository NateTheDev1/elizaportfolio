import styled from "styled-components";

export const Container = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;700&family=Source+Sans+Pro:wght@400;600;700&display=swap");

  font-family: "Noto Sans JP", sans-serif;
  font-weight: 400;
  max-width: 1440px;
  min-width: 500px;
  margin: 0 auto;

  width: 100%;
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

    p {
      font-size: 1.2rem;
      font-size: 600;
    }
  }
`;
