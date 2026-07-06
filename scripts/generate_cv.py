"""Generate Jorge Otero CV PDFs with honest timeline (building since 2023)."""

from pathlib import Path



from fpdf import FPDF



PUBLIC = Path(__file__).resolve().parent.parent / "public"



ABOUT_FULLSTACK = """SUMMARY

~3 years hands-on building full-stack applications since 2023 - freelance Python work, personal projects, and 4Geeks Academy training. This reflects time learning, building, and shipping (not 3 years at a single employer). Flagship project Sonoteca is a production music platform on FastAPI + React with real Deezer catalog integration, deployed on Vercel with Neon Postgres."""



ABOUT_BACKEND = """SUMMARY

~3 years hands-on building with Python since 2023 - freelance automation, REST APIs, scraping pipelines, and full-stack apps through 4Geeks Academy. Comfortable across backend architecture, PostgreSQL, Docker, and React frontends when the product needs an end-to-end delivery loop."""



EXPERIENCE = """EXPERIENCE

Freelance Python Developer

Remote | Nov 2023 - Present

- Built REST APIs, automation pipelines, and web scraping tools in Python (Flask/FastAPI).

- Integrated LLM APIs (Groq/Llama 3.3), third-party services, JWT auth, and SQLAlchemy models.

- Shipped React frontends with PostgreSQL backends; deployed on Vercel and Render with Docker.



Full Stack Developer - 4Geeks Academy

Jun 2025 - Present

- LaVerde Tienda capstone with a 3-person team - e-commerce with cart, checkout, admin panel, and 44 pytest tests.

- Backend: Flask REST API, SQLAlchemy, JWT, Cloudinary; GitHub Actions CI; Render deployment."""



PROJECTS_FULLSTACK = """PROJECTS

Sonoteca - Music Platform (FLAGSHIP | LIVE)

React | TypeScript | FastAPI | PostgreSQL | Vercel | Neon | Deezer API | JWT/RBAC

sonoteca-hzbi.vercel.app | github.com/Jorgeotero1998/Sonoteca

- Production monorepo: real Deezer catalog, 30s previews, playlists, favorites, listening history.

- FastAPI API on /api, Alembic migrations, Neon Postgres, refs-only persistence.



LaVerde Tienda - E-Commerce Capstone (Frontend Demo)

React | Flask | PostgreSQL | JWT | Cloudinary | pytest | GitHub Actions

laverde-frontend.onrender.com | github.com/Jorgeotero1998/LaVerde-Tienda

- Team capstone: product catalog, cart, orders, admin panel; 44 pytest tests and CI pipeline.



AI Task Orchestrator - LLM Productivity Platform (LIVE)

Python | Flask | Groq API (Llama 3.3) | React | PostgreSQL | Docker

ai-task-orchestrator-inky.vercel.app | github.com/Jorgeotero1998/ai-task-orchestrator

- Decomposes complex goals into actionable steps; task history, PDF export, admin auth.



Jurisprudencia Scraper - Legal Document CLI

TypeScript | Playwright | Cheerio | Vitest | Docker

github.com/Jorgeotero1998/Scraper

- Production-grade CLI scraper with rate limiting, retry/backoff, and 23 Vitest tests.



GlobalThree - 3D Data Visualization (LIVE)

React | Three.js | React Three Fiber | Vercel

global-three-one.vercel.app | github.com/Jorgeotero1998/GlobalThree

- Interactive navigable 3D globe with pulsing demographic nodes and animated flow arcs."""



PROJECTS_BACKEND = """PROJECTS

Sonoteca - FastAPI + PostgreSQL Music API (FLAGSHIP | LIVE)

FastAPI | SQLAlchemy | Alembic | PostgreSQL | JWT/RBAC | Deezer API

sonoteca-hzbi.vercel.app | github.com/Jorgeotero1998/Sonoteca

- REST API design, migrations, auth, and third-party catalog integration in production.



LaVerde Tienda - Flask E-Commerce Capstone

Flask | PostgreSQL | JWT | pytest | GitHub Actions

github.com/Jorgeotero1998/LaVerde-Tienda

- Team capstone with 44 pytest tests, JWT auth, and CI pipeline.



AI Task Orchestrator - Flask LLM Backend (LIVE)

Python | Flask | Groq API | PostgreSQL | Docker

ai-task-orchestrator-inky.vercel.app | github.com/Jorgeotero1998/ai-task-orchestrator

- LLM orchestration API with persistence, admin auth, and Docker Compose local stack.



Jurisprudencia Scraper - Automation CLI

TypeScript | Playwright | Cheerio | Vitest | Docker

github.com/Jorgeotero1998/Scraper

- Scraping pipeline with exponential backoff, structured export, and test coverage."""



SKILLS_FULLSTACK = """SKILLS

Backend: Python | FastAPI | Flask | SQLAlchemy | Alembic | Pydantic | JWT/RBAC | REST APIs | pytest

Frontend: React | TypeScript | Vite | Tailwind CSS | Three.js | React Three Fiber

DevOps: Docker | GitHub Actions | Vercel | Render | Neon | PostgreSQL | Linux | CI/CD"""



SKILLS_BACKEND = """SKILLS

Backend: Python | FastAPI | Flask | SQLAlchemy | Alembic | Pydantic | JWT | REST APIs | pytest

Frontend: React | TypeScript | Vite

DevOps: Docker | GitHub Actions | Vercel | Render | Neon | PostgreSQL | Linux | CI/CD

Automation: Playwright | Selenium | web scraping pipelines"""



EDUCATION = """EDUCATION

Full Stack Developer - 4Geeks Academy

Jun 2025 - Present"""



CERTS = """CERTIFICATIONS

- Python - Verified by Talently (May 2026)

- JavaScript - Verified by Talently (May 2026)

- Automate Cybersecurity with Python - Google (Oct 2025)

- Cloud-Native Development with OpenShift and Kubernetes - Red Hat

- Additional cloud security credentials (AWS, Azure, Google) - see LinkedIn"""





class CV(FPDF):

    def __init__(self):

        super().__init__()

        self.set_margins(14, 14, 14)

        self.set_auto_page_break(auto=True, margin=12)

        self.add_page()



    def block(self, text: str, size: int = 9, gap: float = 4):

        w = self.epw

        for line in text.strip().split("\n"):

            if line.isupper() and len(line) < 40 and not line.startswith("-"):

                self.set_font("Helvetica", "B", size + 1)

                self.multi_cell(w, 5.5, line)

            else:

                self.set_font("Helvetica", size=size)

                self.multi_cell(w, 5.2, line)

        self.ln(gap)





def write_pdf(path: Path, about: str, projects: str, skills: str):

    pdf = CV()

    w = pdf.epw

    pdf.set_font("Helvetica", "B", 16)

    pdf.multi_cell(w, 7, "Jorge Otero")

    pdf.set_font("Helvetica", size=10)

    pdf.multi_cell(w, 5, "Junior+ Full Stack Developer")

    pdf.set_font("Helvetica", size=8)

    pdf.multi_cell(

        w,

        4.5,

        "Buenos Aires, Argentina | jorgotero4@gmail.com | linkedin.com/in/jorgeotero1998 | github.com/Jorgeotero1998",

    )

    pdf.multi_cell(

        w,

        4.5,

        "Portfolio: portofolio-mu-lac.vercel.app | Sonoteca: sonoteca-hzbi.vercel.app",

    )

    pdf.ln(3)

    for section in (about, EXPERIENCE, projects, skills, EDUCATION, CERTS):

        pdf.block(section)

    pdf.output(str(path))





def main():

    PUBLIC.mkdir(parents=True, exist_ok=True)

    write_pdf(PUBLIC / "JORGE_OTERO_CV.pdf", ABOUT_FULLSTACK, PROJECTS_FULLSTACK, SKILLS_FULLSTACK)

    write_pdf(PUBLIC / "jorge_otero_fullstack_cv.pdf", ABOUT_FULLSTACK, PROJECTS_FULLSTACK, SKILLS_FULLSTACK)

    write_pdf(PUBLIC / "jorge_otero_backend_cv.pdf", ABOUT_BACKEND, PROJECTS_BACKEND, SKILLS_BACKEND)

    print("Generated:", ", ".join(p.name for p in sorted(PUBLIC.glob("*.pdf"))))





if __name__ == "__main__":

    main()


