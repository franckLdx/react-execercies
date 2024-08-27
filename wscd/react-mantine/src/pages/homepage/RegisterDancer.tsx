import { FC } from 'react';
import { Button, Center } from '@mantine/core';
import { useGetDancer } from '@/services/dancer/getDancer';
import { useGetRegisteredDancers, useRegisterDancer } from '@/services/registration/registeredDancers';

interface RegisterDancerProps {
  wscid: number | undefined;
}

export const RegisterDancer: FC<RegisterDancerProps> = ({ wscid }) => {
  const query = useGetDancer(wscid);

  const registeredDancers = useGetRegisteredDancers();
  const registerDancer = useRegisterDancer()
  const onRegister = wscid ? () => registerDancer(wscid) : () => { }

  if (wscid === undefined || !query.data || registeredDancers.includes(wscid)) {
    return null;
  }

  return (
    <Center h={100}>
      <Button onClick={onRegister}>Register</Button>
    </Center>
  );
};
