import React, { FC } from 'react';

import { Heading } from '@chakra-ui/react';
import { format } from 'date-fns';
import fr from 'date-fns/locale/fr';
import { MonthesSelector } from '../../dates/MonthSelector';

interface TitleProps {
  month: number;
  year: number;
}

export const Title: FC<TitleProps> = ({ month, year }) => {
  const date = new Date(year, month - 1, 1);
  const monthName = format(date, 'MMMM yyyy', { locale: fr });
  const article = monthName.startsWith('o') ? "d'" : 'de ';

  return (
    <div>
      <button>11</button>
      <MonthesSelector defaulMonth={month} />
    </div>
  )
  // return (
  //   <Heading as="h3" size="lg">
  //     CRA {article}{' '}
  //     <div>
  //     </div>
  //   </Heading>
  // );
};
