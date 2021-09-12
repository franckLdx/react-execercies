import { useMutation, UseMutationResult } from 'react-query';
import axios, { AxiosResponse } from 'axios';

export interface LoginParam {
  email: string;
  password: string;
}

interface Token {
  role: string;
}

interface LoginResult {
  data?: Token;
  status: number;
  statusText: string;
}

export const doLogin = async (
  email: string,
  password: string,
): Promise<LoginResult> => {
  const { data, status, statusText } = await axios.post<
    LoginParam,
    AxiosResponse<Token>
  >('/user/login', {
    email,
    password,
  });
  return { data, status, statusText };
};

export const useLogin = (): UseMutationResult<
  LoginResult,
  any,
  LoginParam,
  any
> => useMutation(({ email, password }: LoginParam) => doLogin(email, password));
