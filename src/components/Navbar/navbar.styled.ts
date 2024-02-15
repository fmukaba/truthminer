import styled from "styled-components";

export const NavbarWrapper = styled.header`
  display: inline-block;
  position: fixed;
  width: 100%;
  top: 0;
  height: 64px;
  background-color: white;
  box-shadow: 0 0.1rem 0.4rem rgba(0, 0, 0, 0.2) !important;
  z-index: 10000;
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;

  .icon-wrapper {
    display: flex;
    align-items: center;
    h2 {
      font-size: 18px;
      font-weight: 600;
      padding-left: 20px;
      cursor: default;
    }
  }
`;

export const LogoWrapper = styled.div`
  width: 72px;
  display: inline;
  margin-left: 30px;
  img {
    width: 40px;
    position: relative;
    top: 5px;
  }
`;
export const TabsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 10px;
  a {
    padding: 22px 16px;
    text-decoration: none;
    color: #333335;
  }
  .activeLink {
    &: hover {
      color: #3b6be3;
    }
  }

  .activeLink.active {
    color: #3b6be3;
  }
`;
export const RightSide = styled.div`
  display: inline;
`;
