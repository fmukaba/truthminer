import styled, { css } from "styled-components";
import {
  border,
  BorderProps,
  color,
  ColorProps,
  flexbox,
  FlexboxProps,
  layout,
  LayoutProps,
  position,
  PositionProps,
  space,
  SpaceProps,
  textAlign,
  TextAlignProps,
} from "styled-system";

export const LayoutWrapper = styled.div`
  margin-top: 17px;
`;

export const LayoutContainer = styled.div`
  display: flex;
`;

export const ChildrenWrapper = styled.div`
  width: 100%;
`;

export const FlexBox = styled.div<
  LayoutProps &
    FlexboxProps &
    SpaceProps &
    PositionProps &
    ColorProps &
    BorderProps &
    TextAlignProps & { gap?: number }
>`
  display: flex;
  ::-webkit-scrollbar {
    height: 10px;
  }
  ${(props) =>
    props.gap &&
    css`
      gap: ${`${props.gap}px`};
    `}
  ${layout}
  ${flexbox}
  ${space}
  ${textAlign}
  ${position}
  ${color}
  ${border}
`;
export const Box = styled.div<
  LayoutProps & FlexboxProps & SpaceProps & PositionProps & TextAlignProps
>`
  ${layout}
  ${flexbox}
  ${space}
  ${textAlign}
  ${position}
`;
