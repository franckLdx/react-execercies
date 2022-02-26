import React, { FC } from 'react';
import { Button, HStack, Radio, RadioGroup, VStack } from '@chakra-ui/react';
import { CardComponent } from './components/CardComponents';

export const App: FC = () => {
  return (
    <VStack spacing="50px">
      <CardComponent>
        <Button >Click me!</Button>
        <Button disabled={true}>Click me!</Button>
      </CardComponent>
      <CardComponent>
        <RadioGroup variant="brand" size="md">
          <HStack spacing="20px">
            <Radio value="1">Select me!</Radio>
            <Radio value="2">No me!</Radio>
          </HStack>
        </RadioGroup>
      </CardComponent>
    </VStack >
  );
}
