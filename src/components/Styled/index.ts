import styled from "styled-components";

export const Spacer = styled.div`
  height: 59px;
`;

export const PageContent = styled.div`
  position absolute;
  top: calc(15vh + 144px);
  margin: 0px 120px;
   @media screen and (max-width: 600px) {
    margin: 0px 60px;
  }
`;
