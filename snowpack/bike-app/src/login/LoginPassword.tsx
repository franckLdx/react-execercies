import React, {
  FunctionComponent,
  useCallback,
  useMemo,
  useState,
} from 'react';

import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { IconButton, InputGroup, InputRightElement } from '@chakra-ui/react';
import { LoginInput } from './tools/LoginInput';
import { useLoginTranslation } from './tools/loginHooks';

interface LoginPasswordProps {
  isMissing: boolean;
  onChange: (newValue: string) => void;
}

export const LoginPassword: FunctionComponent<LoginPasswordProps> = ({
  isMissing,
  onChange,
}) => {
  const translate = useLoginTranslation();

  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = useCallback(
    () => setShowPassword(!showPassword),
    [showPassword, setShowPassword],
  );

  const currentIcon = useMemo(
    () => (showPassword ? <ViewOffIcon /> : <ViewIcon />),
    [showPassword],
  );

  const type = useMemo(
    () => (showPassword ? 'Text' : 'Password'),
    [showPassword],
  );

  return (
    <InputGroup>
      <LoginInput
        type={type}
        isMissing={isMissing}
        placeholder={translate('common:password')}
        onChange={onChange}
        testId="PasswordInput"
      />
      <InputRightElement height="100%" onClick={toggleShowPassword}>
        <IconButton aria-label="view password" icon={currentIcon} />
      </InputRightElement>
    </InputGroup>
  );
};
