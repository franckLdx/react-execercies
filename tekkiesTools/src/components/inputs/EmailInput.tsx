import React, { ChangeEventHandler, FC } from 'react';

import { Input } from '@chakra-ui/react';

interface EmailInputProps {
  disabled: boolean;
  email: string;
  setEmail: (email: string) => void;
}

export const EmailInput: FC<EmailInputProps> = ({
  email,
  setEmail,
  disabled,
}) => {
  const onChange: ChangeEventHandler<HTMLInputElement> = (e) =>
    setEmail(e.target.value);

  return (
    <Input
      disabled={disabled}
      placeholder="Email"
      type="email"
      isRequired={true}
      role="email input"
      value={email}
      onChange={onChange}
    />
  );
};
