import React from "react";
import styled from "styled-components";

const SecHeading = ({ heading }) => {
  ////console.log("heading", heading);
  return (
    <Heading>
      <Line></Line>
      <FirstHeading>{heading}</FirstHeading>
    </Heading>
  );
};

export default SecHeading;
const Heading = styled.div`
  display: flex;
  // justify-content: center;
  align-items: center;
  gap: 10px;
`;
const Line = styled.div`
  width: 50px;
  border-bottom: 2px solid lightgray;
`;
const FirstHeading = styled.div`
  font-size: 28px;
  font-weight: 600;
  color: #383838;
`;
