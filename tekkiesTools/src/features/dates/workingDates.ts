import axios, { AxiosResponse } from 'axios';
import { format, isWeekend } from 'date-fns';
import { useQuery, UseQueryResult } from 'react-query';

type Holidays = Record<string, string>;

const getHolidays = async (year: number): Promise<Holidays> => {
  const { data } = await axios.get<never, AxiosResponse<Holidays>>(
    `https://calendrier.api.gouv.fr/jours-feries/metropole/${year}.json`,
  );
  return data;
};

export const useGetHolidays = (year: number): UseQueryResult<Holidays> => {
  const result = useQuery(['holiday', year], () => getHolidays(year));
  if (result.isError) {
    throw result.error;
  }
  return result;
};

export const isHolliday = (date: Date, holidays: Holidays): boolean => {
  const formatedDate = format(date, 'yyyy-MM-dd');
  return formatedDate in holidays;
};

export const isWorkingDate = (date: Date, holidays: Holidays): boolean =>
  !isWeekend(date) && !isHolliday(date, holidays);

export interface WorkingDate {
  date: Date;
  isWorking: boolean;
}

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
