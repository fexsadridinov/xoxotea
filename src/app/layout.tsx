import { Manrope, Noto_Serif } from 'next/font/google';
import type { Metadata, Viewport } from 'next';
import uk from '../../content/uk.json';
import { origin } from '@/lib/investor-content';
import './globals.css';
const manrope=Manrope({subsets:['latin','cyrillic','cyrillic-ext'],variable:'--font-manrope',display:'swap'});
const display=Noto_Serif({subsets:['latin','cyrillic','cyrillic-ext'],weight:'500',variable:'--font-display-face',display:'swap'});
export const metadata:Metadata={metadataBase:new URL(origin),title:uk.metadata.home,description:uk.metadata.description,icons:{icon:'/press/favicon.svg'}};
export const viewport:Viewport={themeColor:'#173f35',width:'device-width',initialScale:1};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="uk" className={`${manrope.variable} ${display.variable}`} suppressHydrationWarning><body>{children}</body></html>;}
