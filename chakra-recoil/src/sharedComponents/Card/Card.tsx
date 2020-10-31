import React, { FunctionComponent, memo } from "react";
import { AppBorder, AppBorderProps } from "../AppBorder";

type CardProps = Pick<AppBorderProps, 'marginTop'>

export const Card: FunctionComponent<CardProps> = memo(({ children, ...extraBorderProps }) => (
  <AppBorder backgroundColor="app.maimBackground" {...extraBorderProps}>
    {children}
  </AppBorder >
));

Card.displayName = "Card";
