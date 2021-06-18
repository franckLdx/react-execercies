import React, { FC } from 'react';

const data = [
  {
    prid: '1',
    label: 'Premier Colis',
    services: [
      {
        prid: '1',
        label: 'Premier service',
        price: { amount: 49.99, currency: "€" },
      },
      {
        prid: '2',
        label: 'Deuxième service',
        price: { amount: 99.99, currency: "€" },
      },
      {
        prid: '3',
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
        prid: '4',
        label: 'Quatrieme service',
        price: { amount: 129.99, currency: "€" },
      },
      {
        prid: '5',
        label: 'Cinquième service',
        price: { amount: 99.99, currency: "€" },
      },
      {
        prid: '3',
        label: 'Livraison simple',
        price: { amount: 0, currency: "€" },
      },
    ]
  },
]

const user = new schema.Entity('users');

export const Delivery: FC = () => (<p>DELIVERY!</p>)