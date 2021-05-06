
const serverUrl = 'https://jsonplaceholder.typicode.com';

interface TraficItem {
  line: string;
  slug: string;
  title: string;
  message: string;
}

interface Trafic {
  metros: TraficItem;
  rers: TraficItem;
  tramways: TraficItem;
}

export async function get<RETURN_TYPE>(resourceUrl: string, errMessage: string): Promise<RETURN_TYPE> {
  const response = await fetch(`${serverUrl}/${resourceUrl}`)
  if (!response.ok) {
    throw new Error(`${errMessage}: ${response.status}/${response.statusText}`);
  }
  return await parseJson(response);
}

export async function put<RETURN_TYPE>(resourceUrl: string, value: any, errMessage: string): Promise<RETURN_TYPE> {
  const response = await fetch(
    `${serverUrl}/${resourceUrl}`,
    {
      method: 'PUT', body: JSON.stringify(value)
    }
  );
  if (!response.ok) {
    throw new Error(`${errMessage}: ${response.status}/${response.statusText}`);
  }
  return await parseJson(response);
}

const parseJson = async <RETURN_TYPE>(response: Response): Promise<RETURN_TYPE> => (await response.json());