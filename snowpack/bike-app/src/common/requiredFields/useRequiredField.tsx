import { useCallback, useRef, useState } from 'react';

interface UseRequiredField {
  isMissing: boolean;
  prepareValidation: () => void;
  validate: () => boolean;
  onChange: (newValue: string) => void;
}

export function useRequiredField(): UseRequiredField {
  const value = useRef<string>('');
  const [isMissing, setIsMissing] = useState<boolean>(false);

  const prepareValidation = useCallback((): void => {
    setIsMissing(false);
  }, [setIsMissing]);

  const validate = useCallback((): boolean => {
    if (value.current.trim().length === 0) {
      setIsMissing(true);
      return false;
    }
    return true;
  }, []);

  const onChange = useCallback(
    (newValue: string): void => {
      value.current = newValue;
      setIsMissing(false);
    },
    [setIsMissing],
  );

  return {
    isMissing,
    prepareValidation,
    validate,
    onChange,
  };
}
