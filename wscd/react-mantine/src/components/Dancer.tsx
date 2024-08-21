import React, { FC } from 'react';
import {
  Card,
  Stack,
  Text,
} from '@mantine/core';
import { useGetDancer } from '@/services/getDancer';

interface DancerProps {
  wscid: number | undefined
}

export const Dancer: FC<DancerProps> = ({ wscid }) => {
  const query = useGetDancer(wscid);

  if (!query.data) {
    return null;
  }

  const dancer = query.data;

  return (
    <Stack>
      <Card>
        <Text tt="capitalize" ta="center">
          {dancer.dancer_first} {dancer?.dancer_last}
        </Text>
      </Card>
    </Stack>
  );
};
