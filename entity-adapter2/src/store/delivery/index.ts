import { currentStepActions } from './deliverySlice';
import { parcelActions, parcelSelectors } from './parcel';
import { serviceSelectors } from './service';

export const deliveryActions = {
  ...parcelActions,
  ...currentStepActions,
}

export const deliverySelectors = {
  ...serviceSelectors,
  ...parcelSelectors,
}

export { deliveryReducer } from './deliverySlice';
export * from './thunks';

export { } from './'