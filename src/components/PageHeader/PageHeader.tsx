import { FC } from "react";
import { FlexBox } from "../../components/Layout/layout.styled";
import { Container, Description, Title } from "./pageheader.styled";

type Props = {
  title: string;
  description?: string;
};

const PageHeader: FC<Props> = ({ ...props }) => {
  return (
    <FlexBox flexDirection="row" align-items="flex-start">
      <Container>
        <Title>{props.title}</Title>
        {props.description ? (
          <Description>{props.description}</Description>
        ) : null}
      </Container>
    </FlexBox>
  );
};

export default PageHeader;
