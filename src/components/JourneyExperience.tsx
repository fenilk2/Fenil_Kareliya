"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Link from "next/link";
import ScrollGradientText from "@/components/ScrollGradientText";
import {
  Sparkles,
  Code2,
  Orbit,
  ShieldCheck,
  Compass,
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  Terminal,
  Layers,
  Lock,
} from "@/components/Icons";
import { projects } from "@/components/projectData";

interface StageData {
  id: string;
  number: string;
  roman: string;
  phase: string;
  title: string;
  subtitle: string;
  theme: string;
  shortSummary: string;
  narrative: string;
  tone: "cyan" | "violet" | "mint" | "blue" | "rose";
  icon: typeof Sparkles;
  categoryLabel: string;
  badges: string[];
  highlights: { label: string; text: string }[];
  skillsList?: { name: string; status: string; tag: string }[];
  securityPillars?: { title: string; desc: string }[];
  futureVectors?: { title: string; desc: string }[];
}

const stages: StageData[] = [
  {
    id: "curiosity",
    number: "01",
    roman: "I",
    phase: "ORIGIN & INQUIRY",
    title: "Curiosity",
    subtitle: "The beginning of exploration",
    theme: "The beginning of exploration",
    shortSummary:
      "Interest in technology and digital systems. Asking how digital experiences are constructed and deciding to begin learning programming.",
    narrative:
      "Every system begins with curiosity. Before learning syntax, terminal commands, or design patterns, the spark was simply wondering what lies behind modern digital experiences—how software coordinates logic, how games compute physics, and how applications protect or expose data. That initial drive to demystify technology transformed into the active decision to learn programming from the ground up, starting a path defined by questioning assumptions and learning through practice.",
    tone: "cyan",
    icon: Sparkles,
    categoryLabel: "PHASE 01 · THE SPARK",
    badges: ["Digital Systems", "Interactive Media", "First Code", "Curiosity Spark"],
    highlights: [
      {
        label: "EXPLORATION CATALYST",
        text: "Wondering how digital interfaces, networks, and interactive applications work under the surface.",
      },
      {
        label: "KEY TURNING POINT",
        text: "Moving from passive user to curious builder and choosing to study programming intentionally.",
      },
      {
        label: "MINDSET FORMED",
        text: "Treating curiosity as the primary engine for continuous technical discovery.",
      },
    ],
  },
  {
    id: "fundamentals",
    number: "02",
    roman: "II",
    phase: "ACADEMIC FOUNDATION",
    title: "Fundamentals",
    subtitle: "Building the foundation",
    theme: "Building the foundation",
    shortSummary:
      "Learning through a BSc IT cybersecurity course. Developing familiarity with Python, Java, C, HTML/CSS, Linux, and AI prompting.",
    narrative:
      "Foundations require deliberate practice. Pursuing a BSc IT curriculum centered on cybersecurity provides the structured environment to develop real technical foundations. Here, programming is approached not as casual trivia, but as a discipline of logic, memory, and persistence. Learning Python, Java, C, HTML/CSS, Linux, and AI prompting reveals that true competence comes from experimentation, debugging errors, and solving problems without taking shortcuts. These are active, developing foundations rather than claims of mastery.",
    tone: "violet",
    icon: Code2,
    categoryLabel: "PHASE 02 · FOUNDATION",
    badges: ["BSc IT Coursework", "Core Programming", "Linux CLI", "Algorithmic Logic"],
    skillsList: [
      { name: "Python", status: "Scripting & Backend Concepts", tag: "Logic & Scripts" },
      { name: "Java", status: "Object-Oriented Programming", tag: "OOP Principles" },
      { name: "C", status: "Memory & Procedural Logic", tag: "Core Foundations" },
      { name: "HTML & CSS", status: "Semantic Layouts & Styling", tag: "Web Interfaces" },
      { name: "Linux", status: "CLI & System Environment", tag: "Shell Workflows" },
      { name: "AI Prompting", status: "Precise Briefing & Verification", tag: "Task Iteration" },
    ],
    highlights: [
      {
        label: "ACADEMIC VECTOR",
        text: "BSc IT cybersecurity curriculum providing theoretical grounding and structured technical study.",
      },
      {
        label: "PRACTICE OVER CLAIMS",
        text: "Presenting skills as developing capabilities formed through code reviews and debugging exercises.",
      },
      {
        label: "SYSTEM DISCIPLINE",
        text: "Understanding that robust software emerges from patience, verified testing, and continuous refinement.",
      },
    ],
  },
  {
    id: "building-projects",
    number: "03",
    roman: "III",
    phase: "APPLIED MISSIONS",
    title: "Building Projects",
    subtitle: "Turning ideas into working experiences",
    theme: "Turning ideas into working experiences",
    shortSummary:
      "Applying skills across CosmoVerse, GravityFlip, ScamShield India, and Cinematic Shorts. Learning through implementation challenges.",
    narrative:
      "Knowledge is proven through creation. Each project serves as a focused mission to translate conceptual understanding into working reality, test architectural ideas, and confront the real-world friction of bugs, state management, and user experience. Rather than staying in isolated code exercises, building projects provides opportunities to apply skills, test ideas, solve problems, and learn directly from implementation challenges across cosmic simulation, game systems, scam detection, and visual pacing.",
    tone: "mint",
    icon: Orbit,
    categoryLabel: "PHASE 03 · EXECUTION",
    badges: ["CosmoVerse", "GravityFlip", "ScamShield India", "Cinematic Shorts"],
    highlights: [
      {
        label: "MISSION PORTFOLIO",
        text: "Four distinct exploration tracks testing scientific simulation, gameplay systems, scam awareness, and visual storytelling.",
      },
      {
        label: "PROBLEM-SOLVING ARENA",
        text: "Encountering edge cases, architectural trade-offs, and iterative refinement across diverse domains.",
      },
      {
        label: "LEARNING THROUGH MAKING",
        text: "Using projects as documented milestones where theory meets practical implementation.",
      },
    ],
  },
  {
    id: "cybersecurity-focus",
    number: "04",
    roman: "IV",
    phase: "DEFENSIVE POSTURE",
    title: "Cybersecurity Focus",
    subtitle: "Understanding and protecting digital systems",
    theme: "Understanding and protecting digital systems",
    shortSummary:
      "Growing focus on cybersecurity. Interest in Linux, secure systems, threat awareness, and defensive thinking.",
    narrative:
      "As digital networks expand, understanding how systems are protected becomes essential. The journey has sharpened toward cybersecurity: studying how applications, networks, and digital threats interact, exploring Linux filesystem permissions, investigating scam and phishing vectors, and cultivating defensive thinking. This is an active learning trajectory approached with responsibility and humility—treating cybersecurity expertise as a developing goal formed through rigorous study and verified project practice, without premature claims of certifications or penetration-testing achievements.",
    tone: "blue",
    icon: ShieldCheck,
    categoryLabel: "PHASE 04 · SECURITY DIRECTION",
    badges: ["Defensive Thinking", "Linux Permissions", "Threat Awareness", "Digital Safety"],
    securityPillars: [
      {
        title: "Linux & System Foundations",
        desc: "Understanding permissions, user privileges, process execution, and command-line administration essentials.",
      },
      {
        title: "Threat Vector Awareness",
        desc: "Studying social engineering, phishing markers, deceptive links, and awareness techniques (explored in ScamShield India).",
      },
      {
        title: "Defensive Architectural Mindset",
        desc: "Designing software with least-privilege principles, input validation, and security considerations from the start.",
      },
      {
        title: "Responsible Technical Practice",
        desc: "Upholding ethical standards, controlled laboratory experimentation, and verifiable results.",
      },
    ],
    highlights: [
      {
        label: "SECURITY FOCUS",
        text: "Dedicated study of secure systems, defensive tactics, and vulnerability concepts.",
      },
      {
        label: "HONEST LEARNING POSTURE",
        text: "Cybersecurity expertise is a developing goal; avoiding fabricated credentials or unverified claims.",
      },
      {
        label: "SYSTEMS AWARENESS",
        text: "Examining how networks, operating systems, and application layers interact under threat conditions.",
      },
    ],
  },
  {
    id: "future-ambitions",
    number: "05",
    roman: "V",
    phase: "THE NEXT FRONTIER",
    title: "Future Ambitions",
    subtitle: "The next frontier",
    theme: "Future Direction",
    shortSummary:
      "Progress toward becoming a cybersecurity specialist, deepening systems knowledge, and building technically ambitious projects.",
    narrative:
      "The journey is defined by the horizon ahead. Labeled strictly as a Future Direction, this stage marks the long-term commitment to evolve into a cybersecurity specialist with deep systems knowledge and practical defensive capability. Ambitions include mastering low-level networking and systems engineering, building more useful, reliable, and technically ambitious software, and continuing to explore the fertile intersection of cybersecurity, software engineering, and creative technology.",
    tone: "rose",
    icon: Compass,
    categoryLabel: "PHASE 05 · FUTURE DIRECTION",
    badges: ["Cybersecurity Specialist", "Systems Engineering", "Creative Tech", "Continuous Evolution"],
    futureVectors: [
      {
        title: "Cybersecurity Specialization",
        desc: "Progressing toward verified technical proficiency, defensive security operations, and system hardening.",
      },
      {
        title: "Stronger Programming & Systems",
        desc: "Deepening knowledge of low-level systems, protocol internals, secure APIs, and resilient architectures.",
      },
      {
        title: "Technically Ambitious Projects",
        desc: "Building more capable, reliable, and verified projects that solve real problems and protect users.",
      },
      {
        title: "Creative Technology Crossover",
        desc: "Continuing to explore the intersection of cybersecurity, 3D simulations, and intuitive visual storytelling.",
      },
    ],
    highlights: [
      {
        label: "FUTURE DIRECTION",
        text: "Labeled as Future Direction — a north star toward which daily learning and practice are aimed.",
      },
      {
        label: "CORE OBJECTIVE",
        text: "Developing into a versatile, principled cybersecurity engineer and creative technologist.",
      },
      {
        label: "SUSTAINED MOMENTUM",
        text: "Letting consistency, genuine curiosity, and iterative building drive long-term evolution.",
      },
    ],
  },
];

export default function JourneyExperience() {
  const [activeStageIndex, setActiveStageIndex] = useState(0);
  const inspectorRef = useRef<HTMLDivElement>(null);
  const activeStage = stages[activeStageIndex];
  const ActiveIcon = activeStage.icon;

  const goToStage = useCallback((index: number, smoothScroll = false) => {
    const clamped = Math.max(0, Math.min(stages.length - 1, index));
    setActiveStageIndex(clamped);
    if (smoothScroll && inspectorRef.current) {
      inspectorRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, []);

  const handleNext = useCallback(() => {
    setActiveStageIndex((prev) => (prev + 1) % stages.length);
  }, []);

  const handlePrev = useCallback(() => {
    setActiveStageIndex((prev) => (prev - 1 + stages.length) % stages.length);
  }, []);

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (
        document.activeElement?.tagName === "INPUT" ||
        document.activeElement?.tagName === "TEXTAREA"
      ) {
        return;
      }
      if (event.key === "ArrowRight" || event.key === "ArrowDown") {
        event.preventDefault();
        handleNext();
      } else if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
        event.preventDefault();
        handlePrev();
      }
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleNext, handlePrev]);

  const progressPercentage = Math.round(((activeStageIndex + 1) / stages.length) * 100);

  return (
    <div className="journey-experience" id="journey-root">
      {/* SECTION B: Journey Overview & Stage Chips */}
      <section className="journey-overview-card" aria-label="Journey overview and stage selector">
        <div className="journey-overview-top">
          <div className="journey-overview-kicker">
            <span className="status-pulse" />
            <span>NAVIGATION / 05 STAGES OF EVOLUTION</span>
          </div>
          <div className="journey-overview-progress-label">
            <span>STAGE {activeStage.number} OF 05</span>
            <strong>{progressPercentage}% VECTOR</strong>
          </div>
        </div>

        <div className="journey-overview-summary">
          <p>
            A chronological perspective on growth, learning, and purpose. From initial curiosity
            about digital systems to foundational BSc IT coursework, real-world project builds, a
            dedicated cybersecurity path, and future ambitions.
          </p>
          <div className="journey-progress-track" aria-hidden="true">
            <div
              className={`journey-progress-fill tone-${activeStage.tone}`}
              style={{ width: `${progressPercentage}%` }}
            />
          </div>
        </div>

        {/* 5 Stage Quick-Chips */}
        <div className="journey-stage-chips" role="tablist" aria-label="Five stages of Fenil's journey">
          {stages.map((stage, index) => {
            const isSelected = activeStageIndex === index;
            const ChipIcon = stage.icon;
            return (
              <button
                key={stage.id}
                type="button"
                role="tab"
                id={`journey-chip-${stage.id}`}
                aria-selected={isSelected}
                aria-controls="journey-stage-inspector"
                className={`journey-chip tone-${stage.tone} ${isSelected ? "is-active" : ""}`}
                onClick={() => goToStage(index)}
              >
                <span className="chip-index">{stage.number}</span>
                <span className="chip-icon">
                  <ChipIcon size={14} />
                </span>
                <span className="chip-label">
                  <small>{stage.number === "05" ? "FUTURE" : `STAGE ${stage.number}`}</small>
                  <strong>{stage.title}</strong>
                </span>
                {isSelected && <span className="chip-beacon" aria-hidden="true" />}
              </button>
            );
          })}
        </div>
      </section>

      {/* SECTION C: Interactive Evolution Timeline (Alternating layout on desktop, vertical on mobile) */}
      <section className="evolution-timeline-section" aria-label="Interactive evolution timeline">
        <div className="timeline-axis-header">
          <span className="timeline-axis-pill">THE CHRONOLOGICAL SPINE</span>
          <h2>
            From First Spark <ScrollGradientText as="span" variant="secondary">to Future Direction</ScrollGradientText>
          </h2>
          <p>
            Select any milestone along the continuous trajectory to inspect its narrative,
            learning vectors, and project links.
          </p>
        </div>

        <div className="evolution-timeline-track">
          {/* Continuous vertical spine */}
          <div className="timeline-continuous-spine" aria-hidden="true">
            <div
              className={`timeline-spine-glow tone-${activeStage.tone}`}
              style={{ height: `${((activeStageIndex + 0.5) / stages.length) * 100}%` }}
            />
          </div>

          {/* 5 Timeline Stage Cards */}
          <div className="timeline-milestones-container">
            {stages.map((stage, index) => {
              const isSelected = activeStageIndex === index;
              const StageIcon = stage.icon;
              const isEven = index % 2 === 0;

              return (
                <div
                  key={stage.id}
                  className={`timeline-milestone-row ${isEven ? "row-left" : "row-right"} ${
                    isSelected ? "is-selected" : ""
                  }`}
                >
                  {/* Glowing central timeline marker */}
                  <div className="timeline-spine-node" aria-hidden="true">
                    <button
                      type="button"
                      className={`timeline-node-bead tone-${stage.tone} ${
                        isSelected ? "is-active" : ""
                      }`}
                      onClick={() => goToStage(index, true)}
                      aria-label={`Select Stage ${stage.number}: ${stage.title}`}
                      tabIndex={-1}
                    >
                      <span className="bead-core" />
                      <span className="bead-ring" />
                    </button>
                    <span className="timeline-node-line" />
                  </div>

                  {/* Milestone Card */}
                  <article
                    className={`timeline-milestone-card tone-${stage.tone} ${
                      isSelected ? "is-active-card" : ""
                    }`}
                    onClick={() => goToStage(index, true)}
                  >
                    <div className="milestone-card-top">
                      <span className="milestone-stage-tag">
                        <i className="status-pulse" />
                        {stage.categoryLabel}
                      </span>
                      <span className="milestone-num">PHASE {stage.roman}</span>
                    </div>

                    <div className="milestone-card-header">
                      <div className="milestone-icon-wrap">
                        <StageIcon size={20} />
                      </div>
                      <div>
                        <span className="milestone-subtitle">{stage.subtitle}</span>
                        <h3 className="milestone-title">{stage.title}</h3>
                      </div>
                    </div>

                    <p className="milestone-summary">{stage.shortSummary}</p>

                    <div className="milestone-badge-row">
                      {stage.badges.slice(0, 3).map((badge) => (
                        <span key={badge} className="milestone-badge">
                          {badge}
                        </span>
                      ))}
                    </div>

                    <div className="milestone-card-footer">
                      <span className="milestone-action-label">
                        {isSelected ? "CURRENTLY INSPECTING" : "CLICK TO EXPAND DETAILS"}
                      </span>
                      <button
                        type="button"
                        className="milestone-expand-button"
                        onClick={(e) => {
                          e.stopPropagation();
                          goToStage(index, true);
                        }}
                        aria-label={`Inspect Stage ${stage.number} details`}
                      >
                        <span>INSPECT</span>
                        <ArrowUpRight size={13} />
                      </button>
                    </div>

                    <div className="milestone-card-glow" aria-hidden="true" />
                  </article>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION D: Interactive Stage Details / Deep Inspector */}
      <section
        ref={inspectorRef}
        id="journey-stage-inspector"
        className={`stage-deep-inspector tone-${activeStage.tone}`}
        aria-live="polite"
        role="region"
        aria-label={`Detailed inspection of Stage ${activeStage.number}: ${activeStage.title}`}
      >
        {/* Inspector top console bar */}
        <div className="inspector-console-bar">
          <div className="inspector-console-meta">
            <span className="inspector-console-pulse" />
            <span>TRANSMISSION DECODER / STAGE {activeStage.number}</span>
          </div>
          <div className="inspector-console-tags">
            <span className="console-tag">{activeStage.phase}</span>
            <span className="console-live-tag">
              <i /> ACTIVE INSPECTOR
            </span>
          </div>
        </div>

        <div className="stage-inspector-content-grid">
          {/* Left Column: Visual Representation & Core Coordinates */}
          <div className="stage-visual-column">
            {/* Stage Visual Widget based on Visual Direction */}
            <div
              className={`stage-visual-stage visual-type-${activeStage.id}`}
              aria-label={`Visual simulation for ${activeStage.title}`}
            >
              {/* STAGE 01: Expanding Orbital Beacon */}
              {activeStage.id === "curiosity" && (
                <div className="visual-beacon-widget" aria-hidden="true">
                  <div className="beacon-starfield">
                    <span />
                    <span />
                    <span />
                    <span />
                    <span />
                  </div>
                  <div className="beacon-ring ring-1" />
                  <div className="beacon-ring ring-2" />
                  <div className="beacon-ring ring-3" />
                  <div className="beacon-center-spark">
                    <Sparkles size={22} />
                  </div>
                  <div className="beacon-coordinate">
                    ORIGIN // 01
                    <br />
                    SPARK DETECTED
                  </div>
                  <div className="beacon-pulse-wave" />
                </div>
              )}

              {/* STAGE 02: Structured Constellation Nodes */}
              {activeStage.id === "fundamentals" && (
                <div className="visual-constellation-widget" aria-hidden="true">
                  <svg
                    className="constellation-svg"
                    viewBox="0 0 320 220"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <line x1="60" y1="60" x2="160" y2="40" stroke="rgba(183,165,255,0.4)" strokeWidth="1" strokeDasharray="3 3" />
                    <line x1="160" y1="40" x2="260" y2="70" stroke="rgba(183,165,255,0.4)" strokeWidth="1" strokeDasharray="3 3" />
                    <line x1="60" y1="60" x2="100" y2="160" stroke="rgba(183,165,255,0.4)" strokeWidth="1" />
                    <line x1="160" y1="40" x2="160" y2="140" stroke="rgba(183,165,255,0.4)" strokeWidth="1" />
                    <line x1="260" y1="70" x2="220" y2="170" stroke="rgba(183,165,255,0.4)" strokeWidth="1" strokeDasharray="3 3" />
                    <line x1="100" y1="160" x2="160" y2="140" stroke="rgba(183,165,255,0.4)" strokeWidth="1" strokeDasharray="3 3" />
                    <line x1="160" y1="140" x2="220" y2="170" stroke="rgba(183,165,255,0.4)" strokeWidth="1" />

                    <circle cx="60" cy="60" r="14" fill="#13173d" stroke="#b7a5ff" strokeWidth="1.5" />
                    <text x="60" y="64" fill="#dcd5ff" fontSize="9" textAnchor="middle" fontFamily="monospace">Py</text>

                    <circle cx="160" cy="40" r="14" fill="#13173d" stroke="#b7a5ff" strokeWidth="1.5" />
                    <text x="160" y="44" fill="#dcd5ff" fontSize="9" textAnchor="middle" fontFamily="monospace">C</text>

                    <circle cx="260" cy="70" r="14" fill="#13173d" stroke="#b7a5ff" strokeWidth="1.5" />
                    <text x="260" y="74" fill="#dcd5ff" fontSize="9" textAnchor="middle" fontFamily="monospace">Ja</text>

                    <circle cx="100" cy="160" r="14" fill="#13173d" stroke="#b7a5ff" strokeWidth="1.5" />
                    <text x="100" y="164" fill="#dcd5ff" fontSize="9" textAnchor="middle" fontFamily="monospace">$_</text>

                    <circle cx="160" cy="140" r="17" fill="#1e245a" stroke="#d5c8ff" strokeWidth="2" />
                    <text x="160" y="144" fill="#ffffff" fontSize="10" fontWeight="bold" textAnchor="middle" fontFamily="monospace">IT</text>

                    <circle cx="220" cy="170" r="14" fill="#13173d" stroke="#b7a5ff" strokeWidth="1.5" />
                    <text x="220" y="174" fill="#dcd5ff" fontSize="8" textAnchor="middle" fontFamily="monospace">&lt;/&gt;</text>
                  </svg>
                  <div className="constellation-caption">FOUNDATIONS // CONSTELLATION GRAPH</div>
                </div>
              )}

              {/* STAGE 03: Four Mission Nodes */}
              {activeStage.id === "building-projects" && (
                <div className="visual-missions-widget" aria-hidden="true">
                  <div className="mission-orbit-ring ring-outer" />
                  <div className="mission-orbit-ring ring-inner" />
                  <div className="mission-nodes-cluster">
                    <div className="mini-mission-bead bead-cv">
                      <span>CV</span>
                      <small>COSMO</small>
                    </div>
                    <div className="mini-mission-bead bead-gf">
                      <span>GF</span>
                      <small>GRAVITY</small>
                    </div>
                    <div className="mini-mission-bead bead-ss">
                      <span>SS</span>
                      <small>SHIELD</small>
                    </div>
                    <div className="mini-mission-bead bead-cs">
                      <span>CS</span>
                      <small>CINEMA</small>
                    </div>
                  </div>
                  <div className="mission-cluster-core">
                    <Orbit size={20} />
                  </div>
                  <div className="missions-coordinate">4 ACTIVE EXPERIMENTS</div>
                </div>
              )}

              {/* STAGE 04: Protective Orbital Shield */}
              {activeStage.id === "cybersecurity-focus" && (
                <div className="visual-shield-widget" aria-hidden="true">
                  <div className="shield-radar-sweep" />
                  <div className="shield-ring shield-ring-1" />
                  <div className="shield-ring shield-ring-2" />
                  <div className="shield-ring shield-ring-3" />
                  <div className="shield-core-emblem">
                    <ShieldCheck size={28} />
                  </div>
                  <div className="shield-vectors">
                    <span className="vector v1">DEFENSE ACTIVE</span>
                    <span className="vector v2">VERIFY FIRST</span>
                  </div>
                </div>
              )}

              {/* STAGE 05: Distant Luminous Horizon */}
              {activeStage.id === "future-ambitions" && (
                <div className="visual-horizon-widget" aria-hidden="true">
                  <div className="horizon-space-glow" />
                  <div className="horizon-planet-arc" />
                  <div className="horizon-grid-lines" />
                  <div className="horizon-beacon-core">
                    <Compass size={24} />
                  </div>
                  <div className="horizon-star-clusters">
                    <i />
                    <i />
                    <i />
                    <i />
                    <i />
                  </div>
                  <div className="horizon-vector-caption">EXPANDING HORIZON // FORWARD VECTOR</div>
                </div>
              )}
            </div>

            {/* Quick Metrics / Sub-panel */}
            <div className="stage-side-metrics">
              <div className="metric-box">
                <span className="metric-label">PHASE CLASSIFICATION</span>
                <strong className="metric-value">{activeStage.phase}</strong>
              </div>
              <div className="metric-box">
                <span className="metric-label">THEMATIC VECTOR</span>
                <span className="metric-text">{activeStage.theme}</span>
              </div>
              <div className="metric-box">
                <span className="metric-label">INTEGRITY POSTURE</span>
                <span className="metric-subtext">
                  Documented through practice · No fabricated claims
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Detailed Narrative, Projects/Skills/Pillars, & Highlights */}
          <div className="stage-narrative-column">
            <div className="stage-narrative-header">
              <div className="stage-number-watermark" aria-hidden="true">
                {activeStage.number}
              </div>
              <div className="stage-eyebrow-row">
                <span className="stage-badge-pill">
                  <ActiveIcon size={13} />
                  {activeStage.categoryLabel}
                </span>
                <span className="stage-order-pill">MILESTONE {activeStage.number} / 05</span>
              </div>
              <h2 className="stage-main-title">{activeStage.title}</h2>
              <p className="stage-subtitle-text">{activeStage.subtitle}</p>
            </div>

            <div className="stage-narrative-body">
              <p className="stage-primary-narrative">{activeStage.narrative}</p>
            </div>

            {/* Stage-Specific Content Additions */}

            {/* STAGE 02: Developing Foundations Skill Cards */}
            {activeStage.skillsList && (
              <div className="stage-interactive-block">
                <div className="interactive-block-title">
                  <Terminal size={14} />
                  <span>DEVELOPING TOOLSET & CORE SUBJECTS</span>
                </div>
                <div className="skills-interactive-subgrid">
                  {activeStage.skillsList.map((skill) => (
                    <div key={skill.name} className="skill-subchip">
                      <div className="skill-subchip-top">
                        <strong>{skill.name}</strong>
                        <span className="skill-subchip-tag">{skill.tag}</span>
                      </div>
                      <p>{skill.status}</p>
                    </div>
                  ))}
                </div>
                <div className="interactive-block-footer">
                  <small>
                    Notice: Presented as developing capabilities in practice, not claims of mastery.
                  </small>
                </div>
              </div>
            )}

            {/* STAGE 03: Actual Repository Projects Showcase with Verified Links */}
            {activeStage.id === "building-projects" && (
              <div className="stage-interactive-block">
                <div className="interactive-block-title">
                  <Layers size={14} />
                  <span>ACTUAL MISSIONS FROM THE ARCHIVE</span>
                </div>
                <div className="projects-mission-subgrid">
                  {projects.map((proj) => (
                    <Link
                      key={proj.slug}
                      href={`/projects/${proj.slug}/`}
                      className={`project-mission-subcard ${proj.className}`}
                    >
                      <div className="mission-subcard-header">
                        <span className="mission-subcard-mark">{proj.mark}</span>
                        <span className="mission-subcard-cat">{proj.category}</span>
                        <ArrowUpRight size={14} />
                      </div>
                      <h4>{proj.title}</h4>
                      <p>{proj.description}</p>
                      <div className="mission-subcard-tags">
                        {proj.tags.slice(0, 2).map((t) => (
                          <span key={t}>{t}</span>
                        ))}
                      </div>
                    </Link>
                  ))}
                </div>
                <div className="interactive-block-footer">
                  <small>
                    Projects provide testing grounds for applying skills and learning from
                    implementation challenges.
                  </small>
                </div>
              </div>
            )}

            {/* STAGE 04: Defensive Security Pillars */}
            {activeStage.securityPillars && (
              <div className="stage-interactive-block">
                <div className="interactive-block-title">
                  <Lock size={14} />
                  <span>DEFENSIVE SECURITY CORE PILLARS</span>
                </div>
                <div className="security-pillars-subgrid">
                  {activeStage.securityPillars.map((pillar) => (
                    <div key={pillar.title} className="security-pillar-subcard">
                      <strong>{pillar.title}</strong>
                      <p>{pillar.desc}</p>
                    </div>
                  ))}
                </div>
                <div className="interactive-block-footer">
                  <small>
                    Cybersecurity expertise is a developing goal. No unverified certifications or
                    claims are asserted.
                  </small>
                </div>
              </div>
            )}

            {/* STAGE 05: Future Growth Vectors */}
            {activeStage.futureVectors && (
              <div className="stage-interactive-block">
                <div className="interactive-block-title">
                  <Compass size={14} />
                  <span>TRAJECTORY & GROWTH VECTORS (FUTURE DIRECTION)</span>
                </div>
                <div className="future-vectors-subgrid">
                  {activeStage.futureVectors.map((vector) => (
                    <div key={vector.title} className="future-vector-subcard">
                      <strong>{vector.title}</strong>
                      <p>{vector.desc}</p>
                    </div>
                  ))}
                </div>
                <div className="interactive-block-footer">
                  <small>
                    Identified explicitly as Future Direction — a destination guiding daily
                    discipline and learning.
                  </small>
                </div>
              </div>
            )}

            {/* Highlights Row */}
            <div className="stage-highlights-grid">
              {activeStage.highlights.map((h) => (
                <div key={h.label} className="stage-highlight-box">
                  <span className="highlight-tag">{h.label}</span>
                  <p>{h.text}</p>
                </div>
              ))}
            </div>

            {/* Inspector Controls / Next-Prev Switcher */}
            <div className="stage-inspector-controls">
              <div className="inspector-controls-info">
                <span>STAGE {activeStage.number} OF 05</span>
                <strong>{activeStage.title}</strong>
              </div>

              <div className="inspector-controls-buttons">
                <button
                  type="button"
                  className="stage-nav-btn btn-prev"
                  onClick={handlePrev}
                  aria-label="Navigate to previous stage"
                >
                  <ChevronLeft size={16} />
                  <span>PREV STAGE</span>
                </button>

                <div className="stage-mini-dots">
                  {stages.map((_, i) => (
                    <button
                      key={i}
                      type="button"
                      className={`mini-dot ${activeStageIndex === i ? "is-active" : ""}`}
                      onClick={() => goToStage(i)}
                      aria-label={`Jump to stage 0${i + 1}`}
                    />
                  ))}
                </div>

                <button
                  type="button"
                  className="stage-nav-btn btn-next"
                  onClick={handleNext}
                  aria-label="Navigate to next stage"
                >
                  <span>NEXT STAGE</span>
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION E: Closing Section */}
      <section className="journey-closing-section" aria-label="Closing statement">
        <div className="closing-content-wrap">
          <div className="closing-icon-orbit" aria-hidden="true">
            <Orbit size={28} />
          </div>

          <div className="closing-copy">
            <span className="closing-eyebrow">FINAL TRANSMISSION / MOVING FORWARD</span>
            <h2 className="closing-heading">THE JOURNEY CONTINUES</h2>
            <p className="closing-statement">
              The destination is still ahead. Every project, every experiment, and every lesson
              moves the journey forward.
            </p>
          </div>

          <div className="closing-actions">
            <Link className="button button-primary" href="/projects/">
              Explore Selected Projects <ArrowUpRight size={15} />
            </Link>
            <Link className="button button-quiet" href="/contact/">
              Start A Conversation <ArrowUpRight size={15} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
