import React, { ChangeEventHandler, FC, useCallback } from 'react';

import { Select } from '@chakra-ui/select';

const indexes = Array.from(Array(20).keys());

interface YearSelectorProps {
  defaulYear: number;
  onChange: (year: number) => void;
}

export const YearSelector: FC<YearSelectorProps> = ({
  defaulYear,
  onChange: onYearChange,
}) => {
  const getOption = (year: number) => (
    <option key={year} value={year}>
      {year}
    </option>
  );

  const onChange = useCallback<ChangeEventHandler<HTMLSelectElement>>(
    (e) => {
      const newYear = Number(e.target.value);
      onYearChange(newYear);
    },
    [onYearChange],
  );

  return (
    <Select defaultValue={defaulYear} onChange={onChange} width={'inherit'}>
      {indexes.map((index) => getOption(2021 + index))}
    </Select>
  );
};
