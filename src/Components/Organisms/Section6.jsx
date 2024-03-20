import React from "react";

import ClienteleCard from "../Molecules/ClienteleCard";
import styled from "styled-components";
import SecHeading from "../Atoms/SecHeading";
import SecSubHeading from "../Atoms/SecSubHeading";

const StyledHeading = styled.h1`
  font-size: 64px;
  font-weight: normal;
  margin-top: 12px;

  span {
    font-weight: bold;
  }
`;
const Section6 = () => {
  return (
    <MainSection >
      <SecHeading heading={"Success stories"} />

      <SecSubHeading normal={"Our"} bold={"Top Clientele"} />

      <div className="clientele-card">
      <ClienteleCard />
      </div>
    </MainSection>
  );
};

export default Section6;

const MainSection = styled.div` 
padding:50px 0
.clientele-card{
padding-top:50px;
}
`;
