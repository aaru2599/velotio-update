import { IoIosArrowDown } from "react-icons/io";
import styled from "styled-components";
import Listnav from "./Listnav";
import Button from "./Button";
import { useState } from "react";
import { IoReorderThree } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
const list = [
  {
    title: "Services",
  },
  {
    title: "Expertise",
  },
  {
    title: "Industries",
  },
  {
    title: "Success Stories",
  },
  {
    title: "About",
  },
  {
    title: "Resource",
  },
];

const Navlist = () => {
  const [isMobile, setIsMobile] = useState(false);

  const handleToggleMobileMenu = () => {
    setIsMobile(!isMobile);
  };

  return (
    <NavList isMobile={isMobile}>
      {isMobile ? (
        <div className="menu-icon" onClick={handleToggleMobileMenu}>
          <IoMdClose/> 
        </div>
      ) : (
        <div className="menu-icon" onClick={handleToggleMobileMenu}>
          <IoReorderThree />

        </div>
      )}

     <div className={`list ${isMobile ? "mobile" : ""}`}>
     {list.map((item, index) => {
        return (
          <div className="list" key={index} >
            <Listnav item={item} />
          </div>
        );
      })}
      <Button text="Contact us" className="contact-button" />
     </div>
    </NavList>
  );
};

export default Navlist;
const NavList = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;
  @media only screen and (max-width: 768px) {
    padding-top: 50px;
    color: white;
  
    }
  .menu-icon {
    display: none;
    cursor: pointer;
  }

  .list {
    display: flex;
    align-items: center;
    gap: 20px;
    // justify-content: center;
    cursor: pointer;
  }

  @media only screen and (max-width: 768px) {
    flex-direction: column;

    .menu-icon {
      display: block;
    }

    .list {
      display: ${({ isMobile }) => (isMobile ? "flex" : "none")};
      flex-direction: column;
      // gap: 10px;
    }

    .contact-button {
      display: ${({ isMobile }) => (isMobile ? "none" : "block")};
    }
  }
`;
