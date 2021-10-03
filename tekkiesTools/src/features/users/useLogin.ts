import { useMutation, UseMutationResult } from 'react-query';
import axios, { AxiosResponse } from 'axios';
import { Token } from './model';
import { useDispatch } from 'react-redux';
import { logged, exited } from './slice';

export interface LoginParam {
  email: string;
  password: string;
}

interface LoginResult {
  token?: Token;
  status: number;
  statusText: string;
}

export const doLogin = async (
  email: string,
  password: string,
): Promise<LoginResult> => {
  const { data, status, statusText } = await axios.post<
    LoginParam,
    AxiosResponse<{ token: Token }>
  >('/user/login', {
    email,
    password,
  });
  return { token: data.token, status, statusText };
};

export const useLogin = (): UseMutationResult<
  LoginResult,
  any,
  LoginParam,
  any
> => {
  const dispatch = useDispatch();
  return useMutation(
    ({ email, password }: LoginParam) => doLogin(email, password),
    {
      onSuccess(response) {
        if (response.token) dispatch(logged({ token: response.token }));
      },
      onError() {
        dispatch(exited());
      },
    },
  );
};
