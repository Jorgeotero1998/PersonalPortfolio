"""Generate LinkedIn profile banner (1584x396) for Jorge Otero."""
from __future__ import annotations

import math
from pathlib import Path

from PIL import Image, ImageDraw, ImageFont

WIDTH, HEIGHT = 1584, 396
PUBLIC = Path(__file__).resolve().parent.parent / "public"
OUTPUT = PUBLIC / "linkedin-banner.png"

NAVY_TOP = (6, 1, 15)
NAVY_MID = (10, 14, 26)
NAVY_BOT = (18, 24, 40)
INDIGO = (99, 102, 241)
PURPLE = (139, 92, 246)
CYAN = (34, 211, 238)
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
    grid_color = (99, 102, 241, 20)
    for x in range(0, WIDTH, 40):
        draw.line([(x, 0), (x, HEIGHT)], fill=grid_color, width=1)
    for y in range(0, HEIGHT, 40):
        draw.line([(0, y), (WIDTH, y)], fill=grid_color, width=1)


def draw_code_lines(draw: ImageDraw.ImageDraw, font_mono) -> None:
    lines = [
        (48, 52, "def build_solutions():"),
        (64, 68, "    focus = 'quality'"),
        (64, 84, "    return impact"),
        (48, 112, "import React from 'react'"),
        (48, 128, "const Developer = () => { ... }"),
    ]
    for x, y, text in lines:
        draw.text((x, y), text, fill=(94, 148, 184, 31), font=font_mono)


def wave_y(x: float, base: float, amp: float, freq: float, phase: float) -> float:
    return base + amp * math.sin((x / WIDTH) * math.pi * freq + phase)


def draw_waveforms(draw: ImageDraw.ImageDraw) -> None:
    waves = [
        (280, 50, 3.5, 0.0, 2.5, 0.85),
        (300, 45, 3.2, 0.8, 1.5, 0.55),
        (320, 40, 2.8, 1.6, 1.0, 0.35),
    ]
    for base, amp, freq, phase, width, alpha in waves:
        points = []
        for x in range(880, WIDTH + 1, 4):
            y = wave_y(x, base, amp, freq, phase)
            points.append((x, y))
        for i in range(len(points) - 1):
            t = i / max(len(points) - 2, 1)
            if t < 0.5:
                color = lerp_color(INDIGO, PURPLE, t * 2)
            else:
                color = lerp_color(PURPLE, CYAN, (t - 0.5) * 2)
            a = int(255 * alpha)
            draw.line([points[i], points[i + 1]], fill=(*color, a), width=int(width))

    bars = [
        (1180, 160, 80, INDIGO, 0.5),
        (1200, 140, 100, PURPLE, 0.6),
        (1220, 170, 70, CYAN, 0.5),
        (1240, 130, 110, INDIGO, 0.7),
        (1260, 155, 85, CYAN, 0.5),
    ]
    for x, y, h, color, alpha in bars:
        draw.rounded_rectangle(
            [x, y, x + 3, y + h],
            radius=1,
            fill=(*color, int(255 * alpha)),
        )


def draw_accent_bar(draw: ImageDraw.ImageDraw) -> None:
    for i in range(64):
        t = i / 63
        color = lerp_color(INDIGO, CYAN, t)
        draw.rectangle([80, 100 + i, 84, 101 + i], fill=color)


def pick_font(size: int, bold: bool = False) -> ImageFont.FreeTypeFont | ImageFont.ImageFont:
    candidates = []
    if bold:
        candidates = [
            "C:/Windows/Fonts/segoeuib.ttf",
            "C:/Windows/Fonts/arialbd.ttf",
            "C:/Windows/Fonts/calibrib.ttf",
        ]
    else:
        candidates = [
            "C:/Windows/Fonts/segoeui.ttf",
            "C:/Windows/Fonts/arial.ttf",
            "C:/Windows/Fonts/calibri.ttf",
        ]
    for path in candidates:
        if Path(path).exists():
            return ImageFont.truetype(path, size)
    return ImageFont.load_default()


def main() -> None:
    base = gradient_bg().convert("RGBA")
    overlay = Image.new("RGBA", (WIDTH, HEIGHT), (0, 0, 0, 0))
    draw = ImageDraw.Draw(overlay)

    draw_grid(draw)

    font_mono = pick_font(11)
    draw_code_lines(draw, font_mono)

    draw_waveforms(draw)
    draw_accent_bar(draw)

    font_name = pick_font(52, bold=True)
    font_role = pick_font(24)
    font_loc = pick_font(16)

    draw.text((110, 108), "Jorge Otero", fill=WHITE, font=font_name)
    draw.text(
        (110, 178),
        "Full Stack Developer \u00b7 Python + React",
        fill=(*SLATE_LIGHT, 217),
        font=font_role,
    )
    draw.text(
        (110, 218),
        "Buenos Aires \u00b7 Remote",
        fill=(*SLATE_MID, 179),
        font=font_loc,
    )

    result = Image.alpha_composite(base, overlay).convert("RGB")
    PUBLIC.mkdir(parents=True, exist_ok=True)
    result.save(OUTPUT, "PNG", optimize=True)
    print(f"Saved {OUTPUT} ({WIDTH}x{HEIGHT})")


if __name__ == "__main__":
    main()
