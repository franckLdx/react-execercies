export const BASE_URL = 'http://jsonplaceholder.typicode.com';

export const myFetch = async (url: string) => {
  const response = await fetch(`${BASE_URL}/${url}`);
  if (!response.ok) {
    throw new Error(`Failed to execute a request:\n${url} ${response.status}/${response.statusText}`);
  }
  return await response.json();
}