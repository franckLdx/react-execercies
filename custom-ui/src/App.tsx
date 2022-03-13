import React, { FC } from 'react';
import { Button, HStack, Radio, RadioGroup, VStack, Select } from '@chakra-ui/react';
import { ComponentsCard } from './components/ComponentsCard';

export const App: FC = () => (
  <VStack spacing="50px" padding="20px" backgroundColor={"brand.veryLightGray"}>
    <ComponentsCard>
      <Button >Click me!</Button>
      <Button disabled={true}>Click me!</Button>
    </ComponentsCard>
    <ComponentsCard>
      <Button variant="secondary">Click me!</Button>
      <Button disabled={true}>Click me!</Button>
    </ComponentsCard>
    <ComponentsCard>
      <RadioGroup>
        <HStack spacing="20px">
          <Radio value="1">Select me!</Radio>
          <Radio value="2">No me!</Radio>
        </HStack>
      </RadioGroup>
    </ComponentsCard>
    <ComponentsCard>
      <Select>
        <option value={1}>1</option>
        <option value={2}>2</option>
        <option value={3}>3</option>
        <option value={4}>4</option>
        <option value={5}>5</option>
        <option value={6}>6</option>
        <option value={7}>7</option>
        <option value={8}>8</option>
        <option value={9}>9</option>
        <option value={10}>10+</option>
      </Select>
    </ComponentsCard>
  </VStack >
)
