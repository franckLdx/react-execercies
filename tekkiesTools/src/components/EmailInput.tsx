import React, { FC } from 'react';

import { AtSignIcon } from '@chakra-ui/icons';
import { InputGroup, InputLeftAddon, Input } from '@chakra-ui/react';

export const EmailInput: FC = () => (
  <InputGroup>
    <InputLeftAddon>
      <AtSignIcon />
    </InputLeftAddon>
    <Input placeholder="email" type="email" />
  </InputGroup>
);
