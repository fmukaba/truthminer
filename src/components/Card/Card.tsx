import { FC } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Lyrical } from "../../interfaces";

const StyledBlogCell = styled.div<{ isMiddleColumn: boolean }>`
  text-align: center;
  padding: 20px;
  border: 1px solid transparent; s
  transition: border 0.3s ease; 
  cursor: pointer;

  &:hover {
    border: 1px solid rgba(0, 0, 0, 0.12); 
  }

  ${(props) =>
    props.isMiddleColumn &&
    `
      border-left: 1px solid #eee;
      border-right:  1px solid #eee;
  `}

  @media (max-width: 1024px) {
    border-left: none;
    border-right: none;
    border-bottom: 1px solid #eee;
  }
`;

const StyledType = styled.div<{ bgColor: string }>`
  text-align: center;
  width: fit-content;
  background-color: ${(props) => props.bgColor};
  color: #fff;
  font-size: 14px;
  padding: 2px 10px;
  border-radius: 4px;
  margin: 0 auto;
  display: inline-block;
`;

const StyledTitle = styled.h2`
  font-size: 18px;
  margin-bottom: 10px;
`;

const StyledSnippet = styled.p`
  margin-bottom: auto;
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: 2em;
  max-height: 12em;
`;

const StyledReadMore = styled.div`
  text-decoration: underline;
  cursor: pointer;
`;

interface CardProps extends Lyrical {
  index: number;
}

const Card: FC<CardProps> = ({ id, content, type, title, index }) => {
  const navigate = useNavigate();
  const isMiddleColumn = index % 3 === 1 ? true : false;
  let bgColor = "#326C5C";
  if (type.toLowerCase() === "spoken word") {
    bgColor = "#AB7D36";
  } else if (type.toLowerCase() === "rap") {
    bgColor = "#1F49B1";
  }
  const goTo = () => {
    navigate(`/collection/${id}`);
  };

  return (
    <StyledBlogCell onClick={goTo} isMiddleColumn={isMiddleColumn}>
      <StyledType bgColor={bgColor}>{type}</StyledType>
      <StyledTitle>{title.toUpperCase()}</StyledTitle>
      <StyledSnippet>{content}</StyledSnippet>
      <StyledReadMore>Read more</StyledReadMore>
    </StyledBlogCell>
  );
};

export default Card;
