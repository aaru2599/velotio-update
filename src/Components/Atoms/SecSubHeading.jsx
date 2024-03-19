import React from "react";
import styled from "styled-components";

const SecSubHeading = ({normal,bold}) => {
    //console.log(normal,bold);
  return (
    <Heading>{normal }   <span>{bold}</span>
    </Heading>
  );
};

export default SecSubHeading;
const Heading = styled.div`
font-size: 40px;
  font-weight: normal;
  margin-top: 12px;

  span {
    font-weight: bold;
  }
`;
// const NormalText = styled.div``;
// const BoldText = styled.span``;
