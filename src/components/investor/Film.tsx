'use client';
import { useEffect, useRef, useState } from 'react';
export function Film({pause,play,pour=false}:{pause:string;play:string;pour?:boolean}) {
 const ref=useRef<HTMLVideoElement>(null);const [allowed,setAllowed]=useState(false);const [playing,setPlaying]=useState(true);
 useEffect(()=>{const mq=matchMedia('(prefers-reduced-motion: reduce)');const connection=(navigator as Navigator & {connection?:{saveData?:boolean;effectiveType?:string;addEventListener?:(t:string,f:()=>void)=>void;removeEventListener?:(t:string,f:()=>void)=>void}}).connection;const update=()=>{const ok=!mq.matches&&!connection?.saveData&&!['slow-2g','2g','3g'].includes(connection?.effectiveType||'');setAllowed(ok);if(!ok)ref.current?.pause();};update();mq.addEventListener('change',update);connection?.addEventListener?.('change',update);return ()=>{mq.removeEventListener('change',update);connection?.removeEventListener?.('change',update);};},[]);
 useEffect(()=>{if(!allowed)return;const timer=setTimeout(()=>{const video=ref.current;if(video){video.src=pour?'/assets/pour.mp4':matchMedia('(max-width: 767px)').matches?'/assets/hero-mobile.mp4':'/assets/hero-desktop.mp4';video.play().catch(()=>setPlaying(false));}},1800);return()=>clearTimeout(timer);},[allowed,pour]);
 if(!allowed)return null;
 return <><video ref={ref} className="film" muted autoPlay playsInline loop preload="none" aria-hidden="true" onError={()=>setAllowed(false)}/><button className="film-toggle" aria-label={playing?pause:play} onClick={()=>{const v=ref.current;if(v){if(playing)v.pause();else v.play().catch(()=>{});setPlaying(!playing);}}}>{playing?'Ⅱ':'▷'}</button></>;
}
