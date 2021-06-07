import React, { FunctionComponent } from 'react';

import { HStack } from '@chakra-ui/react';
import { NavItem } from './navItem';

export const NavBar: FunctionComponent = () => (
  <HStack spacing="10px" h="100%">
    <NavItem href="/foo">FOO</NavItem>
    <NavItem href="/bar">BAR</NavItem>
  </HStack>
);
