"""Download clear, large official partner logos via Wikimedia Commons API."""
from __future__ import annotations

import io
import json
import ssl
import urllib.parse
import urllib.request
from pathlib import Path

from PIL import Image, ImageOps

ssl._create_default_https_context = ssl._create_unverified_context
UA = "Mozilla/5.0 (compatible; SaradaSiteBot/1.0; educational hospital site)"
OUT = Path(r"c:\xampp\htdocs\sarada-luxury-website\public\images\insurance")
OUT.mkdir(parents=True, exist_ok=True)

# (local filename stem, Commons file title)
TITLES = [
    ("ayushman", "File:Ayushman Bharat logo.png"),
    ("lic", "File:Life Insurance Corporation of India Logo.svg"),
    ("tata", "File:Tata logo.svg"),
    ("new-india", "File:New India Assurance.png"),
    ("oriental", "File:The Oriental Insurance Company Limited logo.png"),
    ("national", "File:National Insurance Company Limited.png"),
    ("united-india", "File:United India Insurance.png"),
]

# Alternate known filenames if first miss
ALTS = {
    "ayushman": [
        "File:Ayushman_Bharat_logo.png",
        "File:PMJAY logo.png",
        "File:Ayushman Bharat Yojana logo.jpg",
    ],
    "new-india": [
        "File:The New India Assurance Co. Ltd. logo.png",
        "File:New India Assurance logo.png",
    ],
    "oriental": [
        "File:Oriental Insurance Company logo.png",
        "File:Oriental Insurance logo.png",
    ],
    "national": [
        "File:National Insurance Company logo.png",
        "File:National Insurance Company Limited logo.png",
    ],
    "united-india": [
        "File:United India Insurance Company Limited logo.png",
        "File:United India Insurance logo.png",
    ],
}


def fetch_json(url: str) -> dict:
    req = urllib.request.Request(url, headers={"User-Agent": UA})
    with urllib.request.urlopen(req, timeout=40) as r:
        return json.loads(r.read())


def resolve_thumb(title: str, width: int = 800) -> str | None:
    url = "https://commons.wikimedia.org/w/api.php?" + urllib.parse.urlencode(
        {
            "action": "query",
            "titles": title,
            "prop": "imageinfo",
            "iiprop": "url|size|mime",
            "iiurlwidth": width,
            "format": "json",
        }
    )
    data = fetch_json(url)
    page = next(iter(data["query"]["pages"].values()))
    if "missing" in page or "imageinfo" not in page:
        return None
    info = page["imageinfo"][0]
    return info.get("thumburl") or info.get("url")


def download_image(url: str) -> Image.Image:
    req = urllib.request.Request(url, headers={"User-Agent": UA})
    with urllib.request.urlopen(req, timeout=40) as r:
        raw = r.read()
    return Image.open(io.BytesIO(raw)).convert("RGBA")


def save_logo(name: str, im: Image.Image, canvas: tuple[int, int] = (640, 320)) -> None:
    # Flatten on white
    bg = Image.new("RGB", im.size, (255, 255, 255))
    bg.paste(im, mask=im.split()[-1])
    fitted = ImageOps.contain(bg, (canvas[0] - 40, canvas[1] - 40), Image.Resampling.LANCZOS)
    canvas_im = Image.new("RGB", canvas, (255, 255, 255))
    canvas_im.paste(fitted, ((canvas[0] - fitted.width) // 2, (canvas[1] - fitted.height) // 2))
    path = OUT / f"{name}.png"
    canvas_im.save(path, optimize=True)
    print(f"OK {name} -> {path.name} {canvas_im.size}")


def main() -> None:
    for name, title in TITLES:
        candidates = [title] + ALTS.get(name, [])
        thumb = None
        used = None
        for t in candidates:
            try:
                thumb = resolve_thumb(t)
            except Exception as e:
                print(f"  lookup fail {t}: {e}")
                continue
            if thumb:
                used = t
                break
        if not thumb:
            print(f"MISS {name}")
            continue
        try:
            im = download_image(thumb)
            save_logo(name, im)
            print(f"  source: {used}")
        except Exception as e:
            print(f"FAIL {name}: {e}")

    # Tata Power / Tata Motors share Tata mark — duplicate clear Tata logo as both
    tata_path = OUT / "tata.png"
    if tata_path.exists():
        im = Image.open(tata_path).convert("RGB")
        for dest in ("tata-power", "tata-motors"):
            im.save(OUT / f"{dest}.png", optimize=True)
            print(f"OK {dest} (from Tata mark)")


if __name__ == "__main__":
    main()
