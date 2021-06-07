import React, { FunctionComponent } from 'react';

import { Link } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

interface NavItemProps {
  href: string;
}

export const NavItem: FunctionComponent<NavItemProps> = ({
  children,
  href,
}) => (
  <Link to={href} as={RouterLink}>
    {children}
  </Link>
);
