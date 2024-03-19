import styled from "styled-components";

export const FiltersContainer = styled.div`
  width: 100%;
  position: fixed;
  display: flex;
  flex-direction: row;
  z-index: 100;
  background-color: #fff;
`;

export const FilterText = styled.div`
  display: flex;
  margin: auto;
  justify-content: center;
  @media (max-width: 600px) {
    display: none;
  }
`;

export const FiltersGrid = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  gap: 10px;

  @media only screen and (max-width: 320px) {
    flex-wrap: wrap;
  }
`;

export const FilterButton = styled.button<{ active: boolean }>`
  margin: 15px 0px;
  padding: 5px 10px;
  cursor: pointer;
  border: 1px solid #aaa;
  background: none;
  border-radius: 20px;
  font-size: 13px;
  ${(props) =>
    props.active &&
    `
      background-color: #ccc;
    `}

  @media only screen and (min-width: 400px) {
    padding: 10px 20px;
  }
`;

export const GridWrapper = styled.div`
  display: block;
  grid-gap: 30px;
  margin-bottom: 100px;
  margin-top: 70px;

  @media screen and (min-width: 769px) {
    display: grid;
    grid-template-columns: repeat(2, 45%);
  }

  @media screen and (min-width: 1025px) {
    display: grid;
    grid-template-columns: repeat(3, 30%);
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
  color: #333335;
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

export const StyledRowDivider = styled.div`
  width: 100%;
  height: 1px;
  background-color: #eeeeee;
  grid-column: span 3;
  margin: 10px 0;

  @media (max-width: 1024px) {
    display: none !important;
  }
`;
