import React, { FC } from 'react';

import { Select } from '@chakra-ui/select';
import { format } from 'date-fns';

interface MonthesSelectorProps {
  defaulMonth: number;
}

export const MonthesSelector: FC<MonthesSelectorProps> = ({ defaulMonth }) => {
  const getMonthName = (month: number) =>
    format(new Date(2021, month - 1), 'LLLL');
  const getMonthOption = (month: number) => (
    <option key={month} value={month}>
      {getMonthName(month)}
    </option>
  );

  return (
    <Select value={defaulMonth}>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(getMonthOption)}
    </Select>
  );
};
