import { IBM_Plex_Sans, IBM_Plex_Mono } from 'next/font/google';
import type { Metadata, Viewport } from 'next';
import uk from '../../content/uk.json';
import { origin } from '@/lib/content';
import './globals.css';
const sans = IBM_Plex_Sans({ subsets:['latin','cyrillic'], weight:['400','500','600'], variable:'--sans', display:'swap' });
const mono = IBM_Plex_Mono({ subsets:['latin','cyrillic'], weight:'400', variable:'--mono', display:'swap' });
export const metadata: Metadata = { metadataBase:new URL(origin),title:uk.metadata.title,description:uk.metadata.description,icons:{icon:'/favicon.svg'} };
export const viewport: Viewport = { themeColor:'#f3f1ea',width:'device-width',initialScale:1 };
export default function Layout({children}:{children:React.ReactNode}) { return <html lang="uk" className={`${sans.variable} ${mono.variable}`} suppressHydrationWarning><body>{children}</body></html>; }
