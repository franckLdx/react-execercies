import { combineReducers } from "@reduxjs/toolkit";
import { placeHolderReducer } from "../service";
import { filterSlice } from "./filter/filter";

export const rootReducer = combineReducers({
  placeHolder: placeHolderReducer,
  filter: filterSlice.reducer,
})

export type RootReducer = ReturnType<typeof rootReducer>