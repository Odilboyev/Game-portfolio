import styled from "styled-components";

const AboutWr = styled.div`
  span {
    color: #fff;
  }
  .skills {
    display: grid;
    grid-template-columns: repeat(6, max-content);
    grid-gap: 1rem;
  }
  .skill {
    color: #ffe500;
    max-width: 300px;
    margin: 20px 0;
    transform: skewX(-20deg);
    padding: 10px 40px;
    border: 1px solid #ffe500;
    transition: all 0.5s ease;
  }
  .skill:hover {
    box-shadow: 0 0 0.5rem #fff, inset 0 0 0.5rem #fff, 0 0 2rem #ffe500,
      inset 0 0 2rem #ffe500, 0 0 4rem #ffe500;
  }
`;
export default AboutWr;
