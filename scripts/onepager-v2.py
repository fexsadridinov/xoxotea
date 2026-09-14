"""Render localized one-pagers from the same copy and model as the website."""
from pathlib import Path
import json, subprocess
from xml.sax.saxutils import escape
from reportlab.pdfgen import canvas
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.lib.colors import HexColor
from reportlab.platypus import Paragraph, Table, TableStyle
from reportlab.lib.styles import ParagraphStyle
root = Path(__file__).resolve().parents[1]
font_root = Path(__import__('os').environ.get('XOXO_FONT_DIR', '/usr/share/fonts/truetype/dejavu'))
pdfmetrics.registerFont(TTFont('Sans', str(font_root / 'DejaVuSans.ttf')))
pdfmetrics.registerFont(TTFont('Mono', str(font_root / 'DejaVuSansMono.ttf')))
results = json.loads(subprocess.check_output(['node', '--experimental-strip-types', '--input-type=module', '-e', "import {calculate,scenarios} from './src/lib/store-model.ts';process.stdout.write(JSON.stringify(scenarios.map(calculate)))"], cwd=root))
ink = HexColor('#202420')
for lang in ['uk', 'en', 'ru']:
    c = json.loads((root / f'content/{lang}.json').read_text())
    f = canvas.Canvas(str(root / f'public/downloads/xoxo-{lang}.pdf'), pagesize=(595, 842), invariant=1)
    f.setTitle(c['metadata']['title']); f.setAuthor('XoXo'); f.setSubject(c['metadata']['description'])
    f.setFillColor(HexColor('#ffffff')); f.rect(0, 0, 595, 842, fill=1, stroke=0)
    f.setFillColor(ink); f.setStrokeColor(HexColor('#a5afa5'))
    def txt(text, x, y, size=10, font='Sans'):
        f.setFont(font, size); f.drawString(x, y, text)
    def paragraph(text, size=8, leading=None):
        return Paragraph(escape(text), ParagraphStyle('p', fontName='Sans', fontSize=size, leading=leading or size*1.4, textColor=ink))
    def para(text, y, size=8):
        p=paragraph(text,size); _,h=p.wrap(515,1000); p.drawOn(f,40,y-h); return y-h
    txt('XoXo',40,790,31); txt(c['status'],40,765,8,'Mono'); f.line(40,748,555,748)
    txt(' / '.join(c['thesis']),40,708,24)
    txt('02 / '+c['sections'][1],40,666,10,'Mono')
    inventory=json.loads((root/'content/inventory.json').read_text())
    for i,d in enumerate(inventory):
        y=642-i*18
        txt(d['id']+' / '+d['name'][lang],40,y,9)
        txt(str(d['volumeMl'])+' '+c['catalogue']['ml'],485,y,9,'Mono')
        f.line(40,y-6,555,y-6)
    y=para(c['catalogue']['core']+' / C01-C06. '+c['catalogue']['seasonal']+' / S01-S04. '+c['catalogue']['note'],455,8)-16
    txt('04 / '+c['sections'][3],40,y,10,'Mono'); y-=14
    econ=c['economics']
    headers=[c['economicsExtra']['scenario'],econ['revenue']+' / ₴','EBITDA / ₴',econ['payback']]
    rows=[[paragraph(t,8) for t in headers]]
    for i,v in enumerate(results):
        money=lambda n: format(round(n),',').replace(',',' ')
        payback=format(v['payback'],'.1f').replace('.',',' if lang!='en' else '.')
        rows.append([paragraph(econ['scenarios'][i],8),money(v['revenue']),money(v['ebitda']),payback])
    table=Table(rows,colWidths=[160,130,110,115],hAlign='LEFT')
    table.setStyle(TableStyle([('FONTNAME',(0,0),(-1,-1),'Mono'),('FONTSIZE',(0,0),(-1,-1),9),('TEXTCOLOR',(0,0),(-1,-1),ink),('VALIGN',(0,0),(-1,-1),'TOP'),('LEFTPADDING',(0,0),(-1,-1),0),('RIGHTPADDING',(0,0),(-1,-1),12),('TOPPADDING',(0,0),(-1,-1),5),('BOTTOMPADDING',(0,0),(-1,-1),6),('LINEBELOW',(0,0),(-1,0),.4,HexColor('#a5afa5'))]))
    _,h=table.wrap(515,1000); table.drawOn(f,40,y-h); y-=h+12
    y=para(econ['assumptions'],y,7.5)-12
    txt('06 / '+c['sections'][5],40,y,10,'Mono'); y-=14
    y=para(c['terms']['tag']+'. '+c['terms']['instrumentValue']+' / '+c['terms']['ticketValue']+' / '+c['terms']['returnValue'],y,8.5)-9
    y=para(c['terms']['note'],y,8.5)-10
    y=para(c['contact']['notice'],y,8.5)
    if y<65: raise ValueError(f'{lang}: content overlaps footer ({y:.1f})')
    url='xoxotea.vercel.app'+('/' if lang=='uk' else f'/{lang}/')
    f.line(40,53,555,53); txt(url+' / '+c['sourceDate'],40,36,8,'Mono'); txt('01 / 01',510,36,8,'Mono')
    f.linkURL('https://'+url,(40,30,420,47),relative=0)
    f.showPage(); f.save(); print(lang, 'content bottom',round(y,1))
