import uk from '../../content/uk.json';
import en from '../../content/en.json';
export type Locale = 'uk' | 'en';
export type Copy = typeof uk;
export const getCopy = (locale: Locale): Copy => locale === 'uk' ? uk : en;
export const pathFor = (locale: Locale, path = '') => `${locale === 'en' ? '/en' : ''}/${path ? path + '/' : ''}`;
export const origin = process.env.NEXT_PUBLIC_SITE_URL || 'https://xoxotea.vercel.app';
