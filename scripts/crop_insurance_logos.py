from PIL import Image
from pathlib import Path

im = Image.open(r"c:\xampp\htdocs\sarada-luxury-website\public\e265c295-1447-4d9f-91bf-3c701ecf682a.jpg")
out = Path(r"c:\xampp\htdocs\sarada-luxury-website\public\images\insurance")

# Better individual crops (flyer is 851x1280)
crops = {
    # Corporate logos only (below specialist labels)
    "tata-power": (70, 800, 200, 890),
    "tata-motors": (210, 800, 350, 890),
    "lic": (360, 790, 545, 890),
    "mediassist": (70, 885, 230, 955),
    "mdindia": (235, 885, 380, 955),
    "health-india": (385, 885, 545, 955),
    # Government — from verified gov-row region
    "new-india": (55, 1005, 230, 1060),
    "national": (235, 1005, 400, 1060),
    "oriental": (405, 1005, 580, 1060),
    "united-india": (585, 1005, 800, 1060),
    # Schemes — from verified scheme-row
    "ayushman": (55, 1110, 290, 1180),
    "rajyakarmi": (295, 1110, 530, 1180),
    "nml": (535, 1110, 790, 1180),
    # Full clean rows for page banners
    "corp-tpa-row": (55, 790, 560, 955),
    "gov-row": (48, 975, 810, 1065),
    "scheme-row": (48, 1080, 810, 1185),
}

for name, box in crops.items():
    im.crop(box).convert("RGB").save(out / f"{name}.png", optimize=True)
    print(name)

# Cleanup exploratory bands
for p in out.glob("band-*.png"):
    p.unlink()
print("cleaned bands")
