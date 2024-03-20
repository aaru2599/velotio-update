import React from "react";
import styled from "styled-components";

const BlogCard = ({ data }) => {
  ////console.log("blogdata", data);
  return (
    <>
      {data.map((item, index) => {
        return (
          <Card key={index}>
            <ImageContainer>
              <img src={item.image} />
            </ImageContainer>
            <BottomContainer>
              <Heading>{item.heading}</Heading>
              <Footer>
                <div className="author">
                  <AuthImage>
                    <img src={item.authImage} alt="" />
                  </AuthImage>
                  <div className="authName">{item.authName}</div>
                </div>
                <div className="techName">{item.tech}</div>
              </Footer>
            </BottomContainer>
          </Card>
        );
      })}
    </>
  );
};

export default BlogCard;
const Card = styled.div`
  width: 320px;
  box-shadow: 0.5px 0.5px 5px 0.5px #d8dde6;
  display: flex;
  border-radius: 5px;
  cursor:pointer;
  flex-direction: column;
//   gap: 10px;
`;
const ImageContainer = styled.div`
  img {
    width: 100%;
    border-radius:5px 5px 0 0;
  }

`;
const BottomContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding:10px
`;
const Heading = styled.div`
font-size:13px;
font-weight:600;
letter-spacing: .75px;
`;
const AuthImage = styled.div`
  img {
    width: 30px;
    height: 30px;
    object-fit: cover;

    border-radius: 50%;
  }
`;
const Footer = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
  .author {
    display: flex;
    flex-direction: column;
    // align-items: center;
  }
  .authName{
    font-size:12px;
  }
  .techName{
    font-size:12px;
    color: #032cc7;

    letter-spacing: .56px;
  }
`;
