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
    <Card>
      {(query.isFetching || query.isLoading) && <Loader color="blue" />}
      {query.isError && <LoadError />}
      {dancer && (
        <>
          <Header dancer={dancer} />
          <Group>
            <DisplayLevels levels={dominateLevels} />
            <Space h="md" />
            <DisplayLevels levels={nonDominateLevels} />
          </Group>
        </>
      )}
    </Card>
  );
};
