import React from "react";
import styled from "styled-components";
const Button = ({ text }) => {
  return <ButtonShare>{text}</ButtonShare>;
};

export default Button;

const ButtonShare = styled.button`
 font-size:16px;
  // margin: 10px;
  padding: 15px 30px;
  text-align: center;
  // text-transform: uppercase;
  transition: 0.5s;
  background-size: 200% auto;
  color: white;
  border-radius: 10px;
  display: block;
  border: 0px;
  font-weight: 700;
  box-shadow: 0px 0px 14px -7px #f09819;
  background-image: linear-gradient(to right, #82139e, #200070);
  cursor: pointer;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;

  &:hover {
    background-position:  center;
      color: #fff;
      text-decoration: none;
    }

    &:active {
        transform: scale(0.95);
      }
`;
