import React from "react";
import { ManagerDetails } from "../Data/ManagerDetails";
import styled from "styled-components";

import { IoIosMailUnread, IoMdMail } from "react-icons/io";
import { BiSolidPhoneCall } from "react-icons/bi";

const ManagerComponent = () => {
  const data = ManagerDetails;
  return (
    <div>
      {data.map((item) => {
        return (
          <Container>
            <TopContainer>
              <ImageContainer>
                <img src={item.image} alt={item.name} />
              </ImageContainer>
              <NameContainer>
                <Name className="name">
                  Hi i'm <span>{item.name}</span>
                </Name>
                <div className="designation">{item.design}</div>
              </NameContainer>
            </TopContainer>
            <BottomContainer>
              <div className="contNo">
                <BiSolidPhoneCall />
                {item.contNo}
              </div>
              <a href="mailto:kumar.kothare@velotio.com" className="email">
                <IoIosMailUnread /> {item.email}
              </a>
            </BottomContainer>
          </Container>
        );
      })}
    </div>
  );
};

export default ManagerComponent;
const Container = styled.div`
  width: 250px;
  border: 0.5px solid #eaeaea;
  background-color: white;
  border-radius: 10px;
  display: flex;
  gap: 10px;
  padding: 20px 10px;
  flex-direction: column;
`;

const ImageContainer = styled.div`
  img {
    width: 150px;
  }
`;
const Name = styled.div`
  text-align: center;
  font-weight: 500;
  font-size: 18px;
  color: #262424;

  span {
    color: #262424;

    font-weight: 600;
  }
`;
const BottomContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  font-size: 12px;
  .email {
    text-decoration: underline;
  }
  .email,
  .contNo {
    display: flex;
    gap: 10px;
    color: #262424b0;

    align-items: center;
    font-size: 13px;
    font-weight: 600;
  }
`;
const TopContainer = styled.div`
  border-bottom: 0.5px solid #e9e9e9;
  display: flex;
  flex-direction: column;
  align-items: center;
  .designation {
    font-size: 12px;
    font-weight: 500;
  }
  padding-bottom: 10px;
`;
const NameContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  alignitems: center;
`;
