import { useCallback, useSyncExternalStore } from 'react';

const event = 'storage' as const;

type Listener = (this: Window, ev: WindowEventMap[typeof event]) => void;

export const useGetLocalStorage = (item: string) => {
  const subscribe = useCallback(
    (listener: Listener) => {
      window.addEventListener(event, () => listener);
      return () => {
        window.removeEventListener(event, listener);
      };
    },
    [item]
  );

  const getSnapShot = useCallback(() => localStorage.getItem(item), [item]);

  return useSyncExternalStore(subscribe, getSnapShot);
};
