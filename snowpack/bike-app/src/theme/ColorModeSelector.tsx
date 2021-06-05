import React, { FunctionComponent, useMemo } from 'react';

import { Box, Switch, useColorMode, Text } from '@chakra-ui/react';
import { useCommonTranslation } from '../common/translation';

const ColorModeSwitcher: FunctionComponent = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const defaultChecked = useMemo(() => colorMode === 'dark', [colorMode]);

  return <Switch defaultChecked={defaultChecked} onChange={toggleColorMode} />;
};

export const ColorModeSelector: FunctionComponent = () => {
  const translate = useCommonTranslation();
  const text = translate('toggleColorMode');
  return (
    <Box>
      <Text display="inline" marginRight="10px">
        {text}
      </Text>
      <ColorModeSwitcher />
    </Box>
  );
};
