import React from "react";
import styled from "styled-components";

const FooterBottomComponent = () => {
  return (
    <Container>
      <LeftContainer>
        <div>© 2024 Copyright Velotio. All Rights Reserved.</div>
        <a className="right-text">Privacy Policy</a>
      </LeftContainer>
      <RoghtContainer>
        <a>
          <img
            src="https://assets-global.website-files.com/5d121ce15cf154f8f7d91740/65785655cd6c0e01a6d0130e_image%20331.svg"
            alt=""
          />
        </a>
        <a>
          <img
            src="https://assets-global.website-files.com/5d121ce15cf154f8f7d91740/6578568ef60179f630d03045_image%20330.svg"
            alt=""
          />
        </a>
        <a>
          <img
            src="https://assets-global.website-files.com/5d121ce15cf154f8f7d91740/6578568ec0506b3970fa4c03_image%20329.svg"
            alt=""
          />
        </a>
        <a>
          <img
            src="https://assets-global.website-files.com/5d121ce15cf154f8f7d91740/6578568e3be3893ed753cab7_image%20328.svg"
            alt=""
          />
        </a>
      </RoghtContainer>
    </Container>
  );
};

export default FooterBottomComponent;

const Container=styled.div`
display:flex; 
justify-content:space-between;
border-top:1px solid #e9e9e9;
align-items:center;
margin-top:20px;
padding:20px 0;
`;
const LeftContainer=styled.div`
display:flex;
color:#e9e9e9;
gap:5px;
align-items:center;
.right-text{
    border-left:2px solid ;
    padding-left:5px;
color:#e9e9e9;

}



`;

const RoghtContainer=styled.div`
display:flex; 
gap:5px;
align-items:center;

`