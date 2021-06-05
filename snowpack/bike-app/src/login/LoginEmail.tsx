import React, { FunctionComponent } from 'react';
import { useLoginTranslation } from './tools/loginHooks';
import { LoginInput } from './tools/LoginInput';

interface LoginEmailProps {
  isMissing: boolean;
  onChange: (newValue: string) => void;
}

export const LoginEmail: FunctionComponent<LoginEmailProps> = ({
  isMissing,
  onChange,
}) => {
  const translate = useLoginTranslation();
  return (
    <LoginInput
      autoFocus={true}
      type="Text"
      isMissing={isMissing}
      placeholder={translate('common:email')}
      onChange={onChange}
    />
  );
};
