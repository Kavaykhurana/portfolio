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
const PHONE_URL = "tel:+917428631825";

const navItems = [
  ["Profile", "about"],
  ["Work", "projects"],
  ["Practice", "practice"],
  ["Skills", "skills"],
  ["Contact", "contact"],
];

const projectCards = [
  {
    index: "01",
    title: "StockPilot",
    eyebrow: "Inventory · Purchasing · Sales OS",
    description:
      "A full-stack operating system for inventory, purchasing, and sales workflows, built around a transactional Java backend and production-minded access controls.",
    stack: ["Java 21", "Spring Boot", "PostgreSQL", "React 19", "JavaScript"],
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
];

const skillGroups = [
  {
    number: "01",
    title: "Languages",
    items: ["Java", "C++", "JavaScript", "Python", "SQL", "HTML/CSS"],
  },
  {
    number: "02",
    title: "Frameworks & Libraries",
    items: ["Spring Boot 3.x", "Spring Security 6.x", "Spring Data JPA", "Hibernate", "Node.js", "Express.js", "React"],
  },
  {
    number: "03",
    title: "Databases",
    items: ["PostgreSQL", "MongoDB", "MySQL"],
  },
  {
    number: "04",
    title: "Security",
    items: ["JWT (JJWT 0.12.x)", "BCrypt Hashing", "Role-Based Access Control (RBAC)"],
  },
  {
    number: "05",
    title: "DevOps & Tools",
    items: ["Git", "GitHub", "Maven", "Railway", "Vercel", "Runway"],
  },
  {
    number: "06",
    title: "CS Fundamentals",
    items: ["Data Structures & Algorithms", "DBMS", "Operating Systems", "Computer Networks", "OOP"],
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
            src="/assets/kavay-request-loop-logo.png"
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
          <img src="/assets/kavay-request-loop-logo.png" alt="" />
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
              <img src="/assets/kavay-request-loop-logo.png" alt="" />
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
            <img src="/assets/kavay-hero-service-route.png" alt="" />
            <div className="art-caption caption-client"><span>01</span> CLIENT</div>
            <div className="art-caption caption-service"><span>02</span> JAVA SERVICE</div>
            <div className="art-caption caption-store"><span>03</span> DATA STORE</div>
            <div className="route-packet packet-one" />
            <div className="route-packet packet-two" />
          </div>

          <div className="hero-footer">
            <p>Scroll to trace the route</p>
            <ArrowDown size={16} />
            <span>01 / 05</span>
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
            <p>A selected build that shows my current direction in Java backend engineering and production-minded system design.</p>
          </div>

          <div className="featured-project">
            <div className="featured-image">
              <img src="/assets/kavay-system-map.png" alt="Abstract service architecture illustration" />
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

        </section>

        <section id="practice" className="practice-section section-space" aria-labelledby="practice-title">
          <SectionLabel number="03" label="Deliberate practice" />
          <div className="practice-layout">
            <div className="practice-copy">
              <p className="eyebrow">Problem-solving rhythm</p>
              <h2 id="practice-title">Solved 500+ problems<br />on LeetCode.<br /><em>Still tracing</em> the next edge case.</h2>
              <p>
                Consistent data-structures and algorithms practice helps me reason through constraints, simplify complex paths, and approach backend work with sharper fundamentals.
              </p>
              <a href={LEETCODE_URL} target="_blank" rel="noreferrer" className="primary-cta">View LeetCode profile <ArrowUpRight size={17} /></a>
            </div>
            <div className="practice-visual">
              <img src="/assets/kavay-practice-map.png" alt="Abstract topographic map representing coding practice" />
              <div className="leetcode-card">
                <div><Code2 size={19} /><span>LEETCODE / C++</span></div>
                <strong>500+</strong>
                <p>problems solved</p>
                <a href={LEETCODE_URL} target="_blank" rel="noreferrer">Profile <ArrowUpRight size={13} /></a>
              </div>
            </div>
          </div>

          <div className="practice-stats" role="list" aria-label="Coding practice summary">
            <div role="listitem"><span>C++</span><p>Primary language</p></div>
            <div role="listitem"><span>DSA</span><p>Core focus</p></div>
            <div role="listitem"><span>Practice</span><p>Deliberate and consistent</p></div>
          </div>
        </section>

        <section id="skills" className="skills-section section-space" aria-labelledby="skills-title">
          <SectionLabel number="04" label="Technical skills" />
          <div className="skills-header">
            <div>
              <p className="eyebrow">Technical Skills</p>
              <h2 id="skills-title">A technical foundation for <em>reliable systems.</em></h2>
            </div>
            <div className="skills-context">
              <p>Technologies and concepts drawn from my coursework, coding practice, and the projects I am actively building.</p>
              <div><span>Patiala, India</span><span>Expected Jul 2028</span></div>
            </div>
          </div>
          <div className="skills-grid">
            {skillGroups.map((group) => (
              <article className="skill-group" key={group.title}>
                <div className="skill-group-head"><span>{group.number}</span><div /><h3>{group.title}</h3></div>
                <ul>
                  {group.items.map((skill) => <li key={skill}><i aria-hidden="true" />{skill}</li>)}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="contact-section" aria-labelledby="contact-title">
          <div className="contact-route" aria-hidden="true"><span /><i /><span /><i /><span /></div>
          <div className="contact-content">
            <p className="eyebrow">Next request</p>
            <h2 id="contact-title">Have an internship opportunity, project idea, or backend problem worth <em>solving?</em></h2>
            <div className="contact-directs">
              <div>
                <p className="contact-email-label">Personal email</p>
                <a href={EMAIL_URL} className="contact-email">kavaykhurana4@gmail.com <ArrowUpRight size={25} /></a>
              </div>
              <div>
                <p className="contact-email-label">Phone</p>
                <a href={PHONE_URL} className="contact-email">7428631825 <ArrowUpRight size={25} /></a>
              </div>
            </div>
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
