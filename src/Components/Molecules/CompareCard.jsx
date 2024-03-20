import React from "react";
// import { CompetitiveAdv } from "../Data/Testimonial";
import { CompetitiveAdv } from "../Data/CompetitiveAdv";
import styled from "styled-components";
import SecHeading from "../Atoms/SecHeading";
import SecSubHeading from "../Atoms/SecSubHeading";
import SecDescription from "../Atoms/SecDescription";
const imgUrl =
  "https://assets-global.website-files.com/5d121ce15cf154f8f7d91740/5d12914c7a7a1a1dbdf1d66e_small-triangle-bg.svg?tr=rt-180";
const CompareCard = () => {
  const data = CompetitiveAdv;
  ////console.log("data", data);
  return (
    <MainSection>
      <ImgTopRight src={imgUrl} />
      <ImgBottomLeft src={imgUrl} />

      <BoxContainer>
        <Section>
          {data.map((item, index) => (
            <Card key={index}>
              <div style={{ display: "flex", flexDirection: "row", gap: 12 }}>
                <ImgSec>
                  <Image src={item.icon} alt={item.title} />
                </ImgSec>
                <TextSec>
                  <div className="title">{item.title}</div>
                </TextSec>
              </div>
              <CardDescription>{item.desc}</CardDescription>
            </Card>
          ))}
        </Section>
        <SecondSec>
          <SecHeading heading={"Why we are different"} />
          <SecSubHeading normal={"Velotio's"} bold={"Competitive Advantage"} />
          <SecDescription
            firstPara={
              "We offer reliable, efficient delivery with high-caliber engineers & finely-tuned software development processes."
            }
            secondPara={
              "Save up to 30% of your time immediately after the initial kickoff with our reusable code libraries & solutions."
            }
          />
        </SecondSec>
      </BoxContainer>
    </MainSection>
  );
};

export default CompareCard;

const BoxContainer = styled.div`
  // max-width: 1430px;
  display: flex;
  gap: 16px;
  align-items: center;
  padding: 62px 0;
  @media screen and (max-width:768px) {
    display: flex;
    flex-direction: column-reverse;
  }
`;

const ImgTopRight = styled.img`
  position: absolute;
  top: 50px;
  right: 50px;
`;
const ImgBottomLeft = styled.img`
  position: absolute;
  bottom: 10px;
  left: 10px;
`;

const Section = styled.div`
  flex: 70%;
  display: flex;
  flex-wrap: wrap;
  align-content: baseline;
  // grid-template-columns: repeat(3, minmax(200px, 1fr));
  gap: 10px;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
  @media screen and (min-width: 1200px) {
    /* Apply your styles here */
    /* For example: */
    width: calc(25% - 10px); /* Adjust width to fit 3 images per row with gap */
  }


  // justify-content: flex-end;
`;

const Card = styled.div`
  display: flex;
  height: 100px;
  flex-direction: column;
  width: 260px;
  gap: 6px;
  padding: 12px;
  z-index: 1;
  background-color: white;
  border: 0.5px solid lightgray;
  border-radius: 12px;
  @media screen and (max-width: 768px) {
    max-width: calc(50% - 5px); /* Adjust width to fit two cards per row with gap */
    height:150px;


  }
`;

const ImgSec = styled.div``;
const Image = styled.img`
  width: 26px;
  height: 26px;
`;

const TextSec = styled.div`
  .title {
    color: #383838;
    font-size: 14px;
    font-weight: 600;
    line-height: 26px;
  }
  .description {
    margin-bottom: 10px;
    font-size: 14px;
    line-height: 23px;
    font-weight: 500;
    // height: 62px;
  }
`;

const Title = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  .subtitle {
    font-size: 26px;
    font-weight: 500;
    line-height: 36px;
  }
`;

const MainSection = styled.div`
  // display: flex;
  gap: 32px;
  padding: 12px;

  // align-items: center;
  position: relative;
  // justify-content: center;
`;

const SecondSec = styled.div`
  flex: 30%;
`;

const CardDescription = styled.p`
  font-size: 12px;
`;
