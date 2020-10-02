
// export const get = async (url: string) => await fetch(`https://jsonplaceholder.typicode.com/${url}`);

const serverUrl = 'https://jsonplaceholder.typicode.com';

export async function get(resourceUrl: string, errMessage: string) {
  const response = await fetch(`${serverUrl}/${resourceUrl}`)
  if (!response.ok) {
    throw new Error(`${errMessage}: ${response.status}/${response.statusText}`);
  }
  return await response.json();
}