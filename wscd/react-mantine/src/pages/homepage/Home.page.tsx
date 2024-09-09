import { useState } from 'react';
import { Container } from '@mantine/core';
import { DancerSearch } from '@/pages/homepage/DancerSearch/DancerSearch';
import { Dancer } from '@/pages/homepage/dancer/Dancer';
import { RegisterDancer } from './RegisterDancer';
import { PageTemplate } from '@/components/PageTemplate';
import { DancerSearchModel } from '@/services/dancer/dancerSearch';

export function HomePage() {
  const [dancer, setDancer] = useState<DancerSearchModel | undefined>();

  return (
    <PageTemplate>
      <Container size="lg" bg="var(--mantine-color-dark-6)">
        <DancerSearch onDancerSelected={setDancer} />
        <Dancer dancer={dancer} />
        <RegisterDancer dancer={dancer} />
      </Container>
    </PageTemplate>
  );
}
