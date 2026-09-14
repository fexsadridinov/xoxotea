from pathlib import Path
import json
from reportlab.pdfgen import canvas
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.lib.colors import HexColor
from reportlab.platypus import Paragraph
from reportlab.lib.styles import ParagraphStyle
root=Path(__file__).resolve().parents[1]
pdfmetrics.registerFont(TTFont('Sans','/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf'))
pdfmetrics.registerFont(TTFont('Mono','/usr/share/fonts/truetype/dejavu/DejaVuSansMono.ttf'))
for lang in ['uk','en']:
 c=json.loads((root/f'content/{lang}.json').read_text()); f=canvas.Canvas(str(root/f'public/downloads/xoxo-{lang}.pdf'),pagesize=(595,842));f.setTitle(c['metadata']['title']);f.setFillColor(HexColor('#f3f1ea'));f.rect(0,0,595,842,fill=1,stroke=0);f.setFillColor(HexColor('#172e28'));f.setStrokeColor(HexColor('#a5afa5'))
 def txt(text,x,y,size=10,font='Sans'):f.setFont(font,size);f.drawString(x,y,text)
 def para(text,y,size=8):
  p=Paragraph(text,ParagraphStyle('p',fontName='Sans',fontSize=size,leading=size*1.5,textColor=HexColor('#172e28')));_,h=p.wrap(515,1000);p.drawOn(f,40,y-h);return y-h
 txt('XoXo',40,787,31);txt(c['status'],40,761,8,'Mono');f.line(40,744,555,744)
 txt(' / '.join(c['thesis']),40,704,24)
 txt('02 / '+c['sections'][1],40,659,10,'Mono')
 for i,d in enumerate(c['product']['drinks']):
  y=634-i*23;txt(d['name'],40,y,10);txt(str(d['price'])+' ₴',478,y,10,'Mono');f.line(40,y-8,555,y-8)
 para(c['product']['assumption'],487,7)
 txt('04 / '+c['sections'][3],40,429,10,'Mono')
 rows=[(c['economics']['scenarios'][0],'702 000','77 540','27.1'),(c['economics']['scenarios'][1],'1 111 500','373 955','5.6'),(c['economics']['scenarios'][2],'1 599 000','729 230','2.9')]
 for x,t in [(40,c['economicsExtra']['scenario']),(225,c['economics']['revenue']),(350,'EBITDA / ₴'),(465,c['economics']['payback'])]:txt(t,x,405,7,'Mono')
 for i,row in enumerate(rows):
  for x,t in zip([40,225,350,465],row):txt(t,x,380-i*25,9,'Mono')
 para(c['economicsExtra']['tag']+' '+c['economics']['assumptions'],300,7)
 txt('06 / '+c['sections'][5],40,221,10,'Mono')
 para(c['terms']['tag']+' '+c['terms']['instrumentValue']+' / '+c['terms']['ticketValue']+' / '+c['terms']['returnValue'],199,8)
 para(c['terms']['note'],160,7)
 para(c['contact']['notice'],112,7)
 f.line(40,55,555,55);txt('xoxotea.vercel.app / '+c['sourceDate'],40,38,8,'Mono');txt('01 / 01',510,38,8,'Mono');f.showPage();f.save()
