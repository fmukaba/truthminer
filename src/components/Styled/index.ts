import styled from "styled-components";

export const Spacer = styled.div`
  height: 59px;
`;

export const PageContent = styled.div<{ mt?: number; mb?: number }>`
  position absolute;
  top: 264px;
  margin-left: 30px;
  margin-right: 30px;
  padding-bottom: 100px;

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

  @media only screen and (min-width: 768px) {
    margin-left: 60px;
    margin-right: 60px;
  }

  @media only screen and (min-width: 1024px) {
    margin-left: 120px;
    margin-right: 120px;
  }
`;
