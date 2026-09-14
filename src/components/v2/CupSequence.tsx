'use client';
import {useEffect,useRef} from 'react';
// Only real generated views may replace the photograph. Empty manifests keep the static fallback.
export function CupSequence({alt}:{alt:string;label:string}){
 const canvas=useRef<HTMLCanvasElement>(null);
 useEffect(()=>{
  const el=canvas.current;if(!el)return;
  const reduced=matchMedia('(prefers-reduced-motion: reduce)');const stage=el.closest('[data-cup-stage]');
  let stopped=false,loading=false,unavailable=false,frame=0,generation=0;let controller:AbortController|undefined;
  const bitmaps:ImageBitmap[]=[];
  const draw=(e:Event)=>{
   frame=Math.max(0,Math.min(35,Math.round((e as CustomEvent<number>).detail)));
   const b=bitmaps[frame];if(!b||reduced.matches||stopped)return;
   const ctx=el.getContext('2d');if(!ctx)return;
   if(el.width!==b.width)el.width=b.width;if(el.height!==b.height)el.height=b.height;
   ctx.clearRect(0,0,el.width,el.height);ctx.drawImage(b,0,0);el.dataset.ready='true';
  };
  const observer=new IntersectionObserver(async entries=>{
   if(!entries.some(x=>x.isIntersecting)||reduced.matches||loading||unavailable||stopped)return;
   observer.disconnect();loading=true;const version=++generation;controller=new AbortController();const signal=controller.signal;
   try{
    const res=await fetch('/sequence/manifest.json',{signal});if(!res.ok)throw new Error('Manifest unavailable');
    const manifest=await res.json();
    if(!Array.isArray(manifest.frames)||manifest.frames.length!==36||!manifest.frames.every((p:unknown)=>typeof p==='string'&&p.startsWith('/sequence/')&&!p.includes('..'))){unavailable=true;return;}
    for(let i=0;i<36;i++){
     if(stopped||reduced.matches||version!==generation)break;if(bitmaps[i])continue;
     const response=await fetch(manifest.frames[i],{signal});if(!response.ok)throw new Error('Frame unavailable');
     const bitmap=await createImageBitmap(await response.blob());
     if(stopped||reduced.matches||version!==generation){bitmap.close();break;}
     bitmaps[i]=bitmap;draw(new CustomEvent('cupframe',{detail:frame}));
     await new Promise<void>(resolve=>requestAnimationFrame(()=>resolve()));
    }
   }catch{if(!signal.aborted)unavailable=true;/* Keep the accessible static photograph. */}
   finally{loading=false;if(!stopped&&!reduced.matches&&!unavailable&&bitmaps.length<36&&stage)observer.observe(stage);}
  },{rootMargin:'100px'});
  const change=()=>{if(reduced.matches){generation++;controller?.abort();el.dataset.ready='false';}else{draw(new CustomEvent('cupframe',{detail:frame}));if(stage&&!unavailable)observer.observe(stage);}};
  if(stage){observer.observe(stage);stage.addEventListener('cupframe',draw);}reduced.addEventListener('change',change);
  return()=>{stopped=true;generation++;controller?.abort();observer.disconnect();stage?.removeEventListener('cupframe',draw);reduced.removeEventListener('change',change);bitmaps.forEach(b=>b.close());};
 },[]);
 return <><picture><source type="image/avif" srcSet="/drinks/drink-0-480.avif 480w, /drinks/drink-0-960.avif 960w" sizes="(max-width: 767px) 82vw, 440px"/><img src="/drinks/drink-0-480.webp" width="720" height="960" loading="lazy" decoding="async" alt={alt}/></picture><canvas ref={canvas} className="cup-canvas" width={900} height={1200} aria-hidden="true"/></>;
}
