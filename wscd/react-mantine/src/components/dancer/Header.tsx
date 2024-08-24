import { FC } from 'react';
import { Text } from '@mantine/core';
import { DancerModel } from '@/services/dancer/getDancer';

interface HeaderProps {
  dancer: DancerModel;
}

export const Header: FC<HeaderProps> = ({ dancer }) => (
  <Text tt="capitalize" ta="center">
    {dancer.dancer_first} {dancer.dancer_last} {dancer.wscid}
  </Text>
);
