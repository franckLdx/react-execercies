export const BASE_URL = 'http://jsonplaceholder.typicode.com';

export const get = async (url: string) => {
  const fullUrl = `${BASE_URL}/${url}`;
  const response = await fetch(fullUrl);
  if (!response.ok) {
    throw new Error(`Failed to execute a GET request :\n${fullUrl} ${response.status}/${response.statusText}`);
  }
  return await response.json();
}

export const post = async <RETURN_TYPE>(url: string, payload: any): Promise<RETURN_TYPE> => {
  const fullUrl = `${BASE_URL}/${url}`;
  const response = await fetch(fullUrl, {
    method: "POST",
    body: payload
  });
  if (!response.ok) {
    throw new Error(`Failed to execute a POST request :\n${fullUrl} ${response.status}/${response.statusText}`);
  }
  return await response.json();
}

export const patch = async <RETURN_TYPE>(url: string, payload: any): Promise<RETURN_TYPE> => {
  const fullUrl = `${BASE_URL}/${url}`;
  const response = await fetch(fullUrl, {
    method: "PATCH",
    body: payload
  });
  if (!response.ok) {
    throw new Error(`Failed to execute a PATCH request :\n${fullUrl} ${response.status}/${response.statusText}`);
  }
  return await response.json();
}