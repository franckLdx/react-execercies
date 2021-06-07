import { Select } from '@chakra-ui/react';
import React, { FunctionComponent, useCallback } from 'react';
import { useTranslation } from 'react-i18next';

export const LanguageSelector: FunctionComponent = () => {
  const { i18n } = useTranslation();

  const onChange = useCallback(
    (ev) => i18n.changeLanguage(ev.target.value),
    [i18n],
  );

  return (
    <Select paddding="0" value={i18n.language} onChange={onChange}>
      <option value="en">English</option>
      <option value="fr">Francais</option>
    </Select>
  );
};
