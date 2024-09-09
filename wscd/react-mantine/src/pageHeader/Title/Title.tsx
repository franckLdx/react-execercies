import { FC } from 'react';
import { Center } from '@mantine/core';
import classes from './title.module.scss';

export const Welcome: FC = () => (
  <Center className={classes.title}>
    Custom WSDC Registry points
  </Center>
)
