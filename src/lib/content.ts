import uk from '../../content/uk.json';
import en from '../../content/en.json';
import ru from '../../content/ru.json';
import type {Metadata} from 'next';
import {locales,pathFor,type Locale} from './routing';
export {locales,pathFor,type Locale} from './routing';
export type Copy = typeof uk;
export const getCopy = (locale: Locale): Copy => ({uk,en,ru})[locale];
export const origin = process.env.NEXT_PUBLIC_SITE_URL || 'https://xoxotea.vercel.app';
export const languagesFor = (path = '') => Object.fromEntries([...locales.map(l => [l,origin+pathFor(l,path)]),['x-default',origin+pathFor('uk',path)]]);
export function pageMetadata(locale:Locale, view:''|'menu'|'investors'=''):Metadata {
 const c=getCopy(locale);
 return {title:view?`${c.nav[view]} — ${c.metadata.title}`:c.metadata.title,description:c.metadata.description,alternates:{canonical:origin+pathFor(locale,view),languages:languagesFor(view)},openGraph:{title:view?`${c.nav[view]} — XoXo`:c.metadata.title,description:c.metadata.description,url:origin+pathFor(locale,view),locale:{uk:'uk_UA',en:'en_US',ru:'ru_UA'}[locale],alternateLocale:locales.filter(l=>l!==locale).map(l=>({uk:'uk_UA',en:'en_US',ru:'ru_UA'})[l])}};
}
