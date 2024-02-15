import styled from "styled-components";

export const FiltersContainer = styled.div`
  height: 50px;
  width: 100vw;
  position: fixed;
  z-index: 100;
  background-color: #fff;
  justify-content: center;
`;

export const GridWrapper = styled.div`
  display: grid;
  grid-gap: 30px;
  grid-template-columns: repeat(3, 30%);
  margin-bottom: 100px;
  margin-top: 50px;

  @media screen and (max-width: 1024px) {
    display: block;
  }
`;

export const Container = styled.div`
  position: absolute;
  top: 20%;
  padding: 10px;
  margin-left: 18%;
  margin-right: 18%;
`;

export const Type = styled.div`
  color: #000;
  text-align: center;
  font-family: NB International Pro;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 130%;
  letter-spacing: 1.2px;
  text-transform: uppercase;
`;

export const Title = styled.div`
  color: var(--light-text-text-primary, #333335);
  margin: auto;
  text-align: center;
  font-family: NB International Pro;
  font-size: 40px;
  font-style: normal;
  font-weight: 400;
  line-height: 120%;
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
