import React, { FC } from 'react';

import { Text, HStack } from '@chakra-ui/react';
import { format } from 'date-fns';
import fr from 'date-fns/locale/fr';
import { MonthSelector } from '../../dates/MonthSelector';
import { YearSelector } from '../../dates/YearSelector';

interface TitleProps {
  defaultMonth: number;
  defaultYear: number;
  onChange: (newParams: { month: number; year: number }) => void;
}

export const Title: FC<TitleProps> = ({
  defaultMonth,
  defaultYear,
  onChange,
}) => {
  const date = new Date(defaultYear, defaultMonth - 1, 1);
  const monthName = format(date, 'MMMM yyyy', { locale: fr });
  const article = monthName.startsWith('o') ? "d'" : 'de ';

  return (
    <HStack>
      <Text fontSize="xl">CRA&nbsp;{article}</Text>
      <MonthSelector
        defaulMonth={defaultMonth}
        onChange={(newMonth) =>
          onChange({ month: newMonth, year: defaultYear })
        }
      />
      <YearSelector
        defaulYear={defaultYear}
        onChange={(newYear) => onChange({ month: defaultMonth, year: newYear })}
      />
    </HStack>
  );
};
