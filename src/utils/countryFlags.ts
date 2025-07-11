import { US, FR, GB, DE, IT, TW, CH, CA, PL, BR, AT, ZA, TR, NL, QA, KE, IN, JM, UZ, SE, AF, ES, DZ, CO, KZ, DO } from 'country-flag-icons/react/3x2';

export const countryFlagMap: { [key: string]: any } = {
  'US': US,
  'USA': US,
  'FR': FR,
  'FRA': FR,
  'GB': GB,
  'UK': GB,
  'DE': DE,
  'GER': DE,
  'IT': IT,
  'ITA': IT,
  'TW': TW,
  'CH': CH,
  'CA': CA,
  'CAN': CA,
  'PL': PL,
  'POL': PL,
  'BR': BR,
  'BRA': BR,
  'AT': AT,
  'AUT': AT,
  'ZA': ZA,
  'TR': TR,
  'TUR': TR,
  'NL': NL,
  'NLD': NL,
  'QA': QA,
  'QAT': QA,
  'KE': KE,
  'IN': IN,
  'JM': JM,
  'UZ': UZ,
  'SE': SE,
  'AF': AF,
  'ES': ES,
  'DZ': DZ,
  'CO': CO,
  'KZ': KZ,
  'DO': DO,
};

export const getCountryFlag = (countryCode: string) => {
  return countryFlagMap[countryCode.toUpperCase()] || null;
}; 