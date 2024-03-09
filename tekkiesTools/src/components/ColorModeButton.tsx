import React, { FC } from 'react';

import { IconButton, useColorMode } from '@chakra-ui/react';
import { SunIcon, MoonIcon } from '@chakra-ui/icons';

export const ColorModeButton: FC = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <IconButton
      aria-label="Clcik to switch color mode"
      onClick={toggleColorMode}
      icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
    />
  );
};
