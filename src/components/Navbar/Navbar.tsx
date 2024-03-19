import logo from "../../assets/favicon.png";
import { FaBars } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import Searchbar from "../SearchBar/SearchBar";
import {
  LogoWrapper,
  NavbarWrapper,
  TabsContainer,
  RightSide,
  NavbarContainer,
  HamburgerIcon,
  MobileNav,
} from "./navbar.styled";

const Navbar = () => {
  const [isNavOpen, setNavOpen] = useState(false);

  const handleHamburgerClick = () => {
    setNavOpen(!isNavOpen);
  };

  const handleTabClick = () => {
    setNavOpen(false);
  };

  return (
    <NavbarWrapper>
      <NavbarContainer>
        {isNavOpen && (
          <MobileNav>
            <NavLink to="/nuggets" onClick={handleTabClick}>
              Nuggets
            </NavLink>
            <NavLink to="/gems" onClick={handleTabClick}>
              Gems
            </NavLink>
            <NavLink to="/gold" onClick={handleTabClick}>
              Gold
            </NavLink>
            <NavLink to="/prospector" onClick={handleTabClick}>
              Prospector
            </NavLink>
          </MobileNav>
        )}
        <Link to="/nuggets">
          <LogoWrapper>
            <img src={logo} alt="Logo" />
          </LogoWrapper>
        </Link>
        <TabsContainer>
          <NavLink to="/nuggets" onClick={handleTabClick}>
            Nuggets
          </NavLink>
          <NavLink to="/gems" onClick={handleTabClick}>
            Gems
          </NavLink>
          <NavLink to="/gold" onClick={handleTabClick}>
            Gold
          </NavLink>
          <NavLink to="/prospector" onClick={handleTabClick}>
            Prospector
          </NavLink>
        </TabsContainer>
        <RightSide>
          <HamburgerIcon onClick={handleHamburgerClick}>
            <FaBars size={25} />
          </HamburgerIcon>
          <Searchbar />
        </RightSide>
      </NavbarContainer>
    </NavbarWrapper>
  );
};

export default Navbar;
