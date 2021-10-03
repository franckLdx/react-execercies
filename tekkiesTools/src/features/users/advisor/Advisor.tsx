import React, { FC } from 'react';

import { Table, Th, Thead, Tr, Text, Skeleton } from '@chakra-ui/react';
import { useGetDatesOFMonth } from '../../dates/datesOfMonth';
import { Title } from './Title';
import { useGetHolidays } from '../../dates';
import { format } from 'date-fns';

export const Advisor: FC = () => {
  const today = new Date();
  const currentMonth = today.getMonth();
  const currentYear = today.getFullYear();
  const days = useGetDatesOFMonth(currentMonth, currentYear);
  const { status, data, error } = useGetHolidays(currentYear);

  return (
    <>
      <Title month={currentMonth} year={currentYear} />
      <Skeleton isLoaded={status === 'success'}>
        <Table mt="35px">
          <Thead>
            <Tr>
              {days.map((day) => (
                <Th key={day.toString()}>
                  <Text fontSize="lg">{format(day, 'd')}</Text>
                </Th>
              ))}
            </Tr>
          </Thead>
        </Table>
      </Skeleton>
    </>
  );
};
