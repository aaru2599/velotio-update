import React from "react";
import TechiesCard from "../Molecules/TechiesCard";
import styled from "styled-components";
const Section4 = () => {
  return (
    <Sec4>
      <TechiesCard />
    </Sec4>
  );
};

export default Section4;

const Sec4 = styled.div`
  margin: 30px 0;
  padding: 40px 0;
  border-bottom: 1px solid #eee;
`;
