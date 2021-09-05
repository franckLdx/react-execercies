import React, { ChangeEvent, ChangeEventHandler, FC, useState } from 'react';

import {
  IconProps,
  Input,
  InputGroup,
  InputRightElement,
} from '@chakra-ui/react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';

interface PasswordInputProps {
  password: string;
  setPassword: (password: string) => void;
  disabled: boolean
}

export const PasswordInput: FC<PasswordInputProps> = ({
  password,
  setPassword,
  disabled
}) => {
  const [view, setView] = useState(false);
  const onClick = () => setView(!view);

  const iconProps: IconProps = {
    id: 'icon',
    onClick,
    cursor: 'pointer',
    color: 'black',
  };
  const icon = view ? (
    <ViewOffIcon {...iconProps} />
  ) : (
    <ViewIcon {...iconProps} />
  );

  const inputType = view ? 'text' : 'password';
  const role = view ? 'Maskquer le mot de passe' : 'afficher le mot de passe';

  const onChange: ChangeEventHandler<HTMLInputElement> = (
    e: ChangeEvent<HTMLInputElement>,
  ) => setPassword(e.target.value.trim());

  return (
    <InputGroup>
      <Input
        disabled={disabled}
        placeholder="Mot de passe"
        type={inputType}
        role="password input"
        value={password}
        onChange={onChange}
      />
      <InputRightElement role={role}>{icon}</InputRightElement>
    </InputGroup>
  );
};
