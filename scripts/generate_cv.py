"""Generate Jorge Otero CV PDFs with reportlab (reliable text rendering)."""

from pathlib import Path

from reportlab.lib import colors
from reportlab.lib.enums import TA_LEFT
from reportlab.lib.pagesizes import letter
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import inch
from reportlab.platypus import (
    ListFlowable,
    ListItem,
    Paragraph,
    SimpleDocTemplate,
    Spacer,
)

PUBLIC = Path(__file__).resolve().parent.parent / "public"

CONTACT = (
    "Buenos Aires, Argentina | jorgotero4@gmail.com | "
    "linkedin.com/in/jorgeotero1998 | github.com/Jorgeotero1998"
)
LINKS = (
    "Portfolio: portofolio-mu-lac.vercel.app | "
    "Sonoteca: sonoteca-hzbi.vercel.app"
)

ABOUT_FULLSTACK = (
    "Full Stack Developer focused on Python, FastAPI/Flask, React, TypeScript, and PostgreSQL. "
    "Since 2023 I have built freelance Python work, personal products, and 4Geeks Academy "
    "projects with live deploys, automated tests, and practical end-to-end delivery. Flagship "
    "project: Sonoteca, a React + FastAPI music platform using the Deezer API, Vercel, and Neon "
    "Postgres."
)

ABOUT_BACKEND = (
    "Python backend developer profile focused on FastAPI/Flask, PostgreSQL, automation, and "
    "API delivery. Since 2023 I have built freelance Python work, scraping pipelines, REST APIs, "
    "and full-stack projects through 4Geeks Academy, with React experience when the product needs "
    "an end-to-end delivery loop."
)

EXPERIENCE = [
    {
        "title": "Full Stack Developer (Freelance)",
        "meta": "Remote | Mar 2023 - Present",
        "bullets": [
            "Built REST APIs with FastAPI/Flask, JWT auth, SQLAlchemy, Alembic migrations, and PostgreSQL.",
            "Built automation and scraping pipelines (Playwright, Selenium); JSON/CSV export, retry/backoff, Docker.",
            "Integrated Groq/Llama 3.3 for goal decomposition APIs and task orchestration workflows.",
        ],
    },
    {
        "title": "Full Stack Developer Training - 4Geeks Academy",
        "meta": "Jun 2025 - Present",
        "bullets": [
            "LaVerde Tienda capstone with a 3-person team - e-commerce with cart, checkout, admin panel, and 44 pytest tests.",
            "Backend: Flask REST API, SQLAlchemy, JWT, Cloudinary; GitHub Actions CI; Render deployment.",
        ],
    },
]

PROJECTS_FULLSTACK = [
    {
        "title": "Sonoteca - Music Platform (Flagship | Live)",
        "meta": "React | TypeScript | FastAPI | PostgreSQL | Vercel | Neon | Deezer API | JWT/RBAC",
        "links": "sonoteca-hzbi.vercel.app | github.com/Jorgeotero1998/Sonoteca",
        "bullets": [
            "Built a React + FastAPI monorepo with FastAPI served under /api, Alembic migrations, JWT/RBAC auth, and refs-only persistence.",
            "Integrated the Deezer API for catalog search, 30s previews, playlists, favorites, and listening history.",
            "Deployed on Vercel with Neon Postgres and public OpenAPI docs.",
        ],
    },
    {
        "title": "LaVerde Tienda - E-Commerce Capstone (Frontend Demo)",
        "meta": "React | Flask | PostgreSQL | JWT | Cloudinary | pytest | GitHub Actions",
        "links": "laverde-frontend.onrender.com | github.com/Jorgeotero1998/LaVerde-Tienda",
        "bullets": [
            "Team capstone: product catalog, cart, orders, admin panel; 44 pytest tests and CI pipeline.",
        ],
    },
    {
        "title": "AI Task Orchestrator - LLM Productivity Platform (LIVE)",
        "meta": "Python | FastAPI | Groq API (Llama 3.3) | React | PostgreSQL | Docker",
        "links": "ai-task-orchestrator-inky.vercel.app | github.com/Jorgeotero1998/ai-task-orchestrator",
        "bullets": [
            "Built an app that decomposes complex goals into actionable steps, with task history, PDF export, and admin auth.",
        ],
    },
    {
        "title": "Jurisprudencia Scraper - Legal Document CLI",
        "meta": "TypeScript | Playwright | Cheerio | Vitest | Docker",
        "links": "github.com/Jorgeotero1998/Scraper",
        "bullets": [
            "Built a CLI scraper with structured JSON/CSV export, rate limiting, retry/backoff, Docker packaging, and 23 Vitest tests.",
        ],
    },
    {
        "title": "Global Pulse - Geography Encyclopedia (LIVE)",
        "meta": "React | Three.js | React Three Fiber | Vercel",
        "links": "global-three-one.vercel.app | github.com/Jorgeotero1998/GlobalThree",
        "bullets": [
            "Interactive geography encyclopedia — 249 countries, 54 fields each, 3D globe, search, compare, and metric layers.",
        ],
    },
]

PROJECTS_BACKEND = [
    {
        "title": "Sonoteca - FastAPI + PostgreSQL Music API (Flagship | Live)",
        "meta": "FastAPI | SQLAlchemy | Alembic | PostgreSQL | JWT/RBAC | Deezer API | Neon | Vercel",
        "links": "sonoteca-hzbi.vercel.app | github.com/Jorgeotero1998/Sonoteca",
        "bullets": [
            "Built the FastAPI API with Alembic migrations, JWT/RBAC, Neon Postgres, and Deezer catalog integration.",
            "Supports search, 30s previews, playlists, favorites, and listening history; live at sonoteca-hzbi.vercel.app.",
        ],
    },
    {
        "title": "LaVerde Tienda - Flask E-Commerce Capstone",
        "meta": "Flask | PostgreSQL | JWT | pytest | GitHub Actions",
        "links": "github.com/Jorgeotero1998/LaVerde-Tienda",
        "bullets": [
            "Team capstone with 44 pytest tests, JWT auth, and CI pipeline.",
        ],
    },
    {
        "title": "AI Task Orchestrator - FastAPI LLM Backend (LIVE)",
        "meta": "Python | FastAPI | Groq API | PostgreSQL | Docker",
        "links": "ai-task-orchestrator-inky.vercel.app | github.com/Jorgeotero1998/ai-task-orchestrator",
        "bullets": [
            "LLM orchestration API with persistence, admin auth, and Docker Compose local stack.",
        ],
    },
    {
        "title": "Jurisprudencia Scraper - Automation CLI",
        "meta": "TypeScript | Playwright | Cheerio | Vitest | Docker",
        "links": "github.com/Jorgeotero1998/Scraper",
        "bullets": [
            "Built a scraping pipeline with exponential backoff, structured export, Docker packaging, and test coverage.",
        ],
    },
]

SKILLS_FULLSTACK = [
    ("Backend", "Python | FastAPI | Flask | SQLAlchemy | Alembic | Pydantic | JWT/RBAC | REST APIs | pytest"),
    ("Frontend", "React | TypeScript | Vite | Tailwind CSS | Three.js | React Three Fiber"),
    ("Data/Platform", "PostgreSQL | Neon | Docker | GitHub Actions | Vercel | Render | Linux | CI/CD"),
    ("Automation", "Playwright | Selenium | web scraping | JSON/CSV export | retry/backoff pipelines"),
]

SKILLS_BACKEND = [
    ("Backend", "Python | FastAPI | Flask | SQLAlchemy | Alembic | Pydantic | JWT | REST APIs | pytest"),
    ("Frontend", "React | TypeScript | Vite"),
    ("DevOps", "Docker | GitHub Actions | Vercel | Render | Neon | PostgreSQL | Linux | CI/CD"),
    ("Automation", "Playwright | Selenium | web scraping pipelines"),
]

EDUCATION = [
    ("Full Stack Developer - 4Geeks Academy", "Jun 2025 - Present"),
]

CERTS = [
    "Python - Verified by Talently (May 2026)",
    "JavaScript - Verified by Talently (May 2026)",
    "Cloud-Native Development with OpenShift and Kubernetes — Red Hat",
]


def _styles():
    base = getSampleStyleSheet()
    return {
        "name": ParagraphStyle(
            "Name",
            parent=base["Normal"],
            fontName="Helvetica-Bold",
            fontSize=18,
            leading=22,
            textColor=colors.black,
            spaceAfter=2,
        ),
        "title": ParagraphStyle(
            "Title",
            parent=base["Normal"],
            fontName="Helvetica",
            fontSize=11,
            leading=14,
            textColor=colors.black,
            spaceAfter=2,
        ),
        "contact": ParagraphStyle(
            "Contact",
            parent=base["Normal"],
            fontName="Helvetica",
            fontSize=8.5,
            leading=11,
            textColor=colors.HexColor("#333333"),
            spaceAfter=1,
        ),
        "section": ParagraphStyle(
            "Section",
            parent=base["Normal"],
            fontName="Helvetica-Bold",
            fontSize=10,
            leading=13,
            textColor=colors.black,
            spaceBefore=8,
            spaceAfter=4,
            borderWidth=0,
            borderPadding=0,
        ),
        "body": ParagraphStyle(
            "Body",
            parent=base["Normal"],
            fontName="Helvetica",
            fontSize=9,
            leading=12,
            textColor=colors.black,
            spaceAfter=3,
            alignment=TA_LEFT,
        ),
        "job_title": ParagraphStyle(
            "JobTitle",
            parent=base["Normal"],
            fontName="Helvetica-Bold",
            fontSize=9.5,
            leading=12,
            textColor=colors.black,
            spaceBefore=2,
            spaceAfter=1,
        ),
        "meta": ParagraphStyle(
            "Meta",
            parent=base["Normal"],
            fontName="Helvetica-Oblique",
            fontSize=8.5,
            leading=11,
            textColor=colors.HexColor("#444444"),
            spaceAfter=2,
        ),
        "bullet": ParagraphStyle(
            "Bullet",
            parent=base["Normal"],
            fontName="Helvetica",
            fontSize=9,
            leading=12,
            textColor=colors.black,
            leftIndent=0,
            bulletIndent=8,
        ),
        "skill": ParagraphStyle(
            "Skill",
            parent=base["Normal"],
            fontName="Helvetica",
            fontSize=9,
            leading=12,
            textColor=colors.black,
            spaceAfter=2,
        ),
    }


def _bullet_list(items, style):
    return ListFlowable(
        [ListItem(Paragraph(item, style), leftIndent=12) for item in items],
        bulletType="bullet",
        leftIndent=10,
    )


def _section(title, story, styles):
    story.append(Paragraph(title.upper(), styles["section"]))


def write_pdf(path: Path, about: str, projects: list, skills: list):
    styles = _styles()
    story = []

    story.append(Paragraph("Jorge Otero", styles["name"]))
    story.append(Paragraph("Full Stack Developer", styles["title"]))
    story.append(Paragraph(CONTACT, styles["contact"]))
    story.append(Paragraph(LINKS, styles["contact"]))
    story.append(Spacer(1, 0.08 * inch))

    _section("Summary", story, styles)
    story.append(Paragraph(about, styles["body"]))

    _section("Skills", story, styles)
    for label, items in skills:
        story.append(Paragraph(f"<b>{label}:</b> {items}", styles["skill"]))

    _section("Selected Projects", story, styles)
    for project in projects:
        story.append(Paragraph(project["title"], styles["job_title"]))
        story.append(Paragraph(project["meta"], styles["meta"]))
        if project.get("links"):
            story.append(Paragraph(project["links"], styles["meta"]))
        story.append(_bullet_list(project["bullets"], styles["bullet"]))

    _section("Freelance / Practical Experience", story, styles)
    for job in EXPERIENCE:
        story.append(Paragraph(job["title"], styles["job_title"]))
        story.append(Paragraph(job["meta"], styles["meta"]))
        story.append(_bullet_list(job["bullets"], styles["bullet"]))

    _section("Education", story, styles)
    for title, meta in EDUCATION:
        story.append(Paragraph(title, styles["job_title"]))
        story.append(Paragraph(meta, styles["meta"]))

    _section("Certifications", story, styles)
    story.append(_bullet_list(CERTS, styles["bullet"]))

    doc = SimpleDocTemplate(
        str(path),
        pagesize=letter,
        leftMargin=0.65 * inch,
        rightMargin=0.65 * inch,
        topMargin=0.55 * inch,
        bottomMargin=0.55 * inch,
        title="Jorge Otero CV",
        author="Jorge Otero",
    )
    doc.build(story)


def _validate_pdf(path: Path):
    from pypdf import PdfReader

    data = path.read_bytes()
    if not data.startswith(b"%PDF-"):
        raise SystemExit(f"{path.name}: invalid PDF header")
    if b"\r" in data:
        raise SystemExit(f"{path.name}: contains CR bytes — git CRLF corruption")
    if len(data) < 3000:
        raise SystemExit(f"PDF too small ({len(data)} bytes): {path}")

    text = "".join(page.extract_text() or "" for page in PdfReader(str(path)).pages)
    if len(text) < 2000:
        raise SystemExit(f"PDF text too short ({len(text)} chars): {path}")

    for required in ("Jorge Otero", "Full Stack Developer", "Sonoteca", "jorgotero4@gmail.com"):
        if required not in text:
            raise SystemExit(f"Missing '{required}' in {path}")
    if "Junior" in text:
        raise SystemExit(f"{path.name}: still contains 'Junior' seniority label")
    if "Enginner" in text:
        raise SystemExit(f"{path.name}: contains Enginner typo")


def main():
    PUBLIC.mkdir(parents=True, exist_ok=True)
    outputs = [
        (PUBLIC / "JORGE_OTERO_CV.pdf", ABOUT_FULLSTACK, PROJECTS_FULLSTACK, SKILLS_FULLSTACK),
        (PUBLIC / "jorge_otero_fullstack_cv.pdf", ABOUT_FULLSTACK, PROJECTS_FULLSTACK, SKILLS_FULLSTACK),
        (PUBLIC / "jorge_otero_backend_cv.pdf", ABOUT_BACKEND, PROJECTS_BACKEND, SKILLS_BACKEND),
    ]
    for path, about, projects, skills in outputs:
        write_pdf(path, about, projects, skills)
        _validate_pdf(path)
        print(f"OK {path.name}: {path.stat().st_size:,} bytes")

    print("Generated:", ", ".join(p.name for p in sorted(PUBLIC.glob("*.pdf"))))


if __name__ == "__main__":
    main()
