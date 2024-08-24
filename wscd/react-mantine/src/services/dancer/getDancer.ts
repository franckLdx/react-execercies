import { useQuery } from '@tanstack/react-query';
import { wsdc } from '../wscd';

interface RoleDModel {
  level: {
    required: string;
    allowed: string;
  };
  placements: {
    'West Coast Swing': WCS;
  };
}

type Role = 'Follower' | 'Leader';

type Level = 'CHMP' | 'ALS' | 'ADV' | 'INT' | 'NOV' | 'NEW';

interface DivisionModel {
  id: number;
  name: string;
}

export interface LevelModel {
  division: DivisionModel;
  total_points: number;
}

type WCS = Record<Level, LevelModel>;

export interface DancerModel {
  wscid: number;
  dancer_first: string;
  dancer_last: string;
  dominate_data: RoleDModel;
  non_dominate_data: RoleDModel;
  short_dominate_role: Role;
  short_non_dominate_role: Role;
  placements: {
    'West Coast Swing': WCS;
  };
}

export const getPlacements = (role: RoleDModel | undefined): LevelModel[] => {
  const wcs = role?.placements?.['West Coast Swing'];
  return wcs ? Object.values(wcs) : [];
};

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
