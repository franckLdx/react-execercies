import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type Filter = 'all' | 'done' | "undone"

export const filterSlice = createSlice({
  name: 'filter',
  initialState: 'all' as Filter,
  reducers: {
    filterChanged(state, { payload }: PayloadAction<Filter>) {
      return payload
    }
  }
});

export const filterActions = filterSlice.actions