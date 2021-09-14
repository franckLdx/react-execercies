import React, { FC, useEffect, useState } from 'react';

import {
  Button,
  Center,
  Container,
  Heading,
  VStack,
  Text,
} from '@chakra-ui/react';
import { EmailInput, PasswordInput } from '../../components';
import { useLogin } from './useLogin';

export const Login: FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const isValid = email.length && password.length;

  const loginMutation = useLogin();

  const onLogin = () => loginMutation.mutate({ email, password });

  const isAuthentificationFailed = [401, 404].includes(
    loginMutation.error?.response?.status,
  );

  useEffect(() => {
    if (!!loginMutation.error && !isAuthentificationFailed) {
      throw new Error('Boom');
    }
  }, [isAuthentificationFailed, loginMutation.error]);

  return (
    <Container maxW="container.md" layerStyle="container">
      <Center marginTop="5">
        <Heading color="black" style={{ transform: 'rotate(-5deg)' }}>
          Connection
        </Heading>
      </Center>
      <VStack spacing="15px" paddingY="5">
        <EmailInput
          disabled={loginMutation.isLoading}
          email={email}
          setEmail={setEmail}
        />
        <PasswordInput
          disabled={loginMutation.isLoading}
          password={password}
          setPassword={setPassword}
        />
        <Button
          isLoading={loginMutation.isLoading}
          onClick={onLogin}
          disabled={!isValid}
          width="100%"
        >
          Login
        </Button>
        {isAuthentificationFailed && (
          <Text color="red" fontWeight="bold">
            Email ou mot de passe invalide
          </Text>
        )}
      </VStack>
    </Container>
  );
};
