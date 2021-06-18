import { combineReducers } from "@reduxjs/toolkit";
import { deliveryReducer } from "./delivery";

export const rootReducer = combineReducers({ delivery: deliveryReducer })

export type RootState = ReturnType<typeof rootReducer>