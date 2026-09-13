import Link from 'next/link';
import uk from '../../content/uk.json';
export default function NotFound(){return <main className="error-page"><span>404</span><h1>{uk.notFound}</h1><Link href="/">{uk.back}</Link></main>;}
