'use client';
import {useEffect,useRef,useState} from 'react';
import {locales,pathFor,type Locale} from '@/lib/routing';
const names={uk:'Українська',en:'English',ru:'Русский'};
export function LanguageSwitcher({locale,path,label}:{locale:Locale;path:string;label:string}){
 const [open,setOpen]=useState(false);const root=useRef<HTMLDivElement>(null);const button=useRef<HTMLButtonElement>(null);
 useEffect(()=>{
  if(!open)return;
  const outside=(e:PointerEvent)=>{if(!root.current?.contains(e.target as Node))setOpen(false);};
  const escape=(e:KeyboardEvent)=>{if(e.key==='Escape'){setOpen(false);button.current?.focus();}};
  document.addEventListener('pointerdown',outside);document.addEventListener('keydown',escape);
  return()=>{document.removeEventListener('pointerdown',outside);document.removeEventListener('keydown',escape);};
 },[open]);
 return <div className="language-switcher" ref={root} onBlur={e=>{if(!e.currentTarget.contains(e.relatedTarget))setOpen(false);}}><button ref={button} className="language-trigger" type="button" aria-label={`${locale==='uk'?'UA':locale.toUpperCase()} — ${label}: ${names[locale]}`} aria-expanded={open} aria-controls="language-options" onClick={()=>setOpen(!open)}>{locale==='uk'?'UA':locale.toUpperCase()} <span aria-hidden="true">⌄</span></button><ul id="language-options" className="language-options" hidden={!open}>{locales.map(l=><li key={l}><a href={pathFor(l,path)} lang={l} hrefLang={l} aria-current={l===locale?'page':undefined}>{names[l]}{l===locale&&<span aria-hidden="true"> ✓</span>}</a></li>)}</ul></div>;
}
