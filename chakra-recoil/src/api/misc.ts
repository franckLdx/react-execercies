
export const get = async (url: string) => await fetch(`https://jsonplaceholder.typicode.com/${url}`);