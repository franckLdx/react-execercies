import React, { FC, useMemo } from 'react';

import { EntityId } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';
import { getCurrentParcelPrid, makeGetDeliveryParcel } from '../../../store/delivery/parcel/parcelSelectors';
import { Service } from './service/Service';

interface ParcelInfo {
  prid: EntityId;
}

export const Parcel: FC<ParcelInfo> = ({ prid }) => {
  const parcelSelector = useMemo(() => makeGetDeliveryParcel(prid), [prid]);
  const parcel = useSelector(parcelSelector);
  const currentParcelPrid = useSelector(getCurrentParcelPrid)

  return (<>
    {parcel?.label}
    {parcel?.prid === currentParcelPrid && <ul>
      {parcel?.services.map(serviceEntityId =>
        <li key={`${parcel?.prid}_${serviceEntityId}`}>
          <Service parcelPrid={parcel.prid} servicePrid={serviceEntityId} />
        </li>
      )}
    </ul>}
  </>)
}