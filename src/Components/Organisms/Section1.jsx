import styled from "styled-components";
import Navbar from "../Molecules/Navabr/Navbar";
import CarouselPage from "../Molecules/CarouselPage";
import CarouselSlide from "../Atoms/CarouselSlide";

const Section1 = () => {
  return (
    <Sec1>
      <div>
        <CarouselPage />
      </div>
    </Sec1>
  );
};

export default Section1;

const Sec1 = styled.header`
  position: relative;
  width: 100%;
  .bgimage {
    object-fit: cover;
    width: 100%;
    height: 600px;
  }

  .textBox {
    position: absolute;
    top: 90px;
    left: 130px;
    z-index: 1;
    color: white;
    display: flex;
    width: 900px;
    align-items: center;
    justify-content: space-between;
  }

  .heading {
    font-size: 56px;
    line-height: 1.3;
  }

  .cmlogo {
    width: 100px;
    height: 100px;
    border-radius: 50%;
  }
`;
