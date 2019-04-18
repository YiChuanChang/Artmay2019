from glob import glob
from PIL import Image


image_lis = glob('*.jpg')

for path in image_lis:
	img = Image.open(path)
	img = img.resize((800,800), Image.BILINEAR )
	img.save(path)
