import styled from "styled-components";

export const Spacer = styled.div`
  height: 59px;
`;

export const PageContent = styled.div<{ mt?: number; mb?: number }>`
  position absolute;
  top: calc(15vh + 144px);
  margin-left: 120px;
  margin-right: 120px;

  ${(props) =>
    props.mt &&
    `
      margin-top: ${props.mt}px;
  `}
    ${(props) =>
      props.mb &&
      `
      margin-bottom: ${props.mb}px;
  `}
  
   
  @media screen and (max-width: 1024px) {
    margin-left: 60px;
    margin-right: 60px;
  }
  
`;
