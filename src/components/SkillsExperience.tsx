"use client";

import { useState, useMemo, useRef, useCallback } from "react";
import Link from "next/link";
import ScrollGradientText from "@/components/ScrollGradientText";
import {
  Code2,
  Terminal,
  ShieldCheck,
  Layers,
  Orbit,
  ArrowUpRight,
  Brain,
  Target,
  Sparkles,
  Compass,
  ArrowDownRight
} from "@/components/Icons";

export type SkillCategory = "Programming" | "Web Development" | "Systems" | "Workflow";
export type FilterType = "All Skills" | SkillCategory;

export interface SkillItem {
  id: string;
  name: string;
  category: SkillCategory;
  status: string;
  symbol: string;
  accent: "cyan" | "amber" | "violet" | "mint" | "sky" | "blue" | "rose";
  tagline: string;
  description: string;
  usedFor: string;
  practicalConnection: string;
  relatedProject?: {
    slug: string;
    title: string;
    label: string;
  };
  nextFocus: string;
  svgPos: { x: number; y: number };
}

export interface SkillConnection {
  from: string;
  to: string;
}

const SKILLS_DATA: SkillItem[] = [
  {
    id: "python",
    name: "Python",
    category: "Programming",
    status: "Learning & Building",
    symbol: "Py",
    accent: "cyan",
    tagline: "Automation · Logic · Security Utilities",
    description: "Learning a versatile, high-level programming language for automation, scripting, backend logic, and security-related experiments.",
    usedFor: "Developing automated utility scripts, parsing data streams, implementing backend routing, and constructing algorithmic detection heuristics.",
    practicalConnection: "Applied in ScamShield India for message parsing and heuristic classification logic, alongside ongoing automation scripting exercises.",
    relatedProject: {
      slug: "scamshield-india",
      title: "ScamShield India",
      label: "View Scam Detection Project"
    },
    nextFocus: "Deepen socket programming basics, practice modular function design, and refine algorithmic data structures.",
    svgPos: { x: 200, y: 130 }
  },
  {
    id: "java",
    name: "Java",
    category: "Programming",
    status: "Building Foundations",
    symbol: "Ja",
    accent: "amber",
    tagline: "OOP · Core Syntax · Robust Architecture",
    description: "Developing programming fundamentals and understanding structured object-oriented application design.",
    usedFor: "Understanding class hierarchies, encapsulation, interfaces, exception handling, and algorithmic problem-solving within coursework.",
    practicalConnection: "Formed the foundational core of BSc IT programming modules, emphasizing strict typing and structured engineering principles.",
    nextFocus: "Practice Java Collections framework, abstract classes, interface polymorphism, and small console architecture utilities.",
    svgPos: { x: 380, y: 80 }
  },
  {
    id: "c",
    name: "C",
    category: "Programming",
    status: "Building Foundations",
    symbol: "C",
    accent: "violet",
    tagline: "Low-level · Memory Management · Hardware Interface",
    description: "Exploring low-level programming concepts, memory allocation, and how software interacts directly with system hardware.",
    usedFor: "Understanding raw pointers, memory addressing, compilation pipelines, structs, and the execution model beneath high-level languages.",
    practicalConnection: "Vital for building cybersecurity intuition regarding buffer boundaries, memory layouts, and binary execution mechanics.",
    nextFocus: "Strengthen dynamic memory allocation (malloc/free), pointer arithmetic, struct modeling, and terminal debugging with GDB.",
    svgPos: { x: 590, y: 110 }
  },
  {
    id: "html",
    name: "HTML",
    category: "Web Development",
    status: "Building Interfaces",
    symbol: "HTML",
    accent: "mint",
    tagline: "Semantic Markup · Accessibility · DOM Hierarchy",
    description: "Building the semantic structure of modern web pages and digital interfaces with standards-compliant markup.",
    usedFor: "Designing accessible document trees, landmark navigation, SEO-friendly metadata, and clean component hierarchies.",
    practicalConnection: "The structural foundation utilized across CosmoVerse, GravityFlip game UI menus, and this personal portfolio interface.",
    relatedProject: {
      slug: "cosmoverse",
      title: "CosmoVerse",
      label: "View 3D Simulation Interface"
    },
    nextFocus: "Master advanced ARIA roles, accessible live regions, and semantic form handling across diverse screen readers.",
    svgPos: { x: 230, y: 350 }
  },
  {
    id: "css",
    name: "CSS",
    category: "Web Development",
    status: "Building Interfaces",
    symbol: "CSS",
    accent: "sky",
    tagline: "Responsive Layouts · Tokens · Cosmic Aesthetics",
    description: "Developing layouts, responsive designs, custom design token systems, and interactive presentation.",
    usedFor: "Crafting responsive Grid and Flexbox layouts, CSS variables, glassmorphic atmospheric effects, and keyframe animations.",
    practicalConnection: "The visual backbone powering the cosmic aesthetic, orbital HUD frames, and multi-breakpoint responsive layouts in all portfolio pages.",
    relatedProject: {
      slug: "gravityflip",
      title: "GravityFlip",
      label: "View Game Interface Design"
    },
    nextFocus: "Explore CSS Subgrid, performant GPU-accelerated compositing, and comprehensive prefers-reduced-motion responsive design.",
    svgPos: { x: 440, y: 390 }
  },
  {
    id: "linux",
    name: "Linux",
    category: "Systems",
    status: "Exploring & Practicing",
    symbol: "$_",
    accent: "blue",
    tagline: "CLI Workflows · File Permissions · System Environments",
    description: "Building familiarity with the command line, POSIX environments, and system tools essential for development and cybersecurity.",
    usedFor: "Navigating filesystems, managing processes, configuring file permissions, environment variables, and executing CLI utility chains.",
    practicalConnection: "Primary operating environment for BSc IT cybersecurity coursework, server configurations, and defensive security experimentation.",
    nextFocus: "Deepen knowledge of permission masking (chmod/chown), SSH key management, bash scripting, and process inspection with systemctl.",
    svgPos: { x: 670, y: 340 }
  },
  {
    id: "ai-prompting",
    name: "AI Prompting",
    category: "Workflow",
    status: "Practicing & Refining",
    symbol: "✳",
    accent: "rose",
    tagline: "Structured Briefs · Iterative Refinement · Output Verification",
    description: "Practicing structured instructions, constraint specification, and iterative problem-solving with AI-assisted workflows.",
    usedFor: "Rapid prototyping, investigating unfamiliar technical documentation, exploring code variations, and generating test cases.",
    practicalConnection: "Applied to accelerate architectural planning, brainstorm visual interaction patterns, and conduct rigorous code reviews.",
    relatedProject: {
      slug: "cinematic-shorts",
      title: "Cinematic Shorts",
      label: "View Creative Project Brief"
    },
    nextFocus: "Refine multi-step prompt conditioning, constraint modeling, and rigorous verification of AI-generated logic before integration.",
    svgPos: { x: 700, y: 200 }
  }
];

const CONSTELLATION_CONNECTIONS: SkillConnection[] = [
  { from: "python", to: "java" },
  { from: "java", to: "c" },
  { from: "c", to: "linux" },
  { from: "python", to: "html" },
  { from: "html", to: "css" },
  { from: "python", to: "linux" },
  { from: "python", to: "ai-prompting" },
  { from: "ai-prompting", to: "css" }
];

interface Pathway {
  id: string;
  number: string;
  title: string;
  description: string;
  skillIds: string[];
  nextStep: string;
}

const LEARNING_PATHWAYS: Pathway[] = [
  {
    id: "pathway-programming",
    number: "01",
    title: "Programming Foundations",
    description: "Building core problem-solving logic and exploring multiple paradigms—from high-level Python scripting and Java object-oriented design to low-level C memory models.",
    skillIds: ["python", "java", "c"],
    nextStep: "Implement fundamental algorithms and basic data structures across both managed and low-level paradigms."
  },
  {
    id: "pathway-web",
    number: "02",
    title: "Building for the Web",
    description: "Constructing modern, accessible, and responsive digital interfaces with semantic HTML structure and finely crafted CSS visual systems.",
    skillIds: ["html", "css"],
    nextStep: "Build accessible component architectures using semantic landmarks, fluid typography, and zero-runtime styles."
  },
  {
    id: "pathway-systems",
    number: "03",
    title: "Systems and Security",
    description: "Developing system familiarity, POSIX command-line fluency, and understanding how software, operating system kernels, and memory boundaries interact.",
    skillIds: ["linux", "c", "python"],
    nextStep: "Deepen Linux navigation, process management, file permissions, and examine how OS architectures isolate processes."
  },
  {
    id: "pathway-workflow",
    number: "04",
    title: "Intelligent Workflow",
    description: "Adopting disciplined development workflows: formulating precise technical briefs, exploring alternative implementations, and critically verifying all generated code.",
    skillIds: ["ai-prompting", "python"],
    nextStep: "Refine prompt constraint modeling, test generated snippets thoroughly, and automate repetitive local dev workflows."
  }
];

interface NextVector {
  id: string;
  number: string;
  title: string;
  focus: string;
  detail: string;
}

const NEXT_DEVELOPMENT_VECTORS: NextVector[] = [
  {
    id: "vector-python",
    number: "01",
    title: "Strengthen Python & Core Foundations",
    focus: "Code Quality & Algorithms",
    detail: "Advance beyond basic scripts toward clean modular architecture, object-oriented principles, and standard library mastery."
  },
  {
    id: "vector-dsa",
    number: "02",
    title: "Data Structures & Problem Solving",
    focus: "Algorithmic Thinking",
    detail: "Practice linked lists, stacks, queues, hash tables, and recursive problem-solving with deliberate complexity analysis."
  },
  {
    id: "vector-linux",
    number: "03",
    title: "Deeper Linux CLI Familiarity",
    focus: "Systems & Automation",
    detail: "Master bash scripting, POSIX permission systems, cron jobs, and service configuration in terminal environments."
  },
  {
    id: "vector-networking",
    number: "04",
    title: "Networking & Security Fundamentals",
    focus: "Protocol Architecture",
    detail: "Study the OSI and TCP/IP models, packet transmission, HTTP/HTTPS lifecycle, and port analysis in controlled setups."
  },
  {
    id: "vector-secure-code",
    number: "05",
    title: "Secure Coding Principles",
    focus: "Defensive Engineering",
    detail: "Learn input validation, output encoding, error sanitization, and defensive programming to avoid common vulnerability vectors."
  },
  {
    id: "vector-authorized-labs",
    number: "06",
    title: "Authorized Learning Environments",
    focus: "Ethical Practice",
    detail: "Practice in legal, structured platforms like OverTheWire (Bandit) and foundational TryHackMe modules for practical cyber exposure."
  },
  {
    id: "vector-qa",
    number: "07",
    title: "Testing, Debugging & Documentation",
    focus: "Reliability & Rigor",
    detail: "Adopt systematic unit testing, reproducible bug reproduction steps, and transparent technical documentation."
  }
];

export default function SkillsExperience() {
  const [filter, setFilter] = useState<FilterType>("All Skills");
  const [selectedId, setSelectedId] = useState<string>("python");
  const inspectorRef = useRef<HTMLDivElement>(null);

  const categories: FilterType[] = ["All Skills", "Programming", "Web Development", "Systems", "Workflow"];

  // Filter skills
  const visibleSkills = useMemo(() => {
    if (filter === "All Skills") return SKILLS_DATA;
    return SKILLS_DATA.filter((s) => s.category === filter);
  }, [filter]);

  // Selected skill item
  const selectedSkill = useMemo(() => {
    return SKILLS_DATA.find((s) => s.id === selectedId) || SKILLS_DATA[0];
  }, [selectedId]);

  // Select a skill and ensure it's visible in filter
  const selectSkill = useCallback((id: string, shouldScroll = false) => {
    const target = SKILLS_DATA.find((s) => s.id === id);
    if (!target) return;

    setSelectedId(id);
    if (filter !== "All Skills" && target.category !== filter) {
      setFilter("All Skills");
    }

    if (shouldScroll && inspectorRef.current) {
      inspectorRef.current.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }
  }, [filter]);

  // Handle filter changes
  const handleFilterChange = (newFilter: FilterType) => {
    setFilter(newFilter);
    if (newFilter !== "All Skills") {
      const firstInCategory = SKILLS_DATA.find((s) => s.category === newFilter);
      if (firstInCategory && selectedSkill.category !== newFilter) {
        setSelectedId(firstInCategory.id);
      }
    }
  };

  // Keyboard navigation through visible skills
  const handleKeyDown = (e: React.KeyboardEvent, index: number) => {
    let nextIndex = -1;
    if (e.key === "ArrowRight" || e.key === "ArrowDown") {
      nextIndex = (index + 1) % visibleSkills.length;
    } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
      nextIndex = (index - 1 + visibleSkills.length) % visibleSkills.length;
    }

    if (nextIndex >= 0) {
      e.preventDefault();
      setSelectedId(visibleSkills[nextIndex].id);
    }
  };

  // Check if a connection connects to the selected skill
  const isConnectionActive = (conn: SkillConnection) => {
    return conn.from === selectedSkill.id || conn.to === selectedSkill.id;
  };

  return (
    <div className="skills-constellation-experience">
      {/* SECTION A — CINEMATIC SKILLS HERO */}
      <section className="skills-hero-section" aria-label="Skills overview and capabilities hero">
        <div className="skills-hero-layout">
          <div className="skills-hero-copy">
            <div className="skills-kicker-pill">
              <span className="status-pulse" />
              <span>CAPABILITY MATRIX / 012</span>
            </div>
            <h1 className="skills-display-headline">
              The Constellation<br />
              <ScrollGradientText as="span" variant="primary">of Capabilities.</ScrollGradientText>
            </h1>
            <p className="skills-hero-statement">
              <em><ScrollGradientText as="span" variant="subheading">Every skill begins as a signal. Practice connects the signals into something greater.</ScrollGradientText></em>
            </p>
            <p className="skills-hero-summary">
              A structured map of developing technical capabilities across programming, web development, systems, and intelligent workflows. Built on deliberate practice, active BSc IT coursework, and real project implementations—without fabricated metrics or false claims of mastery.
            </p>

            <div className="skills-hero-stats">
              <div className="skills-stat-chip">
                <span className="skills-stat-num">07</span>
                <span className="skills-stat-label">Active Skills</span>
              </div>
              <div className="skills-stat-chip">
                <span className="skills-stat-num">04</span>
                <span className="skills-stat-label">Technical Domains</span>
              </div>
              <div className="skills-stat-chip">
                <span className="skills-stat-num">04</span>
                <span className="skills-stat-label">Learning Pathways</span>
              </div>
            </div>

            <div className="skills-hero-actions">
              <a href="#constellation-explorer" className="button button-primary">
                Explore Constellation <ArrowDownRight size={15} />
              </a>
              <a href="#learning-pathways" className="button button-quiet">
                Learning Pathways <ArrowUpRight size={14} />
              </a>
              <Link href="/journey/" className="button button-quiet">
                The Evolution Timeline <ArrowUpRight size={14} />
              </Link>
            </div>
          </div>

          <div className="skills-hero-visual" aria-hidden="true">
            <div className="skills-hero-orbit-card">
              <div className="skills-orbit-backdrop" />
              <div className="skills-orbit-rings">
                <div className="skills-ring ring-1" />
                <div className="skills-ring ring-2" />
                <div className="skills-ring ring-3" />
                <div className="skills-core-node">
                  <Orbit size={28} />
                  <span>MATRIX</span>
                </div>
                <div className="skills-satellite sat-1">Py</div>
                <div className="skills-satellite sat-2">$_</div>
                <div className="skills-satellite sat-3">&lt;/&gt;</div>
                <div className="skills-satellite sat-4">✳</div>
              </div>
              <div className="skills-orbit-telemetry">
                <div className="telemetry-item">
                  <span className="telemetry-label">SYSTEM STATE</span>
                  <span className="telemetry-val">ACTIVE EVOLUTION</span>
                </div>
                <div className="telemetry-item">
                  <span className="telemetry-label">TRAJECTORY</span>
                  <span className="telemetry-val">CYBERSECURITY</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION B & C & D — CONSTELLATION EXPLORER, FILTERS & INSPECTOR */}
      <section id="constellation-explorer" className="skills-explorer-section" aria-label="Interactive skill constellation and inspector">
        <div className="section-header-row">
          <div>
            <div className="section-eyebrow-tag">
              <Sparkles size={13} />
              <span>INTERACTIVE EXPLORER</span>
            </div>
            <h2 className="section-title-sm">Living Capability Network</h2>
          </div>
          <div className="skills-count-badge">
            <span>{visibleSkills.length} OF {SKILLS_DATA.length} SKILLS VISIBLE</span>
          </div>
        </div>

        {/* SECTION C — CATEGORY FILTERS */}
        <div className="skills-filter-toolbar" role="toolbar" aria-label="Filter skills by technical domain">
          <span className="filter-label">FILTER DOMAIN:</span>
          <div className="filter-buttons-group" role="group" aria-label="Skill domain categories">
            {categories.map((cat) => {
              const count = cat === "All Skills" ? SKILLS_DATA.length : SKILLS_DATA.filter((s) => s.category === cat).length;
              const isActive = filter === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  className={`skill-filter-btn ${isActive ? "is-active" : ""}`}
                  aria-pressed={isActive}
                  onClick={() => handleFilterChange(cat)}
                >
                  <span className="btn-text">{cat}</span>
                  <span className="btn-count">{count}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* CONSTELLATION CANVAS + INSPECTOR SPLIT */}
        <div className="constellation-split-layout">
          {/* SECTION B — INTERACTIVE CONSTELLATION CANVAS */}
          <div className="constellation-canvas-container" aria-label="Visual skill constellation">
            <div className="canvas-header-bar">
              <span className="canvas-signal-dot" />
              <span className="canvas-title">CONSTELLATION_CANVAS // 2D TOPOLOGICAL NETWORK</span>
              <span className="canvas-tip">SELECT NODE TO INSPECT</span>
            </div>

            {/* SVG Interactive Map */}
            <div className="constellation-viewport">
              <svg
                viewBox="0 0 880 480"
                className="constellation-svg"
                aria-hidden="true"
              >
                <defs>
                  <linearGradient id="line-grad-default" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="rgba(114, 229, 255, 0.25)" />
                    <stop offset="100%" stopColor="rgba(155, 140, 255, 0.15)" />
                  </linearGradient>
                  <linearGradient id="line-grad-active" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#72e5ff" />
                    <stop offset="100%" stopColor="#9b8cff" />
                  </linearGradient>
                  <radialGradient id="node-glow" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="rgba(114, 229, 255, 0.4)" />
                    <stop offset="100%" stopColor="rgba(114, 229, 255, 0)" />
                  </radialGradient>
                </defs>

                {/* Background Grid Pattern */}
                <g className="svg-grid-lines" opacity="0.12">
                  <line x1="80" y1="0" x2="80" y2="480" stroke="#72e5ff" strokeDasharray="3 6" />
                  <line x1="280" y1="0" x2="280" y2="480" stroke="#72e5ff" strokeDasharray="3 6" />
                  <line x1="480" y1="0" x2="480" y2="480" stroke="#72e5ff" strokeDasharray="3 6" />
                  <line x1="680" y1="0" x2="680" y2="480" stroke="#72e5ff" strokeDasharray="3 6" />
                  <line x1="0" y1="120" x2="880" y2="120" stroke="#72e5ff" strokeDasharray="3 6" />
                  <line x1="0" y1="240" x2="880" y2="240" stroke="#72e5ff" strokeDasharray="3 6" />
                  <line x1="0" y1="360" x2="880" y2="360" stroke="#72e5ff" strokeDasharray="3 6" />
                </g>

                {/* Connecting Vector Lines */}
                <g className="svg-connections">
                  {CONSTELLATION_CONNECTIONS.map((conn, idx) => {
                    const fromNode = SKILLS_DATA.find((s) => s.id === conn.from);
                    const toNode = SKILLS_DATA.find((s) => s.id === conn.to);
                    if (!fromNode || !toNode) return null;

                    const active = isConnectionActive(conn);
                    const isVisible =
                      visibleSkills.some((s) => s.id === conn.from) &&
                      visibleSkills.some((s) => s.id === conn.to);

                    return (
                      <line
                        key={`conn-${idx}`}
                        x1={fromNode.svgPos.x}
                        y1={fromNode.svgPos.y}
                        x2={toNode.svgPos.x}
                        y2={toNode.svgPos.y}
                        className={`svg-line ${active ? "is-line-active" : ""} ${!isVisible ? "is-line-dimmed" : ""}`}
                        stroke={active ? "url(#line-grad-active)" : "url(#line-grad-default)"}
                        strokeWidth={active ? 2.2 : 1.2}
                      />
                    );
                  })}
                </g>

                {/* Orbital Reference Arcs */}
                <ellipse cx="440" cy="240" rx="360" ry="180" fill="none" stroke="rgba(114, 229, 255, 0.05)" strokeDasharray="4 8" />
                <ellipse cx="440" cy="240" rx="220" ry="110" fill="none" stroke="rgba(155, 140, 255, 0.06)" strokeDasharray="2 6" />
              </svg>

              {/* Interactive Node Buttons Overlay */}
              <div className="nodes-overlay-layer" role="tablist" aria-label="Skill constellation nodes">
                {SKILLS_DATA.map((skill, index) => {
                  const isSelected = skill.id === selectedSkill.id;
                  const isVisible = visibleSkills.some((s) => s.id === skill.id);

                  // Calculate percentage for responsiveness
                  const leftPercent = (skill.svgPos.x / 880) * 100;
                  const topPercent = (skill.svgPos.y / 480) * 100;

                  return (
                    <button
                      key={skill.id}
                      type="button"
                      role="tab"
                      id={`skill-tab-${skill.id}`}
                      aria-selected={isSelected}
                      aria-controls={`skill-panel-${skill.id}`}
                      tabIndex={isSelected ? 0 : -1}
                      className={`constellation-node-btn tone-${skill.accent} ${isSelected ? "is-selected" : ""} ${!isVisible ? "is-dimmed" : ""}`}
                      style={{
                        left: `${leftPercent}%`,
                        top: `${topPercent}%`
                      }}
                      onClick={() => selectSkill(skill.id, false)}
                      onKeyDown={(e) => handleKeyDown(e, index)}
                    >
                      <span className="node-glow-ring" />
                      <span className="node-badge">
                        <span className="node-symbol">{skill.symbol}</span>
                      </span>
                      <span className="node-meta">
                        <span className="node-name">{skill.name}</span>
                        <span className="node-category">{skill.category}</span>
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Mobile / Responsive Adaptive Skill Cards List */}
            <div className="mobile-nodes-list" role="tablist" aria-label="Available skill list">
              {visibleSkills.map((skill, idx) => {
                const isSelected = skill.id === selectedSkill.id;
                return (
                  <button
                    key={skill.id}
                    type="button"
                    role="tab"
                    id={`mobile-tab-${skill.id}`}
                    aria-selected={isSelected}
                    aria-controls={`skill-panel-${skill.id}`}
                    className={`mobile-node-chip tone-${skill.accent} ${isSelected ? "is-selected" : ""}`}
                    onClick={() => selectSkill(skill.id, true)}
                    onKeyDown={(e) => handleKeyDown(e, idx)}
                  >
                    <span className="chip-symbol">{skill.symbol}</span>
                    <span className="chip-copy">
                      <strong>{skill.name}</strong>
                      <small>{skill.category}</small>
                    </span>
                    {isSelected && <span className="chip-indicator" />}
                  </button>
                );
              })}
            </div>
          </div>

          {/* SECTION D — SKILL INSPECTOR */}
          <div ref={inspectorRef} className="skill-inspector-container">
            <article
              id={`skill-panel-${selectedSkill.id}`}
              role="tabpanel"
              aria-labelledby={`skill-tab-${selectedSkill.id}`}
              className={`skill-inspector-card tone-${selectedSkill.accent}`}
              aria-live="polite"
            >
              <div className="inspector-top-bar">
                <div className="inspector-badges">
                  <span className="inspector-category-badge">
                    <Layers size={12} />
                    <span>{selectedSkill.category.toUpperCase()}</span>
                  </span>
                  <span className="inspector-status-pill">
                    <span className="pulse-dot" />
                    <span>{selectedSkill.status}</span>
                  </span>
                </div>
                <div className="inspector-symbol-box">
                  <span>{selectedSkill.symbol}</span>
                </div>
              </div>

              <div className="inspector-header">
                <div className="inspector-id-label">CAPABILITY // {String(SKILLS_DATA.findIndex((s) => s.id === selectedSkill.id) + 1).padStart(2, "0")}</div>
                <h3 className="inspector-title">{selectedSkill.name}</h3>
                <p className="inspector-tagline">{selectedSkill.tagline}</p>
              </div>

              <div className="inspector-body">
                <div className="inspector-section">
                  <span className="section-label">CORE DESCRIPTION</span>
                  <p className="inspector-text">{selectedSkill.description}</p>
                </div>

                <div className="inspector-section">
                  <span className="section-label">WHAT THIS SKILL IS USED FOR</span>
                  <p className="inspector-text">{selectedSkill.usedFor}</p>
                </div>

                <div className="inspector-section highlight-box">
                  <span className="section-label">
                    <Compass size={13} />
                    <span>PRACTICAL APPLICATION & PROJECTS</span>
                  </span>
                  <p className="inspector-text">{selectedSkill.practicalConnection}</p>
                  {selectedSkill.relatedProject && (
                    <div className="inspector-project-link">
                      <Link
                        href={`/projects/${selectedSkill.relatedProject.slug}/`}
                        className="project-anchor"
                      >
                        <span>{selectedSkill.relatedProject.label}</span>
                        <ArrowUpRight size={13} />
                      </Link>
                    </div>
                  )}
                </div>

                <div className="inspector-section practice-box">
                  <span className="section-label">
                    <Target size={13} />
                    <span>NEXT PRACTICE ROADMAP</span>
                  </span>
                  <p className="inspector-text">{selectedSkill.nextFocus}</p>
                </div>
              </div>

              <div className="inspector-footer">
                <span className="footer-honesty-tag">
                  <Sparkles size={12} />
                  <span>Developing capability · Zero fabricated proficiency metrics</span>
                </span>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* SECTION E — LEARNING PATHWAYS */}
      <section id="learning-pathways" className="skills-pathways-section" aria-label="Curated learning pathways">
        <div className="section-header-block">
          <div className="section-eyebrow-tag">
            <Compass size={13} />
            <span>STRUCTURED METHODOLOGY</span>
          </div>
          <h2 className="section-title-md"><ScrollGradientText as="span" variant="secondary">Learning Pathways</ScrollGradientText></h2>
          <p className="section-lede">
            Skills do not exist in isolation. These four interconnected pathways represent how concepts, languages, and tools reinforce each other during active problem-solving.
          </p>
        </div>

        <div className="pathways-grid">
          {LEARNING_PATHWAYS.map((pathway) => (
            <article key={pathway.id} className="pathway-card">
              <div className="pathway-top">
                <span className="pathway-number">PATHWAY // {pathway.number}</span>
                <span className="pathway-icon">
                  {pathway.id === "pathway-programming" && <Code2 size={16} />}
                  {pathway.id === "pathway-web" && <Layers size={16} />}
                  {pathway.id === "pathway-systems" && <Terminal size={16} />}
                  {pathway.id === "pathway-workflow" && <Brain size={16} />}
                </span>
              </div>

              <h3 className="pathway-title">{pathway.title}</h3>
              <p className="pathway-desc">{pathway.description}</p>

              <div className="pathway-skills-block">
                <span className="block-label">ASSOCIATED SKILLS:</span>
                <div className="pathway-skills-list">
                  {pathway.skillIds.map((sId) => {
                    const sk = SKILLS_DATA.find((s) => s.id === sId);
                    if (!sk) return null;
                    return (
                      <button
                        key={sId}
                        type="button"
                        className={`pathway-skill-chip tone-${sk.accent}`}
                        onClick={() => selectSkill(sId, true)}
                        title={`Inspect ${sk.name}`}
                      >
                        <span>{sk.name}</span>
                        <ArrowDownRight size={11} />
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="pathway-next-box">
                <span className="next-label">PRACTICE VECTOR:</span>
                <p>{pathway.nextStep}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* SECTION F — WHAT I AM DEVELOPING NEXT */}
      <section className="skills-next-section" aria-label="Future skill development priorities">
        <div className="section-header-block">
          <div className="section-eyebrow-tag">
            <Target size={13} />
            <span>FUTURE DIRECTION</span>
          </div>
          <h2 className="section-title-md"><ScrollGradientText as="span" variant="secondary">What I Am Developing Next</ScrollGradientText></h2>
          <p className="section-lede">
            A clear view of immediate technical horizons: disciplined practice priorities grounded in university coursework, systems depth, and defensive security.
          </p>
        </div>

        <div className="next-vectors-grid">
          {NEXT_DEVELOPMENT_VECTORS.map((vec) => (
            <div key={vec.id} className="next-vector-card">
              <div className="vector-card-header">
                <span className="vector-num">VECTOR // {vec.number}</span>
                <span className="vector-focus-tag">{vec.focus}</span>
              </div>
              <h4 className="vector-title">{vec.title}</h4>
              <p className="vector-detail">{vec.detail}</p>
              <div className="vector-status-bar">
                <span className="vector-pulse" />
                <span>PLANNED ITERATION</span>
              </div>
            </div>
          ))}
        </div>

        <div className="skills-mission-banner">
          <div className="mission-banner-copy">
            <ShieldCheck size={26} />
            <div>
              <h4>Ethical, Defensive & Truthful Stance</h4>
              <p>
                Cybersecurity capability begins with deep systems understanding and strict ethical standards. All exploration is conducted strictly within authorized academic sandboxes, local development machines, or purpose-built challenge platforms.
              </p>
            </div>
          </div>
        </div>

        {/* DIRECTIONAL NAVIGATION */}
        <div className="skills-directional-links">
          <span className="directional-label">CONTINUE EXPLORING PORTFOLIO</span>
          <div className="directional-grid">
            <Link href="/journey/" className="directional-card">
              <div>
                <span className="directional-eyebrow">MILESTONE 10</span>
                <strong>The Evolution Timeline</strong>
                <p>Trace the 5-stage personal journey from curiosity to systems focus.</p>
              </div>
              <ArrowUpRight size={16} />
            </Link>

            <Link href="/about/" className="directional-card">
              <div>
                <span className="directional-eyebrow">MILESTONE 11</span>
                <strong>Beyond the Interface</strong>
                <p>Explore the person behind the code: my story, principles, and interests.</p>
              </div>
              <ArrowUpRight size={16} />
            </Link>

            <Link href="/projects/" className="directional-card">
              <div>
                <span className="directional-eyebrow">WORK SHOWCASE</span>
                <strong>Selected Projects</strong>
                <p>Explore CosmoVerse, GravityFlip, ScamShield India, and edits.</p>
              </div>
              <ArrowUpRight size={16} />
            </Link>

            <Link href="/contact/" className="directional-card">
              <div>
                <span className="directional-eyebrow">COMMUNICATION</span>
                <strong>Direct Transmission</strong>
                <p>Connect for discussions, questions, or collaborative ideas.</p>
              </div>
              <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
