import {
  IconWrapper,
  SearchBarContainer,
  SearchInput,
} from "./searchbar.styled";
import { Search } from "react-feather";
const Searchbar = () => {
  return (
    <SearchBarContainer>
      <IconWrapper>
        <Search size="16px" />
      </IconWrapper>
      <SearchInput placeholder="Search" />
    </SearchBarContainer>
  );
};

export default Searchbar;
