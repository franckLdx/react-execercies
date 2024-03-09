export type Role = 'advisor' | 'admin';

export interface Token {
  role: Role;
}

export interface LoginModel {
  token?: Token;
}
