import React, { FC, useState } from 'react';

import { Table, Th, Thead, Tr, Text, Skeleton } from '@chakra-ui/react';
import { Title } from './Title';
import { useGetWorkingDatesOfMonth } from '../../dates';
import { format } from 'date-fns';

export const Advisor: FC = () => {
  const today = new Date();
  const [filter, setFilter] = useState({
    month: today.getMonth() + 1,
    year: today.getFullYear(),
  });

  const {
    status,
    error,
    data: workingDates,
    isFetching
  } = useGetWorkingDatesOfMonth({ month: filter.month, year: filter.year });

  if (error) {
    if (typeof 'error' === 'string') {
      throw new Error(error as string);
    }
    throw error;
  }

  return (
    <>
      <Title
        defaultMonth={filter.month}
        defaultYear={filter.year}
        onChange={setFilter}
      />
      <Skeleton isLoaded={status === 'success' || !isFetching}>
        <Table mt="35px">
          <Thead>
            <Tr>
              {workingDates?.map(({ date, isWorking }) => (
                <Th key={date.toString()}>
                  <Text fontSize={isWorking ? 'xx-large' : 'small'}>
                    {format(date, 'd')}
                  </Text>
                </Th>
              ))}
            </Tr>
          </Thead>
        </Table>
      </Skeleton>
    </>
  );
};
