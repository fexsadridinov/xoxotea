from pathlib import Path
import json,zipfile,re
from reportlab.pdfgen import canvas
from reportlab.lib.colors import HexColor
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.platypus import Paragraph
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.enums import TA_LEFT
root=Path(__file__).resolve().parents[1]
out=root/'public/assets';out.mkdir(exist_ok=True)
pdfmetrics.registerFont(TTFont('Body','/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf'))
pdfmetrics.registerFont(TTFont('Bold','/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf'))
W,H=595.28,841.89
style=ParagraphStyle('body',fontName='Body',fontSize=9.5,leading=14,textColor=HexColor('#182a25'))
def para(c,text,x,y,w,size=9.5,bold=False):
 st=ParagraphStyle('x',parent=style,fontName='Bold' if bold else 'Body',fontSize=size,leading=size*1.45)
 p=Paragraph(text.replace('&','&amp;').replace('\n','<br/>'),st);pw,ph=p.wrap(w,800);p.drawOn(c,x,y-ph);return y-ph
for lang in ['uk','en']:
 d=json.loads((root/f'content/{lang}.json').read_text())
 c=canvas.Canvas(str(out/f'xoxo-one-pager-{lang}.pdf'),pagesize=(W,H));c.setTitle(d['metadata']['investors'])
 c.setFillColor(HexColor('#f7f4ee'));c.rect(0,0,W,H,fill=1,stroke=0)
 c.setFillColor(HexColor('#173f35'));c.rect(0,H-145,W,145,fill=1,stroke=0)
 c.setFillColor(HexColor('#f7f4ee'));c.setFont('Bold',46);c.drawString(38,H-64,'xoxo tea');c.setFont('Body',11);c.drawString(40,H-92,d['hero']['eyebrow']);c.setFont('Body',9);c.drawString(40,H-120,d['hero']['note'])
 y=H-175;y=para(c,d['funds']['title'],40,y,W-80,22,True)-14;y=para(c,d['funds']['body'],40,y,W-80,10)-22
 y=para(c,d['funds']['amount']+' / '+d['scale']['formats'][1][1],40,y,W-80,20,True)-18
 y=para(c,d['economics']['scenarioTitle'],40,y,W-80,12,True)-12
 cols=[40,213,386]
 for i,(rev,ebitda,pay) in enumerate([(702000,77540,27.1),(1111500,373955,5.6),(1599000,729230,2.9)]):
  yy=para(c,d['economics']['scenarios'][i],cols[i],y,155,10,True)-8
  for label,value in [(d['economics']['revenue'],f'{rev:,} ₴'.replace(',',' ')),(d['economics']['ebitda'],f'{ebitda:,} ₴'.replace(',',' ')),(d['economics']['payback'],(str(pay).replace('.',',') if lang=='uk' else str(pay)))]:
   yy=para(c,label,cols[i],yy,150,8)-3;yy=para(c,value,cols[i],yy,150,12,True)-10
 y-=170
 y=para(c,d['economics']['assumptions'],40,y,W-80,8)-12
 y=para(c,d['economics']['explanation'],40,y,W-80,8)-14
 y=para(c,d['team']['name']+' / '+d['team']['role'],40,y,W-80,10,True)-10
 y=para(c,d['traction']['items'][2][0]+': '+d['traction']['items'][2][1],40,y,W-80,8)-10
 para(c,d['footer']['legal'],40,y,W-80,8)
 c.setFont('Body',8);c.drawString(40,24,'13.09.2026 / '+d['brand']);c.save()
 c=canvas.Canvas(str(out/f'xoxo-menu-{lang}.pdf'),pagesize=(W,H));c.setTitle(d['metadata']['menu']);y=H-44
 y=para(c,d['brand']+' / '+d['menu'],40,y,W-80,25,True)-15
 y=para(c,d['signature']['note'],40,y,W-80,8)-18
 for drink in d['drinks']:
  y=para(c,drink['name']+'  /  '+str(drink['price'])+' ₴',40,y,W-80,11,True)-3
  y=para(c,drink['base']+' · '+d['signature']['allergens']+': '+drink['allergens'],40,y,W-80,8)-13
 y=para(c,d['signature']['crossContact'],40,y,W-80,8)
 if y<28:raise RuntimeError('Menu overflow')
 c.save()
