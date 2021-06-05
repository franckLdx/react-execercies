import { useTranslation, TFunction } from 'react-i18next';

export function useCommonTranslation(): TFunction<string[]> {
  const { t } = useTranslation(['common']);
  return t;
}
