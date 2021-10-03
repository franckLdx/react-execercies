import axios, { AxiosResponse } from 'axios';
import { format } from 'date-fns';
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
