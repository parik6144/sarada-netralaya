"""Extract ONLY clear, large logo tiles from the official flyer."""
from PIL import Image, ImageOps
from pathlib import Path

src = Image.open(r"c:\xampp\htdocs\sarada-luxury-website\public\e265c295-1447-4d9f-91bf-3c701ecf682a.jpg").convert("RGB")
out = Path(r"c:\xampp\htdocs\sarada-luxury-website\public\images\insurance")
out.mkdir(parents=True, exist_ok=True)

def save_big(name: str, box: tuple[int, int, int, int], canvas=(480, 240)):
    """Crop logo region, pad on white, save large clear PNG."""
    crop = src.crop(box)
    # Scale up so longest side fits canvas with padding
    pad = 28
    inner_w, inner_h = canvas[0] - pad * 2, canvas[1] - pad * 2
    fitted = ImageOps.contain(crop, (inner_w, inner_h), Image.Resampling.LANCZOS)
    canvas_im = Image.new("RGB", canvas, (255, 255, 255))
    x = (canvas[0] - fitted.width) // 2
    y = (canvas[1] - fitted.height) // 2
    canvas_im.paste(fitted, (x, y))
    path = out / f"{name}.png"
    canvas_im.save(path, optimize=True)
    print(f"saved {name} from {box} -> {canvas}")

# === CLEAR logos only — generous crops from flyer (851x1280) ===
# Government row (verified clear)
save_big("new-india", (50, 1000, 235, 1062), (520, 220))
save_big("national", (235, 1000, 405, 1062), (520, 220))
save_big("oriental", (405, 1000, 585, 1062), (520, 220))
save_big("united-india", (585, 1000, 810, 1062), (520, 220))

# Empanelled schemes (verified clear — logo + name)
save_big("ayushman", (50, 1115, 300, 1182), (560, 240))
save_big("rajyakarmi", (300, 1115, 545, 1182), (560, 240))
save_big("nml", (545, 1115, 805, 1182), (560, 240))

# Corporate — LIC is clearest; Tata marks need logo-only focus
save_big("lic", (380, 800, 545, 890), (520, 240))
save_big("tata-power", (80, 805, 195, 895), (480, 240))
save_big("tata-motors", (220, 805, 345, 895), (480, 240))

# TPA logos (lower row in corp block) — only if reasonably clear
save_big("mediassist", (70, 900, 225, 958), (520, 220))
save_big("mdindia", (235, 900, 385, 958), (520, 220))
save_big("health-india", (390, 900, 545, 958), (520, 220))

# Big clear strip banners for page sections (keep large)
gov = src.crop((40, 972, 820, 1068))
gov = ImageOps.contain(gov, (1400, 200), Image.Resampling.LANCZOS)
bg = Image.new("RGB", (1400, 220), (255, 255, 255))
bg.paste(gov, ((1400 - gov.width) // 2, (220 - gov.height) // 2))
bg.save(out / "gov-row.png", optimize=True)

scheme = src.crop((40, 1078, 820, 1190))
scheme = ImageOps.contain(scheme, (1400, 220), Image.Resampling.LANCZOS)
bg2 = Image.new("RGB", (1400, 240), (255, 255, 255))
bg2.paste(scheme, ((1400 - scheme.width) // 2, (240 - scheme.height) // 2))
bg2.save(out / "scheme-row.png", optimize=True)

print("done — clear big logos only")
