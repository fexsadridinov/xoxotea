export const locales = ['uk', 'en', 'ru', 'zh'] as const;
export type Locale = typeof locales[number];
export const pathFor = (locale: Locale, path = '') => `${locale === 'uk' ? '' : '/'+locale}/${path ? path + '/' : ''}`;
export const languageTag = (locale: Locale) => locale === 'zh' ? 'zh-Hans' : locale;
