import React from "react";
import styled from "styled-components";
import Button from "../Atoms/Button";

const ContactForm = () => {
  return (
    <FormContainer>
      <Input placeholder="Name" />
      <Input placeholder="Email" />
      <TextArea
        cols="30"
        rows="10"
        placeholder="Details about your project"
      ></TextArea>
      <div>
        <Button text={"Contact Us"} />
      </div>
      <EmailContainer>
        <span>or</span> <a href="mailto:contact@velotio.com ">email sales</a>
      </EmailContainer>
    </FormContainer>
  );
};

export default ContactForm;
const Input = styled.input`
  width: 500px;
  height: 35px;
  border: none;
  border-radius: 3px;
  border: 0.5px solid #e2e2e2;
  padding: 10px;
  font-size: 14px;
  &:focus {
    outline: 0.1px solid lightgreen;
    border: 0.5px solid #e2e2e2;
  }
`;
const TextArea = styled.textarea`
  width: 100%; /* Allow width to be changeable */
  max-width: 500px; /* Limit maximum width to 500px */
  border-radius: 3px;

  height: 120px;
  resize: none;
  border: 0.5px solid #e2e2e2;
  outline: none;
  padding: 10px;
  font-size: 14px;
  &:focus,
  &:focus-within {
    border-color: lightgreen; /* Change color on focus */
  }
`;
const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
const EmailContainer = styled.div`
  color: #82139e;
  a {
    text-decoration: underline;
  color: #82139e;
  line-height: 20px;
  font-size:16px;
  font-weight:500;
  }
`;
