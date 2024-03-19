import React from "react";
import styled from "styled-components";
import SecHeading from "../Atoms/SecHeading";
import SecDescription from "../Atoms/SecDescription";

const CertificationComponent = () => {
  return (
    <MainContainer className="section section-gray-6">
      <div className="row-new row-new-tablet-vertical">
        <div className="column-26">
          <div className="holder-title-26">
            <div className="line-79"></div>
            <SecHeading heading={"Certifications"} />
          </div>
          <SecDescription
            firstPara={
              "At Velotio, our engineers keep sharpening their skills and expertise so our customers can access best industry practices and the latest technologies."
            }
          />{" "}
        </div>
        <div className="column-72">
          <div className="column-gray-line">
            <div className="box-20-1">
              <img
                src="https://assets-global.website-files.com/5d121ce15cf154f8f7d91740/6177191691d6a1995ed7f72b_Bitmap%20(34)%20(1).png"
                loading="lazy"
                alt=""
                width="120"
                className="img-700"
              />
            </div>
            <img
              src="https://assets-global.website-files.com/5d121ce15cf154f8f7d91740/61771a3f9ebe514571cc86d2_Line%202%20Copy%202.svg"
              loading="lazy"
              alt=""
            />
            <div className="box-20-1">
              <img
                src="https://assets-global.website-files.com/5d121ce15cf154f8f7d91740/61771d9f73811a154e26125d_Group%20588%20(2)%20(1).png"
                loading="lazy"
                alt=""
                width="90"
                className="img-700"
              />
            </div>
            <img
              src="https://assets-global.website-files.com/5d121ce15cf154f8f7d91740/61771a3f9ebe514571cc86d2_Line%202%20Copy%202.svg"
              loading="lazy"
              alt=""
            />
            <div className="box-20-1">
              <img
                src="https://assets-global.website-files.com/5d121ce15cf154f8f7d91740/617719e07e2907403cb40446_Group%20587%20(1).png"
                loading="lazy"
                alt=""
                width="90"
                className="img-700"
              />
            </div>
            <img
              src="https://assets-global.website-files.com/5d121ce15cf154f8f7d91740/61771a3f9ebe514571cc86d2_Line%202%20Copy%202.svg"
              loading="lazy"
              alt=""
            />
            <div className="box-20-1">
              <img
                src="https://assets-global.website-files.com/5d121ce15cf154f8f7d91740/617719dddd3e48b10bc8dacd_Bitmap%20Copy%20(3)%20(1).png"
                loading="lazy"
                alt=""
                width="95"
                className="img-700"
              />
            </div>
            <img
              src="https://assets-global.website-files.com/5d121ce15cf154f8f7d91740/61771a3f9ebe514571cc86d2_Line%202%20Copy%202.svg"
              loading="lazy"
              alt=""
            />
            <div className="box-20-1">
              <img
                src="https://assets-global.website-files.com/5d121ce15cf154f8f7d91740/61771a2a1ac5714b8158e209_Bitmap%20Copy%20(4)%20(1).png"
                loading="lazy"
                alt=""
                width="95"
                className="img-700"
              />
            </div>
          </div>
          <div className="gray-line-column-67"></div>
          <div className="column-gray-line">
            <div className="box-20-1">
              <img
                src="https://assets-global.website-files.com/5d121ce15cf154f8f7d91740/61771912ae46d545f3437434_Bitmap%20Copy%20(2).png"
                loading="lazy"
                alt=""
                width="90"
                className="img-700"
              />
            </div>
            <img
              src="https://assets-global.website-files.com/5d121ce15cf154f8f7d91740/61771a3f9ebe514571cc86d2_Line%202%20Copy%202.svg"
              loading="lazy"
              alt=""
            />
            <div className="box-20-1">
              <img
                src="https://assets-global.website-files.com/5d121ce15cf154f8f7d91740/6177191091d6a169a3d7f6b5_Bitmap%20Copy%20(1)%20(1).png"
                loading="lazy"
                alt=""
                width="90"
                className="img-700"
              />
            </div>
            <img
              src="https://assets-global.website-files.com/5d121ce15cf154f8f7d91740/61771a3f9ebe514571cc86d2_Line%202%20Copy%202.svg"
              loading="lazy"
              alt=""
            />
            <div className="box-20-1">
              <img
                src="https://assets-global.website-files.com/5d121ce15cf154f8f7d91740/617715245b7759833ebd3357_Group%20586%20(1).png"
                loading="lazy"
                alt=""
                width="90"
                className="img-700"
              />
            </div>
            <img
              src="https://assets-global.website-files.com/5d121ce15cf154f8f7d91740/61771a3f9ebe514571cc86d2_Line%202%20Copy%202.svg"
              loading="lazy"
              alt=""
            />
            <div className="box-20-1">
              <img
                src="https://assets-global.website-files.com/5d121ce15cf154f8f7d91740/61771ae3d2be700f5c5a5e7a_Terraform-Award%20Copy%20(1).png"
                loading="lazy"
                alt=""
                width="90"
                className="img-700"
              />
            </div>
            <img
              src="https://assets-global.website-files.com/5d121ce15cf154f8f7d91740/61771a3f9ebe514571cc86d2_Line%202%20Copy%202.svg"
              loading="lazy"
              alt=""
            />
            <div className="box-20-1">
              <img
                src="https://assets-global.website-files.com/5d121ce15cf154f8f7d91740/61771b01b913c227d1c1ba01_Screenshot%202021-10-21%20at%2010.17.31%20AM%20Copy%20(1).png"
                loading="lazy"
                alt=""
                width="75"
                className="img-700"
              />
            </div>
          </div>
        </div>
      </div>
    </MainContainer>
  );
};

export default CertificationComponent;
const MainContainer = styled.div`
padding-top: 48px;
padding-bottom: 48px;
width: 100%;
padding: 64px 32px;
position: relative;
overflow: hidden;
}
// .container {
//     z-index: 1;
//     width: 100%;
//     height: 100%;
//     max-width: 1200px;
//     // margin-left: auto;
//     // margin-right: auto;
//     // position: relative;
//     transform: scale(.9);
// }
.row-new {
    z-index: 1;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    display: flex;
    position: relative;
    @media screen and (max-width: 768px) {
      display:flex;
      // gap:20px;
      flex-direction:column;
    }
}
.column-26 {
    width: 26%;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    display: flex;
    @media screen and (max-width: 768px) {
      width:100%;
    }
}
.column-72 {
    width: 72%;
    flex-direction: column;
    align-items: flex-start;
    display: flex;
}
.column-gray-line {
    width: 100%;
    grid-template-rows: auto;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-auto-columns: 1fr;
    justify-content: space-between;
    align-items: center;
    display: flex;
}
.gray-line-column-67 {
    width: 95%;
    height: 1px;
    background-color: #d9d9d9;
    margin: 8px auto;
}
.column-gray-line {
    width: 100%;
    grid-template-rows: auto;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-auto-columns: 1fr;
    justify-content: space-between;
    align-items: center;
    display: flex;
}
.box-20-1 {
    width: 20%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    display: flex;
}
img {
    max-width: 100%;
    display: inline-block;
}
`;
