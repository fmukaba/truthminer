import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 15vh;
  background-color: #faf7f2;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 40px 120px;
  gap: 24px;
  flex-wrap: wrap;
  position: fixed;
  z-index: 100;

  @media screen and (max-width: 600px) {
    padding: 40px 60px;
  }
`;

export const Title = styled.div`
  width: 100%;
  height: 10vh;
  font-family: "NB International Pro";
  font-style: normal;
  font-weight: 400;
  font-size: 56px;
  line-height: 120%;
  color: #333335;
`;

export const Description = styled.div`
  max-height: 5vh;
  overflow: hidden;
  text-overflow: ellipsis;
`;
