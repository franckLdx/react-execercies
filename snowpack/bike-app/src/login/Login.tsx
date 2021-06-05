import React, { FunctionComponent, useCallback } from 'react';

import { Stack } from '@chakra-ui/react';
import { LoginHeader } from './LoginHeader';
import { LoginPassword } from './LoginPassword';
import { LoginEmail } from './LoginEmail';
import { LoginContainer } from './LoginContainer';
import { useRequiredField } from '../common/requiredFields/useRequiredField';
import { LoginButton } from './LoginButton';
import { useSetRecoilState } from 'recoil';
import { userAtom } from './data';

export const Login: FunctionComponent = () => {
  const setUserState = useSetRecoilState(userAtom);

  const email = useRequiredField();

  const password = useRequiredField();

  const onConnection = useCallback(() => {
    email.prepareValidation();
    password.prepareValidation();
    if (email.validate() && password.validate()) {
      setUserState({
        isLogged: true,
        role: 'administrator',
      });
    }
  }, [email, password, setUserState]);

  return (
    <LoginContainer>
      <LoginHeader />
      <Stack pt="5" pb="5" spacing={2}>
        <LoginEmail isMissing={email.isMissing} onChange={email.onChange} />
        <LoginPassword
          isMissing={password.isMissing}
          onChange={password.onChange}
        />
      </Stack>
      <LoginButton onClick={onConnection} />
    </LoginContainer>
  );
};
