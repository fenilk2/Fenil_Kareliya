import Link from "next/link";
import CosmicCanvas from "@/components/CosmicCanvas";
import ScrollGradientText from "@/components/ScrollGradientText";
import { ArrowDownRight, ArrowUpRight, Code2, Fingerprint, Orbit, ShieldCheck, Sparkles } from "@/components/Icons";

const projects = [
  {
    number: "01",
    title: "CosmoVerse",
    category: "SCIENTIFIC SIMULATION",
    description:
      "An evolving cosmic simulation concept exploring how interactive 3D can make the scale and structure of the universe feel tangible.",
    tags: ["Three.js", "WebGL", "Scientific visualization"],
    mark: "CV",
    focus: "SPACE / PHYSICS",
    className: "project-cosmo",
  },
  {
    number: "02",
    title: "GravityFlip",
    category: "GAME DEVELOPMENT",
    description:
      "A gravity-driven game project focused on movement, level feel, and the satisfaction of turning a simple mechanic into a complete experience.",
    tags: ["Game systems", "Gameplay", "Iteration"],
    mark: "GF",
    focus: "PLAY / EXPERIMENT",
    className: "project-gravity",
  },
  {
    number: "03",
    title: "ScamShield India",
    category: "DIGITAL SAFETY",
    description:
      "A scam-awareness and detection project aimed at helping people think more carefully about suspicious messages, links, and online threats.",
    tags: ["Python", "Flask", "Security awareness"],
    mark: "SS",
    focus: "TRUST / PROTECTION",
    className: "project-shield",
  },
  {
    number: "04",
    title: "Cinematic Shorts",
    category: "VISUAL STORYTELLING",
    description:
      "A creative track for short-form cinematic edits, atmosphere, pacing, and visual storytelling across digital platforms.",
    tags: ["Editing", "Storytelling", "Short-form video"],
    mark: "CS",
    focus: "FRAME / FEELING",
    className: "project-cinema",
  },
];

const skills = [
  { name: "Python", level: "Learning & building", width: "54%" },
  { name: "Java", level: "Foundations", width: "42%" },
  { name: "C", level: "Foundations", width: "38%" },
  { name: "HTML & CSS", level: "Building interfaces", width: "60%" },
  { name: "Linux", level: "Exploring the environment", width: "43%" },
  { name: "AI prompting", level: "Practical experimentation", width: "64%" },
];

export default function Home() {
  return (
    <main className="site-shell">
      <CosmicCanvas />
      <div className="page-grain" aria-hidden="true" />
      <header className="site-header">
        <a className="wordmark" href="#home" aria-label="Fenil Kareliya home">
          <span className="wordmark-symbol">FK</span>
          <span>FENIL KARELIYA<span className="wordmark-dot">.</span></span>
        </a>
        <nav className="main-nav" aria-label="Main navigation">
          <Link href="/about/">About</Link>
          <Link href="/skills/">Skills</Link>
          <Link href="/journey/">Journey</Link>
          <Link href="/projects/">Projects</Link>
          <Link href="/contact/">Contact</Link>
        </nav>
        <Link className="header-cta" href="/contact/">Let&apos;s connect <ArrowUpRight size={14} /></Link>
      </header>

      <nav className="mobile-page-nav" aria-label="Explore portfolio pages">
        <Link href="/about/">About</Link><Link href="/skills/">Skills</Link><Link href="/journey/">Journey</Link><Link href="/projects/">Projects</Link><Link href="/contact/">Contact</Link>
      </nav>
      <section className="hero section-wrap" id="home">
        <div className="hero-copy">
          <div className="eyebrow"><span className="status-pulse" /> FIRST-YEAR IT STUDENT · CYBERSECURITY PATH</div>
          <h1>Curious by nature.<br /><ScrollGradientText as="span" variant="primary">Secure by design.</ScrollGradientText></h1>
          <p className="hero-subtitle">
            I&apos;m Fenil Kareliya — a <ScrollGradientText as="span" variant="subheading">cybersecurity-focused developer</ScrollGradientText> exploring code,
            creative technology, and the systems that shape our digital world.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#projects">Explore my work <ArrowDownRight size={16} /></a>
            <a className="button button-quiet" href="#about">Get to know me <ArrowUpRight size={15} /></a>
          </div>
          <div className="hero-proof">
            <span><ShieldCheck size={15} /> Security-minded</span>
            <span><Code2 size={15} /> Builder mentality</span>
            <span><Orbit size={15} /> Cosmic curiosity</span>
          </div>
        </div>
        <div className="hero-aside" aria-label="Personal motto">
          <div className="orbit-label label-top">LEARN / BUILD / EVOLVE</div>
          <div className="hero-orbit-art">
            <div className="orbit orbit-one" />
            <div className="orbit orbit-two" />
            <div className="orbit orbit-three" />
            <div className="planet-halo" />
            <div className="planet-core"><span>FK</span></div>
            <span className="orbit-moon moon-one" />
            <span className="orbit-moon moon-two" />
            <span className="orbit-spark spark-one">✦</span>
            <span className="orbit-spark spark-two">✧</span>
          </div>
          <div className="orbit-caption"><span className="caption-line" /> A work in progress. By design.</div>
          <div className="hero-aside-note">Building skills today.<br />Building possibilities for tomorrow.</div>
        </div>
        <a href="#about" className="scroll-cue"><span className="scroll-line" /> SCROLL TO EXPLORE</a>
      </section>

      <section className="intro-strip">
        <div className="section-wrap intro-strip-inner">
          <span className="strip-label">CURRENTLY EXPLORING</span>
          <div className="strip-items"><span>CYBERSECURITY</span><i /> <span>SOFTWARE DEVELOPMENT</span><i /> <span>3D WORLDS</span><i /> <span>VISUAL STORYTELLING</span></div>
        </div>
      </section>

      <section className="content-section section-wrap" id="about">
        <div className="section-kicker"><span>01</span> / THE PERSON BEHIND THE CODE</div>
        <div className="about-grid">
          <div>
            <h2><ScrollGradientText as="span" variant="secondary">More than a title.</ScrollGradientText><br /><span className="muted-heading">A mindset in motion.</span></h2>
          </div>
          <div className="about-copy">
            <p className="large-copy">I&apos;m a first-year IT student with a long-term goal: become a skilled cybersecurity specialist while building things that make people curious.</p>
            <p>I enjoy moving between worlds — writing code, exploring Linux, experimenting with AI prompts, developing games, creating cinematic shorts, and working on my fitness. I&apos;m naturally outgoing, value leadership, and like bringing energy to a team as much as learning independently.</p>
            <p>For me, growth is a practice: stay disciplined, ask better questions, make useful things, and turn ambition into consistent work. I&apos;m early in the journey, and I&apos;m here to document the progress honestly.</p>
            <div className="trait-row"><span><Sparkles size={15} /> Curious</span><span><Fingerprint size={15} /> Self-driven</span><span><Orbit size={15} /> Future-focused</span></div>
            <div className="signature-note">
              <span className="signature-mark">FK<span>↗</span></span>
              <div><span className="signature-label">PERSONAL OPERATING PRINCIPLE</span><p>Stay curious. Build with intention. Learn in public. Let consistency speak louder than claims.</p></div>
            </div>
          </div>
        </div>
      </section>

      <section className="skills-section" id="skills">
        <div className="section-wrap">
          <div className="section-kicker"><span>02</span> / THE TOOLKIT</div>
          <div className="section-heading-row">
            <h2><ScrollGradientText as="span" variant="secondary">Learning the tools.</ScrollGradientText><br /><span className="muted-heading">Earning the skill.</span></h2>
            <p className="section-side-copy">These are developing foundations, not claims of mastery. The goal is to keep learning by building, testing, and improving.</p>
          </div>
          <div className="skills-grid">
            {skills.map((skill) => (
              <div className="skill-card" key={skill.name}>
                <div className="skill-card-top"><span>{skill.name}</span><span className="skill-level">{skill.level}</span></div>
                <div className="skill-track"><span style={{ width: skill.width }} /></div>
              </div>
            ))}
          </div>
          <div className="skills-footnote"><span className="tiny-star">✦</span> Primary direction: cybersecurity · Currently building fundamentals through practice.</div>
        </div>
      </section>

      <section className="journey-section content-section section-wrap" id="journey">
        <div className="section-kicker"><span>03</span> / THE JOURNEY SO FAR</div>
        <div className="section-heading-row journey-heading">
          <h2><ScrollGradientText as="span" variant="secondary">Not a finished story.</ScrollGradientText><br /><span className="muted-heading">A direction I keep choosing.</span></h2>
          <p className="section-side-copy">No inflated titles or invented milestones — just the areas I’m exploring and the kind of builder I’m working to become.</p>
        </div>
        <div className="journey-track">
          <article className="journey-step">
            <span className="journey-index">01</span><span className="journey-node"><Code2 size={16} /></span>
            <div className="journey-step-copy"><span className="journey-status">FOUNDATIONS</span><h3>Learn the fundamentals</h3><p>Build confidence with programming, web foundations, Linux, and the habits that make technical learning sustainable.</p></div>
          </article>
          <article className="journey-step">
            <span className="journey-index">02</span><span className="journey-node"><Orbit size={16} /></span>
            <div className="journey-step-copy"><span className="journey-status">BUILD & EXPLORE</span><h3>Turn curiosity into projects</h3><p>Use CosmoVerse, GravityFlip, and other experiments to learn by making, testing, revising, and documenting.</p></div>
          </article>
          <article className="journey-step">
            <span className="journey-index">03</span><span className="journey-node"><ShieldCheck size={16} /></span>
            <div className="journey-step-copy"><span className="journey-status">CURRENT DIRECTION</span><h3>Think with a security mindset</h3><p>Study how systems work, how people encounter online risks, and how careful design can support safer digital experiences.</p></div>
          </article>
          <article className="journey-step">
            <span className="journey-index">04</span><span className="journey-node"><Fingerprint size={16} /></span>
            <div className="journey-step-copy"><span className="journey-status">LONG-TERM GOAL</span><h3>Grow into cybersecurity</h3><p>Keep strengthening the fundamentals with the aim of becoming a skilled cybersecurity specialist — one honest step at a time.</p></div>
          </article>
        </div>
      </section>

      <section className="signal-section">
        <div className="section-wrap signal-layout">
          <div className="signal-intro">
            <div className="section-kicker"><span>04</span> / CURRENT SIGNAL</div>
            <h2><ScrollGradientText as="span" variant="secondary">A builder’s mindset.</ScrollGradientText><br /><span className="muted-heading">A defender’s direction.</span></h2>
            <p className="section-side-copy">A snapshot of what I’m learning and how I like to work — not a list of certifications or claims of expertise.</p>
          </div>
          <div className="terminal-card" aria-label="Current learning focus panel">
            <div className="terminal-topbar"><div className="terminal-dots"><i /><i /><i /></div><span>FK / LEARNING-CONSOLE</span><span className="terminal-live"><i /> IN PROGRESS</span></div>
            <div className="terminal-body">
              <p className="terminal-line"><span>fenil@cosmos:~$</span> focus --current</p>
              <div className="terminal-output"><span className="terminal-key">primary_direction</span><span className="terminal-value">cybersecurity</span></div>
              <div className="terminal-output"><span className="terminal-key">learning_mode</span><span className="terminal-value">build · test · reflect</span></div>
              <div className="terminal-output"><span className="terminal-key">creative_side</span><span className="terminal-value">3D · games · visual stories</span></div>
              <div className="terminal-output"><span className="terminal-key">approach</span><span className="terminal-value">curiosity + consistency</span></div>
              <p className="terminal-line terminal-prompt"><span>fenil@cosmos:~$</span> <b aria-hidden="true">_</b></p>
            </div>
            <div className="terminal-footer"><span>STATUS: LEARNING IN PUBLIC</span><span>NO SHORTCUTS. JUST ITERATION.</span></div>
          </div>
        </div>
      </section>

      <section className="content-section section-wrap projects-section" id="projects">
        <div className="section-kicker"><span>05</span> / SELECTED UNIVERSES</div>
        <div className="section-heading-row">
          <h2><ScrollGradientText as="span" variant="secondary">Ideas become real</ScrollGradientText><br /><span className="muted-heading">one build at a time.</span></h2>
          <p className="section-side-copy">A selection of projects across simulation, game development, digital safety, and visual storytelling.</p>
        </div>
        <div className="projects-grid">
          {projects.map((project) => (
            <article className={`project-card ${project.className}`} key={project.number}>
              <div className="project-art" aria-hidden="true">
                <div className="project-art-grid" />
                <div className="project-art-visual">
                  <span className="visual-ring visual-ring-one" />
                  <span className="visual-ring visual-ring-two" />
                  <span className="visual-ring visual-ring-three" />
                  <span className="visual-beam" />
                  <span className="visual-satellite" />
                </div>
                <div className="project-art-orbit" />
                <div className="project-art-core">{project.mark}</div>
                <span className="project-number">PROJECT / {project.number}</span>
                <Link className="project-open" href={`/projects/${project.title.toLowerCase().replaceAll(" ", "-")}/`} aria-label={`Open ${project.title} project brief`}><ArrowUpRight size={17} /></Link>
                <span className="project-art-caption">{project.focus}</span>
                <span className="project-art-index">FK — LAB NOTES</span>
              </div>
              <div className="project-content">
                <div className="project-category"><span className="project-category-dot" />{project.category}</div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="tag-row">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                <div className="project-footer"><span>EXPLORATION TRACK</span><Link href={`/projects/${project.title.toLowerCase().replaceAll(" ", "-")}/`}>VIEW PROJECT BRIEF <ArrowUpRight size={13} /></Link></div>
              </div>
            </article>
          ))}
        </div>
        <p className="project-disclaimer">Project summaries describe current directions. Add repository links, demos, and verified milestones as each project is ready to share.</p>
      </section>

      <section className="motto-band">
        <div className="section-wrap motto-inner">
          <span className="motto-label">THE PRINCIPLE</span>
          <p>Discipline creates momentum.<br /><span>Curiosity creates direction.</span></p>
          <div className="motto-orb" aria-hidden="true" />
        </div>
      </section>

      <section className="content-section section-wrap contact-section" id="contact">
        <div className="section-kicker"><span>06</span> / OPEN CHANNEL</div>
        <div className="contact-layout">
          <div><h2>Let&apos;s build<br /><ScrollGradientText as="span" variant="primary">something meaningful.</ScrollGradientText></h2><p className="contact-copy">Interested in cybersecurity, creative technology, collaboration, or sharing ideas? I&apos;m open to connecting and learning from people who build.</p></div>
          <div className="contact-card">
            <span className="contact-card-label">FIND ME ONLINE</span>
            <a href="https://www.instagram.com/fenilkareliya/" target="_blank" rel="noopener noreferrer">Instagram <ArrowUpRight size={16} /></a>
            <a href="https://github.com/fenilk2" target="_blank" rel="noopener noreferrer">GitHub <ArrowUpRight size={16} /></a>
            <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">LinkedIn <ArrowUpRight size={16} /></a>
            <p>Instagram is linked to your provided profile. Replace the GitHub and LinkedIn destinations with your exact profiles before publishing.</p>
            <div className="contact-card-note"><ShieldCheck size={15} /><span>Open to learning, thoughtful collaboration, and creative technology conversations.</span></div>
          </div>
        </div>
      </section>

      <footer className="site-footer section-wrap">
        <a className="wordmark" href="#home"><span className="wordmark-symbol">FK</span><span>FENIL KARELIYA<span className="wordmark-dot">.</span></span></a>
        <span>BUILT WITH CURIOSITY · UPDATED THROUGH ACTION</span>
        <a href="#home" className="back-top">BACK TO TOP ↑</a>
      </footer>
    </main>
  );
}
