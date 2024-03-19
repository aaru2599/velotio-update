import Navbar from "./Components/Molecules/Navabr/Navbar";
import Section1 from "./Components/Organisms/Section1";
import Section2 from "./Components/Organisms/Section2";
import styled from "styled-components";
import Section3 from "./Components/Organisms/Section3";
import Section6 from "./Components/Organisms/Section6";
import Section4 from "./Components/Organisms/Section4";
import Section5 from "./Components/Organisms/Section5";
import Section7 from "./Components/Molecules/CarouselPage";
import { useEffect, useState } from "react";
import EnterpriceSection from "./Components/Organisms/EnterpriceSection";
import CertificationSection from "./Components/Organisms/CertificationSection";
import CertificationComponent from "./Components/Molecules/CertificationComponent";
import BlogSection from "./Components/Organisms/BlogSection";
import GetInTouchSection from "./Components/Organisms/GetInTouchSection";
import Footer from "./Components/Organisms/Footer";

const App = () => {
  return (
    <WrapperBackground>
      <Section1 />
      <Container>
        <WrapperBackground>
          <WrapperBox>
            <SecBg>
              <Section2 heading={"How We Can Help You"} />
            </SecBg>
          </WrapperBox>
        </WrapperBackground>

        <WrapperBackground>
          <WrapperBox>
            <Section3 />
          </WrapperBox>
        </WrapperBackground>
        {/* <WrapperBackground> */}
        <div style={{ backgroundColor: "white", marginTop: "50px" }}>
          <WrapperBox>
            <EnterpriceSection />
          </WrapperBox>
        </div>

        <WrapperBackground>
          <WrapperBox>
            <Section4 />
          </WrapperBox>
        </WrapperBackground>
        <div style={{ backgroundColor: "#d9ecfc" }}>
          <WrapperBox>
            <Section5 />
          </WrapperBox>
        </div>

        <div style={{ backgroundColor: "#f6f6f6" }}>
          <WrapperBox>
            <CertificationComponent />
          </WrapperBox>
        </div>
        <WrapperBox>
          <Section6 />
        </WrapperBox>
        <div style={{ backgroundColor: "#f6f6f6", padding:"64px 0 0 0" }}>
          <WrapperBox>
            <BlogSection />
          </WrapperBox>
        </div>
        <div style={{ backgroundColor: "#d9ecfc",position:"relative",zIndex:"10" }}>
          <WrapperBox>
            <GetInTouchSection />
          </WrapperBox>
        </div>
      </Container>
      {/* <Section7/> */}

      <FooterContainer>
        <WrapperBox>
          <Footer />
        </WrapperBox>
      </FooterContainer>
    </WrapperBackground>
  );
};

export default App;

const WrapperBackground = styled.div`
  background-color: rgb(249 249 249);
  // position:relative;
  // width: calc(100% - 10%);
`;
const WrapperBox = styled.div`
  // max-width: ;
  width: calc(100% - 10%);
  margin: 0 auto;
`;

const SecBg = styled.div`
  padding: 40px 0;
`;

const Container = styled.section`
  /*   max-width: 1330px;
  margin: 0 auto;
  padding: 12px; */

  @media only screen and (max-width: 768px) {
    /* Styles for tablet */
    padding: 12px;
  }

  @media only screen and (max-width: 480px) {
    /* Styles for phone */
    max-width: 480px;
  }
`;
const FooterContainer = styled.footer`
  background-image: url("https://assets-global.website-files.com/5d121ce15cf154f8f7d91740/658432a39d995232f772bcf0_Vector%20(1).png");
  background-position: 50%;
  background-repeat: no-repeat;
  z-index:20;
  background-size: cover;
`;
