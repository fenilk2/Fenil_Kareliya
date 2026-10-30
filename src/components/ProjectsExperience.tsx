"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import ScrollGradientText from "@/components/ScrollGradientText";
import {
  ArrowUpRight,
  ArrowDownRight,
  ShieldCheck,
  Orbit,
  Code2,
  Sparkles,
  Layers,
  Compass,
  Terminal,
  Film
} from "@/components/Icons";
import { projects, type ProjectItem } from "@/components/projectData";

const CATEGORY_FILTERS = [
  "ALL MISSIONS",
  "DEVELOPMENT",
  "CYBERSECURITY",
  "GAMES",
  "CREATIVE MEDIA"
] as const;

type FilterType = (typeof CATEGORY_FILTERS)[number];

export default function ProjectsExperience() {
  const [filter, setFilter] = useState<FilterType>("ALL MISSIONS");
  const [query, setQuery] = useState("");
  const [selectedSlug, setSelectedSlug] = useState<string>("cosmoverse");

  // Filter projects by category and query
  const visibleProjects = useMemo(() => {
    const q = query.trim().toLowerCase();
    return projects.filter((project) => {
      let matchesCategory = true;
      if (filter === "DEVELOPMENT") {
        matchesCategory = project.groups.includes("Development");
      } else if (filter === "CYBERSECURITY") {
        matchesCategory = project.groups.includes("Cybersecurity");
      } else if (filter === "GAMES") {
        matchesCategory = project.groups.includes("Games");
      } else if (filter === "CREATIVE MEDIA") {
        matchesCategory = project.groups.includes("Creative Media");
      }

      const searchHaystack = [
        project.title,
        project.category,
        project.focus,
        project.description,
        project.mission,
        ...project.tags,
        ...project.techOverview.map((t) => t.name)
      ]
        .join(" ")
        .toLowerCase();

      const matchesQuery = !q || searchHaystack.includes(q);
      return matchesCategory && matchesQuery;
    });
  }, [filter, query]);

  // Selected project for inspector
  const activeProject: ProjectItem = useMemo(() => {
    return visibleProjects.find((p) => p.slug === selectedSlug) ?? visibleProjects[0] ?? projects[0];
  }, [visibleProjects, selectedSlug]);

  // Featured flagship project (CosmoVerse)
  const featuredProject = projects[0];

  const getProjectIcon = (slug: string) => {
    switch (slug) {
      case "cosmoverse":
        return <Orbit size={20} />;
      case "gravityflip":
        return <Code2 size={20} />;
      case "scamshield-india":
        return <ShieldCheck size={20} />;
      case "cinematic-shorts":
        return <Film size={20} />;
      default:
        return <Sparkles size={20} />;
    }
  };

  return (
    <div className="mission-archive-experience">
      {/* SECTION A — CINEMATIC PROJECTS HERO */}
      <section className="projects-hero-section" aria-label="Projects archive hero introduction">
        <div className="projects-hero-layout">
          <div className="projects-hero-copy">
            <div className="projects-kicker-pill">
              <span className="status-pulse" />
              <span>PROJECT DATABASE / 013</span>
            </div>
            <h1 className="projects-display-headline">
              The Mission<br />
              <ScrollGradientText as="span" variant="primary">Archive.</ScrollGradientText>
            </h1>
            <p className="projects-hero-statement">
              <em><ScrollGradientText as="span" variant="subheading">Every project begins as an idea. Every implementation reveals something new.</ScrollGradientText></em>
            </p>
            <p className="projects-hero-summary">
              An evolving mission log spanning interactive 3D simulations, game mechanics, digital safety heuristics, and cinematic media. Each entry represents deliberate experimentation, systems depth, and honest documentation of ongoing development.
            </p>

            <div className="projects-hero-stats">
              <div className="stat-chip">
                <span className="stat-num">{String(projects.length).padStart(2, "0")}</span>
                <span className="stat-label">Active Missions</span>
              </div>
              <div className="stat-chip">
                <span className="stat-num">04</span>
                <span className="stat-label">Distinct Tracks</span>
              </div>
              <div className="stat-chip">
                <span className="stat-num">100%</span>
                <span className="stat-label">Verified Specs</span>
              </div>
            </div>

            <div className="projects-hero-actions">
              <a href="#mission-archive-grid" className="button button-primary">
                Explore All Missions <ArrowDownRight size={15} />
              </a>
              <a href="#featured-mission" className="button button-quiet">
                Featured Flagship <ArrowDownRight size={14} />
              </a>
              <Link href="/skills/" className="button button-quiet">
                Capabilities Matrix <ArrowUpRight size={14} />
              </Link>
            </div>
          </div>

          <div className="projects-hero-visual" aria-hidden="true">
            <div className="projects-hud-card">
              <div className="hud-header">
                <span className="hud-beacon" />
                <span>ARCHIVE_TELEMETRY // LIVE</span>
              </div>
              <div className="hud-radar-stage">
                <div className="radar-grid-rings" />
                <div className="radar-sweep" />
                <div className="radar-core-hub">
                  <Terminal size={22} />
                  <span>CORE</span>
                </div>
                <div className="radar-blip blip-1" title="CosmoVerse">CV</div>
                <div className="radar-blip blip-2" title="GravityFlip">GF</div>
                <div className="radar-blip blip-3" title="ScamShield">SS</div>
                <div className="radar-blip blip-4" title="Cinematic">CS</div>
              </div>
              <div className="hud-footer">
                <span>DATABASE STATUS: INTEGRITY VERIFIED</span>
                <span>ZERO FABRICATED METRICS</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION B — FEATURED MISSION SPOTLIGHT */}
      <section id="featured-mission" className="featured-mission-section" aria-label="Featured flagship mission">
        <div className="featured-card">
          <div className="featured-badge-row">
            <span className="featured-pill">
              <Sparkles size={12} />
              <span>FEATURED MISSION // FLAGSHIP</span>
            </span>
            <span className="featured-status">
              <span className="status-pulse" />
              <span>{featuredProject.status.toUpperCase()}</span>
            </span>
          </div>

          <div className="featured-layout">
            <div className="featured-copy">
              <div className="featured-cat-tag">{featuredProject.category} · {featuredProject.focus}</div>
              <h2 className="featured-title">{featuredProject.title}</h2>
              <p className="featured-desc">{featuredProject.description}</p>

              <div className="featured-mission-box">
                <span className="box-label">MISSION OBJECTIVE:</span>
                <p>{featuredProject.mission}</p>
              </div>

              <div className="featured-tech-row">
                <span className="tech-label">CORE ARCHITECTURE:</span>
                <div className="tag-row">
                  {featuredProject.tags.map((tag) => (
                    <span key={tag} className="featured-tech-chip">{tag}</span>
                  ))}
                </div>
              </div>

              <div className="featured-actions">
                <Link href={`/projects/${featuredProject.slug}/`} className="button button-primary">
                  OPEN CASE FILE // {featuredProject.number} <ArrowUpRight size={14} />
                </Link>
                <button
                  type="button"
                  className="button button-quiet"
                  onClick={() => {
                    setSelectedSlug(featuredProject.slug);
                    const el = document.getElementById("mission-inspector");
                    if (el) el.scrollIntoView({ behavior: "smooth", block: "nearest" });
                  }}
                >
                  Quick Inspect
                </button>
              </div>
            </div>

            <div className="featured-art-stage" aria-hidden="true">
              <div className="art-stage-backdrop" />
              <div className="art-stage-rings">
                <div className="art-ring ring-primary" />
                <div className="art-ring ring-secondary" />
                <div className="art-ring ring-tertiary" />
                <div className="art-core-symbol">
                  <Orbit size={32} />
                  <span>{featuredProject.mark}</span>
                </div>
              </div>
              <div className="art-stage-caption">
                <span>SIMULATION_SPACE // THREE.JS</span>
                <span>COORDINATES: LOG_SCALE</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION C & D — INTERACTIVE MISSION ARCHIVE & INSPECTOR */}
      <section id="mission-archive-grid" className="mission-archive-section" aria-label="Interactive project catalog and inspector">
        <div className="section-header-row">
          <div>
            <div className="section-eyebrow-tag">
              <Layers size={13} />
              <span>CATALOG EXPLORER</span>
            </div>
            <h2 className="section-title-sm">Classified Project Files</h2>
          </div>
          <div className="archive-counter-badge">
            <span>SHOWING {String(visibleProjects.length).padStart(2, "0")} / {String(projects.length).padStart(2, "0")} MISSIONS</span>
          </div>
        </div>

        {/* Toolbar: Filters & Live Search */}
        <div className="mission-toolbar" role="toolbar" aria-label="Filter and search projects">
          <div className="filter-group" role="group" aria-label="Category filters">
            {CATEGORY_FILTERS.map((cat) => {
              const isActive = filter === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  className={`toolbar-filter-btn ${isActive ? "is-active" : ""}`}
                  aria-pressed={isActive}
                  onClick={() => setFilter(cat)}
                >
                  <span>{cat}</span>
                </button>
              );
            })}
          </div>

          <div className="search-box">
            <span className="search-label">SEARCH ARCHIVE:</span>
            <div className="search-input-wrap">
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search by title, tech, or concept…"
                aria-label="Search projects by title, technology, or keywords"
              />
              {query && (
                <button
                  type="button"
                  className="search-clear-btn"
                  onClick={() => setQuery("")}
                  aria-label="Clear search text"
                >
                  ✕
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Grid and Inspector Split */}
        <div className="archive-split-layout">
          {/* Main Mission Cards Grid */}
          <div className="mission-cards-container">
            <div className="mission-cards-grid">
              {visibleProjects.map((project) => {
                const isSelected = activeProject.slug === project.slug;
                return (
                  <article
                    key={project.slug}
                    className={`project-archive-card ${project.className} ${isSelected ? "is-selected" : ""}`}
                    tabIndex={0}
                    role="button"
                    aria-pressed={isSelected}
                    onClick={() => setSelectedSlug(project.slug)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        setSelectedSlug(project.slug);
                      }
                    }}
                  >
                    <div className="card-top-bar">
                      <span className="card-file-id">FILE // {project.number}</span>
                      <span className="card-status-badge">
                        <span className="status-pulse" />
                        <span>{project.status}</span>
                      </span>
                    </div>

                    <div className="card-art-stage" aria-hidden="true">
                      <div className="art-ring art-ring-outer" />
                      <div className="art-ring art-ring-inner" />
                      <div className="art-center-mark">
                        {getProjectIcon(project.slug)}
                        <span className="mark-text">{project.mark}</span>
                      </div>
                    </div>

                    <div className="card-body">
                      <div className="card-category-strip">
                        <span>{project.category}</span>
                        <span className="cat-dot">·</span>
                        <span>{project.focus}</span>
                      </div>
                      <h3 className="card-title">{project.title}</h3>
                      <p className="card-description">{project.description}</p>

                      <div className="card-tags-row">
                        {project.tags.slice(0, 3).map((tag) => (
                          <span key={tag} className="card-tag">{tag}</span>
                        ))}
                      </div>
                    </div>

                    <div className="card-footer-actions">
                      <button
                        type="button"
                        className="quick-select-btn"
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedSlug(project.slug);
                        }}
                      >
                        <span>{isSelected ? "Currently Inspecting" : "Inspect Mission"}</span>
                      </button>

                      <Link
                        href={`/projects/${project.slug}/`}
                        className="open-file-link"
                        onClick={(e) => e.stopPropagation()}
                        title={`Open ${project.title} Case File`}
                      >
                        <span>Case File</span>
                        <ArrowUpRight size={13} />
                      </Link>
                    </div>
                  </article>
                );
              })}
            </div>

            {/* Empty Search State */}
            {visibleProjects.length === 0 && (
              <div className="archive-empty-state">
                <div className="empty-beacon">∅</div>
                <h3>No Matching Mission Files</h3>
                <p>
                  No project records matched your search query &ldquo;{query}&rdquo; under the &ldquo;{filter}&rdquo; filter.
                </p>
                <button
                  type="button"
                  className="button button-quiet"
                  onClick={() => {
                    setQuery("");
                    setFilter("ALL MISSIONS");
                  }}
                >
                  Reset Archive Filters
                </button>
              </div>
            )}
          </div>

          {/* SECTION D — DOCKED PROJECT INSPECTOR */}
          <aside id="mission-inspector" className="mission-inspector-panel" aria-label="Selected project deep inspector">
            <div className={`inspector-card ${activeProject.className}`} aria-live="polite">
              <div className="inspector-head">
                <div className="inspector-mark-badge">
                  {getProjectIcon(activeProject.slug)}
                  <span>{activeProject.mark}</span>
                </div>
                <div className="inspector-meta-col">
                  <span className="inspector-sub">SELECTED RECORD // FILE {activeProject.number}</span>
                  <h3 className="inspector-name">{activeProject.title}</h3>
                  <span className="inspector-cat">{activeProject.category} · {activeProject.focus}</span>
                </div>
              </div>

              <div className="inspector-body">
                <div className="inspector-block">
                  <span className="block-title">MISSION OBJECTIVE</span>
                  <p className="block-text">{activeProject.mission}</p>
                </div>

                <div className="inspector-block">
                  <span className="block-title">IMPLEMENTED CAPABILITIES</span>
                  <ul className="capabilities-list">
                    {activeProject.implementedFeatures.map((feat, i) => (
                      <li key={i}>
                        <span className="cap-bullet" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="inspector-block">
                  <span className="block-title">TECHNICAL ARCHITECTURE</span>
                  <div className="tech-specs-grid">
                    {activeProject.techOverview.map((tech) => (
                      <div key={tech.name} className="tech-spec-item">
                        <strong>{tech.name}</strong>
                        <small>{tech.role}</small>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="inspector-block next-vector-block">
                  <span className="block-title">
                    <Compass size={12} />
                    <span>NEXT ITERATION VECTOR</span>
                  </span>
                  <p className="block-text">{activeProject.next}</p>
                </div>
              </div>

              <div className="inspector-actions">
                <Link href={`/projects/${activeProject.slug}/`} className="button button-primary">
                  OPEN FULL CASE FILE <ArrowUpRight size={14} />
                </Link>
                <span className="inspector-disclaimer">
                  Verified specs · Zero fabricated metrics
                </span>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* SECTION G — CLOSING CALL TO ACTION */}
      <section className="projects-closing-cta-section" aria-label="Closing call to action">
        <div className="closing-banner">
          <div className="closing-content">
            <div className="closing-eyebrow">
              <Sparkles size={13} />
              <span>MISSION TRAJECTORY</span>
            </div>
            <h2 className="closing-headline"><ScrollGradientText as="span" variant="secondary">The Next Mission Starts Here.</ScrollGradientText></h2>
            <p className="closing-statement">
              <em>Ideas become meaningful when they are built, tested, and improved.</em>
            </p>
            <p className="closing-desc">
              Every project in this archive serves as a stepping stone toward deeper systems knowledge, defensive cybersecurity capability, and refined creative craft.
            </p>

            <div className="closing-navigation-grid">
              <Link href="/skills/" className="closing-nav-card">
                <div className="nav-card-copy">
                  <span className="nav-step">CAPABILITIES</span>
                  <strong>The Constellation of Capabilities</strong>
                  <p>Explore the 7 technical skills powering these missions.</p>
                </div>
                <ArrowUpRight size={16} />
              </Link>

              <Link href="/journey/" className="closing-nav-card">
                <div className="nav-card-copy">
                  <span className="nav-step">EVOLUTION</span>
                  <strong>The Evolution Timeline</strong>
                  <p>Trace the 5 evolutionary stages behind this work.</p>
                </div>
                <ArrowUpRight size={16} />
              </Link>

              <Link href="/about/" className="closing-nav-card">
                <div className="nav-card-copy">
                  <span className="nav-step">PROFILE</span>
                  <strong>Beyond the Interface</strong>
                  <p>Learn about Fenil Kareliya, principles, and story.</p>
                </div>
                <ArrowUpRight size={16} />
              </Link>

              <Link href="/contact/" className="closing-nav-card">
                <div className="nav-card-copy">
                  <span className="nav-step">COMMUNICATION</span>
                  <strong>Direct Transmission</strong>
                  <p>Inquire about a specific project or discuss ideas.</p>
                </div>
                <ArrowUpRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
