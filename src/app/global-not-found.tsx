import {Document} from '@/components/v2/Document';
import {getCopy,locales,pathFor,languageTag} from '@/lib/content';
export default function NotFound(){return <Document locale="uk"><main className="error-page"><span>404</span><h1>{getCopy('uk').notFound}</h1><p lang="ru">{getCopy('ru').notFound}</p><p lang="en">{getCopy('en').notFound}</p><p lang="zh-Hans">{getCopy('zh').notFound}</p><nav aria-label="Мова / Язык / Language / 语言">{locales.map(l=><p key={l}><a href={pathFor(l)} lang={languageTag(l)} hrefLang={languageTag(l)}>{getCopy(l).back}</a></p>)}</nav></main></Document>;}
