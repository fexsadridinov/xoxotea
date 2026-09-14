export const dynamic = "force-static";
import {origin,pathFor} from '@/lib/content';
export default function sitemap(){return (['uk','en'] as const).flatMap(lang=>['','menu','investors'].map(p=>({url:origin+pathFor(lang,p),lastModified:new Date('2026-09-13'),alternates:{languages:{uk:origin+pathFor('uk',p),en:origin+pathFor('en',p)}}})));}
