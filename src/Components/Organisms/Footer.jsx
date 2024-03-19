import React from "react";
import styled from "styled-components";
import { FooterImageData } from "../Data/FooterImageData";
import FooterImage from "../Molecules/FooterImage";
import FooterBottomComponent from "../Atoms/FooterBottomComponent";

const Footer = () => {
  const data=FooterImageData;
  return (
    <div style={{position:"relative"}}>
      <TopContainer>
        <div className="footer-holder-new">
          <div className="footer-card-new">
            <h4 className="footer-heading">Services</h4>
            <div className="footer-box-new">
              <h4 className="footer-heading-small">By Company Stage</h4>

              <div
                className="footer-link-text"
                style={{ color: "rgba(255, 255, 255, 0.8)" }}
              >
                Early Stage
              </div>

              <div
                className="footer-link-text"
                style={{ color: "rgba(255, 255, 255, 0.8)" }}
              >
                High-growth Startups
              </div>
            </div>
            <div className="footer-box-new footer-box-new-top-mar">
              <h4 className="footer-heading-small">By Engagement Model</h4>

              <div
                className="footer-link-text"
                style={{ color: "rgba(255, 255, 255, 0.8)" }}
              >
                CTO as a service
              </div>

              <div
                className="footer-link-text"
                style={{ color: "rgba(255, 255, 255, 0.8)" }}
              >
                Remote Engineering Team
              </div>

              <div
                className="footer-link-text"
                style={{ color: "rgba(255, 255, 255, 0.8)" }}
              >
                Product Development Outsourcing
              </div>

              <div
                className="footer-link-text"
                style={{ color: "rgba(255, 255, 255, 0.8)" }}
              >
                Strategic Offshoring
              </div>
            </div>
          </div>
          <div className="footer-card-2-new footer-card-new">
            <h4 className="footer-heading">Expertise</h4>
            <div style={{ display: "flex" }}>
              <div className="footer-box-holder-new">
                <h4 className="footer-heading-small">Product Engineering</h4>
                <div
                  className="footer-link-text"
                  style={{ color: "rgba(255, 255, 255, 0.8)" }}
                >
                  UI/UX Design
                </div>
                <div
                  className="footer-link-text"
                  style={{ color: "rgba(255, 255, 255, 0.8)" }}
                >
                  React Development
                </div>
                <div
                  className="footer-link-text"
                  style={{ color: "rgba(255, 255, 255, 0.8)" }}
                >
                  Backend / Middleware
                </div>
                <div
                  className="footer-link-text"
                  style={{ color: "rgba(255, 255, 255, 0.8)" }}
                >
                  Blockchain Solutions
                </div>{" "}
                <div
                  className="footer-link-text"
                  style={{ color: "rgba(255, 255, 255, 0.8)" }}
                >
                  Mobile App Development
                </div>
                <div
                  className="footer-link-text"
                  style={{ color: "rgba(255, 255, 255, 0.8)" }}
                >
                  Media and Streaming
                </div>
                <div
                  className="footer-link-text"
                  style={{ color: "rgba(255, 255, 255, 0.8)" }}
                >
                  QA / Test Engineering
                </div>
                <div className="footer-box-new footer-box-new-47">
                  <h4 className="footer-heading-small">Cloud & DevOp</h4>

                  <div
                    className="footer-link-text"
                    style={{ color: "rgba(255, 255, 255, 0.8)" }}
                  >
                    CI/CD & Infrastructure Automation
                  </div>

                  <div
                    className="footer-link-text"
                    style={{ color: "rgba(255, 255, 255, 0.8)" }}
                  >
                    Kubernetes Adoption
                  </div>
                </div>
              </div>
              <div className="footer-box-holder-new">
                <div className="footer-box-new footer-box-new-47">
                  <h4 className="footer-heading-small">Data and AI</h4>

                  <div
                    className="footer-link-text"
                    style={{ color: "rgba(255, 255, 255, 0.8)" }}
                  >
                    Generative AI Development
                  </div>

                  <div
                    className="footer-link-text"
                    style={{ color: "rgba(255, 255, 255, 0.8)" }}
                  >
                    AI & ML
                  </div>

                  <div
                    className="footer-link-text"
                    style={{ color: "rgba(255, 255, 255, 0.8)" }}
                  >
                    Chatbots
                  </div>
                </div>
                <div className="footer-box-new footer-box-new-47">
                  <h4 className="footer-heading-small">
                    Strategy and Consulting
                  </h4>

                  <div
                    className="footer-link-text"
                    style={{ color: "rgba(255, 255, 255, 0.8)" }}
                  >
                    Digital Transformation
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-card-new">
            <h4 className="footer-heading">Company</h4>

            <div className="footer-box-new">
              <div
                className="footer-link-text"
                style={{ color: "rgba(255, 255, 255, 0.8)", marginTop: "10px" }}
              >
                About Us
              </div>

              <div
                className="footer-link-text"
                style={{ color: "rgba(255, 255, 255, 0.8)" }}
              >
                How We Deliver
              </div>

              <div
                className="footer-link-text"
                style={{ color: "rgba(255, 255, 255, 0.8)" }}
              >
                Industries
              </div>

              <div
                className="footer-link-text"
                style={{ color: "rgba(255, 255, 255, 0.8)" }}
              >
                Culture
              </div>

              <div
                className="footer-link-text"
                style={{ color: "rgba(255, 255, 255, 0.8)" }}
              >
                Careers
              </div>

              <div
                className="footer-link-text"
                style={{ color: "rgba(255, 255, 255, 0.8)" }}
              >
                FAQs
              </div>

              <div
                className="footer-link-text"
                style={{ color: "rgba(255, 255, 255, 0.8)" }}
              >
                Press Release
              </div>

              <div
                className="footer-link-text"
                style={{ color: "rgba(255, 255, 255, 0.8)" }}
              >
                CSR
              </div>

              <h4 className="footer-heading-small">Resources</h4>
              <div
                className="footer-link-text"
                style={{ color: "rgba(255, 255, 255, 0.8)" }}
              >
                Engineering Blog
              </div>

              <div
                className="footer-link-text"
                style={{ color: "rgba(255, 255, 255, 0.8)" }}
              >
                The Velotio Vibe
              </div>

              <div
                className="footer-link-text"
                style={{ color: "rgba(255, 255, 255, 0.8)" }}
              >
                Velotio's Culture Book
              </div>

              <div
                className="footer-link-text"
                style={{ color: "rgba(255, 255, 255, 0.8)" }}
              >
                Case Studies
              </div>
            </div>
          </div>
        </div>
      </TopContainer>
      <MiddleContainer >
        <FooterImage data={data}/>
      </MiddleContainer>
      <FooterBottom>
        <FooterBottomComponent/>
      </FooterBottom>
    </div>
  );
};

export default Footer;
const FooterBottom=styled.div`
margin-top:50px;
@media (max-width: 768px) {
  // display:none;
  // padding-bottom:50px;
}


`
const MiddleContainer = styled.div`
margin-top:-100px
@media (max-width: 768px) {
  margin-top: 20px;
  display:none;
}

`;
const TopContainer = styled.div`
  padding: 64px 0;
  .footer-holder-new {
    display: flex;
    justify-content: space-between;
  }

  .footer-card-new {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  .footer-box-new,
  .footer-box-holder-new {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  .footer-heading-small {
    margin-top: 10px;
    font-size: 18px;
    color: #e9e9e9;
  }

  .footer-heading {
    font-size: 20px;
    color: #e9e9e9;
    padding-bottom: 10px;
    border-bottom: 1px solid white;
  }
  .footer-link-text {
    font-size: 14px;
    // color:#e9e9e9;
    // text-decoration:none;
    &:hover {
      color: white;
      cursor: pointer;
    }
  }

  @media (max-width: 768px) {
    .footer-holder-new {
      flex-direction: column;
      gap:20px;
      
    }
  }
`;
