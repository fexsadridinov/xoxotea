import { IBM_Plex_Sans, IBM_Plex_Mono } from 'next/font/google';
import localFont from 'next/font/local';
import type { Metadata, Viewport } from 'next';
import {type Locale,languageTag} from '@/lib/content';
import { origin } from '@/lib/content';
import '@/app/globals.css';
const sans = IBM_Plex_Sans({ subsets:['latin','cyrillic'], weight:'500', preload:false, variable:'--sans', display:'swap' });
const mono = IBM_Plex_Mono({ subsets:['latin','cyrillic'], weight:'400', preload:false, variable:'--mono', display:'swap' });
const chinese = localFont({src:'../../app/fonts/xoxo-sc.woff2',weight:'400',preload:false,variable:'--chinese',display:'swap',adjustFontFallback:false});
export const metadata: Metadata = { metadataBase:new URL(origin),icons:{icon:'/favicon.svg'} };
export const viewport: Viewport = { themeColor:'#f3f1ea',width:'device-width',initialScale:1 };
export function Document({children,locale}:{children:React.ReactNode;locale:Locale}) { return <html lang={languageTag(locale)} className={`${sans.variable} ${mono.variable} ${chinese.variable}`}><body>{children}</body></html>; }
