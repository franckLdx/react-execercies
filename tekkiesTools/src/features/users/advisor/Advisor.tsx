import React, { FC, useMemo } from 'react';

import { Table, Th, Thead, Tr, Text, Skeleton } from '@chakra-ui/react';
import { useGetDatesOFMonth } from '../../dates/datesOfMonth';
import { Title } from './Title';
import { datesToWorkingDate, useGetHolidays } from '../../dates';
import { format } from 'date-fns';

export const Advisor: FC = () => {
  const today = new Date();
  const currentMonth = today.getMonth();
  const currentYear = today.getFullYear();
  const { status, data, error } = useGetHolidays(currentYear);
  const dates = useGetDatesOFMonth(currentMonth, currentYear);
  const workingDates = useMemo(
    () => (data ? datesToWorkingDate(dates, data) : []),
    [data, dates],
  );

  return (
    <>
      <Title month={currentMonth} year={currentYear} />
      <Skeleton isLoaded={status === 'success'}>
        <Table mt="35px">
          <Thead>
            <Tr>
              {workingDates.map(({ date, isWorking }) => (
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
