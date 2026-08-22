/**
 * Terminal Garden design system: a warm editorial engineering notebook for a
 * methodical, curious Java backend student. Accent only with Service Lime.
 */
import { useState } from "react";
import {
  ArrowDown,
  ArrowUpRight,
  Braces,
  CheckCircle2,
  CircleDot,
  Code2,
  Database,
  Github,
  GraduationCap,
  Layers3,
  Linkedin,
  Mail,
  Menu,
  Server,
  Terminal,
  X,
} from "lucide-react";

const GITHUB_URL = "https://github.com/Kavaykhurana";
const LEETCODE_URL = "https://leetcode.com/u/kavaykhurana/";
const LINKEDIN_URL = "https://www.linkedin.com/in/kavay-khurana-437272322/";
const EMAIL_URL = "mailto:kavaykhurana4@gmail.com";

const navItems = [
  ["Profile", "about"],
  ["Work", "projects"],
  ["Practice", "practice"],
  ["Contact", "contact"],
];

const projectCards = [
  {
    index: "01",
    title: "StockPilot",
    eyebrow: "Inventory · Purchasing · Sales OS",
    description:
      "A full-stack operating system for inventory, purchasing, and sales workflows, built around a transactional Java backend and production-minded access controls.",
    stack: ["Java 21", "Spring Boot", "PostgreSQL", "React 19", "TypeScript"],
    links: [
      ["Repository", "https://github.com/Kavaykhurana/EnterPrise_web_project"],
      ["Live system", "https://stockpilot-on32.onrender.com"],
    ],
    details: [
      "Transactional stock validation for multi-line orders",
      "Role-based access control with Spring Security",
      "Docker-ready deployment with managed PostgreSQL",
    ],
  },
  {
    index: "02",
    title: "Adventure Works Cycles",
    eyebrow: "Data Mining · Customer Analysis",
    description:
      "A reproducible customer-data mining assignment that prepares and transforms source datasets through an executable Python and notebook workflow.",
    stack: ["Python", "Pandas", "Jupyter", "Data Preprocessing"],
    links: [["Repository", "https://github.com/Kavaykhurana/ML"]],
    details: [
      "Feature selection and data preparation pipeline",
      "Min–max and Z-score transformations",
      "Notebook notes, tables, and reproducible outputs",
    ],
  },
];

function SectionLabel({ number, label }: { number: string; label: string }) {
  return (
    <div className="section-label" aria-label={`${number} ${label}`}>
      <span>{number}</span>
      <i />
      <span>{label}</span>
      <b className="section-node" aria-hidden="true" />
    </div>
  );
}

function ExternalLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a href={href} target="_blank" rel="noreferrer" className="text-link">
      <span>{children}</span>
      <ArrowUpRight size={15} strokeWidth={2.1} aria-hidden="true" />
    </a>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell">
      <aside className="side-rail" aria-label="Site navigation">
        <a href="#top" className="brand-lockup" aria-label="Kavay Khurana — home">
          <img
            src="/manus-storage/kavay-request-loop-logo_56736cdb.png"
            alt="Kavay Khurana request response loop mark"
            className="brand-mark"
          />
          <div>
            <span className="brand-name">Kavay</span>
            <span className="brand-meta">KHURANA / 2028</span>
          </div>
        </a>

        <nav className="rail-nav">
          {navItems.map(([label, id], index) => (
            <a href={`#${id}`} key={id}>
              <span>0{index + 1}</span>
              {label}
            </a>
          ))}
        </nav>

        <div className="rail-status">
          <span className="status-dot" />
          <p>
            Open to
            <br />
            internship opportunities
          </p>
        </div>

        <div className="rail-socials" aria-label="Profile links">
          <a href={GITHUB_URL} target="_blank" rel="noreferrer" aria-label="GitHub profile"><Github size={18} /></a>
          <a href={LINKEDIN_URL} target="_blank" rel="noreferrer" aria-label="LinkedIn profile"><Linkedin size={18} /></a>
          <a href={EMAIL_URL} aria-label="Email Kavay"><Mail size={18} /></a>
        </div>
      </aside>

      <header className="mobile-header">
        <a href="#top" className="mobile-brand" onClick={closeMenu}>
          <img src="/manus-storage/kavay-request-loop-logo_56736cdb.png" alt="" />
          <span>Kavay Khurana</span>
        </a>
        <button
          className="menu-toggle"
          onClick={() => setMenuOpen((open) => !open)}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
        >
          {menuOpen ? <X size={21} /> : <Menu size={22} />}
        </button>
        <nav id="mobile-menu" className={`mobile-menu ${menuOpen ? "is-open" : ""}`} aria-label="Mobile navigation">
          {navItems.map(([label, id]) => (
            <a href={`#${id}`} onClick={closeMenu} key={id}>{label}</a>
          ))}
          <a href={EMAIL_URL} onClick={closeMenu}>Say hello <ArrowUpRight size={15} /></a>
        </nav>
      </header>

      <main id="top" className="main-canvas">
        <section className="hero-section" aria-labelledby="hero-title">
          <div className="hero-copy">
            <div className="hero-identity">
              <img src="/manus-storage/kavay-request-loop-logo_56736cdb.png" alt="" />
              <div><strong>Kavay Khurana</strong><span>KK / JAVA BACKEND / CANDIDATE</span></div>
            </div>
            <div className="availability-pill"><span className="status-dot" /> Available for backend internships</div>
            <p className="hero-kicker">JAVA BACKEND DEVELOPMENT / TIET CSE ’28</p>
            <h1 id="hero-title">Building the habits behind <em>reliable</em> software.</h1>
            <p className="hero-intro">
              I’m Kavay Khurana, a Computer Science student at Thapar Institute of Engineering &amp; Technology focused on Java, backend systems, and deliberate problem solving.
            </p>
            <div className="hero-actions">
              <a href="#projects" className="primary-cta">Explore selected work <ArrowDown size={17} /></a>
              <a href={EMAIL_URL} className="secondary-cta">Start a conversation <ArrowUpRight size={16} /></a>
            </div>
          </div>

          <div className="hero-art" aria-hidden="true">
            <img src="/manus-storage/kavay-hero-service-route_875d3bfe.png" alt="" />
            <div className="art-caption caption-client"><span>01</span> CLIENT</div>
            <div className="art-caption caption-service"><span>02</span> JAVA SERVICE</div>
            <div className="art-caption caption-store"><span>03</span> DATA STORE</div>
            <div className="route-packet packet-one" />
            <div className="route-packet packet-two" />
          </div>

          <div className="hero-footer">
            <p>Scroll to trace the route</p>
            <ArrowDown size={16} />
            <span>01 / 04</span>
          </div>
        </section>

        <section id="about" className="about-section section-space" aria-labelledby="about-title">
          <SectionLabel number="01" label="Profile" />
          <div className="about-layout">
            <div className="about-headline">
              <p className="eyebrow">A learner with a systems mindset</p>
              <h2 id="about-title">I treat every project as a chance to make the next request <em>cleaner.</em></h2>
            </div>
            <div className="about-body">
              <p>
                I am a pre-final-year B.Tech Computer Science student, graduating in 2028. My current direction is Java backend development: understanding how services, data, and business logic fit together to deliver dependable experiences.
              </p>
              <p>
                I am actively building projects, strengthening core Java foundations, and applying problem-solving practice to write clearer, more intentional code.
              </p>
              <a className="inline-cta" href={EMAIL_URL}>Connect about an internship <ArrowUpRight size={16} /></a>
            </div>
          </div>

          <div className="profile-facts">
            <div className="fact-card fact-education">
              <div className="fact-icon"><GraduationCap size={21} /></div>
              <p className="fact-label">Education</p>
              <h3>Thapar Institute of Engineering &amp; Technology</h3>
              <p className="fact-detail">B.Tech, Computer Science &amp; Engineering<br />2024 — 2028</p>
            </div>
            <div className="fact-card fact-focus">
              <div className="fact-icon"><Server size={21} /></div>
              <p className="fact-label">Current focus</p>
              <h3>Java backend systems</h3>
              <div className="tag-cluster"><span>Spring Boot</span><span>APIs</span><span>SQL</span></div>
            </div>
            <div className="fact-card fact-location">
              <div className="fact-icon"><CircleDot size={21} /></div>
              <p className="fact-label">Based in</p>
              <h3>Patiala, Punjab</h3>
              <p className="fact-detail">India<br />Open to opportunities</p>
            </div>
          </div>
        </section>

        <section id="projects" className="projects-section section-space" aria-labelledby="project-title">
          <SectionLabel number="02" label="Selected work" />
          <div className="projects-intro">
            <div>
              <p className="eyebrow">Project ledger</p>
              <h2 id="project-title">Work that moves from <em>logic</em> to running systems.</h2>
            </div>
            <p>Selected repositories that show my current direction across backend engineering, data work, and applied coursework.</p>
          </div>

          <div className="featured-project">
            <div className="featured-image">
              <img src="/manus-storage/kavay-system-map_9e94d632.png" alt="Abstract service architecture illustration" />
              <span className="image-tab">FEATURED BUILD / 2026</span>
            </div>
            <article className="featured-copy">
              <div className="project-index">{projectCards[0].index}</div>
              <p className="project-eyebrow">{projectCards[0].eyebrow}</p>
              <h3>{projectCards[0].title}</h3>
              <p className="project-description">{projectCards[0].description}</p>
              <ul className="project-details">
                {projectCards[0].details.map((detail) => <li key={detail}><CheckCircle2 size={15} />{detail}</li>)}
              </ul>
              <div className="project-footer">
                <div className="tech-stack">{projectCards[0].stack.map((item) => <span key={item}>{item}</span>)}</div>
                <div className="project-links">{projectCards[0].links.map(([label, url]) => <ExternalLink key={label} href={url}>{label}</ExternalLink>)}</div>
              </div>
            </article>
          </div>

          <div className="secondary-project">
            <div className="secondary-project-number">02</div>
            <div>
              <p className="project-eyebrow">{projectCards[1].eyebrow}</p>
              <h3>{projectCards[1].title}</h3>
            </div>
            <p className="project-description">{projectCards[1].description}</p>
            <div className="secondary-project-bottom">
              <div className="tech-stack">{projectCards[1].stack.map((item) => <span key={item}>{item}</span>)}</div>
              <ExternalLink href={projectCards[1].links[0][1]}>Repository</ExternalLink>
            </div>
          </div>
        </section>

        <section id="practice" className="practice-section section-space" aria-labelledby="practice-title">
          <SectionLabel number="03" label="Deliberate practice" />
          <div className="practice-layout">
            <div className="practice-copy">
              <p className="eyebrow">Problem-solving rhythm</p>
              <h2 id="practice-title">538 problems solved.<br /><em>Still tracing</em> the next edge case.</h2>
              <p>
                Consistent data-structures and algorithms practice helps me reason through constraints, simplify complex paths, and approach backend work with sharper fundamentals.
              </p>
              <a href={LEETCODE_URL} target="_blank" rel="noreferrer" className="primary-cta">View LeetCode profile <ArrowUpRight size={17} /></a>
            </div>
            <div className="practice-visual">
              <img src="/manus-storage/kavay-practice-map_88241790.png" alt="Abstract topographic map representing coding practice" />
              <div className="leetcode-card">
                <div><Code2 size={19} /><span>LEETCODE / C++</span></div>
                <strong>538</strong>
                <p>problems solved</p>
                <a href={LEETCODE_URL} target="_blank" rel="noreferrer">Profile <ArrowUpRight size={13} /></a>
              </div>
            </div>
          </div>

          <div className="practice-stats" role="list" aria-label="Coding practice summary">
            <div role="listitem"><span>417</span><p>Easy solved</p></div>
            <div role="listitem"><span>115</span><p>Medium solved</p></div>
            <div role="listitem"><span>6</span><p>Hard solved</p></div>
            <div role="listitem"><span>1,480</span><p>Contest rating</p></div>
          </div>
        </section>

        <section className="toolkit-section section-space" aria-labelledby="toolkit-title">
          <SectionLabel number="04" label="Toolkit" />
          <div className="toolkit-header">
            <div>
              <p className="eyebrow">Tools in rotation</p>
              <h2 id="toolkit-title">The foundation I’m <em>growing.</em></h2>
            </div>
            <p>Tools and concepts drawn from my project work, coursework, and problem-solving practice.</p>
          </div>
          <div className="toolkit-grid">
            <article><div className="toolkit-icon"><Braces size={23} /></div><h3>Languages</h3><p>Java · C++ · Python · SQL · TypeScript</p></article>
            <article><div className="toolkit-icon"><Layers3 size={23} /></div><h3>Backend</h3><p>Spring Boot · REST APIs · Spring Security · JPA</p></article>
            <article><div className="toolkit-icon"><Database size={23} /></div><h3>Data</h3><p>PostgreSQL · Pandas · Data preprocessing</p></article>
            <article><div className="toolkit-icon"><Terminal size={23} /></div><h3>Workflow</h3><p>Git · GitHub · Docker · Maven · pnpm</p></article>
          </div>
        </section>

        <section id="contact" className="contact-section" aria-labelledby="contact-title">
          <div className="contact-route" aria-hidden="true"><span /><i /><span /><i /><span /></div>
          <div className="contact-content">
            <p className="eyebrow">Next request</p>
            <h2 id="contact-title">Have an internship opportunity, project idea, or backend problem worth <em>solving?</em></h2>
            <a href={EMAIL_URL} className="contact-email">kavaykhurana4@gmail.com <ArrowUpRight size={25} /></a>
            <div className="contact-socials">
              <ExternalLink href={GITHUB_URL}>GitHub</ExternalLink>
              <ExternalLink href={LINKEDIN_URL}>LinkedIn</ExternalLink>
              <ExternalLink href={LEETCODE_URL}>LeetCode</ExternalLink>
            </div>
          </div>
          <footer><span>© {new Date().getFullYear()} Kavay Khurana</span><span>Designed as a field note for backend work.</span></footer>
        </section>
      </main>
    </div>
  );
}
