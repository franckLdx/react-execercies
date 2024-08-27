import { useCallback } from 'react';
import { useGetLocalStorage } from '../localStorage';

const key = 'dancers' as const;
const separator = ';' as const;

export const useGetRegisteredDancers = (): number[] => {
  const dancers = useGetLocalStorage(key);
  return dancers?.split(separator)?.map(Number) ?? [];
};

export const useRegisterDancer = () => {
  const registeredDancers = useGetRegisteredDancers();
  return useCallback((wscid: number) => {
    if (registeredDancers.includes(wscid)) {
      return
    }
    registeredDancers.push(wscid);
    const storedValue = registeredDancers.map(String).join(separator)
    localStorage.setItem(key, storedValue);
  }, [registeredDancers]);
};
