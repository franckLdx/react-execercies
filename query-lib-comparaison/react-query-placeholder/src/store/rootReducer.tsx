import { combineReducers } from "@reduxjs/toolkit";
import { filterSlice } from "./filter/filter";

export const rootReducer = combineReducers({

  filter: filterSlice.reducer,
})

export type RootReducer = ReturnType<typeof rootReducer>