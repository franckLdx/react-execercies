import { createEntityAdapter } from "@reduxjs/toolkit";

export interface ServiceModel {
  label: string;
  prid: string;
  price: {
    amount: number;
    currency: string;
  };
}

export const serviceAdapter = createEntityAdapter<ServiceModel>({
  selectId: (service) => service.prid,
});
