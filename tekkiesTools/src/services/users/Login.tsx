import React, { FC } from 'react';

import { Button, Center, Container, Heading, VStack } from '@chakra-ui/react';
import { EmailInput } from '../../components/EmailInput';
import { PasswordInput } from '../../components/PasswordInput';

export const Login: FC = () => (
  <Container maxW="container.md" layerStyle="container">
    <Center marginTop="5">
      <Heading color="black" style={{ transform: 'rotate(-5deg)' }}>
        Connection
      </Heading>
    </Center>
    <VStack spacing="15px" paddingY="5">
      <EmailInput />
      <PasswordInput />
      <Button width="100%">Login</Button>
    </VStack>
  </Container>
);
