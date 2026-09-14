type Kind = 'sprout' | 'leaves' | 'store' | 'conversation';
/** Original pen-style paths: uneven curves, open forms, no competitor marks. */
export function LineArt({kind,className=''}:{kind:Kind;className?:string}) {
 return <svg viewBox="0 0 260 220" className={`line-art ${className}`} aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
  {kind==='sprout'&&<>
   <path d="M77 126q52-5 106 1l-13 68q-40 8-78-1zM72 120q55-6 115 0l-2 8-111-1zM100 152q28 5 57 0M78 204q52 4 103-1"/>
   <path d="M130 120q-7-35 6-69M133 88c-38 3-51-17-54-36 29 1 45 12 54 36zM134 72c31 0 50-17 51-39-30 5-47 17-51 39zM130 87l-32-22M139 64l29-17M138 48q-1-17 9-30"/>
   <path d="M47 72l-9-3M57 44l-6-8M204 90l11-4M199 117l12 2" strokeWidth="2"/>
  </>}
  {kind==='leaves'&&<>
   <path d="M49 174q56-18 104-80t65-68M92 148c-40 7-50-14-47-41 22-2 47 10 47 41zM128 118c-35-4-41-27-32-48 25 6 34 23 32 48zM162 85c-18-25-9-46 13-59 17 24 9 46-13 59zM113 134c18 31 49 25 65 5-21-19-44-16-65-5zM146 105c28 14 51 0 55-23-23-7-44 3-55 23zM51 188q24 1 33-3"/>
  </>}
  {kind==='store'&&<>
   <path d="M46 89l13-32 143 2 14 30M50 91q10 18 25 0 13 19 27 0 14 17 27 0 15 19 28 0 15 18 28 0 14 19 27 0M61 105l-1 85 142 1-1-88M47 198q88-4 168 0M76 124l53-1 1 49-54 1zM150 126l35-1 1 65M159 155v9M67 74l128 1"/>
   <path d="M105 157l3-23 16 1-4 22M136 56l1-21M121 31q18-8 35 2l-4 14-31-3z"/>
  </>}
  {kind==='conversation'&&<>
   <path d="M40 99q32-6 70-1l-10 74q-24 6-49-1zM36 92q37-6 78 0l-3 9-73-1zM146 118q31-5 66 0l-8 60q-23 5-48-1zM142 111q36-6 74 1l-3 8-69-1zM79 91l8-36 15-5M179 111l-6-44-15-6M32 189q93 4 193-1"/>
   <path d="M42 56c-4-17 6-29 24-28M114 28q30-10 50 7M184 40l10 8M119 69q16-8 22 2"/>
  </>}
 </svg>;
}
