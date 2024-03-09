import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { placeHolderApi } from "../service";
import { rootReducer } from "./rootReducer";

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware().concat(placeHolderApi.middleware)
})
