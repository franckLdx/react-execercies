import { FC } from 'react';
import { Center, Flex, Loader, Paper } from '@mantine/core';
import { getPlacements, useGetDancer } from '@/services/dancer/getDancer';
import { DisplayLevels } from './DisplayLevelsProps';
import { Header } from './Header';
import { LoadError } from '../../../components/LoadError';
import { DancerSearchModel } from '@/services/dancer/dancerSearch';

import styles from './dancer.module.scss';

interface DancerProps {
  dancer: DancerSearchModel | undefined;
}

export const Dancer: FC<DancerProps> = ({ dancer }) => {
  const query = useGetDancer(dancer?.wscid);

  const foundDancer = query.data;

  const dominateLevels = getPlacements(foundDancer?.dominate_data);
  const nonDominateLevels = getPlacements(foundDancer?.non_dominate_data);

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
      {foundDancer && (
        <>
          <Header dancer={foundDancer} />
          <Flex justify={'space-between'}>
            <DisplayLevels
              role={foundDancer.short_dominate_role}
              levelExplanation={foundDancer.dominate_data.level}
              levels={dominateLevels}
            />
            <DisplayLevels
              role={foundDancer.short_non_dominate_role}
              levelExplanation={foundDancer.non_dominate_data.level}
              levels={nonDominateLevels}
            />
          </Flex>
        </>
      )}
    </Paper>
  );
};
