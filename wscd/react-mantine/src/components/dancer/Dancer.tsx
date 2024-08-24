import { FC } from 'react';
import { Card, Group, Loader, Space } from '@mantine/core';
import { getPlacements, useGetDancer } from '@/services/dancer/getDancer';
import { DisplayLevels } from './DisplayLevelsProps';
import { Header } from './Header';
import { LoadError } from '../LoadError';

interface DancerProps {
  wscid: number | undefined;
}

export const Dancer: FC<DancerProps> = ({ wscid }) => {
  const query = useGetDancer(wscid);

  const dancer = query.data;

  const dominateLevels = getPlacements(dancer?.dominate_data);
  const nonDominateLevels = getPlacements(dancer?.non_dominate_data);

  return (
    <Card bg="var(--mantine-color-dark-5)">
      {(query.isLoading) && <Loader color="blue" />}
      {query.isError && <LoadError />}
      {dancer && (
        <>
          <Header dancer={dancer} />
          <Group>
            <DisplayLevels
              role={dancer.short_dominate_role}
              levelExplanation={dancer.dominate_data.level}
              levels={dominateLevels}
            />
            <Space h="md" />
            <DisplayLevels
              role={dancer.short_non_dominate_role}
              levelExplanation={dancer.non_dominate_data.level}
              levels={nonDominateLevels}
            />
          </Group>
        </>
      )}
    </Card>
  );
};
