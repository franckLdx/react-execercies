import React, {
  ChangeEvent,
  createRef,
  FunctionComponent,
  useCallback,
  useEffect,
} from 'react';
import { Input } from '@chakra-ui/react';
import { FillThisTooltip } from '../../common/requiredFields/FillThisTooltip';

interface LoginInputProps {
  type: 'Text' | 'Password';
  placeholder?: string;
  autoFocus?: boolean;
  isMissing: boolean;
  onChange: (newValue: string) => void;
  testId: string;
}

export const LoginInput: FunctionComponent<LoginInputProps> = ({
  type,
  isMissing,
  autoFocus,
  placeholder,
  onChange,
  testId,
}) => {
  const inputRef = createRef<HTMLInputElement>();

  useEffect(() => {
    if (isMissing) {
      inputRef.current?.focus();
    }
  }, [isMissing, inputRef]);

  const actualOnChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => onChange(e.target.value),
    [onChange],
  );

  return (
    <FillThisTooltip isMissing={isMissing}>
      <Input
        data-testId={testId}
        autoFocus={autoFocus}
        ref={inputRef}
        type={type}
        placeholder={placeholder}
        onChange={actualOnChange}
        _placeholder={{
          fontSize: '1.05em',
          fontWeight: 'bold',
          color: 'gray.400',
        }}
        borderColor="gray.400"
        color="black"
      />
    </FillThisTooltip>
  );
};
