import { FC } from "react";
import { TypographyComponentProps } from "./type";
import { BaseComponent } from "./typography.styled";

const Typography: FC<TypographyComponentProps> = ({
  tag = "div",
  variant = "body1",
  children,
  ...rest
}) => {
  return (
    <BaseComponent as={tag} {...rest}>
      {children}
    </BaseComponent>
  );
};

export default Typography;
