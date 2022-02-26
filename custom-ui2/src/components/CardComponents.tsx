import React, { FC } from 'react'

import { HStack } from '@chakra-ui/layout'

export const CardComponent: FC = ({ children }) => (
  <HStack margin="10px" padding="20px" spacing="100px" borderColor="gray" borderWidth="2px">
    {children}
  </HStack>
)