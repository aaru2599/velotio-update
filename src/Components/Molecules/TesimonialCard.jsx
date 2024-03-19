import React from "react";
import styled from "styled-components";
import { Testimonials } from "../Data/Testimonial";
import Button from "../Atoms/Button";

const TesimonialCard = () => {
  const Data = Testimonials;

  return (
    <Conatiner>
      {Data.map((data, index) => {
        return (
          <Box key={index}>
            <Imgbox>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px",
                }}
              >
                <div
                  style={{
                    borderBottom: "1px solid #efefef",
                    paddingBottom: "12px",
                    width: "200px",
                  }}
                >
                  <h3 className="Name">{data.name}</h3>
                  <span className="Position">{data.position}</span>
                </div>
                <img
                  src={data.companylogo}
                  alt="Compnay logo"
                  className="companyimg"
                />
              </div>

              <div
                style={{ display: "flex", gap: "12px", alignItems: "center" }}
              >
                <img
                  src={data.profileimg}
                  alt="Profile"
                  className="Profileimg"
                />
              </div>
            </Imgbox>

            <Textbox>
              <p className="Desc">{data.desc}</p>
            </Textbox>
            {/* <Button text="Read the full review " /> */}
          </Box>
        );
      })}
    </Conatiner>
  );
};

export default TesimonialCard;

const Conatiner = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(500px, 1fr));
  gap: 22px;
`;

const Box = styled.div`
  border: 0.5px solid #e2e2e2;
  border-radius: 8px;
  height: 280px;
  background-color: white;
  color: #383838;
  padding: 32px;

  .Position {
    font-size: 12px;
  }
`;

const Imgbox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  .companyimg {
    width: 90px;
    border-radius: 4px;
  }

  .Profileimg {
    width: 120px;
    height: 120px;
    border-radius: 50%;
    object-fit: cover;
  }
`;

const Textbox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 12px;
  .Desc {
    line-height: 1.6;
    font-size: 14px;
    height: 120px;
  }

  .Name {
    font-size: 16px;
    color: #383838;
  }
`;
