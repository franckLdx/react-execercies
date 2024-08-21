import { useQuery } from '@tanstack/react-query';
import { wsdc } from './wscd';

export interface DancerModel {
  dancer_first: string;
  dancer_last: string;
}

export const useGetDancer = (wscid: number | undefined) =>
  useQuery({
    queryKey: ['getDancer', wscid],
    queryFn: async () => {
      const url = `find?q=${wscid}`;
      const response = await wsdc.get<DancerModel>(url);
      return response.data;
    },
    enabled: !!wscid,
    gcTime: 1000 * 60 * 5,
  });
