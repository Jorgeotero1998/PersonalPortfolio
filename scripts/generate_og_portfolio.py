"""Generate LinkedIn/social OG preview image (1200x630) for Jorge Otero portfolio."""
from __future__ import annotations

import math
from pathlib import Path

from PIL import Image, ImageDraw, ImageFont

WIDTH, HEIGHT = 1200, 630
PUBLIC = Path(__file__).resolve().parent.parent / "public"
OUTPUT = PUBLIC / "og-portfolio.png"

NAVY_TOP = (6, 1, 15)
NAVY_MID = (10, 14, 26)
NAVY_BOT = (18, 24, 40)
INDIGO = (99, 102, 241)
PURPLE = (139, 92, 246)
CYAN = (34, 211, 238)
ORANGE = (251, 146, 60)
PINK = (244, 114, 182)
WHITE = (255, 255, 255)
SLATE_LIGHT = (226, 232, 240)
SLATE_MID = (148, 163, 184)


def lerp(a: float, b: float, t: float) -> float:
    return a + (b - a) * t


def lerp_color(c1: tuple[int, int, int], c2: tuple[int, int, int], t: float) -> tuple[int, int, int]:
    return (
        int(lerp(c1[0], c2[0], t)),
        int(lerp(c1[1], c2[1], t)),
        int(lerp(c1[2], c2[2], t)),
    )


def gradient_bg() -> Image.Image:
    img = Image.new("RGB", (WIDTH, HEIGHT))
    px = img.load()
    for y in range(HEIGHT):
        ty = y / (HEIGHT - 1)
        for x in range(WIDTH):
            tx = x / (WIDTH - 1)
            t = (tx + ty) / 2
            if t < 0.5:
                color = lerp_color(NAVY_TOP, NAVY_MID, t * 2)
            else:
                color = lerp_color(NAVY_MID, NAVY_BOT, (t - 0.5) * 2)
            px[x, y] = color
    return img


def draw_grid(draw: ImageDraw.ImageDraw) -> None:
    grid_color = (99, 102, 241, 18)
    for x in range(0, WIDTH, 48):
        draw.line([(x, 0), (x, HEIGHT)], fill=grid_color, width=1)
    for y in range(0, HEIGHT, 48):
        draw.line([(0, y), (WIDTH, y)], fill=grid_color, width=1)


def wave_y(x: float, base: float, amp: float, freq: float, phase: float) -> float:
    return base + amp * math.sin((x / WIDTH) * math.pi * freq + phase)


def draw_waveforms(draw: ImageDraw.ImageDraw) -> None:
    waves = [
        (420, 55, 3.0, 0.0, 3.0, 0.7),
        (450, 48, 2.8, 0.9, 2.0, 0.5),
        (480, 42, 2.5, 1.7, 1.5, 0.35),
    ]
    for base, amp, freq, phase, width, alpha in waves:
        points = []
        for x in range(700, WIDTH + 1, 4):
            y = wave_y(x, base, amp, freq, phase)
            points.append((x, y))
        for i in range(len(points) - 1):
            t = i / max(len(points) - 2, 1)
            if t < 0.5:
                color = lerp_color(ORANGE, PINK, t * 2)
            else:
                color = lerp_color(PINK, CYAN, (t - 0.5) * 2)
            a = int(255 * alpha)
            draw.line([points[i], points[i + 1]], fill=(*color, a), width=int(width))

    bars = [
        (980, 280, 120, ORANGE, 0.55),
        (1010, 250, 150, PINK, 0.6),
        (1040, 300, 100, CYAN, 0.5),
        (1070, 230, 170, PURPLE, 0.65),
        (1100, 275, 130, ORANGE, 0.5),
    ]
    for x, y, h, color, alpha in bars:
        draw.rounded_rectangle([x, y, x + 4, y + h], radius=2, fill=(*color, int(255 * alpha)))


def draw_accent_bar(draw: ImageDraw.ImageDraw) -> None:
    for i in range(80):
        t = i / 79
        color = lerp_color(ORANGE, PINK, t)
        draw.rectangle([80, 100 + i, 84, 101 + i], fill=color)


def draw_mock_card(draw: ImageDraw.ImageDraw, font_mono) -> None:
    x, y, w, h = 720, 120, 420, 280
    draw.rounded_rectangle([x, y, x + w, y + h], radius=12, fill=(15, 20, 35, 200), outline=(99, 102, 241, 80), width=2)
    draw.text((x + 20, y + 20), "Sonoteca", fill=ORANGE, font=font_mono)
    draw.text((x + 20, y + 50), "FastAPI + React + PostgreSQL", fill=(*SLATE_MID, 200), font=font_mono)
    draw.text((x + 20, y + 80), "Music platform · JWT · RBAC", fill=(*SLATE_MID, 160), font=font_mono)
    for i, bw in enumerate([180, 140, 200, 120, 160]):
        bx = x + 20 + i * 78
        draw.rounded_rectangle([bx, y + 130, bx + 60, y + 130 + bw // 2], radius=3, fill=(*lerp_color(INDIGO, CYAN, i / 4), 180))


def pick_font(size: int, bold: bool = False) -> ImageFont.FreeTypeFont | ImageFont.ImageFont:
    candidates = (
        ["C:/Windows/Fonts/segoeuib.ttf", "C:/Windows/Fonts/arialbd.ttf", "C:/Windows/Fonts/calibrib.ttf"]
        if bold
        else ["C:/Windows/Fonts/segoeui.ttf", "C:/Windows/Fonts/arial.ttf", "C:/Windows/Fonts/consola.ttf"]
    )
    for path in candidates:
        if Path(path).exists():
            return ImageFont.truetype(path, size)
    return ImageFont.load_default()


def main() -> None:
    base = gradient_bg().convert("RGBA")
    overlay = Image.new("RGBA", (WIDTH, HEIGHT), (0, 0, 0, 0))
    draw = ImageDraw.Draw(overlay)

    draw_grid(draw)
    draw_waveforms(draw)
    draw_accent_bar(draw)

    font_mono = pick_font(14)
    draw_mock_card(draw, font_mono)

    font_name = pick_font(56, bold=True)
    font_role = pick_font(28)
    font_stack = pick_font(22)
    font_url = pick_font(18)

    draw.text((110, 120), "Jorge Otero", fill=WHITE, font=font_name)
    draw.text((110, 195), "Junior+ Full Stack Developer", fill=(*ORANGE, 255), font=font_role)
    draw.text(
        (110, 250),
        "Python · FastAPI · Flask · React · PostgreSQL",
        fill=(*SLATE_LIGHT, 200),
        font=font_stack,
    )
    draw.text(
        (110, 290),
        "Docker · TypeScript · CI/CD · Remote · Buenos Aires",
        fill=(*SLATE_MID, 180),
        font=font_stack,
    )
    draw.text(
        (110, 560),
        "portofolio-mu-lac.vercel.app",
        fill=(*SLATE_MID, 140),
        font=font_url,
    )

    result = Image.alpha_composite(base, overlay).convert("RGB")
    PUBLIC.mkdir(parents=True, exist_ok=True)
    result.save(OUTPUT, "PNG", optimize=True)
    print(f"Saved {OUTPUT} ({WIDTH}x{HEIGHT})")


if __name__ == "__main__":
    main()
