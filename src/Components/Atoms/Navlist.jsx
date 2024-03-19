import { IoIosArrowDown } from "react-icons/io";
import styled from "styled-components";
import Listnav from "./Listnav";
import Button from "./Button";
import { useState } from "react";
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
      <div className="menu-icon" onClick={handleToggleMobileMenu}>
        <IoIosArrowDown />
      </div>

      {list.map((item, index) => {
        return (
          <div key={index} className={`list ${isMobile ? "mobile" : ""}`}>
            <Listnav item={item} />
          </div>
        );
      })}

      <Button text="Contact us" />
    </NavList>
  );
};

export default Navlist;

const NavList = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;

  .menu-icon {
    display: none;
    cursor: pointer;
  }

  .list {
    display: flex;
    align-items: center;
    gap: 2px;
    justify-content: center;
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
    }
  }
`;
