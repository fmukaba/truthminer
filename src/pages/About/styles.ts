import styled from "styled-components";

export const MainContent = styled.div`
  display: flex;
  flex-direction: column;

  @media only screen and (min-width: 600px) {
    flex-direction: row;
  }
`;

export const ImageWrapper = styled.div`
  flex: 1;
  margin-right: 10px;
  img {
    max-width: 100%;
    height: auto;
    display: block;
  }
`;

export const TextWrapper = styled.div`
  flex: 1;
  font-family: NB International Pro;
`;
