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
    "~3 years hands-on building full-stack applications since 2023 - freelance Python work, "
    "personal projects, and 4Geeks Academy training. This reflects time learning, building, "
    "and shipping (not 3 years at a single employer). Flagship project Sonoteca is a production "
    "music platform on FastAPI + React with real Deezer catalog integration, deployed on Vercel "
    "with Neon Postgres."
)

ABOUT_BACKEND = (
    "~3 years hands-on building with Python since 2023 - freelance automation, REST APIs, "
    "scraping pipelines, and full-stack apps through 4Geeks Academy. Comfortable across backend "
    "architecture, PostgreSQL, Docker, and React frontends when the product needs an end-to-end "
    "delivery loop."
)

EXPERIENCE = [
    {
        "title": "Freelance Python Developer",
        "meta": "Remote | Nov 2023 - Present",
        "bullets": [
            "Shipped production REST APIs (FastAPI/Flask): JWT auth, SQLAlchemy, Alembic migrations, PostgreSQL.",
            "Built automation and scraping pipelines (Playwright, Selenium); JSON/CSV export, retry/backoff, Docker.",
            "LLM integrations (Groq/Llama 3.3): goal decomposition APIs, task orchestration, deployed on Vercel/Render.",
        ],
    },
    {
        "title": "Full Stack Developer - 4Geeks Academy",
        "meta": "Jun 2025 - Present",
        "bullets": [
            "LaVerde Tienda capstone with a 3-person team - e-commerce with cart, checkout, admin panel, and 44 pytest tests.",
            "Backend: Flask REST API, SQLAlchemy, JWT, Cloudinary; GitHub Actions CI; Render deployment.",
        ],
    },
]

PROJECTS_FULLSTACK = [
    {
        "title": "Sonoteca - Music Platform (FLAGSHIP | LIVE)",
        "meta": "React | TypeScript | FastAPI | PostgreSQL | Vercel | Neon | Deezer API | JWT/RBAC",
        "links": "sonoteca-hzbi.vercel.app | github.com/Jorgeotero1998/Sonoteca",
        "bullets": [
            "Vercel monorepo + Neon Postgres: FastAPI under /api, Alembic migrations, JWT/RBAC auth.",
            "Deezer API catalog: search, 30s previews, playlists, favorites, listening history.",
            "Live demo: sonoteca-hzbi.vercel.app — production-deployed full-stack music platform.",
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
        "meta": "Python | Flask | Groq API (Llama 3.3) | React | PostgreSQL | Docker",
        "links": "ai-task-orchestrator-inky.vercel.app | github.com/Jorgeotero1998/ai-task-orchestrator",
        "bullets": [
            "Decomposes complex goals into actionable steps; task history, PDF export, admin auth.",
        ],
    },
    {
        "title": "Jurisprudencia Scraper - Legal Document CLI",
        "meta": "TypeScript | Playwright | Cheerio | Vitest | Docker",
        "links": "github.com/Jorgeotero1998/Scraper",
        "bullets": [
            "Production-grade CLI scraper with rate limiting, retry/backoff, and 23 Vitest tests.",
        ],
    },
    {
        "title": "GlobalThree - 3D Data Visualization (LIVE)",
        "meta": "React | Three.js | React Three Fiber | Vercel",
        "links": "global-three-one.vercel.app | github.com/Jorgeotero1998/GlobalThree",
        "bullets": [
            "Interactive navigable 3D globe with pulsing demographic nodes and animated flow arcs.",
        ],
    },
]

PROJECTS_BACKEND = [
    {
        "title": "Sonoteca - FastAPI + PostgreSQL Music API (FLAGSHIP | LIVE)",
        "meta": "FastAPI | SQLAlchemy | Alembic | PostgreSQL | JWT/RBAC | Deezer API",
        "links": "sonoteca-hzbi.vercel.app | github.com/Jorgeotero1998/Sonoteca",
        "bullets": [
            "REST API design, migrations, auth, and third-party catalog integration in production.",
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
        "title": "AI Task Orchestrator - Flask LLM Backend (LIVE)",
        "meta": "Python | Flask | Groq API | PostgreSQL | Docker",
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
            "Scraping pipeline with exponential backoff, structured export, and test coverage.",
        ],
    },
]

SKILLS_FULLSTACK = [
    ("Backend", "Python | FastAPI | Flask | SQLAlchemy | Alembic | Pydantic | JWT/RBAC | REST APIs | pytest"),
    ("Frontend", "React | TypeScript | Vite | Tailwind CSS | Three.js | React Three Fiber"),
    ("DevOps", "Docker | GitHub Actions | Vercel | Render | Neon | PostgreSQL | Linux | CI/CD"),
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
    "Automate Cybersecurity with Python - Google (Oct 2025)",
    "Cloud-Native Development with OpenShift and Kubernetes — Red Hat",
    "Additional cloud security credentials (AWS, Azure, Google) - see LinkedIn",
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
    story.append(Paragraph("Junior+ Full Stack Developer", styles["title"]))
    story.append(Paragraph(CONTACT, styles["contact"]))
    story.append(Paragraph(LINKS, styles["contact"]))
    story.append(Spacer(1, 0.08 * inch))

    _section("Summary", story, styles)
    story.append(Paragraph(about, styles["body"]))

    _section("Experience", story, styles)
    for job in EXPERIENCE:
        story.append(Paragraph(job["title"], styles["job_title"]))
        story.append(Paragraph(job["meta"], styles["meta"]))
        story.append(_bullet_list(job["bullets"], styles["bullet"]))

    _section("Projects", story, styles)
    for project in projects:
        story.append(Paragraph(project["title"], styles["job_title"]))
        story.append(Paragraph(project["meta"], styles["meta"]))
        if project.get("links"):
            story.append(Paragraph(project["links"], styles["meta"]))
        story.append(_bullet_list(project["bullets"], styles["bullet"]))

    _section("Skills", story, styles)
    for label, items in skills:
        story.append(Paragraph(f"<b>{label}:</b> {items}", styles["skill"]))

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

    for required in ("Jorge Otero", "Sonoteca", "Junior+", "jorgotero4@gmail.com"):
        if required not in text:
            raise SystemExit(f"Missing '{required}' in {path}")
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
