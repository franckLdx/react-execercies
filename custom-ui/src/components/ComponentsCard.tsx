import React, { FC } from 'react'
import { HStack } from '@chakra-ui/layout'
import { Card } from './Card'

export const ComponentsCard: FC = ({ children }) => (
  <Card>
    <HStack margin="10px" padding="20px" spacing="100px">
      {children}
    </HStack>
  </Card>
)