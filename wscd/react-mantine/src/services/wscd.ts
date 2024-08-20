import axios from 'axios';

export const wsdc = axios.create({
  baseURL: 'api/',
  timeout: 1000,
});
