import { FC } from "react";
import { Wrapper, Content, Description, Title } from "./pageheader.styled";

type Props = {
  title: string;
  description?: string;
};

const PageHeader: FC<Props> = ({ ...props }) => {
  return (
    <Wrapper>
      <Content>
        <Title>{props.title}</Title>
        {props.description && <Description>{props.description}</Description>}
      </Content>
    </Wrapper>
  );
};

export default PageHeader;
