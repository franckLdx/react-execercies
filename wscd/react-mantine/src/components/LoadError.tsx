import { FC } from 'react';
import { IconX } from '@tabler/icons-react';
import { Notification, rem } from '@mantine/core';

export const LoadError: FC = () => {
  const xIcon = <IconX style={{ width: rem(20), height: rem(20) }} />;
  return (
    <Notification icon={xIcon} color="red" title="Bummer!">
      Something went wrong
    </Notification>
  );
};
