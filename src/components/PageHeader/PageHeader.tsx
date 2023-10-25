import { FC } from "react";
import { Container, Description, Title } from "./pageheader.styled";

type Props = {
  title: string;
  description?: string;
};

const PageHeader: FC<Props> = ({ ...props }) => {
  return (
    <Container>
      <Title>{props.title}</Title>
      {props.description ? (
        <Description>{props.description}</Description>
      ) : null}
    </Container>
  );
};

export default PageHeader;
