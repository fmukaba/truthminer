import styled from "styled-components";

import {
  color,
  ColorProps,
  layout,
  LayoutProps,
  space,
  SpaceProps,
  typography,
  TypographyProps,
} from "styled-system";

export const BaseComponent = styled.div<
  TypographyProps & SpaceProps & LayoutProps & ColorProps
>`
  margin: 0;
  font-style: normal;
  color: black;
  ${typography}
  ${space}
  ${layout}
  ${color}
`;
