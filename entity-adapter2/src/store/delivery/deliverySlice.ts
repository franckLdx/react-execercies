import { combineReducers, createSlice } from "@reduxjs/toolkit";
import { parcelReducer } from "./parcel/parcelSlice";
import { serviceReducer } from "./service/serviceSlice";

interface CurrentStep {
  step: undefined | 'serviceSelection' | 'calendar'
}

const initialState: CurrentStep = {
  step: undefined
}

const currentStep = createSlice({
  name: 'currentStep',
  initialState,
  reducers: {
    serviceSelectionDone(state) {
      state.step = 'calendar';
    }
  }
});

export const deliveryReducer = combineReducers({
  currentStep: currentStep.reducer,
  parcel: parcelReducer,
  serivces: serviceReducer,
})

export const currentStepActions = currentStep.actions;