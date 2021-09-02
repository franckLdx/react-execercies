import React, { FC } from 'react';

import { placeholderForInput } from '../theme';
import { Input } from '@chakra-ui/react';

export const EmailInput: FC = () => (
  <Input
    placeholder="Email"
    type="email"
    variant="login"
    _placeholder={placeholderForInput}
  />
);
