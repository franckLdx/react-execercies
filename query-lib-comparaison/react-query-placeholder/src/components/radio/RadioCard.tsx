import React, { FC } from 'react';

import { Box, useRadio } from '@chakra-ui/react';

export const RadioCard: FC<any> = (props) => {
  const { getInputProps, getCheckboxProps } = useRadio(props)

  const inputProps = getInputProps()
  const checkboxProps = getCheckboxProps()

  return (
    <Box as="label">
      <input {...inputProps} />
      <Box
        {...checkboxProps}
        cursor="pointer"
        borderWidth="1px"
        borderRadius="md"
        boxShadow="md"
        _checked={{
          bg: "teal.600",
          color: "white",
          borderColor: "teal.600",
        }}
        _focus={{
          boxShadow: "outline",
        }}
        px={5}
        py={3}
      >
        {props.children}
      </Box>
    </Box>
  )
}