import React, { FC } from 'react';

import { Table, Th, Thead, Tr, Text } from '@chakra-ui/react';
import { useGetDaysOFMonth } from '../../dates/daysOfMonth';
import { Title } from './Title';

export const Advisor: FC = () => {
  const today = new Date();
  const currentMonth = today.getMonth();
  const currentYear = today.getFullYear();
  const days = useGetDaysOFMonth(currentMonth, currentYear);

  return (
    <>
      <Title month={currentMonth} year={currentYear} />
      <Table mt="35px">
        <Thead>
          <Tr>
            {days.map((day) => (
              <Th key={day}>
                <Text fontSize="lg">{day}</Text>
              </Th>
            ))}
          </Tr>
        </Thead>
      </Table>
    </>
  );
};
