import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Image from "../Organisms/Image";
import CarouselSlide from "../Atoms/CarouselSlide";
import { CarouselData } from "../Data/CarouselData";
import styled from "styled-components";
import Button from "../Atoms/Button";
import Navbar from "./Navabr/Navbar";
import "./Carousal.css";
import { useEffect, useState } from "react";
import Slider from "react-slick";
const CarouselPage = () => {
  ////console.log("section7");
  const data = CarouselData;
  

  return (
    <div>
      {/* <Navbar /> */}
      <Navbar />

      <Carousel
        additionalTransfrom={0}
        arrows={true}
        autoPlay={true}
        autoPlaySpeed={5000}
        // centerMode={true}
        className=""
        containerClass="container"
        // dotListClass=""
        draggable={false}
        focusOnSelect={true}
        infinite
        itemClass=""
        keyBoardControl={true}
        // minimumTouchDrag={80}
        pauseOnHover={true}
        responsive={{
          desktop: {
            breakpoint: {
              max: 3000,
              min: 1024,
            },
            items: 1,
          },
          mobile: {
            breakpoint: {
              max: 464,
              min: 0,
            },
            items: 1,
          },
          tablet: {
            breakpoint: {
              max: 1024,
              min: 464,
            },
            items: 1,
          },
        }}
        // rewind={false}
        rewindWithAnimation={false}
        rtl={false}
        shouldResetAutoplay={true}
        showDots={true}
        slideTransition={{
          duration: 500,
          timingFunction: "ease-in-out",
          delay: 0,
        }}
        //  beforeChange={handleSlideChange}
         renderDotsOutside={true}
        sliderClass=""
        slidesToSalide={1}
        swipeable={true}
      >
        {data.map((item, index) => {
          return (
            <CarousalContainer
              key={index}
              // className={activeIndex === index ? "active-carousel-item" : ""}
            >
              <FloatContainer>
                <LeftSec>
                  <HeadingContainer>{item.heading}</HeadingContainer>
                  {item.boxText.length > 0 && (
                    <BoxTextContainer>
                      {item.boxText.map((text) => (
                        <BoxText>{text}</BoxText>
                      ))}
                    </BoxTextContainer>
                  )}
                  <div>
                    <Button text={item.btnText} />
                    {/* <FloatButton>{item.btnText}</FloatButton> */}
                  </div>
                </LeftSec>

                <FloatImgContainer>
                  {item.floatImage && (
                    <FloatImage src={item.floatImage} alt="float" />
                  )}
                </FloatImgContainer>
              </FloatContainer>
              <CarousalImg
              a  width={"100%"}
                src={item.image}
                fetchpriority="high"
                decoding="async"
                loading="lazy"
                alt="carousel-image"
              />
            </CarousalContainer>
          );
        })}
      </Carousel>
    </div>
  );
};

export default CarouselPage;
const CarousalContainer = styled.div`
  display: flex;
  justify-content: center;
  align-item: center;
  position: relative;
`;
const CarousalImg = styled.img``;

const FloatContainer = styled.div`
  max-width: 1164px;
  margin-top: 150px;
  padding: 56px 32px 80px;
  position: absolute;
  display: flex;
  justify-content: center;
  align-item: center;
  gap:50px;
`;
const FloatImgContainer = styled.div`
  color: white;
  flex: 30%;
  width:300px;
`;

const FloatImage = styled.img`
  width: 300px;
`;
const HeadingContainer = styled.div`
  margin-top: 0;
  margin-bottom: 0;
  font-size: 38px;
  font-weight: 500;
  line-height: 1.1;
`;
const BoxTextContainer = styled.div`
  width: 100%;
  grid-column-gap: 20px;
  grid-row-gap: 20px;
  // margin-top: 40px;
  // margin-bottom: 40px;

  display: flex;
`;
const BoxText = styled.div`
  border: 1px solid white;
  padding: 10px;
  text-align: center;
  border-radius: 5px;
  display: flex;
`;
const LeftSec = styled.div`
  width: 100%;
  max-width: 70%;
  display: flex;
  flex-direction: column;

  gap: 50px;
  color: white;
`;



