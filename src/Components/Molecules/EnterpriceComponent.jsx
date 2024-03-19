import React from "react";
import styled from "styled-components";
import { EnterpricesData } from "../Data/EnterpricesData";

const EnterpriceComponent = () => {
  const data = EnterpricesData;
  console.log("data", data);
  return (
    <Container>
      {data.map((item, index) => {
        return (
          <div className="container-new" key={index}>
            <div className="paragraph-new-20 paragraph-new-20-centar">
              {item.heading}
            </div>
            <div className="row-partners">
              {/* Render FirstLine items horizontally */}
              <div className="holder-partners">
                {item.FirstLine.map((data, dataIndex) => (
                  <div className="holder-partners-img" key={dataIndex}>
                    <img
                      src={data.image}
                      loading="eager"
                      alt=""
                      width="173"
                      className="partners-img"
                    />
                    {/* Render small separator for each FirstLine item */}
                    {data.line && (
                      <img
                        src={data.line}
                        loading="lazy"
                        alt=""
                        className="small-separator-partners"
                      />
                    )}
                  </div>
                ))}
              </div>
              {/* Large separator after FirstLine items */}
              <div className="big-separator-partners"></div>
              {/* Render SecLine items below large separator */}
              <div className="holder-partners holder-partners-mar-top-mob">
                {item.SecLine.map((secline, secIndex) => (
                  <div className="holder-partners-img" key={secIndex}>
                    <img
                      src={secline.image}
                      loading="eager"
                      alt=""
                      width="173"
                      className="partners-img"
                    />
                    {secline.line && (
                      <img
                        src={secline.line}
                        loading="lazy"
                        alt=""
                        className="small-separator-partners"
                      />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
      })}
    </Container>
  );
};

export default EnterpriceComponent;

const Container = styled.div`
//   background-color: white;
  padding-top: 56px;
  padding-bottom: 56px;

  .container-new {
    z-index: 1;
    width: 100%;
    max-width: 1100px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-left: auto;
    margin-right: auto;
    display: flex;
  }
  .paragraph-new-20 {
    color: var(--black);
    margin-top: 0;
    margin-bottom: 0;
    font-size: 20px;
    line-height: 24px;
  }
  .row-partners {
    width: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 40px;
    display: flex;
  }
  .holder-partners {
    z-index: 1;
    width: 100%;
    justify-content: center;
    align-items: stretch;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    position: relative;
  }
  .holder-partners-img {
    // flex-direction: column;
    justify-content: center;
    align-items: center;
    display: flex;
  }
  .big-separator-partners {
    width: 100%;
    height: 1px;
    background-color: #e6e6e6;
    margin-top: 20px;
    margin-bottom: 20px;
  }
  .small-separator-partners {
    background-color: #e6e6e6;
  }
`;
