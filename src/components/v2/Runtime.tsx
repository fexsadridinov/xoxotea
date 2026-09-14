'use client';
import {useEffect} from 'react';
import {type Locale,languageTag} from '@/lib/content';
export function Runtime({locale}:{locale:Locale}){
 useEffect(()=>{
  const root=document.documentElement;root.lang=languageTag(locale);
  const reduced=matchMedia('(prefers-reduced-motion: reduce)');
  const all=<T extends Element=HTMLElement>(s:string)=>Array.from(document.querySelectorAll<T>(s));
  const sections=all<HTMLElement>('main > section');
  const links=all<HTMLAnchorElement>('[data-section-link]');
  const econ=document.querySelector<HTMLElement>('[data-economics]');
  const progress=document.querySelector<HTMLElement>('.top-progress i');
  const label=document.querySelector('[data-progress-label]');
  const counters=all<HTMLElement>('[data-count]');
  const animations=new Set<Animation>();const frames=new Set<number>();
  let raf=0,disposed=false,scenario=-1;
  const finalNumber=(el:HTMLElement)=>new Intl.NumberFormat(locale,{minimumFractionDigits:Number(el.dataset.decimals||0),maximumFractionDigits:Number(el.dataset.decimals||0)}).format(Number(el.dataset.count))+(el.dataset.suffix||'');
  const play=(el:HTMLElement,keyframes:Keyframe[],delay=0)=>{
   const animation=el.animate(keyframes,{duration:360,delay,easing:'cubic-bezier(.22,1,.36,1)',fill:'backwards'});
   animations.add(animation);animation.finished.catch(()=>{}).finally(()=>animations.delete(animation));
  };
  const reveal=new IntersectionObserver(entries=>{for(const {target,isIntersecting} of entries){
   if(!isIntersecting)continue;reveal.unobserve(target);if(reduced.matches)continue;
   const el=target as HTMLElement;
   if(el.matches('.section-title'))el.querySelectorAll<HTMLElement>('.reveal-line>span').forEach((line,i)=>play(line,[{transform:'translateY(24px)',opacity:0},{transform:'translateY(0)',opacity:1}],i*45));
   else if(el.matches('[data-count]')){
    const value=Number(el.dataset.count),decimals=Number(el.dataset.decimals||0),suffix=el.dataset.suffix||'';
    const format=new Intl.NumberFormat(locale,{minimumFractionDigits:decimals,maximumFractionDigits:decimals});
    let start:number|undefined;
    const tick=(now:number)=>{
     if(disposed||reduced.matches)return;start??=now;
     const p=Math.min((now-start)/400,1);el.textContent=format.format(value*(1-Math.pow(1-p,3)))+suffix;
     if(p<1)schedule(tick);
    };
    schedule(tick);
   }else if(el.matches('.section-head'))el.classList.add('rule-revealed');
   else play(el,[{opacity:0},{opacity:1}]);
  }},{threshold:.15});
  function schedule(fn:(time:number)=>void){const id=requestAnimationFrame(time=>{frames.delete(id);fn(time);});frames.add(id);}
  all('.section-title,.section-head,.chart-reveal,.allocation,[data-count]').forEach(el=>reveal.observe(el));
  const update=()=>{
   raf=0;if(disposed)return;
   const height=innerHeight;const p=Math.max(0,Math.min(1,scrollY/Math.max(1,root.scrollHeight-height)));
   if(progress)progress.style.transform=`scaleX(${p})`;
   if(label)label.textContent=String(Math.round(p*100)).padStart(2,'0')+'%';
   let active=sections[0]?.id;
   for(const section of sections)if(section.getBoundingClientRect().top<height*.45)active=section.id;
   for(const link of links){if(link.dataset.sectionLink===active)link.setAttribute('aria-current','location');else link.removeAttribute('aria-current');}
   if(econ&&!reduced.matches){const box=econ.getBoundingClientRect();if(box.top<height&&box.bottom>0){const q=Math.max(0,Math.min(.999,-box.top/Math.max(1,box.height-height)));const i=[1,0,2][Math.floor(q*3)];if(i!==scenario){scenario=i;econ.dispatchEvent(new CustomEvent('scenario',{detail:i}));}}}
  };
  const onScroll=()=>{if(!raf)raf=requestAnimationFrame(update);};
  const change=()=>{
   root.dataset.reduced=String(reduced.matches);
   if(reduced.matches){animations.forEach(a=>a.cancel());frames.forEach(cancelAnimationFrame);frames.clear();counters.forEach(el=>el.textContent=finalNumber(el));}
   onScroll();
  };
  addEventListener('scroll',onScroll,{passive:true});addEventListener('resize',onScroll,{passive:true});
  reduced.addEventListener('change',change);change();
  return()=>{disposed=true;cancelAnimationFrame(raf);frames.forEach(cancelAnimationFrame);animations.forEach(a=>a.cancel());reveal.disconnect();removeEventListener('scroll',onScroll);removeEventListener('resize',onScroll);reduced.removeEventListener('change',change);};
 },[locale]);return null;
}
