import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  flex-wrap: wrap;
  cursor: pointer;

  @media screen and (min-width: 1024px) {
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
  text-align: center;
  font-family: NB International Pro;
  font-size: 40px;
  font-style: normal;
  font-weight: 400;
  line-height: 120%;
  @media only screen and (min-width: 768px) {
    font-size: 50px;
  }
`;

export const ArticleContainer = styled.div`
  position: absolute;
  top: 20%;
  padding: 10px;
  margin-left: 5%;
  margin-right: 5%;
  @media only screen and (min-width: 768px) {
    margin-left: 18%;
    margin-right: 18%;
  }
`;

export const Content = styled.div`
  margin-top: 5%;
  color: #333335;
  font-family: Atiza Text;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  .container {
    margin: 20px auto;
    padding: 20px;
    background-color: #fff;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    border-radius: 5px;
  }
  h1,
  h2 {
    color: #333;
  }
  p {
    margin-bottom: 20px;
  }
  blockquote {
    margin: 0;
    padding: 10px 20px;
    background-color: #f3f3f3;
    border-left: 5px solid #ccc;
  }
`;
export const StyledRowDivider = styled.div`
  width: 100%;
  height: 1px;
  background-color: #eeeeee;
  grid-column: span 3;
  margin: 10px 0;
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
