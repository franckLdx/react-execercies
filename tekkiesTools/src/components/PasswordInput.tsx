import React, { FC, useState } from 'react';

import {
  IconProps,
  Input,
  InputGroup,
  InputRightAddon,
} from '@chakra-ui/react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';

export const PasswordInput: FC = () => {
  const [view, setView] = useState(false);
  const onClick = () => setView(!view);

  const iconProps: IconProps = { onClick, cursor: 'pointer' };
  const icon = view ? (
    <ViewOffIcon {...iconProps} />
  ) : (
    <ViewIcon {...iconProps} />
  );

  const inputType = view ? 'text' : 'password';

  return (
    <InputGroup>
      <Input placeholder="Mot de passe" type={inputType} />
      <InputRightAddon>{icon}</InputRightAddon>
    </InputGroup>
  );
};
