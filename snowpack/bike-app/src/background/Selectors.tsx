import React, { FunctionComponent } from 'react';
import { Flex, VStack } from '@chakra-ui/react';
import { LanguageSelector } from '../i18n';
import { ColorModeSelector } from '../theme/ColorModeSelector';

const SelectorsContainer: FunctionComponent = ({ children }) => (
  <Flex direction="row-reverse" paddingTop="10px" paddingRight="10px">
    <VStack borderWidth={2} borderRadius={8} p={4} spacing={5}>
      {children}
    </VStack>
  </Flex>
);

export const Selectors: FunctionComponent = () => (
  <SelectorsContainer>
    <LanguageSelector />
    <ColorModeSelector />
  </SelectorsContainer>
);
