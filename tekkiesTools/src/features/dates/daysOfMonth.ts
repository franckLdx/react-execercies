import { useMemo } from 'react';

const getDaysOFMonth = (month: number, year: number): number[] => {
  const days: number[] = [];
  const date = new Date(year, month, 1);
  while (date.getMonth() === month) {
    days.push(date.getDate());
    date.setDate(date.getDate() + 1);
    console.log('new Date:', date);
  }
  return days;
};

export const useGetDaysOFMonth = (month: number, year: number): number[] =>
  useMemo(() => getDaysOFMonth(month, year), [month, year]);
