import { useQuery, UseQueryResult } from 'react-query';
import axios from 'axios';

interface LoginResult {
  data?: string;
  status: number;
  statusText: string;
}

const doLogin = async (
  email: string,
  password: string,
): Promise<LoginResult> => {
  const { data, status, statusText } = await axios.post('/user/login', {
    email,
    password,
  });
  return { data, status, statusText };
};

export const useLogin = (
  email: string,
  password: string,
): UseQueryResult<LoginResult, any> =>
  useQuery(['login', email, password], () => doLogin(email, password), {
    staleTime: Infinity,
    enabled: false,
  });
