"""Compress the generated source set without changing vessel geometry or colors."""
from pathlib import Path
from PIL import Image
root=Path(__file__).resolve().parents[1]
src=Path('/workspace/scratch/6191f1019646/v2-media')
for i in range(6):
 im=Image.open(src/f'drink-{i}.png').convert('RGB')
 for w in [480,960]:
  thumb=im.resize((w,round(im.height*w/im.width)),Image.Resampling.LANCZOS)
  for fmt,q in [('AVIF',48),('WEBP',78)]:thumb.save(root/f'public/drinks/drink-{i}-{w}.{fmt.lower()}',format=fmt,quality=q,**({'speed':8,'max_threads':2} if fmt=='AVIF' else {}))
print('Compressed 6 images into 24 AVIF/WebP derivatives')
