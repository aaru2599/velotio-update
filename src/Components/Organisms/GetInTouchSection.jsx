import React from "react";
import SecHeading from "../Atoms/SecHeading";
import SecSubHeading from "../Atoms/SecSubHeading";
import ManagerComponent from "../Molecules/ManagerComponent";
import styled from "styled-components";
import ContactForm from "../Molecules/ContactForm";

const GetInTouchSection = () => {
  return (
    <Container>
      <img
        className="top-image"
        src="https://assets-global.website-files.com/5d121ce15cf154f8f7d91740/5d12914c7a7a1a1dbdf1d66e_small-triangle-bg.svg"
        width={200}
        height={200}
        alt=""
      />

      <div>
        <SecHeading heading={"Take the next step"} />
        <SecSubHeading normal={"Get in"} bold={"Touch"} />
      </div>
      <BoxContaniner>
        <ManagerComponent />
        <ContactForm />
      </BoxContaniner>
    </Container>
  );
};

export default GetInTouchSection;
const BoxContaniner = styled.div`
  display: flex;
  justify-content: center;
  gap: 100px;
  
  @media screen and (max-width: 768px) {
    display:flex;
    flex-direction:column;
    gap:10px;
    justify-content:center;
    align-items:center;
  }
`;
const Container = styled.div`
  padding: 64px 0;
  display: flex;
  flex-direction: column;
  gap: 50px;
  .top-image {
    
    position: absolute;
    top: 50px;
    right: 50px;
    transform: rotate(90deg);
   
    
  }
  .bottom-image {
    position: absolute;
    bottom: -100px;
    // z-index: 10;
    left: -100px;
  }

  @media screen and (max-width: 768px) {
    display:flex;
    flex:direction:column;
    .top-image{
      z-index: -1;
    }
  }
`;
