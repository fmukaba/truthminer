import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  flex-wrap: wrap;
  cursor: pointer;
`;

export const Title = styled.div`
  width: 100%;
  font-family: "NB International Pro";
  font-style: normal;
  font-weight: 400;
  font-size: 32px;
  color: #333335;
`;

export const Description = styled.div`
  margin-top: 8px;
  font-size: 16px;
  width: 100%;
`;

export const Footer = styled.div`
  font-family: "NB International Pro";
  font-style: normal;
  font-size: 12px;
  margin-top: 8px;
  width: 100%;
`;

export const TitleContainer = styled.div`
  font-family: "NB International Pro";
  font-style: normal;
  font-size: 40px;
`;

export const ArticleContainer = styled.div`
  font-family: "NB International Pro";
  font-style: normal;
  font-size: 12px;
  position: absolute;
  top: 20%;
  padding: 10px;
  margin-left: 18%;
  margin-right: 18%;
`;

export const Content = styled.div`
  font-family: "NB International Pro";
  font-style: normal;
  font-size: 18px;
  margin-top: 5%;
`;
