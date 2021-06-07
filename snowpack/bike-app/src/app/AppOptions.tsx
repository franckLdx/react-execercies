import React, { FunctionComponent } from 'react';

import { HStack } from '@chakra-ui/react';
import { LanguageSelector } from '../i18n';
import { ColorModeSelector } from '../theme/ColorModeSelector';

export const AppOptions: FunctionComponent = () => (
  <HStack spacing="20px">
    <LanguageSelector />
    <ColorModeSelector />
  </HStack>
);
