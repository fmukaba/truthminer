import { FC } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Lyrical } from "../../interfaces";

const StyledCard = styled.div`
  max-height: 200px;
  max-width: 25vw;
  padding: 20px 10px 10px 10px;
  border: 1px solid grey;
  border-radius: 8px;
  display: flex;
  justify-content: start;
  flex-direction: column;
  align-items: center;
  position: relative;
  overflow: hidden;
  &: hover {
    cursor: pointer;
    border: solid 3px purple;
  }
`;

const Card: FC<Lyrical> = ({
  id,
  title,
  type,
  content,
  date_published,
}) => {
  const navigate = useNavigate();

  const goTo = () => {
    navigate(`/collection/${id}`);
  }

  return <StyledCard onClick={goTo}>{content}</StyledCard>
  
};

export default Card;
