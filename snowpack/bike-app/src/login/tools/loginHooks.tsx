import { TFunction, useTranslation } from 'react-i18next';

export function useLoginTranslation(): TFunction<string[]> {
  const { t } = useTranslation(['login', 'common']);
  return t;
}
