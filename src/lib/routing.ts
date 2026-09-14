export const locales = ['uk', 'en', 'ru'] as const;
export type Locale = typeof locales[number];
export const pathFor = (locale: Locale, path = '') => `${locale === 'uk' ? '' : '/'+locale}/${path ? path + '/' : ''}`;
