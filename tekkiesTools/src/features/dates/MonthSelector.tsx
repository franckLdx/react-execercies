import React, { ChangeEventHandler, FC, useCallback } from 'react';

import { Select } from '@chakra-ui/select';
import { format } from 'date-fns';
import fr from 'date-fns/locale/fr';

interface MonthSelectorProps {
  defaulMonth: number;
  onChange: (month: number) => void;
}

export const MonthSelector: FC<MonthSelectorProps> = ({
  defaulMonth,
  onChange: onYearCHange,
}) => {
  const getMonthName = (month: number) =>
    format(new Date(2021, month - 1), 'LLLL', { locale: fr });

  const getMonthOption = (month: number) => (
    <option key={month} value={month}>
      {getMonthName(month)}
    </option>
  );

  const onChange = useCallback<ChangeEventHandler<HTMLSelectElement>>(
    (e) => {
      const newMonth = Number(e.target.value);
      onYearCHange(newMonth);
    },
    [onYearCHange],
  );

  return (
    <Select defaultValue={defaulMonth} onChange={onChange} width={'inherit'}>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(getMonthOption)}
    </Select>
  );
};