import styled from "styled-components";

export const SearchBarContainer = styled.div`
  align-self: stretch;
  right: 32px;
  display: flex;
  align-items: center;
  display: inline-flex;
  position: relative;
  @media (max-width: 600px) {
    display: none;
  }
`;

export const IconWrapper = styled.div`
  position: relative;
  top: 2px;
  left: 25px;
`;

export const SearchInput = styled.input`
  width: 240px;
  padding: 5px 10px 5px 30px;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  background-clip: padding-box;
  background: #ffffff;
  border: 1px solid #eeeeee;
  border-radius: 4px;
`;
