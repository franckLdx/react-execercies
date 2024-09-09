import { FC, ReactNode } from "react";
import { Button } from "@mantine/core";
import clsx from "clsx";
import { NavLink, To } from "react-router-dom";

interface RoutedLinkProps {
  to: To
  children: ReactNode
}

export const RoutedLink: FC<RoutedLinkProps> = ({ to, children }) => (
  <Button
    renderRoot={({ className, ...others }) => (
      <NavLink
        to={to}
        className={({ isActive }) =>
          clsx(className, { 'active-class': isActive })
        }
        {...others}
      />
    )}
  >
    {children}
  </Button>
)