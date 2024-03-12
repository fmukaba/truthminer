import styled from "styled-components";

export const Container = styled.div`
  width: 55vw;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  flex-wrap: wrap;
  cursor: pointer;

  @media screen and (max-width: 1024px) {
    width: 70vw;
  }
`;

export const Title = styled.div`
  width: 100%;
  font-family: NB International Pro;
  font-style: normal;
  font-weight: 400;
  font-size: 32px;
  color: #333335;
  align-self: stretch;
`;

export const Description = styled.div`
  margin-top: 8px;
  width: 100%;
  font-family: NB International Pro;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: 2em;
  max-height: 12em;
`;

export const Footer = styled.div`
  font-family: NB International Pro;
  font-style: normal;
  font-size: 12px;
  font-weight: 400;
  color: #656568;
  margin-top: 8px;
  margin-bottom: 20px;
  width: 100%;
  line-height: 130%;
`;

export const TitleContainer = styled.div`
  font-family: NB International Pro;
  font-size: 50px;
  font-style: normal;
  font-weight: 400;
  line-height: 120%;
`;

export const ArticleContainer = styled.div`
  position: absolute;
  top: 20%;
  padding: 10px;
  margin-left: 18%;
  margin-right: 18%;
`;

export const Content = styled.div`
  margin-top: 5%;
  color: #333335;
  font-family: Atiza Text;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
`;

export const StyledColumnDivider = styled.div`
  margin-top: 40px;
  margin-left: 100px;
  height: 50vh;
  width: 1px;
  background-color: #eee;

  @media screen and (max-width: 1024px) {
    display: none;
  }
`;

export const MustRead = styled.div`
  display: none;
  margin-left: 20px;
  margin-top: 30px;
  @media screen and (max-width: 1024px) {
    display: none;
  }
`;
