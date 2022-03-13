import React, { FC } from 'react'
import { Box } from '@chakra-ui/layout'
import { useMultiStyleConfig, useStyleConfig } from '@chakra-ui/react'

interface CardProps {
  variant?: string
}

export const Card: FC<CardProps> = ({ variant, children }) => {
  const styles = useStyleConfig("Card", { variant: variant ?? "primary" })
  const styles2 = useMultiStyleConfig("Select", {
    variant: variant ?? "primary"
  })
  console.log(styles2);

  return (
    <Box __css={styles}>
      {children}
    </Box>
  )
}