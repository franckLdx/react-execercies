import React, { FunctionComponent, memo } from 'react';

import { Center, Heading } from '@chakra-ui/react';
import { useLoginTranslation } from './tools/loginHooks';

export const LoginHeader: FunctionComponent = memo(() => {
  const translate = useLoginTranslation();
  return (
    <Center>
      <Heading color="black" style={{ transform: 'rotate(-5deg)' }}>
        {translate('header')}
      </Heading>
    </Center>
  );
});

LoginHeader.displayName = 'LoginHeader';
