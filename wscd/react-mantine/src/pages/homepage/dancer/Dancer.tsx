import { FC } from 'react';
import { Center, Flex, Loader, Paper } from '@mantine/core';
import { getPlacements, useGetDancer } from '@/services/dancer/getDancer';
import { DisplayLevels } from './DisplayLevelsProps';
import { Header } from './Header';
import { LoadError } from '../../../components/LoadError';

import styles from './dancer.module.scss';

interface DancerProps {
  wscid: number | undefined;
}

export const Dancer: FC<DancerProps> = ({ wscid }) => {
  const query = useGetDancer(wscid);

  const dancer = query.data;

  const dominateLevels = getPlacements(dancer?.dominate_data);
  const nonDominateLevels = getPlacements(dancer?.non_dominate_data);

  if (!query.isError && !query.isLoading && !query.isSuccess) {
    return null;
  }

  return (
    <Paper className={styles.paper} bg="var(--mantine-color-dark-5)">
      {query.isError && <LoadError />}
      {query.isLoading && (
        <Center>
          <Loader color="blue" />
        </Center>
      )}
      {dancer && (
        <>
          <Header dancer={dancer} />
          <Flex justify={'space-between'}>
            <DisplayLevels
              role={dancer.short_dominate_role}
              levelExplanation={dancer.dominate_data.level}
              levels={dominateLevels}
            />
            <DisplayLevels
              role={dancer.short_non_dominate_role}
              levelExplanation={dancer.non_dominate_data.level}
              levels={nonDominateLevels}
            />
          </Flex>
        </>
      )}
    </Paper>
  );
};
