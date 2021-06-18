import { createSlice } from "@reduxjs/toolkit";
import { loadDelivery } from "../thunks";
import { serviceAdapter } from "./serviceAdapter";

export const service = createSlice({
  name: 'delivery/service',
  initialState: serviceAdapter.getInitialState(),
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      loadDelivery.fulfilled,
      (state, { payload }) => {
        serviceAdapter.upsertMany(state, payload.services)
      }
    )
  },
});

export const serviceReducer = service.reducer;