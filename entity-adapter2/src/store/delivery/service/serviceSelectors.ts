import { createSelector, EntityId } from "@reduxjs/toolkit";
import { RootState } from "../../reducer";
import { getDelivery } from "../deliveryInternalSelectors";
import { serviceAdapter } from "./serviceAdapter";

const selectors = serviceAdapter.getSelectors();

const getServices = (state: RootState) => getDelivery(state).serivces;

export const makeGetService = (prid: EntityId) => createSelector(
  [getServices],
  (services) => selectors.selectById(services, prid)
)