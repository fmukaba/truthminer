import styled from "styled-components";

export const MainContent = styled.div`
  display: flex;
  flex-direction: row;

  @media (max-width: 600px) {
    flex-direction: column; 
`;

export const ImageWrapper = styled.div`
  img {
    width: 100%;
    height: auto;
    display: block;
  }
`;

export const TextWrapper = styled.div`
  flex: 1;
`;
