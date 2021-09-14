import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Login, Token } from './model';

const initialState: Login = {};

const slice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    logged(state, { payload }: PayloadAction<{ token: Token }>) {
      state.token = payload.token;
    },
    exited(state) {
      state.token = undefined;
    },
  },
});

export const loginReducer = slice.reducer;

export const { logged, exited } = slice.actions;
