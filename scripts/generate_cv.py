"""Generate Jorge Otero CV PDFs with reportlab (Helvetica, black on white)."""

from __future__ import annotations

from pathlib import Path

from reportlab.lib import colors
from reportlab.lib.enums import TA_LEFT
from reportlab.lib.pagesizes import letter
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import inch
from reportlab.platypus import Paragraph, SimpleDocTemplate, Spacer

PUBLIC = Path(__file__).resolve().parent.parent / "public"

CV_SECTIONS = [
    ("name", "JORGE OTERO"),
    ("subtitle", "Junior+ Full Stack Developer"),
    (
        "contact",
        "Buenos Aires, Argentina · Remote OK<br/>"
        "jorgotero4@gmail.com | linkedin.com/in/jorgeotero1998 | github.com/Jorgeotero1998<br/>"
        "Portfolio: portofolio-mu-lac.vercel.app",
    ),
    (
        "SUMMARY",
        "Full Stack Developer building production apps since 2023 (~3 years hands-on building: "
        "freelance + bootcamp + deployed projects — not formal employment at one company). "
        "Flagship: Sonoteca (live Deezer-integrated music platform).",
    ),
    (
        "EXPERIENCE",
        "<b>Freelance Python Developer</b> | Nov 2023 – Present<br/>"
        "• REST APIs (FastAPI/Flask), PostgreSQL, automation, web scraping, LLM pipelines<br/>"
        "• Docker, CI/CD, production deploys on Vercel/Render<br/><br/>"
        "<b>Full Stack Developer (Bootcamp)</b> | 4Geeks Academy | Jun 2025 – Present<br/>"
        "• Capstone LaVerde Tienda: Flask + React e-commerce, JWT auth, 44 pytest tests, CI",
    ),
    (
        "PROJECTS",
        "<b>Sonoteca (Flagship)</b> — sonoteca-hzbi.vercel.app<br/>"
        "FastAPI + React + Neon Postgres, Deezer API, JWT/RBAC, Vercel monorepo<br/><br/>"
        "<b>LaVerde Tienda</b> — laverde-frontend.onrender.com<br/>"
        "Flask + React e-commerce, PostgreSQL, Cloudinary, 44 tests<br/><br/>"
        "<b>AI Task Orchestrator</b> — ai-task-orchestrator-inky.vercel.app<br/>"
        "FastAPI + Groq LLM, goal decomposition, Docker<br/><br/>"
        "<b>Scraper</b> — github.com/Jorgeotero1998/Scraper<br/>"
        "TypeScript CLI, 23 Vitest tests, CI, Docker",
    ),
    (
        "SKILLS",
        "Backend: Python, FastAPI, Flask, SQLAlchemy, PostgreSQL, pytest<br/>"
        "Frontend: React, TypeScript, Vite<br/>"
        "Platform: Docker, GitHub Actions, Vercel, Render",
    ),
    (
        "EDUCATION",
        "4Geeks Academy — Full Stack Development (Jun 2025 – Present)",
    ),
    (
        "CERTIFICATIONS (supplementary)",
        "Talently Python &amp; JavaScript Verified",
    ),
]

OUTPUT_FILES = (
    "JORGE_OTERO_CV.pdf",
    "Jorge_Otero_CV.pdf",
)


def _build_styles():
    base = getSampleStyleSheet()
    black = colors.black
    return {
        "name": ParagraphStyle(
            "CVName",
            parent=base["Normal"],
            fontName="Helvetica-Bold",
            fontSize=18,
            leading=22,
            textColor=black,
            alignment=TA_LEFT,
            spaceAfter=4,
        ),
        "subtitle": ParagraphStyle(
            "CVSubtitle",
            parent=base["Normal"],
            fontName="Helvetica",
            fontSize=11,
            leading=14,
            textColor=black,
            spaceAfter=4,
        ),
        "contact": ParagraphStyle(
            "CVContact",
            parent=base["Normal"],
            fontName="Helvetica",
            fontSize=9,
            leading=12,
            textColor=black,
            spaceAfter=10,
        ),
        "heading": ParagraphStyle(
            "CVHeading",
            parent=base["Normal"],
            fontName="Helvetica-Bold",
            fontSize=10,
            leading=13,
            textColor=black,
            spaceBefore=8,
            spaceAfter=4,
        ),
        "body": ParagraphStyle(
            "CVBody",
            parent=base["Normal"],
            fontName="Helvetica",
            fontSize=9,
            leading=12,
            textColor=black,
            spaceAfter=2,
        ),
    }


def _story(styles):
    story = []
    for kind, text in CV_SECTIONS:
        if kind == "name":
            story.append(Paragraph(text, styles["name"]))
        elif kind == "subtitle":
            story.append(Paragraph(text, styles["subtitle"]))
        elif kind == "contact":
            story.append(Paragraph(text, styles["contact"]))
        else:
            story.append(Paragraph(kind, styles["heading"]))
            story.append(Paragraph(text, styles["body"]))
    story.append(Spacer(1, 0.1 * inch))
    return story


def write_pdf(path: Path) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    doc = SimpleDocTemplate(
        str(path),
        pagesize=letter,
        leftMargin=0.75 * inch,
        rightMargin=0.75 * inch,
        topMargin=0.65 * inch,
        bottomMargin=0.65 * inch,
        title="Jorge Otero CV",
        author="Jorge Otero",
    )
    styles = _build_styles()
    doc.build(_story(styles))


def validate_pdf(path: Path) -> str:
    from pypdf import PdfReader

    reader = PdfReader(str(path))
    text = "\n".join((page.extract_text() or "") for page in reader.pages)
    if "Jorge Otero" not in text and "JORGE OTERO" not in text:
        raise RuntimeError(f"{path.name}: missing name — PDF may be blank")
    if "Sonoteca" not in text:
        raise RuntimeError(f"{path.name}: missing Sonoteca — PDF may be incomplete")
    return text


def main() -> None:
    PUBLIC.mkdir(parents=True, exist_ok=True)
    generated = []
    for filename in OUTPUT_FILES:
        out = PUBLIC / filename
        write_pdf(out)
        size = out.stat().st_size
        text = validate_pdf(out)
        print(f"OK {filename}: {size:,} bytes, {len(text)} chars extracted")
        preview = " ".join(text.split())[:120]
        print(f"   preview: {preview}...")
        generated.append(out.name)

    print("Generated:", ", ".join(generated))


if __name__ == "__main__":
    main()
