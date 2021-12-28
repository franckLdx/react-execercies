import { useMutation } from "react-query"
import { AuthenticationError, authenticationError } from "./authenticationError";

interface Credentials {
  email: string,
  password: string
}

const doLogin = async (credentials: Credentials): Promise<string> => {
  var headers = new Headers();
  headers.append("Content-Type", "application/json");
  const response = await fetch(
    '/login',
    {
      method: 'POST',
      body: JSON.stringify(credentials),
      headers,
    }
  )
  if (!response.ok) {
    if (response.status === 401) {
      throw new AuthenticationError('Authentication failed')
    } else {
      throw new Error('Unexpected error')
    }
  }
  return response.json()
};

export const useLogin = () => useMutation((credentials: Credentials) => doLogin(credentials));
