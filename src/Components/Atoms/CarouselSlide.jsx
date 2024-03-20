import React from "react";
import styled from "styled-components";

const CarouselSlide = ({ data }) => {
  ////console.log("carouseldata", data);
  return (
    <Container>
      {data.map((item,index) => (
            <img src={item.image} />
      ))}
    </Container>
  );
};

export default CarouselSlide;
const Container=styled.div`
width:100%;
height:100%;
img{
  width:100%;
  height:100%;
}
`