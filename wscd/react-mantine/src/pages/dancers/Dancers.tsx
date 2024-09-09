import { FC } from 'react'
import { PageTemplate } from '@/components/PageTemplate'
import { useAtom } from 'jotai';
import { registeredDancersAtom } from '@/services/registration/registeredDancers';

export const Dancers: FC = () => {
  const [registeredDancers, setRegisteredDancersAtom] = useAtom(registeredDancersAtom);

  return (
    <PageTemplate>
      "DANCERS"
      {registeredDancers.map(d => <div key={d.wscid}>{d.name}</div>)}
    </PageTemplate>
  )
}