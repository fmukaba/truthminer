import styled from "styled-components";

export const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
  @media only screen and (min-width: 768px) {
    flex-direction: row;
  }

  @media only screen and (min-width: 1024px) {
    gap: 70px;
  }
`;

export const ImageWrapper = styled.div`
  img {
    max-width: 100%;
    height: auto;
    display: block;
  }
`;

export const TextWrapper = styled.div`
  flex: 1;
  max-width: 800px;
  font-family: "NB International Pro", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.6;
  color: #333335;
  padding: 10px;
  background-color: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  overflow-y: auto;

  @media only screen and (min-width: 768px) {
    max-height: 600px;
  }

  @media only screen and (min-width: 1024px) {
    line-height: 2;
    padding: 20px;
  }
`;
