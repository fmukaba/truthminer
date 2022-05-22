import styled from 'styled-components';

export const NavbarWrapper = styled.header`
  display: inline-block;   
  position: fixed;
  width: 100%;
  top: 0;
  height: 63px;
  box-shadow: 0 .2rem 0.1rem rgba(0,0,0,.15)!important;
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
  display: inline;
  margin-left: 30px;
  img {
    width: 40px;
    position: relative;
    top: 5px;
  }
`;
export const TabsContainer = styled.div`
  display: inline;
  a {
    margin-right: 10px;

  }
`
export const RightSide = styled.div`
  display: inline
`


