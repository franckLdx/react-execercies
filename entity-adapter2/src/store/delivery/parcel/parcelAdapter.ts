import { createEntityAdapter, EntityId } from "@reduxjs/toolkit";

export interface ParcelModel {
  prid: string;
  label: string;
  services: [EntityId]
  selectedService?: EntityId
}

export const parcelAdapter = createEntityAdapter<ParcelModel>({
  selectId: (parcel) => parcel.prid,
});

export type ParcelsModel = ReturnType<typeof parcelAdapter.getInitialState>;