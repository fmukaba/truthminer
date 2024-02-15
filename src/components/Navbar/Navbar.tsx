import Searchbar from "../SearchBar/SearchBar";
import logo from "../../assets/favicon.png";
import {
  LogoWrapper,
  NavbarWrapper,
  TabsContainer,
  RightSide,
  NavbarContainer,
} from "./navbar.styled";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <NavbarWrapper>
      <NavbarContainer>
        <Link to="/">
          <LogoWrapper>
            <img src={logo} alt="Logo" />
          </LogoWrapper>
        </Link>
        <TabsContainer>
          <NavLink to="/articles" className="activeLink">
            Articles
          </NavLink>
          <NavLink to="/lyrical" className="activeLink">
            Lyrical
          </NavLink>
          <NavLink to="/themes" className="activeLink">
            Themes
          </NavLink>
          <NavLink to="/about" className="activeLink">
            About
          </NavLink>
        </TabsContainer>
        <RightSide>
          <Searchbar />
        </RightSide>
      </NavbarContainer>
    </NavbarWrapper>
  );
};

export default Navbar;
