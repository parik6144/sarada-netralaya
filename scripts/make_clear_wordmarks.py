"""Create clear, large vector-style PNG wordmarks (no blurry flyer crops)."""
from pathlib import Path
from PIL import Image, ImageDraw, ImageFont

OUT = Path(r"c:\xampp\htdocs\sarada-luxury-website\public\images\insurance")
OUT.mkdir(parents=True, exist_ok=True)

W, H = 720, 360


def font(size: int, bold: bool = True):
    candidates = [
        r"C:\Windows\Fonts\arialbd.ttf" if bold else r"C:\Windows\Fonts\arial.ttf",
        r"C:\Windows\Fonts\segoeuib.ttf" if bold else r"C:\Windows\Fonts\segoeui.ttf",
        r"C:\Windows\Fonts\calibrib.ttf" if bold else r"C:\Windows\Fonts\calibri.ttf",
    ]
    for p in candidates:
        try:
            return ImageFont.truetype(p, size)
        except OSError:
            continue
    return ImageFont.load_default()


def centered_lines(draw, lines, y_start, fill, sizes):
    y = y_start
    for text, size in zip(lines, sizes):
        f = font(size)
        bbox = draw.textbbox((0, 0), text, font=f)
        tw = bbox[2] - bbox[0]
        th = bbox[3] - bbox[1]
        draw.text(((W - tw) / 2, y), text, font=f, fill=fill)
        y += th + 10
    return y


def save_wordmark(
    name: str,
    lines: list[str],
    color: tuple[int, int, int],
    sizes: list[int] | None = None,
    accent: tuple[int, int, int] | None = None,
    pill: str | None = None,
):
    im = Image.new("RGB", (W, H), (255, 255, 255))
    d = ImageDraw.Draw(im)

    # subtle top accent bar
    bar = accent or color
    d.rectangle([0, 0, W, 8], fill=bar)

    if sizes is None:
        if len(lines) == 1:
            sizes = [64]
        elif len(lines) == 2:
            sizes = [52, 40]
        else:
            sizes = [44, 40, 36]

    # vertical center estimate
    total_h = sum(sizes) + 10 * (len(lines) - 1)
    y0 = (H - total_h) // 2 - 8
    if pill:
        y0 += 18

    if pill:
        pf = font(18)
        pb = d.textbbox((0, 0), pill, font=pf)
        pw, ph = pb[2] - pb[0], pb[3] - pb[1]
        px, py = (W - pw) // 2 - 16, 28
        d.rounded_rectangle([px, py, px + pw + 32, py + ph + 16], radius=20, fill=(*bar, ))
        # pillow rounded_rectangle fill needs RGB
        d.rounded_rectangle([px, py, px + pw + 32, py + ph + 16], radius=20, fill=bar)
        d.text((px + 16, py + 6), pill, font=pf, fill=(255, 255, 255))

    centered_lines(d, lines, y0, color, sizes)

    path = OUT / f"{name}.png"
    im.save(path, optimize=True)
    print("saved", path.name)


# === CLEAR BIG wordmarks only ===
save_wordmark("ayushman", ["AYUSHMAN BHARAT", "PM-JAY"], (22, 120, 63), [48, 56], (22, 120, 63), "GOVT SCHEME")
save_wordmark("rajyakarmi", ["RAJYAKARMI", "SWASTHYA BIMA"], (11, 56, 117), [46, 40], (11, 56, 117), "STATE SCHEME")
save_wordmark("nml", ["NML"], (15, 76, 129), [96], (15, 76, 129), "EMPANELLED")

save_wordmark("new-india", ["NEW INDIA", "ASSURANCE"], (0, 82, 147), [52, 44], (0, 82, 147))
save_wordmark("national", ["NATIONAL", "INSURANCE"], (0, 112, 122), [52, 44], (0, 112, 122))
save_wordmark("oriental", ["ORIENTAL", "INSURANCE"], (200, 90, 20), [52, 44], (20, 60, 120))
save_wordmark("united-india", ["UNITED INDIA", "INSURANCE"], (15, 50, 110), [48, 44], (15, 50, 110))

save_wordmark("lic", ["LIC"], (0, 61, 130), [110], (242, 196, 0), "LIFE INSURANCE")
save_wordmark("tata-power", ["TATA POWER"], (0, 82, 147), [56], (0, 82, 147))
save_wordmark("tata-motors", ["TATA MOTORS"], (0, 82, 147), [56], (0, 82, 147))
save_wordmark("mediassist", ["MEDIASSIST"], (180, 30, 40), [52], (180, 30, 40), "TPA")
save_wordmark("mdindia", ["MD INDIA"], (220, 120, 20), [56], (220, 120, 20), "TPA")
save_wordmark("health-india", ["HEALTH INDIA"], (40, 140, 70), [48], (40, 140, 70), "TPA")

print("done — clear big wordmarks")
