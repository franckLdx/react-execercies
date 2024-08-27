import { FC } from 'react';
import { Text } from '@mantine/core';
import { DancerModel } from '@/services/dancer/getDancer';

interface HeaderProps {
  dancer: DancerModel;
}

export const Header: FC<HeaderProps> = ({ dancer }) => (
  <Text fw={900} tt="capitalize" ta="center" size="xl">
    {dancer.dancer_first} {dancer.dancer_last} {dancer.wscid}
  </Text>
);
