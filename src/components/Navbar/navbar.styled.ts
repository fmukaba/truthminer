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
  margin-left: 50px;
  @media (max-width: 600px) {
    display: none;
  }

  a {
    padding: 22px 16px;
    text-decoration: none;
    color: #333335;
    &: hover {
      color: #3b6be3;
    }
  }

  .active {
    color: #3b6be3;
  }
`;
export const RightSide = styled.div`
  display: flex;
  align-items: flex-end;
  margin-left: auto;
`;

export const HamburgerIcon = styled.div`
  display: none;
  cursor: pointer;
  @media (max-width: 600px) {
    position: relative;
    right: 15px;
    display: block;
  }
`;

export const MobileNav = styled.div`
  height: auto;
  width: 100%;
  position: absolute;
  top: 64px;
  background-color: #fff;
  border: none;
  border-bottom: 1px solid #ccc;
  box-shadow: 0 0.4rem -0.4rem rgba(0, 0, 0, 0.2) !important;
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  z-index: 1;

  a {
    color: #333;
    text-align: center;
    text-decoration: none;
    padding: 5px;
    border-radius: 3px;
    transition: background-color 0.3s ease;
    &:hover {
      color: #3b6be3;
      background-color: #f0f0f0;
    }
  }

  .active {
    color: #3b6be3;
  }
`;
