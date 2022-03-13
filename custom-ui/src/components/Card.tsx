import React, { FC } from 'react'
import { Box } from '@chakra-ui/layout'
import { useStyleConfig } from '@chakra-ui/react'

interface CardProps {
  variant?: string
}

export const Card: FC<CardProps> = ({ variant, children }) => {
  const styles = useStyleConfig("Card", { variant: variant ?? "primary" })
  return (
    <Box __css={styles}>
      {children}
    </Box>
  )
}