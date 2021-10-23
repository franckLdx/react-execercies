import { isWeekend } from 'date-fns';
import { UseQueryResult } from 'react-query';
import { getDatesOFMonth } from './datesOfMonth';
import { Holidays, isHolliday, useGetHolidays } from './holidays';

export interface WorkingDate {
  date: Date;
  isWorking: boolean;
}

export const isWorkingDate = (date: Date, holidays: Holidays): boolean =>
  !isWeekend(date) && !isHolliday(date, holidays);

export const datesToWorkingDate = (
  dates: Array<Date>,
  holidays: Holidays,
): Array<WorkingDate> =>
  dates.reduce((acc, date) => {
    const workingDay: WorkingDate = {
      date,
      isWorking: isWorkingDate(date, holidays),
    };
    return [...acc, workingDay];
  }, [] as Array<WorkingDate>);

type workingDatesOfMonthParam = {
  month: number;
  year: number;
};

export function useGetWorkingDatesOfMonth({
  month,
  year,
}: workingDatesOfMonthParam): UseQueryResult<Array<WorkingDate>> {
  const select = (hollidays: Holidays) => {
    const datesOfMonth = getDatesOFMonth(month, year);
    return datesToWorkingDate(datesOfMonth, hollidays);
  };
  return useGetHolidays(year, select);
}
