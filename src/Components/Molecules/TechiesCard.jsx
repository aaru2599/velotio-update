import React from "react";
import styled from "styled-components";
import SecHeading from "../Atoms/SecHeading";
import SecSubHeading from "../Atoms/SecSubHeading";
import SecDescription from "../Atoms/SecDescription";
import { TbExternalLink } from "react-icons/tb";
const TechiesCard = () => {
  return (
    <Wrapper>
      <Card>
        <FirstSec>
          <Title>
            <SecHeading heading={"Our technology advantage"} />
          </Title>
          <SecSubHeading
            normal={"Techies in"}
            bold={"Practice and in Spirit"}
          />
          <SecDescription
            firstPara={
              "At our company, we pride ourselves on our extensive experience and track record of success. With a portfolio boasting over 90 products across a diverse spectrum of domains, we've established ourselves as a trusted partner for businesses seeking innovative solutions."
            }
            secondPara={
              "Our collaborative approach means that we work closely with you to understand your unique needs and goals. Whether you're aiming to streamline operations with an enterprise solution or captivate audiences with a cutting-edge web application, we're committed to delivering results that exceed your expectations.              "
            }
          />
        </FirstSec>

        <Cardholder>
          <CardColumn>
            <IconCard className="cursor">
              {/* <a href="/generative-ai-development" className="card"> */}
              <TbExternalLink className="icon" />
              <img
                src="https://assets-global.website-files.com/5d121ce15cf154f8f7d91740/65603ceb9df23f898549dbf9_openai-chatgpt-logo-icon-free-png.webp"
                alt="AI / ML"
                className="card-img"
              />
              <div className="card-name">Generative AI</div>
              {/* </a> */}
            </IconCard>
            <IconCard>
              <img
                src="https://assets-global.website-files.com/62bd9f4088a3651f48b3e3a3/62bd9f4088a3657687b3e5c3_react-icon.svg"
                alt="ReactJSNinjas"
                className="card-img"
              />
              <div className="card-name">ReactJS Ninjas</div>
            </IconCard>
          </CardColumn>
          <CardColumn>
            <IconCard className="cursor">
              {/* <a href="/expertise/devops-automation" className="card"> */}
                <TbExternalLink className="icon" />
                <img
                  src="https://assets-global.website-files.com/5d121ce15cf154f8f7d91740/5d137de407791381414d0ec6_kubernetes-container-engine%402x.jpg"
                  alt="Kubernetes"
                  className="card-img"
                />
                <div className="card-name">Kubernetes</div>
              {/* </a> */}
            </IconCard>

            <IconCard className="cursor">
              {/* <a href="/expertise/ux-ui-development" className="card"> */}
                <TbExternalLink className="icon" />
                <img
                  src="https://assets-global.website-files.com/62bd9f4088a3651f48b3e3a3/62bd9f4088a3656a0cb3e3d0_763228.svg"
                  alt="UI / UX"
                  className="card-img"
                />
                <div className="card-name">UI / UX</div>
              {/* </a> */}
            </IconCard>
            <IconCard>
              <img
                src="https://assets-global.website-files.com/5d121ce15cf154f8f7d91740/6026882d05506a75f9600d51_Golang-Logo.png"
                alt="Golang"
                className="card-img"
              />
              <div className="card-name">Golang</div>
            </IconCard>
          </CardColumn>
          <CardColumn>
            <IconCard className="cursor last-line">
              <TbExternalLink className="icon" />
              <img
                src="https://assets-global.website-files.com/62bd9f4088a3651f48b3e3a3/62bd9f4088a3658274b3e4de_cloud-computing-1.svg"
                alt="Cloud / DevOps"
                className="card-img"
              />
              <div className="card-name">Cloud / DevOps</div>
            </IconCard>

            <IconCard className="cursor last-line">
              <TbExternalLink className="icon" />
              <img
                src="https://assets-global.website-files.com/62bd9f4088a3651f48b3e3a3/62bd9f4088a3650d1cb3e4e5_algorithm.svg"
                alt="Backend Engineering"
                className="card-img"
              />
              <div className="card-name">Backend Engineering</div>
            </IconCard>

            <IconCard className="cursor last-line">
              <TbExternalLink className="icon" />
              <img
                src="https://assets-global.website-files.com/62bd9f4088a3651f48b3e3a3/62bd9f4088a3653fceb3e601_cloud-computing.svg"
                alt="Data Engineering"
                className="card-img"
              />
              <div className="card-name">Data Engineering</div>
            </IconCard>
          </CardColumn>
        </Cardholder>
      </Card>
    </Wrapper>
  );
};

export default TechiesCard;

const Cardholder = styled.div`
  display: flex;
  gap: 16px;
  .card-img {
    width: 54px;
    height: 54px;
    object-fit: contain;
  }
`;

const Card = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between ;
  // gap:20px

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
  .title {
    font-size: 30px;
    font-weight: 400;
  }

  .card {
    text-decoration: none;
    color: #333647;
  }

  .span-black-2 {
    color: #333647;
    font-weight: 600;
    font-size: 40px;
  }
  .card {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    // width:100px;
  }

`;

const CardColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
  .cursor {
    cursor: pointer;
    position: relative;
    text-align: center;
  transition:all, 0.5s;

  }
  .cursor:hover > .icon {
    display:none;
  }
  
  .last-line {
    height:150px
  }
  
  .cursor:hover {
     transition:all, 0.5s;

    background-color: #f0e2ff;
  }
`;

const IconCard = styled.div`
  width: 125px;
  height: 140px;
  // cursor:pointer;
  border: 1px solid #e9e9e9;
  background-color: #fff;
  padding: 12px;
  display: flex;
  border-radius: 6px;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .card-name {
    margin-top: 6px;
    font-size: 11px;
    font-weight: bold;
    text-align-center;

    text-decoration: none;
  }
  .icon{
    position:absolute;
    top:5px;
    display:none;
    // display:none;
    right:5px;
    width:12px;
    height:12px;
    color:purple;

  }
  // transition:all, 0.2s;
  // &:hover{
    //  transform: scale(1.1);
    //  transition:all, 0.2s;
  // }
`;

const Line = styled.div`
  width: 100px;
  border-bottom: 2px solid lightgray;
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

const Para = styled.div`
  margin-top: 10px;
  // width: 650px;
  .paragraph {
    font-size: 14px;
    line-height: 1.5;
    color: #383838;
    margin: 12px 0;
  }
`;
const FirstSec = styled.div`
  max-width: 650px;
  @media (max-width: 768px) {
    margin-bottom: 0;
  }
`;
const Wrapper= styled.div`

`;