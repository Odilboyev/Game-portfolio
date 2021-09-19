import styled from "styled-components";

const HomeWr = styled.div`
  width: 100vw;
  min-height: 100vh;
  height: 100%;
  background-attachment: fixed;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  color: #ffe500;
  background: url("logo512.png"), linear-gradient(#000407, #000407);
  background-size: cover;
  background-position: bottom center;
  .welcome {
    font-family: "SpaceMission", serif !important;
    margin-top: 25%;
    line-height: 40px;
    font-size: 10vw !important;
    letter-spacing: 6px;
    text-align: center;
    padding-left: 40px;
  }
  .select {
    font-size: 5vw !important;
    text-align: center;
  }
  .subtitle {
    font-size: 6vw;
    /* margin: 0; */
    margin-top: 0.9em;

    font-family: "Aldrich", sans-serif;
  }

  .home-btn {
    background: transparent;
    color: #ffe500;
    max-width: 300px;
    margin: 20px 0;
    transform: skewX(-20deg);
    padding: 10px 40px;
    border: 1px solid #ffe500;
    transition: all 0.5s ease;
    cursor: pointer;
    text-transform: capitalize !important;
  }
  .home-btn:hover {
    box-shadow: 0 0 0.5rem #fff, inset 0 0 0.5rem #fff, 0 0 2rem #ffe500,
      inset 0 0 2rem #ffe500, 0 0 4rem #ffe500;
  }
  .select-btn {
    margin: 20px auto;
    text-align: center;
    transition: all 0.5s ease-in-out !important;
    z-index: 1000;
    padding: 10px 60px;
    background-color: transparent;
    color: #ffe500;
    font-size: 30px;
    font-family: "SpaceMission", serif !important;
    opacity: 0.4;
    cursor: pointer;
    &.active {
      opacity: 1;
      text-shadow: 0 0 2rem #ffe500, 0 0 4rem #ffe500, 0 0 6rem #ffe500,
        0 0 8rem #ffe500, 0 0 10rem #ffe500;
    }
  }
  .text {
    font-size: 20px;
    font-family: "Aldrich", sans-serif;
  }
  .tabs {
    width: 100vw;
    min-height: 100vh;
    height: 100% !important;
    background: #00000098;
  }
`;
export default HomeWr;
