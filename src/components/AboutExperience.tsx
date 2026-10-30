"use client";

import Link from "next/link";
import ScrollGradientText from "@/components/ScrollGradientText";
import {
  ArrowDownRight,
  ArrowUpRight,
  Code2,
  Orbit,
  ShieldCheck,
  Sparkles,
  Film,
  Activity,
  Brain,
  Terminal,
} from "@/components/Icons";
import { projects } from "@/components/projectData";

interface Principle {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  icon: typeof Sparkles;
  tone: "cyan" | "mint" | "blue" | "violet";
}

const principles: Principle[] = [
  {
    number: "01",
    title: "Curiosity",
    subtitle: "INQUIRY & INVESTIGATION",
    description:
      "Ask questions, investigate systems, and understand how things work beneath the surface rather than accepting interfaces at face value.",
    icon: Sparkles,
    tone: "cyan",
  },
  {
    number: "02",
    title: "Build to Learn",
    subtitle: "PRACTICAL IMPLEMENTATION",
    description:
      "Turn ideas into working projects and learn directly from implementation challenges, architectural friction, and debugging.",
    icon: Code2,
    tone: "mint",
  },
  {
    number: "03",
    title: "Think Securely",
    subtitle: "DEFENSIVE MINDSET",
    description:
      "Develop an awareness of security, reliability, and the importance of protecting digital systems and the people who rely on them.",
    icon: ShieldCheck,
    tone: "blue",
  },
  {
    number: "04",
    title: "Keep Evolving",
    subtitle: "CONTINUOUS ADAPTATION",
    description:
      "Treat skills as a continuous learning process rather than a finished destination. Show up with discipline, practice in public, and let consistency speak.",
    icon: Orbit,
    tone: "violet",
  },
];

interface Interest {
  title: string;
  tag: string;
  description: string;
  connection: string;
  icon: typeof ShieldCheck;
  tone: "blue" | "cyan" | "rose" | "mint" | "violet";
}

const interests: Interest[] = [
  {
    title: "Cybersecurity",
    tag: "DEFENSE & THREAT AWARENESS",
    description:
      "Studying how networks communicate, investigating scam patterns and phishing deception, and developing a defensive mindset to protect digital systems.",
    connection: "Explored in ScamShield India & BSc IT coursework",
    icon: ShieldCheck,
    tone: "blue",
  },
  {
    title: "Development",
    tag: "SOFTWARE & INTERACTIVE SYSTEMS",
    description:
      "Building web applications, interactive experiments, and utilities that turn complex concepts into responsive, functional tools.",
    connection: "Explored across web projects and algorithmic practice",
    icon: Code2,
    tone: "cyan",
  },
  {
    title: "Cinematography",
    tag: "COMPOSITION & PACING",
    description:
      "Exploring visual framing, lighting atmosphere, color mood, and editing rhythms to convey emotion and story through short-form visual narratives.",
    connection: "Explored in Cinematic Shorts creative track",
    icon: Film,
    tone: "rose",
  },
  {
    title: "Fitness",
    tag: "DISCIPLINE & RESILIENCE",
    description:
      "Maintaining daily workouts to build physical resilience, mental clarity, routine consistency, and the stamina required for deep technical focus.",
    connection: "Personal operating foundation",
    icon: Activity,
    tone: "mint",
  },
  {
    title: "Creative Problem-Solving",
    tag: "INTERDISCIPLINARY THINKING",
    description:
      "Connecting analytical engineering with imaginative design—bridging technical logic, visual simulation, and human empathy.",
    connection: "Explored in CosmoVerse & GravityFlip",
    icon: Brain,
    tone: "violet",
  },
];

const projectRepresentations: Record<string, { aspect: string; role: string }> = {
  cosmoverse: {
    aspect: "Scientific curiosity, cosmic scale, and interactive 3D web graphics.",
    role: "SCIENTIFIC EXPLORATION",
  },
  gravityflip: {
    aspect: "Gameplay systems, mechanics design, and the iteration behind player feel.",
    role: "SYSTEMS & PHYSICS",
  },
  "scamshield-india": {
    aspect: "Cybersecurity awareness, public safety, and defensive message analysis.",
    role: "DIGITAL SAFETY",
  },
  "cinematic-shorts": {
    aspect: "Atmosphere, pacing, color mood, and visual storytelling as a creative craft.",
    role: "VISUAL CRAFT",
  },
};

export default function AboutExperience() {
  return (
    <div className="about-experience">
      {/* SECTION A: Cinematic About Hero */}
      <section className="about-hero-section" aria-label="About hero introduction">
        <div className="about-hero-layout">
          <div className="about-hero-copy">
            <div className="about-kicker-pill">
              <span className="status-pulse" />
              <span>PERSONAL PROFILE / 011</span>
            </div>

            <h1 className="about-display-headline">
              Beyond the
              <br />
              <ScrollGradientText as="span" variant="primary">Interface.</ScrollGradientText>
            </h1>

            <p className="about-hero-statement">
              <em>
                <ScrollGradientText as="span" variant="subheading">
                  Curiosity drives the questions. Code turns ideas into reality. Cybersecurity
                  teaches us to understand and protect the systems we build.
                </ScrollGradientText>
              </em>
            </p>

            <p className="about-hero-summary">
              I’m Fenil Kareliya — a first-year BSc IT student, builder, and creative technologist
              exploring the intersections of software, cybersecurity, and interactive digital
              experiences. This is an exploration of the person behind the code: my story, core
              principles, personal interests, and future direction.
            </p>

            <div className="about-hero-actions">
              <a className="button button-primary" href="#my-story">
                Explore My Story <ArrowDownRight size={15} />
              </a>
              <Link className="button button-quiet" href="/journey/">
                The Evolution Timeline <ArrowUpRight size={14} />
              </Link>
              <Link className="button button-quiet" href="/projects/">
                Selected Projects <ArrowUpRight size={14} />
              </Link>
            </div>

            <div className="about-hero-meta-strip" aria-label="Profile focus markers">
              <span>
                <i /> FIRST-YEAR BSc IT
              </span>
              <span>
                <i /> CYBERSECURITY FOCUS
              </span>
              <span>
                <i /> BUILDER MENTALITY
              </span>
              <span>
                <i /> CREATIVE CRAFT
              </span>
            </div>
          </div>

          {/* Abstract Cosmic Avatar & Identity Beacon */}
          <div className="about-avatar-stage" aria-label="Cosmic abstract identity visual">
            <div className="about-avatar-glow" aria-hidden="true" />
            <div className="about-avatar-ring ring-alpha" aria-hidden="true" />
            <div className="about-avatar-ring ring-beta" aria-hidden="true" />
            <div className="about-avatar-ring ring-gamma" aria-hidden="true" />

            <div className="about-avatar-core">
              <div className="avatar-hud-reticle" aria-hidden="true" />
              <div className="avatar-core-inner">
                <span className="avatar-monogram">FK</span>
                <span className="avatar-caption">OPERATOR</span>
                <span className="avatar-subcaption">SYSTEMS // ONLINE</span>
              </div>
            </div>

            <span className="avatar-satellite sat-1" aria-hidden="true" />
            <span className="avatar-satellite sat-2" aria-hidden="true" />

            {/* Telemetry HUD Labels */}
            <div className="avatar-hud-tag tag-top">ID // FK-011</div>
            <div className="avatar-hud-tag tag-bottom">COORD // 23°N 72°E</div>
            <div className="avatar-hud-tag tag-left">PATH // SEC_ENG</div>
            <div className="avatar-hud-tag tag-right">STATUS // ACTIVE</div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <a href="#my-story" className="about-scroll-cue" aria-label="Scroll down to personal story">
          <span className="cue-line" />
          <span>SCROLL TO EXPLORE STORY</span>
          <span className="cue-arrow">↓</span>
        </a>
      </section>

      {/* SECTION B: My Story */}
      <section className="about-story-section" id="my-story" aria-label="My personal story">
        <div className="section-kicker">
          <span>01</span> / THE HUMAN FACTOR
        </div>

        <div className="about-story-grid">
          <div className="about-story-text-column">
            <h2 className="story-heading">
              A mind built <ScrollGradientText as="span" variant="secondary">to explore.</ScrollGradientText>
            </h2>

            <div className="story-narrative-paragraphs">
              <p className="story-lead">
                I am a first-year BSc IT student pursuing a focused path in cybersecurity. For me,
                technology has never been just about consuming digital experiences—it has always
                been about understanding what happens under the surface, asking how systems operate,
                and discovering how ideas become working code.
              </p>

              <p>
                Currently, my days are spent building strong foundations across programming and
                systems: developing logic and scripting in Python, object-oriented principles in
                Java, procedural syntax and memory models in C, responsive interfaces with HTML/CSS,
                navigating Linux terminal environments, and using AI prompting with disciplined
                context and verification.
              </p>

              <p>
                I learn most effectively by building. Theory provides the framework, but turning an
                idea into a working experiment—whether that is simulating cosmic scales in 3D,
                tuning physics for game mechanics, or exploring suspicious message detection—is
                where real problem-solving, debugging, and genuine growth occur.
              </p>

              <p>
                My long-term ambition is to become a cybersecurity specialist: someone who
                understands how software is built from the ground up, how digital threats propagate,
                and how to design resilient systems that safeguard people. I approach this as a
                continuous evolution—one honest, dedicated step at a time.
              </p>
            </div>

            <div className="story-traits-row" aria-label="Key personal attributes">
              <span>
                <Sparkles size={14} /> Curious Investigator
              </span>
              <span>
                <Code2 size={14} /> Builder Mentality
              </span>
              <span>
                <ShieldCheck size={14} /> Defensive Posture
              </span>
              <span>
                <Orbit size={14} /> Creative Technologist
              </span>
            </div>
          </div>

          {/* Complementary Telemetry Console Card */}
          <aside className="about-story-console" aria-label="Personal identity dossier">
            <div className="console-header">
              <div className="console-lights">
                <i />
                <i />
                <i />
              </div>
              <span className="console-title">FK / DOSSIER / TELEMETRY</span>
              <span className="console-status-pill">
                <i className="status-pulse" /> VERIFIED
              </span>
            </div>

            <div className="console-body">
              <div className="console-row">
                <span className="console-key">current_status</span>
                <span className="console-val">First-Year BSc IT Student</span>
              </div>
              <div className="console-row">
                <span className="console-key">primary_focus</span>
                <span className="console-val highlight-blue">Cybersecurity &amp; Systems</span>
              </div>
              <div className="console-row">
                <span className="console-key">developing_stack</span>
                <span className="console-val">Python · Java · C · HTML/CSS · Linux</span>
              </div>
              <div className="console-row">
                <span className="console-key">methodology</span>
                <span className="console-val highlight-cyan">Build → Test → Verify → Iterate</span>
              </div>
              <div className="console-row">
                <span className="console-key">creative_lens</span>
                <span className="console-val">3D Simulation · Games · Cinematography</span>
              </div>
              <div className="console-row">
                <span className="console-key">daily_discipline</span>
                <span className="console-val">Coding practice + Fitness training</span>
              </div>
              <div className="console-row">
                <span className="console-key">long_term_goal</span>
                <span className="console-val highlight-violet">Cybersecurity Specialist</span>
              </div>

              <div className="console-radar-box">
                <div className="console-radar-ring" aria-hidden="true" />
                <div className="console-radar-scan" aria-hidden="true" />
                <div className="console-radar-core">
                  <Terminal size={18} />
                </div>
                <div className="console-radar-caption">
                  <span>DISCIPLINE CREATES MOMENTUM</span>
                  <small>CURIOSITY CREATES DIRECTION</small>
                </div>
              </div>
            </div>

            <div className="console-footer">
              <span>SECURITY FIRST · NO SHORTCUTS</span>
              <span>EST. 2024</span>
            </div>
          </aside>
        </div>
      </section>

      {/* SECTION C: The Principles I Build By */}
      <section className="about-principles-section" aria-label="The principles I build by">
        <div className="section-heading-row">
          <div>
            <div className="section-kicker">
              <span>02</span> / OPERATING PRINCIPLES
            </div>
            <h2 className="section-title">
              The Principles <ScrollGradientText as="span" variant="secondary">I Build By.</ScrollGradientText>
            </h2>
          </div>
          <p className="section-side-copy">
            Not labels to collect, but internal standards I hold my work against every time I write
            code or investigate systems.
          </p>
        </div>

        <div className="principles-grid">
          {principles.map((principle) => {
            const PrincipleIcon = principle.icon;
            return (
              <article
                key={principle.number}
                className={`principle-card tone-${principle.tone}`}
                tabIndex={0}
              >
                <div className="principle-card-top">
                  <span className="principle-number">{principle.number}</span>
                  <div className="principle-icon-wrapper">
                    <PrincipleIcon size={20} />
                  </div>
                </div>

                <span className="principle-subtitle">{principle.subtitle}</span>
                <h3 className="principle-title">{principle.title}</h3>
                <p className="principle-description">{principle.description}</p>

                <div className="principle-card-accent-line" aria-hidden="true" />
              </article>
            );
          })}
        </div>
      </section>

      {/* SECTION D: Interests Beyond Code */}
      <section className="about-interests-section" aria-label="Interests beyond code">
        <div className="section-heading-row">
          <div>
            <div className="section-kicker">
              <span>03</span> / EXPANDED SPECTRUM
            </div>
            <h2 className="section-title">
              Interests <ScrollGradientText as="span" variant="secondary">Beyond Code.</ScrollGradientText>
            </h2>
          </div>
          <p className="section-side-copy">
            Technology is central, but perspective is shaped by what happens away from the editor:
            visual storytelling, physical discipline, and curiosity.
          </p>
        </div>

        <div className="interests-grid">
          {interests.map((interest) => {
            const InterestIcon = interest.icon;
            return (
              <article
                key={interest.title}
                className={`interest-card tone-${interest.tone}`}
                tabIndex={0}
              >
                <div className="interest-header">
                  <div className="interest-icon-badge">
                    <InterestIcon size={18} />
                  </div>
                  <span className="interest-tag">{interest.tag}</span>
                </div>

                <h3 className="interest-title">{interest.title}</h3>
                <p className="interest-description">{interest.description}</p>

                <div className="interest-footer">
                  <span className="interest-connection-label">PORTFOLIO CONNECTION</span>
                  <p className="interest-connection-text">{interest.connection}</p>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* SECTION E: Projects That Represent Me */}
      <section className="about-projects-section" aria-label="Projects that represent me">
        <div className="section-heading-row">
          <div>
            <div className="section-kicker">
              <span>04</span> / REPRESENTATIVE MISSIONS
            </div>
            <h2 className="section-title">
              Projects That <ScrollGradientText as="span" variant="secondary">Represent Me.</ScrollGradientText>
            </h2>
          </div>
          <p className="section-side-copy">
            Real builds from the repository that reflect my different facets: science simulation,
            game mechanics, digital safety, and creative video.
          </p>
        </div>

        <div className="representative-projects-grid">
          {projects.map((project) => {
            const rep = projectRepresentations[project.slug];
            return (
              <article
                key={project.slug}
                className={`rep-project-card ${project.className}`}
              >
                <div className="rep-project-art" aria-hidden="true">
                  <div className="rep-art-orbit" />
                  <div className="rep-art-core">{project.mark}</div>
                  <span className="rep-number">PROJECT / {project.number}</span>
                  <span className="rep-role">{rep?.role || project.category}</span>
                </div>

                <div className="rep-project-content">
                  <div className="rep-category-row">
                    <span className="rep-category-dot" />
                    <span>{project.category}</span>
                  </div>

                  <h3 className="rep-title">{project.title}</h3>

                  <div className="rep-aspect-box">
                    <span className="aspect-label">WHAT THIS REPRESENTS</span>
                    <p>{rep?.aspect || project.description}</p>
                  </div>

                  <p className="rep-brief">{project.description}</p>

                  <div className="rep-tag-row">
                    {project.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>

                  <div className="rep-footer">
                    <Link
                      href={`/projects/${project.slug}/`}
                      className="rep-link"
                      aria-label={`Open case brief for ${project.title}`}
                    >
                      <span>INSPECT CASE BRIEF</span>
                      <ArrowUpRight size={14} />
                    </Link>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* SECTION F: Personal Direction */}
      <section className="about-direction-section" aria-label="Personal forward-looking direction">
        <div className="direction-panel">
          <div className="direction-decorations" aria-hidden="true">
            <div className="direction-orb orb-1" />
            <div className="direction-orb orb-2" />
            <div className="direction-ring ring-1" />
            <div className="direction-ring ring-2" />
          </div>

          <div className="direction-content">
            <div className="section-kicker">
              <span>05</span> / THE HORIZON
            </div>

            <h2 className="direction-title">
              Still becoming.
              <br />
              <ScrollGradientText as="span" variant="primary">Always building.</ScrollGradientText>
            </h2>

            <p className="direction-statement">
              The journey is not about claiming finished expertise—it is a commitment to show up,
              build with intention, and let discipline speak over time.
            </p>

            <div className="direction-pillars-grid">
              <div className="direction-pillar">
                <div className="pillar-num">01</div>
                <h4>Deepen Cybersecurity Knowledge</h4>
                <p>
                  Study network architectures, Linux system security, and defensive engineering
                  without taking shortcuts.
                </p>
              </div>

              <div className="direction-pillar">
                <div className="pillar-num">02</div>
                <h4>Strengthen Systems Fundamentals</h4>
                <p>
                  Master low-level programming concepts, algorithmic logic, and resilient backend
                  data flows.
                </p>
              </div>

              <div className="direction-pillar">
                <div className="pillar-num">03</div>
                <h4>Build Technically Ambitious Software</h4>
                <p>
                  Create reliable, verified tools and simulations that solve real problems and
                  empower users.
                </p>
              </div>

              <div className="direction-pillar">
                <div className="pillar-num">04</div>
                <h4>Bridge Security with Creative Tech</h4>
                <p>
                  Explore the intersection of security awareness, interactive 3D simulations, and
                  cinematic visual storytelling.
                </p>
              </div>
            </div>

            <div className="direction-actions-row">
              <Link className="button button-primary" href="/journey/">
                The Evolution Timeline <ArrowUpRight size={15} />
              </Link>
              <Link className="button button-quiet" href="/projects/">
                View Selected Projects <ArrowUpRight size={15} />
              </Link>
              <Link className="button button-quiet" href="/skills/">
                Review Toolkit &amp; Skills <ArrowUpRight size={15} />
              </Link>
              <Link className="button button-quiet" href="/contact/">
                Start A Conversation <ArrowUpRight size={15} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
