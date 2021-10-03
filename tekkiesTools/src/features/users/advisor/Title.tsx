import React, { FC } from 'react';

import { Heading } from '@chakra-ui/react';
import { format } from 'date-fns';
import fr from 'date-fns/locale/fr';

interface TitleProps {
  month: number;
  year: number;
}

export const Title: FC<TitleProps> = ({ month, year }) => {
  const date = new Date(year, month, 1);
  const monthName = format(date, 'MMMM yyyy', { locale: fr });
  const article = monthName.startsWith('o') ? "d'" : 'de ';
  // eslint-disable-next-line prettier/prettier
  const text = `CRA ${article}${monthName.charAt(0).toUpperCase() + monthName.slice(1)}`;

  return (
    <Heading as="h3" size="lg">
      {text}
    </Heading>
  );
};
