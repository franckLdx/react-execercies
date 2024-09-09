import { useQuery } from '@tanstack/react-query';
import { wsdc } from '../wscd';

export interface DancerSearchModel {
  name: string;
  wscid: number;
}

export const useDancerSearch = (filter: string) =>
  useQuery({
    queryKey: ['danserSearch', filter],
    queryFn: async () => {
      const url = `autocomplete?q=${filter}`;
      const response = await wsdc.get<DancerSearchModel[]>(url);
      return response.data;
    },
    enabled: !!filter,
    gcTime: 1000 * 60 * 5,
    retry: 1,
  });
