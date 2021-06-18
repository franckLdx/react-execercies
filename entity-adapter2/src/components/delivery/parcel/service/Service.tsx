import React, { FC, useCallback, useMemo } from 'react';

import { EntityId } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import { deliveryActions, deliverySelectors } from '../../../../store';

interface ServiceProps {
  parcelPrid: EntityId
  servicePrid: EntityId
}

export const Service: FC<ServiceProps> = ({ parcelPrid, servicePrid }) => {
  const serviceSelector = useMemo(() => deliverySelectors.makeGetService(servicePrid), [servicePrid]);
  const service = useSelector(serviceSelector);

  const isSelectedSelector = useMemo(
    () => deliverySelectors.makeIstDeliveryParcelServiceSelected(parcelPrid, servicePrid),
    [parcelPrid]
  )
  const isSelected = useSelector(isSelectedSelector);

  const dispatch = useDispatch();

  const onSelected = useCallback(
    () => {
      if (isSelected) {
        return;
      }
      dispatch(deliveryActions.serviceSelected({ servicePrid: servicePrid, parcelPrid: parcelPrid }))
      if (servicePrid === "s4") {
        dispatch(deliveryActions.serviceSelectionDone());
      }
    },
    [servicePrid, parcelPrid, isSelected, dispatch]
  );

  return (
    <p onClick={onSelected}>
      {service?.label} : {service?.price.amount} {service?.price.currency} {isSelected ? "<====" : <></>}
    </p>
  );
}