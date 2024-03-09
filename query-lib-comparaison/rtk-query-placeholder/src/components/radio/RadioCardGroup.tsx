import React, { FC } from 'react';

import { HStack, useRadioGroup } from '@chakra-ui/react';
import { RadioCard } from './RadioCard';

export interface RadioCardOption<ValueType> {
  label: string,
  value: ValueType
}

interface RadioCardGroupProps<ValueType> {
  name: string;
  options: Array<RadioCardOption<ValueType>>;
  value?: ValueType;
  onChange: (newValue: ValueType) => void;
}

export const RadioCardGroup: FC<RadioCardGroupProps<any>> = ({ name, value, options, onChange }) => {

  const { getRootProps, getRadioProps } = useRadioGroup({
    name,
    value,
    onChange
  })

  const group = getRootProps()

  return (
    <HStack {...group}>
      {options.map(({ label, value }) => {
        const radioProps = getRadioProps({ value })
        return (
          <RadioCard key={value} {...radioProps}>
            {label}
          </RadioCard>
        )
      })}
    </HStack>
  )
}