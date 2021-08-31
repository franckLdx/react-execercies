import React, { FC } from 'react';

import { VStack } from '@chakra-ui/react';
import { EmailInput } from '../../components/EmailInput';
import { PasswordInput } from '../../components/PasswordInput';

export const Login: FC = () => (
  <VStack
    layerStyle="base"
    spacing="15px"
    padding="25px"
    width="full"
    maxWidth="800px"
  >
    <EmailInput />
    <PasswordInput />
  </VStack>
);
