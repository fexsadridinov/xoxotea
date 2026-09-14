import type { Copy, Locale } from '@/lib/content';
import inventory from '../../../content/inventory.json';
import { LineArt } from './LineArt';
import Image from 'next/image';

export function ProductInventory({locale,c}:{locale:Locale;c:Copy['catalogue']}) {
  return <div className="inventory">
    <div className="inventory-intro">
      <div><p className="micro">{c.pilot}</p><h2>{c.title.split('\n').map(line=><span key={line}>{line}</span>)}</h2><p className="inventory-lead">{c.intro}</p></div>
      <LineArt kind="leaves" className="inventory-sketch"/>
    </div>
    <nav className="collection-nav" aria-label={c.title.replace('\n',' ')}><a href="#core">01 / {c.core}<span>06</span></a><a href="#seasonal">02 / {c.seasonal}<span>04</span></a></nav>
    <p className="inventory-status">{c.note}</p><p className="visual-note">{c.visualNote}</p>
    {(['core','seasonal'] as const).map((tier,i)=><div className="collection" id={tier} key={tier}>
      <div className="collection-heading"><div><span className="micro">0{i+1} / {i===0?'06':'04'}</span><h3>{c[tier]}</h3></div><p>{tier==='core'?c.coreNote:c.seasonalNote}</p></div>
      <div className="inventory-grid">{inventory.filter(d=>d.tier===tier).map(d=><article className="recipe-card" key={d.id} data-product-id={d.id}>
        <div className="recipe-photo"><span className="recipe-code" aria-hidden="true">{d.id}</span><Image unoptimized src={`/drinks/catalogue/${d.id}.webp`} width="600" height="600" loading="lazy" decoding="async" alt={d.name[locale]}/></div>
        <div className="recipe-body"><p className="micro recipe-serving">{c.cold} / {d.volumeMl} {c.ml}</p><h4>{d.name[locale]}</h4><p className="recipe-taste">{d.taste[locale]}</p><p className="recipe-allergen">{d.dairy?c.milk:c.noMilk}</p>
          <details><summary>{c.detail}<span aria-hidden="true">+</span></summary><div className="recipe-details"><p>{d.ingredients[locale]}</p><p><strong>{c.adaptation}</strong>{d.adaptation[locale]}</p><p className="recipe-reference">{c.source}{locale==='zh'?'：':': '}<span lang="zh-Hans">{d.original}</span> / {c.page} {d.sourcePages.join(locale==='zh'?'、':', ')}</p></div></details>
        </div>
      </article>)}</div>
    </div>)}
    <div className="inventory-method"><h3>{c.methodTitle}</h3><div><p>{c.method}</p><p>{c.sweetness}</p><p className="inventory-status">{c.allergy}</p></div></div>
  </div>;
}
