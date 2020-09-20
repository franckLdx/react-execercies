import { atom } from "recoil";
import { LoadtingState } from "../../../models/loadingState";

export const loadingStateAtom = atom<LoadtingState>({ key: "postLoadingState", default: 'none' });

export const loadingErrorAtom = atom<Error | undefined>({ key: "postLoadingError", default: undefined })