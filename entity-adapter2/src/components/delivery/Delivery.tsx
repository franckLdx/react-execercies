import React, { FC, useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { Parcel } from './parcel/Parcel';
import { loadDelivery } from '../../store/delivery/thunks';
import { deliveryActions, deliverySelectors } from '../../store';


export const Delivery: FC = () => {
  const parcelsPrid = useSelector(deliverySelectors.getDeliveryParcelsPrId);
  const dispatch = useDispatch();

  useEffect(
    () => { dispatch(loadDelivery()) },
    [dispatch]
  )

  useEffect(
    () => {
      if (parcelsPrid && parcelsPrid.length) {
        dispatch(deliveryActions.parcelValidated())
      }
    },
    [dispatch, parcelsPrid]
  )

  return (
    <ul>
      {parcelsPrid.map(parcelPrid => <li key={parcelPrid}><Parcel prid={parcelPrid} /></li>)}
    </ul>
  )
}