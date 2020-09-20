import { atom } from "recoil";

type LoadtingState = 'none' | 'loading' | 'loaded' | 'error';

export const loadingStateAtom = atom<LoadtingState>({ key: "loadingState", default: 'none' });

export const loadingErrorAtom = atom<Error | undefined>({ key: "loadingError", default: undefined })