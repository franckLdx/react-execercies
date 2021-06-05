import React, { FunctionComponent } from 'react';
import { Tooltip } from '@chakra-ui/react';
import { useCommonTranslation } from '../translation';

interface FillThisTooltipProps {
  isMissing: boolean;
}

export const FillThisTooltip: FunctionComponent<FillThisTooltipProps> = ({
  isMissing,
  children,
}) => {
  const translate = useCommonTranslation();
  return (
    <Tooltip
      placement="bottom-start"
      label={translate('fillThis')}
      aria-label="tooltip: field missing"
      isOpen={isMissing}
    >
      {children}
    </Tooltip>
  );
};
