import styled from "styled-components";

export const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
  @media only screen and (min-width: 600px) {
    flex-direction: row;
  }
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
  width: 30vw;
  flex: 1;
  font-family: "NB International Pro", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 1.6;
  color: #333335;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  overflow-y: auto; /* Enable scrolling if content exceeds container height */

  /* Styles for paragraphs */
  p {
    margin-bottom: 20px;
  }

  /* Styles for links */
  a {
    color: #007bff; /* Blue link color */
    text-decoration: underline;
  }

  /* Styles for emphasized text */
  em {
    font-style: italic;
    color: #ff4500; /* Orange color for emphasis */
  }
`;
