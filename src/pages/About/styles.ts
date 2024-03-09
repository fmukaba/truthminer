import styled from "styled-components";

export const MainContent = styled.div`
  display: flex;
  @media (max-width: 600px) {
    flex-direction: column; 
`;

export const ImageWrapper = styled.div`
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
