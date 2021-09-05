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

  const { error, isLoading, refetch } = useLogin(email, password);

  const onLogin = () => refetch();

  useEffect(() => {
    if (!isLoading && error && error?.response?.status !== 404) {
      throw new Error('Boom');
    }
  }, [error, isLoading]);

  return (
    <Container maxW="container.md" layerStyle="container">
      <Center marginTop="5">
        <Heading color="black" style={{ transform: 'rotate(-5deg)' }}>
          Connection
        </Heading>
      </Center>
      <VStack spacing="15px" paddingY="5">
        <EmailInput disabled={isLoading} email={email} setEmail={setEmail} />
        <PasswordInput
          disabled={isLoading}
          password={password}
          setPassword={setPassword}
        />
        <Button
          isLoading={isLoading}
          onClick={onLogin}
          disabled={!isValid}
          width="100%"
        >
          Login
        </Button>
        {!isLoading && error?.response?.status === 404 && (
          <Text color="red" fontWeight="bold">
            Email ou mot de passe invalide
          </Text>
        )}
      </VStack>
    </Container>
  );
};
