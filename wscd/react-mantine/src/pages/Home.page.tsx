import { useState } from 'react';
import { Welcome } from '../components/Welcome/Welcome';
import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';
import { DancerSearch } from '@/components/DancerSearch/DancerSearch';
import { Dancer } from '@/components/Dancer';

export function HomePage() {
  const [wscid, setWscid] = useState<number | undefined>();

  return (
    <>
      <Welcome />
      <ColorSchemeToggle />
      <DancerSearch onDancerSelected={(selectedWscid) => { setWscid(selectedWscid); }} />
      <Dancer wscid={wscid} />
    </>
  );
}
