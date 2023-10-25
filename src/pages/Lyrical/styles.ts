import styled from "styled-components";

export const FiltersContainer = styled.div`
  height: 50px`;

export const GridWrapper = styled.div`
  display: grid;
  grid-gap: 30px;
  grid-template-columns: repeat(3, 30%);
`;

export const Container = styled.div`
  position: absolute;
  top: 20%;
  padding: 10px;
  margin-left: 18%;
  margin-right: 18%;
`;

export const TitleContainer = styled.div`
  margin: auto;
  text-align: center;
  font-family: NB International Pro;
  font-size: 50px;
  font-style: normal;
  font-weight: 400;
  line-height: 120%
`;

export const Content = styled.div`
  margin-top: 3%;
  margin-left: 15%;
  margin-right: 15%;
  color: #333335;
  text-align: center;
  font-family: Atiza Text;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
`;
