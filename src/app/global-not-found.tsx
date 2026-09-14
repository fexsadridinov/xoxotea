import {Document} from '@/components/v2/Document';
import {getCopy,locales,pathFor} from '@/lib/content';
export default function NotFound(){return <Document locale="uk"><main className="error-page"><span>404</span><h1>{getCopy('uk').notFound}</h1><p lang="ru">{getCopy('ru').notFound}</p><p lang="en">{getCopy('en').notFound}</p><nav aria-label="Мова / Язык / Language">{locales.map(l=><p key={l}><a href={pathFor(l)} lang={l} hrefLang={l}>{getCopy(l).back}</a></p>)}</nav></main></Document>;}
