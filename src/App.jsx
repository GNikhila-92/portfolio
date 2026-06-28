import React, { useState, useEffect } from 'react';
import {
  Github, Mail, Phone, MapPin, ExternalLink, Download,
  ArrowRight, Menu, X, Linkedin, ImageOff, Database,
  BarChart3, LineChart, Gamepad2, Sparkles
} from 'lucide-react';

/* ----------------------------- DATA ----------------------------- */

const PROFILE = {
  name: 'G. Nikhila',
  role: 'Data Science Student · Aspiring Data Analyst',
  location: 'Hyderabad, India',
  email: 'nikhilaguthula00@gmail.com',
  phone: '+91 6304580066',
  github: 'https://github.com/GNikhila-92',
  // No LinkedIn URL was found on the resume — replace this with the real one.
  linkedin: 'https://linkedin.com/in/your-handle',
  resume: '/resume.pdf',
};

const FILTERS = [
  { label: 'ROLE', value: 'Data Analyst' },
  { label: 'STACK', value: 'Python · SQL · Tableau' },
  { label: 'STATUS', value: 'Open to Internships' },
  { label: 'CGPA', value: '9.5 / 10' },
];

const SKILLS = [
  {
    group: 'Languages',
    items: ['Python', 'Java', 'C', 'C++'],
  },
  {
    group: 'Data & Querying',
    items: ['SQL', 'Pandas', 'NumPy', 'DBMS'],
  },
  {
    group: 'Visualization & BI',
    items: ['Tableau', 'Power BI', 'Plotly', 'Streamlit'],
  },
  {
    group: 'Web',
    items: ['HTML', 'CSS', 'JavaScript'],
  },
];

const SOFT_SKILLS = ['Communication', 'Team Collaboration', 'Critical Thinking', 'Quick Learning'];

const PROJECTS = [
  {
    title: 'Netflix Streaming Analytics Dashboard',
    tag: 'STREAMLIT · PYTHON',
    accent: 'teal',
    summary:
      'A dark-themed Streamlit + Plotly dashboard analyzing 8,800+ Netflix titles — genres, ratings, release trends and global production spread, all filterable in real time.',
    features: [
      'Global sidebar filters by type, country, genre, rating and release year',
      'Searchable, sortable archive table of the full catalog',
      'Choropleth map of content production by country',
      'Acquisition-delay metric: release year vs. platform add date',
    ],
    tech: ['Python', 'Streamlit', 'Pandas', 'NumPy', 'Plotly'],
    github: 'https://github.com/GNikhila-92/netflix-streamlit-dashboard',
    live: 'https://netflix-app-dashboard-suaf9n7nf7x5gal4szqvly.streamlit.app',
    images: [
      'https://raw.githubusercontent.com/GNikhila-92/netflix-streamlit-dashboard/main/preview_overview.png',
      'https://raw.githubusercontent.com/GNikhila-92/netflix-streamlit-dashboard/main/preview_trends.png',
      'https://raw.githubusercontent.com/GNikhila-92/netflix-streamlit-dashboard/main/preview_geography.png',
      'https://raw.githubusercontent.com/GNikhila-92/netflix-streamlit-dashboard/main/preview_deep_dive.png',
    ],
  },
  {
    title: 'Global E-Commerce Sales Dashboard',
    tag: 'TABLEAU · BI',
    accent: 'amber',
    summary:
      'A Tableau Public dashboard turning 540,000+ raw UK retail transactions into an executive-ready view of revenue, geography and top-selling products.',
    features: [
      'Cleaned a noisy real-world dataset: removed returns, cancellations and £0.00 anomalies',
      'Engineered a custom Sales Revenue field (Quantity × Unit Price)',
      'Global choropleth of sales by country with click-to-filter',
      'Cross-filtering between the map, top-10 product chart and KPI cards',
    ],
    tech: ['Tableau Public', 'Data Cleaning', 'Feature Engineering'],
    github: 'https://github.com/GNikhila-92/Global-Ecommerce-Sales-Dashboard',
    live: 'https://public.tableau.com/app/profile/g.nikhila/viz/GlobalE-CommerceSalesProductPerformanceDashboard/Dashboard1',
    images: [
      'https://raw.githubusercontent.com/GNikhila-92/Global-Ecommerce-Sales-Dashboard/main/Sales%20dashboard%20.png',
      'https://raw.githubusercontent.com/GNikhila-92/Global-Ecommerce-Sales-Dashboard/main/Sales%20dashboard%20interactive%20.png',
    ],
  },
  {
    title: 'FunnelFlux — Marketing Analytics Dashboard',
    tag: 'PYTHON · STREAMLIT',
    accent: 'teal',
    summary:
      'An interactive funnel-optimization tool that processes multi-step customer journey data to surface conversion drop-offs and acquisition pathways.',
    features: [
      'Modular Python architecture separating UI from analytics logic',
      'Tracks step-by-step funnel conversion and drop-off points',
      'Deployed live on Streamlit Community Cloud',
    ],
    tech: ['Python', 'Streamlit'],
    github: 'https://github.com/GNikhila-92/FunnelFlux-Analytics',
    live: 'https://funnelflux-analytics-dygo6lxycsarqvucbdqcce.streamlit.app/',
    images: [],
  },
  {
    title: 'Drone Simulator — Arcade Pilot',
    tag: 'JAVASCRIPT · THREE.JS',
    accent: 'amber',
    summary:
      'A browser-based 3D flight game controlled entirely by webcam hand-tracking — no keyboard, no mouse. Hand position maps to roll, throttle and pitch in real time.',
    features: [
      'Real-time hand-landmark tracking via Google MediaPipe',
      'Procedurally generated, deformed asteroid fields in WebGL (Three.js)',
      'Draggable picture-in-picture webcam HUD',
      'Custom bounding-box collision and respawn system',
    ],
    tech: ['JavaScript', 'Three.js', 'MediaPipe', 'HTML/CSS'],
    github: 'https://github.com/GNikhila-92/drone-simulator',
    live: 'https://gnikhila-92.github.io/drone-simulator/',
    images: [],
  },
  {
    title: 'Movie Streaming Analytics (SQL)',
    tag: 'SQL · SQLITE · JUPYTER',
    accent: 'teal',
    summary:
      'A relational-analytics notebook that loads the Netflix catalog into SQLite and runs advanced SQL — window functions, CTEs and a weighted recommendation score — entirely in Python.',
    features: [
      'CASE-based decade segmentation and catalog-share breakdowns',
      'DENSE_RANK() window functions to find top-rated titles per genre',
      'Custom weighted scoring model combining genre affinity, rating and recency',
      'Seaborn + Plotly dual-layer static and interactive visuals',
    ],
    tech: ['Python', 'SQLite', 'Pandas', 'Seaborn', 'Plotly'],
    github: 'https://github.com/GNikhila-92/netflix-sql-streaming-analytics',
    live: null,
    images: [],
  },
];

const CERTIFICATIONS = [
  { name: 'Data Analytics Job Simulation', issuer: 'Deloitte · Forage', year: '2026' },
  { name: 'Python for Data Science', issuer: 'NPTEL · IIT Madras', year: '2025' },
  { name: 'Programming in Java', issuer: 'NPTEL · IIT Kharagpur', year: '2025' },
  { name: 'Data Visualization with Power BI', issuer: 'Great Learning', year: '2024' },
  { name: 'Front-End Development (HTML)', issuer: 'Great Learning', year: '2024' },
  { name: 'C, C++ Programming', issuer: 'PR Softwares', year: '2023' },
];

const NAV_LINKS = [
  ['About', '#about'],
  ['Skills', '#skills'],
  ['Projects', '#projects'],
  ['Certifications', '#certifications'],
  ['Contact', '#contact'],
];

const ACCENTS = {
  teal: { bar: 'bg-teal-700', text: 'text-teal-700', soft: 'bg-teal-50', ring: 'ring-teal-700/20', dot: 'bg-teal-700' },
  amber: { bar: 'bg-amber-600', text: 'text-amber-700', soft: 'bg-amber-50', ring: 'ring-amber-600/20', dot: 'bg-amber-600' },
};

/* --------------------------- COMPONENTS --------------------------- */

function FilterChip({ label, value }) {
  return (
    <div className="flex items-center gap-2 rounded-full border border-stone-300 bg-white px-3 py-1.5 text-xs">
      <span className="font-mono text-[10px] tracking-wider text-stone-400">{label}</span>
      <span className="font-mono text-[11px] text-stone-700">{value}</span>
    </div>
  );
}

function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-stone-200 bg-stone-50/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 md:px-8">
        <a href="#top" className="font-display text-lg font-semibold tracking-tight text-stone-900">
          G.Nikhila<span className="text-teal-700">.</span>
        </a>
        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map(([label, href]) => (
            <a key={href} href={href} className="font-mono text-[12px] uppercase tracking-wider text-stone-500 transition hover:text-stone-900">
              {label}
            </a>
          ))}
          <a
            href={PROFILE.resume}
            download
            className="flex items-center gap-1.5 rounded-full bg-stone-900 px-4 py-2 font-mono text-[12px] uppercase tracking-wider text-stone-50 transition hover:bg-teal-700"
          >
            <Download size={13} /> Resume
          </a>
        </nav>
        <button className="md:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      {open && (
        <div className="border-t border-stone-200 bg-stone-50 px-5 pb-4 md:hidden">
          <nav className="flex flex-col gap-3 pt-3">
            {NAV_LINKS.map(([label, href]) => (
              <a key={href} href={href} onClick={() => setOpen(false)} className="font-mono text-xs uppercase tracking-wider text-stone-600">
                {label}
              </a>
            ))}
            <a href={PROFILE.resume} download className="mt-1 inline-flex w-fit items-center gap-1.5 rounded-full bg-stone-900 px-4 py-2 font-mono text-[12px] uppercase tracking-wider text-stone-50">
              <Download size={13} /> Resume
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="mx-auto max-w-6xl px-5 pb-16 pt-14 md:px-8 md:pb-24 md:pt-20">
      <p className="font-mono text-[12px] uppercase tracking-[0.2em] text-teal-700">
        Computer Science (Data Science) &middot; Hyderabad, India
      </p>
      <h1 className="mt-5 font-display text-4xl font-semibold leading-[1.05] tracking-tight text-stone-900 sm:text-5xl md:text-6xl">
        Hi, I&apos;m {PROFILE.name}.<br />
        I build dashboards out of <span className="text-teal-700">messy data.</span>
      </h1>
      <p className="mt-6 max-w-2xl text-base leading-relaxed text-stone-600 md:text-lg">
        A Data Science undergraduate who turns raw, unglamorous datasets — an 8,800-title
        streaming catalog, 540,000 UK retail transactions, a marketing funnel — into dashboards
        people can actually filter, click, and trust. Comfortable across Python, SQL, Tableau and
        Power BI, and currently looking for Data Analyst, Data Science, or Python Developer
        internships.
      </p>

      <div className="mt-8 flex flex-wrap gap-3">
        <a href="#projects" className="inline-flex items-center gap-2 rounded-full bg-stone-900 px-5 py-3 text-sm font-medium text-stone-50 transition hover:bg-teal-700">
          View Projects <ArrowRight size={15} />
        </a>
        <a href={PROFILE.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-stone-300 bg-white px-5 py-3 text-sm font-medium text-stone-800 transition hover:border-stone-900">
          <Github size={15} /> GitHub Profile
        </a>
        <a href="#contact" className="inline-flex items-center gap-2 rounded-full border border-stone-300 bg-white px-5 py-3 text-sm font-medium text-stone-800 transition hover:border-stone-900">
          <Mail size={15} /> Contact Me
        </a>
      </div>

      <div className="mt-10 flex flex-wrap gap-2.5">
        {FILTERS.map((f) => (
          <FilterChip key={f.label} {...f} />
        ))}
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="border-t border-stone-200 bg-white">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-20 md:grid-cols-[1.4fr_1fr] md:px-8">
        <div>
          <p className="font-mono text-[12px] uppercase tracking-[0.2em] text-stone-400">About</p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-stone-900">
            From spreadsheet to story.
          </h2>
          <div className="mt-5 space-y-4 text-stone-600">
            <p>
              I&apos;m currently completing my B.Tech in Computer Science with a specialization in
              Data Science at Vignan Institute of Technology and Sciences, holding a 9.5 CGPA.
              Most of what I know, I&apos;ve learned by picking a real, public dataset and pushing it
              all the way to a deployed, interactive product — not just a notebook that ends at a
              chart.
            </p>
            <p>
              That habit shows up across my projects: cleaning 540,000+ noisy retail transactions
              in Tableau, writing window-function SQL over a Netflix catalog, and building two
              separate Streamlit apps that are live on the web right now, not just on my laptop.
              I&apos;m equally comfortable in a notebook running SQL queries and in a BI tool
              wiring up cross-filters for a non-technical audience.
            </p>
            <p>
              I&apos;m looking for a Data Analyst, Data Scientist Intern, or Python Developer role
              where I can keep doing exactly that — take ambiguous, real-world data and turn it
              into something a team can act on.
            </p>
          </div>
        </div>

        <div className="space-y-5">
          <div className="rounded-2xl border border-stone-200 p-5">
            <p className="font-mono text-[11px] uppercase tracking-wider text-stone-400">Education</p>
            <ul className="mt-3 space-y-3 text-sm">
              <li>
                <p className="font-medium text-stone-900">B.Tech, CS (Data Science)</p>
                <p className="text-stone-500">Vignan Institute of Technology and Sciences · Present · CGPA 9.5</p>
              </li>
              <li>
                <p className="font-medium text-stone-900">Intermediate (MPC)</p>
                <p className="text-stone-500">Narayana Junior College · 2022 · 96.8%</p>
              </li>
              <li>
                <p className="font-medium text-stone-900">SSC</p>
                <p className="text-stone-500">Narayana High School · 2020 · CGPA 10</p>
              </li>
            </ul>
          </div>

          <div className="rounded-2xl border border-stone-200 p-5">
            <p className="font-mono text-[11px] uppercase tracking-wider text-stone-400">Beyond the screen</p>
            <p className="mt-3 text-sm text-stone-600">
              Advanced to the college-level round of the Smart India Hackathon, completed a
              hands-on Machine Learning workshop, and regularly present technical work in core
              subjects.
            </p>
          </div>

          <div className="rounded-2xl border border-stone-200 p-5">
            <p className="font-mono text-[11px] uppercase tracking-wider text-stone-400">Soft skills</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {SOFT_SKILLS.map((s) => (
                <span key={s} className="rounded-full bg-stone-100 px-3 py-1 text-xs text-stone-700">{s}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="border-t border-stone-200">
      <div className="mx-auto max-w-6xl px-5 py-20 md:px-8">
        <p className="font-mono text-[12px] uppercase tracking-[0.2em] text-stone-400">Skills</p>
        <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-stone-900">
          The toolkit behind the dashboards.
        </h2>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {SKILLS.map((group) => (
            <div key={group.group} className="rounded-2xl border border-stone-200 bg-white p-5">
              <div className="flex items-center gap-2 border-b border-stone-100 pb-3">
                <span className="h-1.5 w-1.5 rounded-full bg-teal-700" />
                <p className="font-mono text-[11px] uppercase tracking-wider text-stone-500">{group.group}</p>
              </div>
              <ul className="mt-3 space-y-2">
                {group.items.map((item) => (
                  <li key={item} className="text-sm text-stone-700">{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ImagePlaceholder({ label }) {
  return (
    <div className="flex aspect-video w-full flex-col items-center justify-center gap-2 rounded-xl border border-dashed border-stone-300 bg-stone-50 text-center">
      <ImageOff size={20} className="text-stone-400" />
      <p className="px-6 text-xs text-stone-400">
        Add a screenshot of &ldquo;{label}&rdquo; here — drop an image in <code className="font-mono">/public</code> and update its path in <code className="font-mono">App.jsx</code>.
      </p>
    </div>
  );
}

function ProjectCard({ project, reverse }) {
  const a = ACCENTS[project.accent];
  return (
    <div className="overflow-hidden rounded-2xl border border-stone-200 bg-white">
      <div className={`grid gap-0 md:grid-cols-2 ${reverse ? 'md:[direction:rtl]' : ''}`}>
        <div className="bg-stone-50 p-5 md:[direction:ltr]">
          {project.images.length > 0 ? (
            <div className="grid grid-cols-2 gap-2">
              {project.images.map((src, i) => (
                <img
                  key={src}
                  src={src}
                  alt={`${project.title} screenshot ${i + 1}`}
                  loading="lazy"
                  className={`rounded-lg border border-stone-200 object-cover ${project.images.length === 1 ? 'col-span-2 aspect-video' : 'aspect-video'}`}
                />
              ))}
            </div>
          ) : (
            <ImagePlaceholder label={project.title} />
          )}
        </div>

        <div className="p-6 md:[direction:ltr] md:p-8">
          <span className={`inline-block rounded-full px-3 py-1 font-mono text-[10px] uppercase tracking-wider ${a.soft} ${a.text}`}>
            {project.tag}
          </span>
          <h3 className="mt-3 font-display text-xl font-semibold text-stone-900">{project.title}</h3>
          <p className="mt-3 text-sm leading-relaxed text-stone-600">{project.summary}</p>

          <ul className="mt-4 space-y-1.5">
            {project.features.map((f) => (
              <li key={f} className="flex gap-2 text-sm text-stone-600">
                <span className={`mt-1.5 h-1 w-1 shrink-0 rounded-full ${a.dot}`} />
                {f}
              </li>
            ))}
          </ul>

          <div className="mt-5 flex flex-wrap gap-1.5">
            {project.tech.map((t) => (
              <span key={t} className="rounded-md bg-stone-100 px-2 py-1 font-mono text-[11px] text-stone-600">{t}</span>
            ))}
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 rounded-full border border-stone-300 px-4 py-2 text-xs font-medium text-stone-800 transition hover:border-stone-900">
              <Github size={14} /> Code
            </a>
            {project.live && (
              <a href={project.live} target="_blank" rel="noopener noreferrer" className={`inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-xs font-medium text-white transition ${a.bar} hover:opacity-90`}>
                <ExternalLink size={14} /> Live Demo
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function Projects() {
  return (
    <section id="projects" className="border-t border-stone-200 bg-white">
      <div className="mx-auto max-w-6xl px-5 py-20 md:px-8">
        <p className="font-mono text-[12px] uppercase tracking-[0.2em] text-stone-400">Projects</p>
        <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-stone-900">
          Five datasets, five finished products.
        </h2>
        <p className="mt-3 max-w-2xl text-stone-600">
          Pulled straight from my GitHub — every project below is public, with real code and, where
          available, a live deployed link.
        </p>

        <div className="mt-10 space-y-6">
          {PROJECTS.map((p, i) => (
            <ProjectCard key={p.title} project={p} reverse={i % 2 === 1} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Certifications() {
  return (
    <section id="certifications" className="border-t border-stone-200">
      <div className="mx-auto max-w-6xl px-5 py-20 md:px-8">
        <p className="font-mono text-[12px] uppercase tracking-[0.2em] text-stone-400">Certifications</p>
        <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-stone-900">
          Credentials, dated.
        </h2>

        <div className="mt-8 overflow-hidden rounded-2xl border border-stone-200 bg-white">
          {CERTIFICATIONS.map((c, i) => (
            <div
              key={c.name}
              className={`flex flex-col gap-1 px-5 py-4 sm:flex-row sm:items-center sm:justify-between ${i !== CERTIFICATIONS.length - 1 ? 'border-b border-stone-100' : ''}`}
            >
              <div>
                <p className="font-medium text-stone-900">{c.name}</p>
                <p className="text-sm text-stone-500">{c.issuer}</p>
              </div>
              <span className="self-start rounded-full bg-stone-100 px-3 py-1 font-mono text-xs text-stone-600 sm:self-center">
                {c.year}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="border-t border-stone-200 bg-stone-900">
      <div className="mx-auto max-w-6xl px-5 py-20 md:px-8">
        <p className="font-mono text-[12px] uppercase tracking-[0.2em] text-teal-400">Contact</p>
        <h2 className="mt-3 max-w-xl font-display text-3xl font-semibold tracking-tight text-white">
          Let&apos;s talk about your data problem.
        </h2>
        <p className="mt-3 max-w-xl text-stone-400">
          Open to Data Analyst, Data Scientist Intern, Python Developer, and Software Developer
          Intern roles. Reach out directly, or grab the resume.
        </p>

        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          <a href={`mailto:${PROFILE.email}`} className="flex items-center gap-3 rounded-xl border border-stone-700 bg-stone-800 px-4 py-4 text-sm text-stone-100 transition hover:border-teal-500">
            <Mail size={16} className="text-teal-400" /> {PROFILE.email}
          </a>
          <a href={`tel:${PROFILE.phone}`} className="flex items-center gap-3 rounded-xl border border-stone-700 bg-stone-800 px-4 py-4 text-sm text-stone-100 transition hover:border-teal-500">
            <Phone size={16} className="text-teal-400" /> {PROFILE.phone}
          </a>
          <a href={PROFILE.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 rounded-xl border border-stone-700 bg-stone-800 px-4 py-4 text-sm text-stone-100 transition hover:border-teal-500">
            <Github size={16} className="text-teal-400" /> GNikhila-92
          </a>
          <a href={PROFILE.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 rounded-xl border border-stone-700 bg-stone-800 px-4 py-4 text-sm text-stone-100 transition hover:border-teal-500">
            <Linkedin size={16} className="text-teal-400" /> LinkedIn
          </a>
        </div>

        <div className="mt-6 flex items-center gap-3 text-sm text-stone-500">
          <MapPin size={14} /> {PROFILE.location}
        </div>

        <a
          href={PROFILE.resume}
          download
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-teal-600 px-6 py-3 text-sm font-medium text-white transition hover:bg-teal-500"
        >
          <Download size={16} /> Download Resume
        </a>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-stone-800 bg-stone-900 px-5 py-6 text-center md:px-8">
      <p className="font-mono text-[11px] text-stone-500">
        Built by {PROFILE.name} · {new Date().getFullYear()}
      </p>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-stone-50 font-sans text-stone-900 antialiased">
      <Nav />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
