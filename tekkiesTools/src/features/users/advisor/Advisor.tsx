import React, { FC } from 'react';

import { Table, Th, Thead, Tr, Text, Skeleton } from '@chakra-ui/react';
import { Title } from './Title';
import { useGetWorkingDatesOfMonth } from '../../dates';
import { format } from 'date-fns';
import { MonthesSelector } from '../../dates/MonthSelector';

export const Advisor: FC = () => {
  const today = new Date();
  const currentMonth = today.getMonth() + 1;
  const currentYear = today.getFullYear();
  const {
    status,
    error,
    data: workingDates,
  } = useGetWorkingDatesOfMonth({ month: currentMonth, year: currentYear });

  if (error) {
    if (typeof 'error' === 'string') {
      throw new Error(error as string);
    }
    throw error;
  }

  return (
    <>
      <Title month={currentMonth} year={currentYear} />
      <Skeleton isLoaded={status === 'success'}>
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
