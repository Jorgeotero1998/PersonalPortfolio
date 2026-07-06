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

HEADER = [
    ("name", "Jorge Otero"),
    ("subtitle", "Junior+ Full Stack Developer"),
    (
        "contact",
        "Buenos Aires, Argentina | Remote OK<br/>"
        "jorgotero4@gmail.com | linkedin.com/in/jorgeotero1998 | github.com/Jorgeotero1998<br/>"
        "Portfolio: portofolio-mu-lac.vercel.app | Sonoteca: sonoteca-hzbi.vercel.app",
    ),
]

ABOUT_FULLSTACK = (
    "~3 years hands-on building full-stack applications since 2023 - freelance Python work, "
    "personal projects, and 4Geeks Academy training. This reflects time learning, building, "
    "and shipping (not 3 years at a single employer). Flagship project Sonoteca is a production "
    "music platform on FastAPI + React with real Deezer catalog integration, deployed on Vercel "
    "with Neon Postgres."
)

ABOUT_BACKEND = (
    "~3 years hands-on building with Python since 2023 - freelance automation, REST APIs, "
    "scraping pipelines, and full-stack apps through 4Geeks Academy. Comfortable across "
    "backend architecture, PostgreSQL, Docker, and React frontends when the product needs "
    "an end-to-end delivery loop. Flagship: Sonoteca (FastAPI + PostgreSQL in production)."
)

EXPERIENCE = (
    "<b>Freelance Python Developer</b> | Remote | Nov 2023 - Present<br/>"
    "- REST APIs, automation, web scraping (Flask/FastAPI); LLM integrations; JWT + SQLAlchemy<br/>"
    "- React frontends with PostgreSQL; Docker; deploys on Vercel and Render<br/><br/>"
    "<b>Full Stack Developer - 4Geeks Academy</b> | Jun 2025 - Present<br/>"
    "- LaVerde Tienda capstone: e-commerce, cart, checkout, admin, 44 pytest tests, CI on Render"
)

PROJECTS_FULLSTACK = (
    "<b>Sonoteca - Music Platform (FLAGSHIP | LIVE)</b><br/>"
    "React, TypeScript, FastAPI, PostgreSQL, Vercel, Neon, Deezer API, JWT/RBAC<br/>"
    "sonoteca-hzbi.vercel.app | github.com/Jorgeotero1998/Sonoteca<br/>"
    "- Production monorepo: Deezer catalog, previews, playlists, favorites, listening history<br/><br/>"
    "<b>LaVerde Tienda - E-Commerce Capstone</b><br/>"
    "React, Flask, PostgreSQL, JWT, Cloudinary, pytest, GitHub Actions<br/>"
    "laverde-frontend.onrender.com | github.com/Jorgeotero1998/LaVerde-Tienda<br/><br/>"
    "<b>AI Task Orchestrator (LIVE)</b> - FastAPI/Flask, Groq Llama 3.3, React, Docker<br/>"
    "ai-task-orchestrator-inky.vercel.app<br/><br/>"
    "<b>Jurisprudencia Scraper</b> - TypeScript CLI, Vitest, Docker<br/>"
    "github.com/Jorgeotero1998/Scraper"
)

PROJECTS_BACKEND = (
    "<b>Sonoteca - FastAPI + PostgreSQL Music API (FLAGSHIP | LIVE)</b><br/>"
    "FastAPI, SQLAlchemy, Alembic, PostgreSQL, JWT/RBAC, Deezer API<br/>"
    "sonoteca-hzbi.vercel.app | github.com/Jorgeotero1998/Sonoteca<br/>"
    "- REST API design, migrations, auth, third-party catalog integration in production<br/><br/>"
    "<b>LaVerde Tienda - Flask E-Commerce Capstone</b><br/>"
    "Flask, PostgreSQL, JWT, pytest, GitHub Actions<br/><br/>"
    "<b>AI Task Orchestrator (LIVE)</b> - Flask LLM backend, PostgreSQL, Docker<br/><br/>"
    "<b>Jurisprudencia Scraper</b> - Playwright, Cheerio, Vitest, Docker"
)

SKILLS_FULLSTACK = (
    "Backend: Python, FastAPI, Flask, SQLAlchemy, Alembic, Pydantic, JWT/RBAC, REST, pytest<br/>"
    "Frontend: React, TypeScript, Vite, Tailwind CSS, Three.js<br/>"
    "DevOps: Docker, GitHub Actions, Vercel, Render, Neon, PostgreSQL, CI/CD"
)

SKILLS_BACKEND = (
    "Backend: Python, FastAPI, Flask, SQLAlchemy, Alembic, Pydantic, JWT, REST, pytest<br/>"
    "Frontend: React, TypeScript, Vite<br/>"
    "DevOps: Docker, GitHub Actions, Vercel, Render, Neon, PostgreSQL, Linux<br/>"
    "Automation: Playwright, Selenium, web scraping pipelines"
)

EDUCATION = "Full Stack Developer - 4Geeks Academy | Jun 2025 - Present"

CERTS = (
    "Python - Verified by Talently (May 2026)<br/>"
    "JavaScript - Verified by Talently (May 2026)<br/>"
    "Automate Cybersecurity with Python - Google (Oct 2025)<br/>"
    "Additional cloud credentials - see LinkedIn"
)

OUTPUTS: tuple[tuple[str, tuple[tuple[str, str], ...]], ...] = (
    (
        "JORGE_OTERO_CV.pdf",
        (
            *HEADER,
            ("SUMMARY", ABOUT_FULLSTACK),
            ("EXPERIENCE", EXPERIENCE),
            ("PROJECTS", PROJECTS_FULLSTACK),
            ("SKILLS", SKILLS_FULLSTACK),
            ("EDUCATION", EDUCATION),
            ("CERTIFICATIONS", CERTS),
        ),
    ),
    (
        "Jorge_Otero_CV.pdf",
        (
            *HEADER,
            ("SUMMARY", ABOUT_FULLSTACK),
            ("EXPERIENCE", EXPERIENCE),
            ("PROJECTS", PROJECTS_FULLSTACK),
            ("SKILLS", SKILLS_FULLSTACK),
            ("EDUCATION", EDUCATION),
            ("CERTIFICATIONS", CERTS),
        ),
    ),
    (
        "jorge_otero_fullstack_cv.pdf",
        (
            *HEADER,
            ("SUMMARY", ABOUT_FULLSTACK),
            ("EXPERIENCE", EXPERIENCE),
            ("PROJECTS", PROJECTS_FULLSTACK),
            ("SKILLS", SKILLS_FULLSTACK),
            ("EDUCATION", EDUCATION),
            ("CERTIFICATIONS", CERTS),
        ),
    ),
    (
        "jorge_otero_backend_cv.pdf",
        (
            *HEADER,
            ("SUMMARY", ABOUT_BACKEND),
            ("EXPERIENCE", EXPERIENCE),
            ("PROJECTS", PROJECTS_BACKEND),
            ("SKILLS", SKILLS_BACKEND),
            ("EDUCATION", EDUCATION),
            ("CERTIFICATIONS", CERTS),
        ),
    ),
)


def _build_styles():
    base = getSampleStyleSheet()
    black = colors.black
    return {
        "name": ParagraphStyle(
            "CVName",
            parent=base["Normal"],
            fontName="Helvetica-Bold",
            fontSize=16,
            leading=20,
            textColor=black,
            alignment=TA_LEFT,
            spaceAfter=4,
        ),
        "subtitle": ParagraphStyle(
            "CVSubtitle",
            parent=base["Normal"],
            fontName="Helvetica",
            fontSize=10,
            leading=13,
            textColor=black,
            spaceAfter=4,
        ),
        "contact": ParagraphStyle(
            "CVContact",
            parent=base["Normal"],
            fontName="Helvetica",
            fontSize=8,
            leading=11,
            textColor=black,
            spaceAfter=8,
        ),
        "heading": ParagraphStyle(
            "CVHeading",
            parent=base["Normal"],
            fontName="Helvetica-Bold",
            fontSize=10,
            leading=13,
            textColor=black,
            spaceBefore=6,
            spaceAfter=3,
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


def _story(sections: tuple[tuple[str, str], ...], styles: dict) -> list:
    story = []
    for kind, text in sections:
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


def write_pdf(path: Path, sections: tuple[tuple[str, str], ...]) -> None:
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
    doc.build(_story(sections, styles))


def validate_pdf(path: Path) -> str:
    from pypdf import PdfReader

    reader = PdfReader(str(path))
    if len(reader.pages) < 1:
        raise RuntimeError(f"{path.name}: no pages - PDF is blank")
    text = "\n".join((page.extract_text() or "") for page in reader.pages)
    if "Jorge Otero" not in text and "JORGE OTERO" not in text:
        raise RuntimeError(f"{path.name}: missing name - PDF may be blank")
    if "Sonoteca" not in text:
        raise RuntimeError(f"{path.name}: missing Sonoteca - PDF may be incomplete")
    if path.stat().st_size < 500:
        raise RuntimeError(f"{path.name}: file too small ({path.stat().st_size} bytes)")
    return text


def main() -> None:
    PUBLIC.mkdir(parents=True, exist_ok=True)
    generated: list[str] = []
    for filename, sections in OUTPUTS:
        out = PUBLIC / filename
        write_pdf(out, sections)
        text = validate_pdf(out)
        size = out.stat().st_size
        print(f"OK {filename}: {size:,} bytes, {len(text)} chars extracted")
        preview = " ".join(text.split())[:120]
        print(f"   preview: {preview}...")
        generated.append(filename)
    print("Generated:", ", ".join(generated))


if __name__ == "__main__":
    main()
