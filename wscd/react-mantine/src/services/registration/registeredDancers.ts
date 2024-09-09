import { atomWithStorage } from 'jotai/utils';

export const registeredDancersAtom = atomWithStorage<number[]>('wscdRegitered', []);
