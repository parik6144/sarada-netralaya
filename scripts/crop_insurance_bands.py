from PIL import Image
from pathlib import Path

im = Image.open(r"c:\xampp\htdocs\sarada-luxury-website\public\e265c295-1447-4d9f-91bf-3c701ecf682a.jpg")
w, h = im.size
out = Path(r"c:\xampp\htdocs\sarada-luxury-website\public\images\insurance")
out.mkdir(parents=True, exist_ok=True)

# Explore vertical bands to locate logo rows
for y0 in range(600, 1150, 40):
    band = im.crop((20, y0, w - 20, min(h - 20, y0 + 80)))
    band.save(out / f"band-{y0}.png")

print("bands saved", w, h)
