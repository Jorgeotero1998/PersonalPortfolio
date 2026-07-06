# LinkedIn — copy para pegar (Jorge Otero)

Mensaje consistente en los tres canales: **~3 años construyendo** (desde 2023: freelance + proyectos + bootcamp), **Junior+** con portfolio en producción, flagship **Sonoteca**.

---

## 0. Banner de portada (cover photo)

Asset en el repo: `public/linkedin-banner.png` (1584 × 396 px, estándar LinkedIn). Versión vectorial opcional: `public/linkedin-banner.svg`.

### Subir el banner

1. LinkedIn → **Yo** → **Ver perfil**
2. Clic en el ícono de **cámara** sobre la imagen de portada (arriba del perfil)
3. **Editar foto de portada** → **Subir foto**
4. Seleccionar `linkedin-banner.png` (descargado del repo o desde la URL de abajo)
5. Ajustar recorte si LinkedIn lo pide (el diseño ya respeta la zona segura center-left)
6. **Guardar**

### URL directa (después del deploy en Vercel)

```
https://portofolio-mu-lac.vercel.app/linkedin-banner.png
```

Descarga: abrir la URL en el navegador → clic derecho → **Guardar imagen como…** → subir en LinkedIn.

### Diseño

- Tema oscuro alineado con portfolio/Sonoteca (navy, acentos purple/cyan)
- Texto: **Jorge Otero** · Full Stack Developer · Python + React · Buenos Aires · Remote
- Sin CTAs tipo "Open to work" / "Hire me" en el banner (zona segura center-left para la foto de perfil)

### Regenerar

```bash
python scripts/generate_linkedin_banner.py
```

---

## 1. Headline (elegir esta)

```
Full Stack Developer · Python (FastAPI/Flask) + React · Production apps · Buenos Aires · Remote
```

---

## 2. About — English (~1,180 caracteres)

```
I build production full-stack applications with Python and React — not as a job title, but as a track record.

Since 2023 I've been hands-on building: freelance Python work (automation, REST APIs, scraping), personal projects deployed on Vercel/Render, and structured training at 4Geeks Academy. That's ~3 years of learning, building, and shipping — not 3 years at a single employer.

What I ship today:
• Sonoteca (flagship) — music platform with real Deezer catalog, 30s previews, playlists, JWT/RBAC. FastAPI + React monorepo on Vercel with Neon Postgres. https://sonoteca-hzbi.vercel.app/
• LaVerde Tienda — 4Geeks capstone e-commerce (Flask, React, PostgreSQL, 44 pytest tests, CI/CD)
• AI Task Orchestrator — LLM goal decomposition with Groq/Llama 3.3, live demo on Vercel

Stack: FastAPI, Flask, SQLAlchemy, Alembic, React, TypeScript, PostgreSQL, Docker, GitHub Actions.

I'm a strong junior / junior+ full-stack developer with production portfolio evidence. Open to remote full-stack roles — portfolio and live demos speak louder than years on a payroll.

Portfolio: https://portofolio-mu-lac.vercel.app/
GitHub: https://github.com/Jorgeotero1998
```

---

## 3. About — Español (alternativa bilingüe)

```
Desarrollo aplicaciones full stack en producción con Python y React — con portfolio que lo demuestra, no solo con un título.

Desde 2023 construyo de forma constante: freelance en Python (automatización, APIs REST, scraping), proyectos personales desplegados en Vercel/Render, y formación en 4Geeks Academy. Son ~3 años aprendiendo, construyendo y publicando — no 3 años en una sola empresa.

Lo que tengo en producción hoy:
• Sonoteca (proyecto estrella) — plataforma musical con catálogo real de Deezer, previews de 30s, playlists, JWT/RBAC. Monorepo FastAPI + React en Vercel con Neon Postgres. https://sonoteca-hzbi.vercel.app/
• LaVerde Tienda — capstone de 4Geeks, e-commerce (Flask, React, PostgreSQL, 44 tests pytest, CI/CD)
• AI Task Orchestrator — descomposición de objetivos con Groq/Llama 3.3, demo en vivo

Stack: FastAPI, Flask, SQLAlchemy, Alembic, React, TypeScript, PostgreSQL, Docker, GitHub Actions.

Me posiciono como desarrollador full stack junior+ con evidencia en producción. Abierto a roles remote full stack — el portfolio y las demos hablan más que los años en nómina.

Portfolio: https://portofolio-mu-lac.vercel.app/
GitHub: https://github.com/Jorgeotero1998
```

---

## 4. Cambios manuales en LinkedIn UI

### Cover photo (Portada)
- [ ] Subir `linkedin-banner.png` — ver sección **0. Banner de portada** arriba

### Featured (Destacado)
- [ ] **Reemplazar CV** con PDF corregido (sin typo "Enginner"): https://portofolio-mu-lac.vercel.app/JORGE_OTERO_CV.pdf
- [ ] **Fijar post de Sonoteca como Featured #1** (quitar GlobalThree u otros viejos del primer lugar)
- [ ] Mantener link al portfolio como segundo featured si quieres

### Projects (Proyectos)
- [ ] **Ocultar o eliminar** SentinelSoc e Ind Store si están archivados o confunden con identidad security
- [ ] Asegurar que **Sonoteca** aparece primero con link live: https://sonoteca-hzbi.vercel.app/
- [ ] LaVerde, AI Task Orchestrator, Scraper — OK como proyectos secundarios

### Experience (Experiencia)
- [ ] **Freelance Python Developer**: fechas **Nov 2023 – Present** (no 2019, no "6 años")
- [ ] Descripción: automation, APIs, scraping, deploys — no "6+ years industry experience"
- [ ] **4Geeks Full Stack**: fechas **Jun 2025 – Present** (corregir si dice ene 2026)
- [ ] Rol: capstone LaVerde + formación full stack

### Education (Educación)
- [ ] **4Geeks Academy**: **Jun 2025 – Actualidad** (no ene 2026 – Actualidad)

### Skills (aptitudes destacadas)
- [ ] Priorizar: **Python, FastAPI, Flask, React, PostgreSQL, Docker, REST APIs**
- [ ] Bajar prominencia de skills/certificaciones **security** (AWS Security Specialty, AZ-500, etc.) — dejarlas en Certifications, no en top skills

### Posts
- [ ] El post "Llevo más de 3 años construyendo cosas con Python y React" está bien — opcional añadir: *"construyendo = freelance + proyectos + bootcamp, no 3 años en una empresa"*

### Badge
- [ ] **"En busca de empleo"** — OK en LinkedIn (solo se evitó en GitHub/portfolio)

### No cambiar
- Badge "En busca de empleo" está bien
- No agregar CTAs desesperados en About

---

## 5. Checklist de consistencia (3 canales)

| Mensaje | Portfolio | GitHub README | LinkedIn |
|--------|-----------|---------------|----------|
| ~3 años **construyendo** desde 2023 | ✅ Hero | ✅ About | ✅ About EN/ES |
| No "3 years at one employer" | ✅ Hero copy | ✅ About | ✅ About |
| Nivel **Junior+** | ✅ Title/roles | ✅ Subtitle | ✅ About (subtle) |
| Flagship **Sonoteca** | ✅ Case study | ✅ Featured table | ✅ About + Featured |
| Sin hire-me spam | ✅ | ✅ | ✅ (badge OK) |
| Security no domina | ✅ Certs secondary | ✅ No security focus | ⚠️ Manual skills fix |
