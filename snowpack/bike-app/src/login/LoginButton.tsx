import { Button } from '@chakra-ui/react';
import React, { FunctionComponent } from 'react';
import { useLoginTranslation } from './tools/loginHooks';

interface LoginButtonProps {
  onClick: () => void;
}

export const LoginButton: FunctionComponent<LoginButtonProps> = ({
  onClick: onConnection,
}) => {
  const translate = useLoginTranslation();

  return (
    <Button size="lg" isFullWidth={true} onClick={onConnection}>
      {translate('login:login')}
    </Button>
  );
};
