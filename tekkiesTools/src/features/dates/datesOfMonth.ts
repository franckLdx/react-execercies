import { useMemo } from 'react';

const getDatessOFMonth = (month: number, year: number): Date[] => {
  const days: Date[] = [];
  const date = new Date(year, month, 1);
  while (date.getMonth() === month) {
    days.push(new Date(date));
    date.setDate(date.getDate() + 1);
  }
  return days;
};

export const useGetDatesOFMonth = (month: number, year: number): Date[] =>
  useMemo(() => getDatessOFMonth(month, year), [month, year]);
