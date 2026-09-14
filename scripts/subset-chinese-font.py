from pathlib import Path
import json,hashlib,shutil,sys
from fontTools.ttLib import TTFont
from fontTools.varLib.instancer import instantiateVariableFont
from fontTools import subset
r=Path(__file__).resolve().parents[1]
if len(sys.argv)!=3: raise SystemExit('Usage: python scripts/subset-chinese-font.py SOURCE.ttf OFL.txt')
def strings(v):
 if isinstance(v,str):return v
 if isinstance(v,dict):return ''.join(strings(x) for x in v.values())
 if isinstance(v,list):return ''.join(strings(x) for x in v)
 return ''
copy=json.loads((r/'content/zh.json').read_text());inventory=json.loads((r/'content/inventory.json').read_text())
text=strings(copy)+''.join(d[k]['zh'] for d in inventory for k in ['name','taste','ingredients','adaptation'])+''.join(d['original'] for d in inventory)+''.join(chr(c) for c in range(32,127))+'\u7b80\u4f53\u4e2d\u6587\u8bed\u8a00\u3001\uff1a\u2713\u2304\u2197\u21ba\u2192\xb2'
f=TTFont(sys.argv[1])
missing=set(map(ord,text))-set(f.getBestCmap())-{10,13}
print('Missing glyphs',[(hex(x),chr(x)) for x in missing]);assert missing <= {0x21ba,0x20b4,0x2304}
f=instantiateVariableFont(f,{'wght':400},inplace=True)
options=subset.Options();options.name_IDs=['*'];options.name_legacy=True;options.name_languages=['*'];options.notdef_outline=True
s=subset.Subsetter(options=options);s.populate(text=text);s.subset(f)
# Give the modified subset its own family, preserving OFL attribution in the license.
for record in f['name'].names:
 if record.nameID in [1,3,4,6,16]:
  value='XoXoSC-Regular' if record.nameID in [3,6] else 'XoXo SC'
  record.string=value.encode(record.getEncoding(),errors='replace')
out=r/'src/app/fonts';out.mkdir(exist_ok=True)
f.save(out/'xoxo-sc.ttf');f.flavor='woff2';f.save(out/'xoxo-sc.woff2')
shutil.copy(sys.argv[2],out/'NOTO-OFL.txt')
print('Glyph count',len(f.getBestCmap()),'web bytes',(out/'xoxo-sc.woff2').stat().st_size)
