import { useState } from 'react';
import { Container } from '@mantine/core';
import { Welcome } from './Welcome/Welcome';
import { DancerSearch } from '@/pages/homepage/DancerSearch/DancerSearch';
import { Dancer } from '@/pages/homepage/dancer/Dancer';
import { RegisterDancer } from './RegisterDancer';

export function HomePage() {
  const [wscid, setWscid] = useState<number | undefined>();

  return (
    <>
      <Welcome />
      <Container size="lg" bg="var(--mantine-color-dark-6)">
        <DancerSearch onDancerSelected={setWscid} />
        <Dancer wscid={wscid} />
        <RegisterDancer wscid={wscid} />
      </Container>
    </>
  );
}
