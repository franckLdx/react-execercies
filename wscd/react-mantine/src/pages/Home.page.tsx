import { useState } from 'react';
import { Container } from '@mantine/core';
import { Welcome } from '../components/Welcome/Welcome';
import { DancerSearch } from '@/components/DancerSearch/DancerSearch';
import { Dancer } from '@/components/dancer/Dancer';

export function HomePage() {
  const [wscid, setWscid] = useState<number | undefined>();

  return (
    <>
      <Welcome />
      <Container bg="var(--mantine-color-dark-6)">
        <DancerSearch onDancerSelected={setWscid} />
        <Dancer wscid={wscid} />
      </Container>
    </>
  );
}
