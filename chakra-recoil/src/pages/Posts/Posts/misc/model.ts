import { atom } from "recoil";
import { LoadtingState } from "../../../../models/loadingState";

export const loadingStateAtom = atom<LoadtingState>({ key: "postsLoadingState", default: 'none' });

export const loadingErrorAtom = atom<Error | undefined>({ key: "postsLoadingError", default: undefined })