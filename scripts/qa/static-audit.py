"""Check language parity, static document semantics and internal file targets."""
from pathlib import Path
from html.parser import HTMLParser
import json
root=Path(__file__).resolve().parents[2]
content={l:json.loads((root/f'content/{l}.json').read_text()) for l in ['uk','en','ru']}
def shape(v):
    if isinstance(v,dict):return {k:shape(x) for k,x in v.items()}
    if isinstance(v,list):return [shape(x) for x in v]
    return type(v).__name__
assert shape(content['uk'])==shape(content['en'])==shape(content['ru'])
class Page(HTMLParser):
    def __init__(self):super().__init__();self.ids=[];self.targets=[];self.lang=None;self.h1=0
    def handle_starttag(self,tag,attributes):
        a=dict(attributes)
        if tag=='html':self.lang=a.get('lang')
        if tag=='h1':self.h1+=1
        if 'id' in a:self.ids.append(a['id'])
        if tag=='a' and 'href' in a:self.targets.append(a['href'])
        if tag in ['img','script'] and 'src' in a:self.targets.append(a['src'])
checked=[]
for l in content:
    for view in ['', 'menu', 'investors']:
        folder=root/'out'/('' if l=='uk' else l)/view
        page=Page();page.feed((folder/'index.html').read_text())
        assert page.lang==l and page.h1==1,(folder,page.lang,page.h1)
        assert len(page.ids)==len(set(page.ids)),folder
        for href in page.targets:
            if href.startswith('#'):assert href[1:] in page.ids,(folder,href)
            elif href.startswith('/') and not href.startswith('//'):
                p=root/'out'/href.split('?')[0].split('#')[0].lstrip('/')
                assert p.exists(),(folder,href)
        checked.append({'locale':l,'view':view or 'home','serverLanguage':page.lang,'singleHeading':True,'uniqueIds':True,'internalTargets':True})
assert (root/'out/404.html').is_file()
(root/'audit/static.json').write_text(json.dumps({'translationKeyParity':True,'pages':checked},indent=2)+'\n')
print('PASS: translation key parity, 9 HTML languages, headings, IDs, links and media targets; 404 generated.')
