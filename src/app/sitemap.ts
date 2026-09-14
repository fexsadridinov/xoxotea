export const dynamic = 'force-static';
import {origin,pathFor,locales,languagesFor} from '@/lib/content';
export default function sitemap(){return locales.flatMap(lang=>['','menu','investors'].map(p=>({url:origin+pathFor(lang,p),lastModified:new Date('2026-09-14'),alternates:{languages:languagesFor(p)}})));}
