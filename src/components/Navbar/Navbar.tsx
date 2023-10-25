import Searchbar from "../SearchBar/SearchBar";
import logo from "../../assets/favicon.png";
import {
  LogoWrapper,
  NavbarWrapper,
  TabsContainer,
  RightSide,
  NavbarContainer,
} from "./navbar.styled";
import { Link } from "react-router-dom";

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
          {/* Use typography for text in links */}
          <Link to="/articles">Articles</Link>
          <Link to="/lyrical">Lyrical</Link>
          {/* <Link to="/themes">Themes</Link> */}
          <Link to="/about">About</Link>
        </TabsContainer>
        <RightSide>
          <Searchbar />
        </RightSide>
      </NavbarContainer>
    </NavbarWrapper>
  );
};

export default Navbar;
