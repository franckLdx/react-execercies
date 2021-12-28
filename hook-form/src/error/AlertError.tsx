import React, { FC } from 'react'

import Alert from '@mui/material/Alert/Alert'
import AlertTitle from '@mui/material/AlertTitle/AlertTitle'

interface Props {
  messsage: string
}

export const AlertError: FC<Props> = ({ messsage }) => (
  <Alert severity="error">
    <AlertTitle>Error</AlertTitle>
    {messsage}Sorry... Shit happens !
  </Alert>
)