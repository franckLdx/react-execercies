import React, { FC } from 'react';

import { inputTheme, placeholderInputTheme } from '../theme';
import { Input } from '@chakra-ui/react';

export const EmailInput: FC = () => (
  <Input
    placeholder="Email"
    type="email"
    _placeholder={placeholderInputTheme}
    {...inputTheme.baseStyle}
  />
);
