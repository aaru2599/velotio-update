import React from "react";
import styled from "styled-components";

const FooterImage = ({ data }) => {
  return (
    <Container>
      {data.map((item) => {
        return (
          <ImageContainer key={item.key}>
            <img src={item.image} alt={item.key} />
          </ImageContainer>
        );
      })}
    </Container>
  );
};

export default FooterImage;
const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 800px;
  gap: 10px;

`;
const ImageContainer = styled.div`
  width: 24%;
  display: flex;
  justify-content: center;
  align-items: center;
  img{
    object-fit: contain;
    width: 100px;
    height: 100px;

    object-fit: contain;
    
  }
}
`;
