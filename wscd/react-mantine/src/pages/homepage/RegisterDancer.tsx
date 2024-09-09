import { FC } from 'react';
import { Button, Center } from '@mantine/core';
import { useGetDancer } from '@/services/dancer/getDancer';
import { registeredDancersAtom } from '@/services/registration/registeredDancers';
import { useAtom } from 'jotai';
import { DancerSearchModel } from '@/services/dancer/dancerSearch';

interface RegisterDancerProps {
  dancer?: DancerSearchModel
}

export const RegisterDancer: FC<RegisterDancerProps> = ({ dancer }) => {
  const query = useGetDancer(dancer?.wscid);

  const [registeredDancers, setRegisteredDancersAtom] = useAtom(registeredDancersAtom);


  const onRegister = dancer?.wscid
    ? () => setRegisteredDancersAtom([...registeredDancers, dancer])
    : () => { };

  if (dancer === undefined || !query.data) {
    return null;
  }

  const isRegisteread = registeredDancers.find(current => current.wscid === dancer?.wscid) !== undefined

  const label = isRegisteread ? "Registered" : "Register"

  return (
    <Center h={100}>
      <Button onClick={onRegister} disabled={isRegisteread}>{label}</Button>
    </Center>
  );
};
