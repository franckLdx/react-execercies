import { useQuery } from '@tanstack/react-query';
import { wsdc } from './wscd';

export interface DancerItem {
  name: string;
  wscid: number;
}

export const useDancerSearch = (filter: string) =>
  useQuery({
    queryKey: ['danserSearch', filter],
    queryFn: async (): Promise<DancerItem[]> => {
      const url = `autocomplete?q=${filter}`;
      const response = await wsdc.get(url);
      return response.data;
    },
    enabled: !!filter,
    gcTime: 1000 * 60 * 5,
  });
