#!/usr/bin/env python3
"""Generate a 1200x630 Open Graph card in the Hermes parchment style."""
from PIL import Image, ImageDraw, ImageFont
import os

W, H = 1200, 630
PAPER = (242, 239, 230)
INK = (22, 20, 15)
INK_SOFT = (77, 73, 63)
INK_FAINT = (138, 133, 118)
RULE = (184, 177, 157)
ACCENT = (176, 80, 31)

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
HERO = os.path.join(ROOT, "public", "img", "hero-armada.webp")
OUT = os.path.join(ROOT, "public", "og.png")

FONTS = "C:/Windows/Fonts"
def font(name, size):
    for cand in (name,):
        p = os.path.join(FONTS, cand)
        if os.path.exists(p):
            return ImageFont.truetype(p, size)
    return ImageFont.load_default()

serif_b = font("georgiab.ttf", 92)
serif_i = font("georgiai.ttf", 33)
serif = font("georgia.ttf", 33)
mono = font("consola.ttf", 22)
mono_sm = font("consola.ttf", 19)

img = Image.new("RGB", (W, H), PAPER)

# --- engraving on the right, faded toward the left ---
hero = Image.open(HERO).convert("RGB")
# cover the full height, anchored right
scale = H / hero.height
hero = hero.resize((int(hero.width * scale), H), Image.LANCZOS)
# horizontal fade mask: opaque on the right, transparent toward the left
mask = Image.new("L", hero.size, 0)
for x in range(hero.width):
    t = x / hero.width            # 0 left -> 1 right
    a = int(max(0, (t - 0.15)) / 0.85 * 165)   # fade in after 15%, max ~65%
    for_col = min(165, a)
    mask.paste(for_col, (x, 0, x + 1, H))
img.paste(hero, (W - hero.width, 0), mask)

d = ImageDraw.Draw(img)

# --- double-rule frame ---
for inset, col in ((24, RULE), (30, RULE)):
    d.rectangle([inset, inset, W - inset - 1, H - inset - 1], outline=col, width=2)

# --- mark box (top-left) ---
mx, my = 70, 78
d.rectangle([mx, my, mx + 46, my + 46], outline=INK, width=2)
vc = font("georgiab.ttf", 26)
d.text((mx + 23, my + 23), "V", font=vc, fill=INK, anchor="mm")

# eyebrow
d.text((mx + 64, my + 10), "THE VIKING COMPANY", font=mono_sm, fill=INK_FAINT)
d.text((mx + 64, my + 32), "AI AGENCY · BUCHAREST", font=mono_sm, fill=INK_FAINT)

# --- headline ---
d.text((70, 210), "Agents that", font=serif_b, fill=INK)
d.text((70, 308), "learn and ship.", font=serif_b, fill=INK_SOFT)

# tagline
d.text((72, 430), "Autonomous agents, skills, tooling", font=serif_i, fill=INK_SOFT)
d.text((72, 468), "& RAG — built to run in production.", font=serif_i, fill=INK_SOFT)

# --- bottom mono strip with accent prompt ---
by = 540
d.text((72, by), "$", font=mono, fill=ACCENT)
d.text((94, by), "agents · skills · rag · automation", font=mono, fill=INK_FAINT)

img.save(OUT, "PNG")
print(f"saved {OUT} ({img.size[0]}x{img.size[1]})  {os.path.getsize(OUT)//1024} KB")
