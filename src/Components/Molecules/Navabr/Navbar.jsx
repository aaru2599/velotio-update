import styled from "styled-components";
import Navlist from "../../Atoms/Navlist";
import React, { useEffect, useState } from "react";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);
  const [navbarColor, setNavbarColor] = useState("");
  const [navbarLogo, setNavbarLogo] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setNavbarColor("black");
        setNavbarLogo("");
      } else {
        setNavbarColor("white");
      }
      setShowNavbar(window.scrollY / 100);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Nav
      style={{
        color: navbarColor,
        backgroundColor: `rgba(255,255,255,${showNavbar})`,
        borderBottom: `0.15px solid rgba(233,233,233,${showNavbar})`
      }}
    >
      <LogoContainer onClick={scrollToTop}>
        <img
          src="https://assets-global.website-files.com/5d121ce15cf154f8f7d91740/5d1c4e8e4cf9cb87ea5a31aa_menu.svg"
          loading="lazy"
          decoding="async"
          alt="Velotio logo white"
          className="logo"
          style={{ willChange: "opacity", opacity: 1 }}
        />
        <img
          src="https://assets-global.website-files.com/5d121ce15cf154f8f7d91740/5d259f18e31f053207dd7caf_logo.svg"
          loading="lazy"
          decoding="async"
          alt="Velotio logo colored"
          className="logo-colored"
          style={{ willChange: "opacity", opacity: `${showNavbar ? showNavbar : "0"}` }}
        />
      </LogoContainer>

      <Navlist />
    </Nav>
  );
};

export default Navbar;

const LogoContainer = styled.div`
  position: relative;
  cursor: pointer;
  .logo-colored {
    position: absolute;
    top: 0%;
    bottom: 0%;
    left: 0%;
    right: 0%;
  }
`;

const Nav = styled.header`
  display: flex;
  justify-content: space-around;
  align-items: center;
  z-index: 100;
  font-weight: 500;
  position: fixed;
  color: white;
  width: 100%;
  height: 100px;
  @media (max-width: 768px) {
    height: 80px; /* Adjust height for mobile view */
    width:500px;
  }
`;

