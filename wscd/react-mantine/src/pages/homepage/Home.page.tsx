import { useState } from 'react';
import { Container } from '@mantine/core';
import { DancerSearch } from '@/pages/homepage/DancerSearch/DancerSearch';
import { Dancer } from '@/pages/homepage/dancer/Dancer';
import { RegisterDancer } from './RegisterDancer';
import { PageTemplate } from '@/components/PageTemplate';

export function HomePage() {
  const [wscid, setWscid] = useState<number | undefined>();

  return (
    <PageTemplate>
      <Container size="lg" bg="var(--mantine-color-dark-6)">
        <DancerSearch onDancerSelected={setWscid} />
        <Dancer wscid={wscid} />
        <RegisterDancer wscid={wscid} />
      </Container>
    </PageTemplate>
  );
}
