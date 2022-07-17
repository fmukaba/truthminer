import { FC } from "react";
import {
  LayoutWrapper,
  LayoutContainer,
  ChildrenWrapper,
} from "./layout.styled";
interface Props {
  children: React.ReactNode;
}

const Layout: FC<Props> = ({ children }) => {
  return (
    <LayoutWrapper>
      <LayoutContainer>
        <ChildrenWrapper>{children}</ChildrenWrapper>
      </LayoutContainer>
    </LayoutWrapper>
  );
};

export default Layout;
