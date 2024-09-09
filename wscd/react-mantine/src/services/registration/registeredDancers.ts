import { atomWithStorage } from 'jotai/utils';
import { DancerSearchModel } from '../dancer/dancerSearch';

export const registeredDancersAtom = atomWithStorage<DancerSearchModel[]>('wscdRegitered', []);
