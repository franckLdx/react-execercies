import React, { FunctionComponent, useMemo } from 'react';

import { Switch, useColorMode, Text, HStack } from '@chakra-ui/react';
import { useCommonTranslation } from '../../common/translation';

const ColorModeSwitcher: FunctionComponent = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const defaultChecked = useMemo(() => colorMode === 'dark', [colorMode]);

  return <Switch defaultChecked={defaultChecked} onChange={toggleColorMode} />;
};

export const ColorModeSelector: FunctionComponent = () => {
  const translate = useCommonTranslation();
  const ligthThemeText = translate('LightColorMode');
  const darkThemeText = translate('DarkColorMode');

  return (
    <HStack spacing="10px">
      <Text whiteSpace="nowrap">{ligthThemeText}</Text>
      <ColorModeSwitcher />
      <Text whiteSpace="nowrap">{darkThemeText}</Text>
    </HStack>
  );
};
