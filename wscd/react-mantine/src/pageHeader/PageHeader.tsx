import { FC } from 'react'
import { Welcome } from '@/pageHeader/Title/Title'
import { NavigationBar } from './navigationBar/NavigationBar'
import { Center, Stack } from '@mantine/core'

export const PageHeader: FC = () => (
  <Center mb="lg">
    <Stack gap="xs">
      <Welcome />
      <NavigationBar />
    </Stack>
  </Center>
)