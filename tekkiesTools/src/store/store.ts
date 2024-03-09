import { configureStore } from '@reduxjs/toolkit';
import { loginReducer } from '../features/users';

export const store = configureStore({
  reducer: {
    login: loginReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
