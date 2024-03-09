const authenticationErrorType = Symbol('authenticationError');

export class AuthenticationError extends Error {
  type = authenticationErrorType
}

export const isAuthenticationErrorType = (error: any): error is AuthenticationError => error.type === authenticationErrorType