import { RootState } from '../../store';
import { LoginModel, Role, Token } from './model';

export const selectLogin = (state: RootState): LoginModel => state.login;

export const selectToken = (state: RootState): Token | undefined =>
  selectLogin(state).token;

export const selectIsLogged = (state: RootState): boolean =>
  selectToken(state) !== undefined;

export const selectRole = (state: RootState): Role | undefined =>
  selectToken(state)?.role;
