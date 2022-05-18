import { AvailableLanguage } from './app/models/available-language.enum';

export const CURRENCIES = {
  [AvailableLanguage.ptBR]: 'BRL',
  [AvailableLanguage.enUS]: 'USD',
};

export const CURRENCY_SYMBOLS = {
  [AvailableLanguage.ptBR]: 'R$',
  [AvailableLanguage.enUS]: '$',
};

export const POSTAL_CODE_MASK = '00000-000';
export const TAX_ID_MASK = '00.000.000/0000-00';
export const DROPDOWN_BOOOLEAN_OPTIONS = [
  {
    label: 'boolean.yes',
    value: true,
  },
  {
    label: 'boolean.no',
    value: false,
  },
];
