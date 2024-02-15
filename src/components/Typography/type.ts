import { ElementType, ReactNode } from "react";
import {
  ColorProps,
  LayoutProps,
  SpaceProps,
  TypographyProps,
} from "styled-system";

export type TypographyVariant =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "h6-1"
  | "h7"
  | "h8"
  | "body-big"
  | "body1-1"
  | "button-m"
  | "body2-2"
  | "link"
  | "body1"
  | "body2"
  | "caption"
  | "button";

export type TypographyComponentProps = {
  tag?: ElementType;
  variant?: TypographyVariant;
  children?: ReactNode;
} & TypographyProps &
  SpaceProps &
  LayoutProps &
  ColorProps;
