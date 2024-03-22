import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100vw;
  height: 200px;
  background-color: #faf7f2;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 24px;
  flex-wrap: wrap;
  position: fixed;
  z-index: 100;
`;

export const Content = styled.div`
  margin: 45px 30px;

  @media only screen and (min-width: 768px) {
    margin-left: 60px;
    margin-right: 60px;
  }

  @media only screen and (min-width: 1024px) {
    margin-left: 120px;
    margin-right: 120px;
  }
`;

export const Title = styled.div`
  font-family: "NB International Pro";
  font-style: normal;
  font-weight: 400;
  font-size: 46px;
  color: #333335;

  @media only screen and (min-width: 768px) {
    font-size: 56px;
  }
`;

export const Description = styled.div`
  margin-top: 20px;
  font-family: "NB International Pro";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  color: #333335;
`;
