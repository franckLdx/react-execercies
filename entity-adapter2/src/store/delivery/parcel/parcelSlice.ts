import { createSlice, EntityId, PayloadAction } from "@reduxjs/toolkit";
import { loadDelivery } from "../thunks";
import { ParcelsModel, parcelAdapter } from "./parcelAdapter";

interface ParcelSliceModel {
  current?: number,
  parcels: ParcelsModel,
}

const initialState: ParcelSliceModel = {
  current: undefined,
  parcels: parcelAdapter.getInitialState()
}

const parcel = createSlice({
  name: 'delivery/parcel',
  initialState,
  reducers: {
    parcelValidated(state) {
      if (state.current !== undefined) {
        const total = parcelAdapter.getSelectors().selectTotal(state.parcels);
        state.current = state.current < total ? state!.current + 1 : undefined
      }
    },
    serviceSelected(state, { payload }: PayloadAction<{ parcelPrid: EntityId, servicePrid: EntityId }>) {
      parcelAdapter.updateOne(state.parcels, { id: payload.parcelPrid, changes: { selectedService: payload.servicePrid } })
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      loadDelivery.fulfilled,
      (state, { payload }) => {
        parcelAdapter.addMany(state.parcels, payload.parcels);
        state.current = 0;
      }
    )
  }
});

export const parcelReducer = parcel.reducer;
export const parcelActions = parcel.actions;