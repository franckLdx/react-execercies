import { FC } from 'react';
import { Button, Center } from '@mantine/core';
import { useGetDancer } from '@/services/dancer/getDancer';
import { registeredDancersAtom } from '@/services/registration/registeredDancers';
import { useAtom } from 'jotai';

interface RegisterDancerProps {
  wscid: number | undefined;
}

export const RegisterDancer: FC<RegisterDancerProps> = ({ wscid }) => {
  const query = useGetDancer(wscid);

  const [registeredDancers, setRegisteredDancersAtom] = useAtom(registeredDancersAtom);


  const onRegister = wscid
    ? () => setRegisteredDancersAtom([...registeredDancers, wscid])
    : () => { };

  if (wscid === undefined || !query.data) {
    return null;
  }

  const isRegisteread = registeredDancers.includes(wscid)

  const label = isRegisteread ? "Registered" : "Register"

  return (
    <Center h={100}>
      <Button onClick={onRegister} disabled={isRegisteread}>{label}</Button>
    </Center>
  );
};
