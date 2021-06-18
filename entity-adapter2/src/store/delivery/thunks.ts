import { createAsyncThunk } from "@reduxjs/toolkit";

import { normalize, schema } from 'normalizr';
import { ParcelModel } from "./parcel";
import { ServiceModel } from "./service";

const data = [
  {
    prid: '1',
    label: 'Premier Colis',
    services: [
      {
        prid: 's1',
        label: 'Premier service',
        price: { amount: 49.99, currency: "€" },
      },
      {
        prid: 's2',
        label: 'Deuxième service',
        price: { amount: 99.99, currency: "€" },
      },
      {
        prid: 's3',
        label: 'Livraison simple',
        price: { amount: 0, currency: "€" },
      },
    ]
  },
  {
    prid: '2',
    label: 'Deuxième Colis',
    services: [
      {
        prid: 's4',
        label: 'Quatrieme service',
        price: { amount: 129.99, currency: "€" },
      },
      {
        prid: 's5',
        label: 'Cinquième service',
        price: { amount: 99.99, currency: "€" },
      },
      {
        prid: 's3',
        label: 'Livraison simple',
        price: { amount: 0, currency: "€" },
      },
    ]
  },
]

const service = new schema.Entity('service', {}, { idAttribute: 'prid' });
const parcel = new schema.Entity(
  'parcel',
  {
    services: [service]
  },
  { idAttribute: 'prid' }
);

export const loadDelivery = createAsyncThunk(
  'delivery',
  async () => {
    const normalizedData = normalize(data, [parcel]);
    return {
      parcels: normalizedData.entities.parcel as Record<string, ParcelModel>,
      services: normalizedData.entities.service as Record<string, ServiceModel>
    };
  }

);