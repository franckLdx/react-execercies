import { createSelector, EntityId } from "@reduxjs/toolkit";
import { RootState } from "../../reducer";
import { getDelivery } from "../deliveryInternalSelectors";
import { parcelAdapter } from "./parcelAdapter";

const selectors = parcelAdapter.getSelectors();

const getParcel = (state: RootState) => getDelivery(state).parcel;

const getParcels = (state: RootState) => getParcel(state).parcels;

export const getCurrentParcelPrid = createSelector(
  [getParcel],
  (parcel) => {
    const index = parcel.current;
    if (index === undefined) {
      return;
    }
    return selectors.selectIds(parcel.parcels)[index];
  }
);

export const getDeliveryParcelsPrId = createSelector(
  [getParcels],
  selectors.selectIds
)

export const makeGetDeliveryParcel = (prid: EntityId) => createSelector(
  [getParcels],
  parcels => selectors.selectById(parcels, prid)
)

export const makeGetDeliveryParcelServicePrid = (prid: EntityId) => createSelector(
  [makeGetDeliveryParcel(prid)],
  parcel => parcel?.selectedService
)

export const makeIstDeliveryParcelServiceSelected = (parcelPrid: EntityId, servicePrid: EntityId) => createSelector(
  [makeGetDeliveryParcel(parcelPrid)],
  parcel => parcel?.selectedService === servicePrid
)