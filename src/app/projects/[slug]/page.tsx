import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import InnerPage from "@/components/InnerPage";
import ScrollGradientText from "@/components/ScrollGradientText";
import {
  ArrowUpRight,
  Code2,
  Orbit,
  ShieldCheck,
  Film,
  Sparkles,
  Compass,
  Layers,
  Terminal
} from "@/components/Icons";
import { projects, type ProjectItem } from "@/components/projectData";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  return {
    title: project
      ? `${project.title} — Case File // ${project.number} | Projects | Fenil Kareliya`
      : "Project File | Fenil Kareliya",
    description: project?.description ?? "Classified project notes and specifications from Fenil Kareliya."
  };
}

export default async function ProjectDetailPage({
  params
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project: ProjectItem | undefined = projects.find((item) => item.slug === slug);
  if (!project) notFound();

  // Related projects (the other 3)
  const relatedProjects = projects.filter((p) => p.slug !== project.slug);

  const getHeroIcon = (pSlug: string) => {
    switch (pSlug) {
      case "cosmoverse":
        return <Orbit size={32} />;
      case "gravityflip":
        return <Code2 size={32} />;
      case "scamshield-india":
        return <ShieldCheck size={32} />;
      case "cinematic-shorts":
        return <Film size={32} />;
      default:
        return <Sparkles size={32} />;
    }
  };

  return (
    <InnerPage current="Projects" eyebrow={`CASE FILE // ${project.number} — ${project.title.toUpperCase()}`}>
      {/* SECTION A — PROJECT HERO */}
      <section className={`detail-case-hero ${project.className}`} aria-label="Project case file introduction">
        <div className="detail-breadcrumb-bar">
          <Link href="/projects/" className="detail-back-link">
            <span>← Return to Mission Archive</span>
          </Link>
          <span className="detail-classification">CLASSIFICATION: PUBLIC SPECIFICATION</span>
        </div>

        <div className="detail-hero-grid">
          <div className="detail-hero-content">
            <div className="detail-kicker-row">
              <span className="detail-number-pill">FILE // {project.number}</span>
              <span className="detail-category-tag">{project.category}</span>
              <span className="detail-status-pill">
                <span className="status-pulse" />
                <span>{project.status.toUpperCase()}</span>
              </span>
            </div>

            <h1 className="detail-display-title">
              <ScrollGradientText as="span" variant="primary">{project.title}</ScrollGradientText>
            </h1>
            <p className="detail-focus-statement"><ScrollGradientText as="span" variant="subheading">{project.focus.replace(" / ", " · ")}</ScrollGradientText></p>
            <p className="detail-lede-summary">{project.description}</p>

            <div className="detail-meta-pills">
              {project.tags.map((tag) => (
                <span key={tag} className="meta-pill">{tag}</span>
              ))}
            </div>
          </div>

          <div className="detail-hero-visual" aria-hidden="true">
            <div className="detail-visual-stage">
              <div className="stage-ring ring-outer" />
              <div className="stage-ring ring-inner" />
              <div className="stage-core-icon">
                {getHeroIcon(project.slug)}
                <span className="stage-mark">{project.mark}</span>
              </div>
              <div className="stage-status-caption">
                <span>SYSTEM ID: {project.mark}</span>
                <span>STATUS: {project.status.toUpperCase()}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION B & C — THE MISSION & IMPLEMENTATION SPECIFICATIONS */}
      <section className="detail-specs-section" aria-label="Project mission and features">
        <div className="detail-specs-grid">
          {/* Section B: The Mission */}
          <div className="spec-card mission-card-spec">
            <div className="spec-card-head">
              <Compass size={16} />
              <h3><ScrollGradientText as="span" variant="subheading">The Mission &amp; Problem Explored</ScrollGradientText></h3>
            </div>
            <p className="spec-body-text">{project.mission}</p>
            <div className="spec-detail-box">
              <span className="box-tag">ARCHITECTURAL INTENT</span>
              <p>{project.detail}</p>
            </div>
          </div>

          {/* Section C: Implemented Features vs Planned Features */}
          <div className="spec-card features-card-spec">
            <div className="spec-card-head">
              <Layers size={16} />
              <h3><ScrollGradientText as="span" variant="subheading">Features &amp; Implementation Breakdown</ScrollGradientText></h3>
            </div>

            <div className="feature-sub-block">
              <span className="feature-sub-title">
                <span className="bullet-active" />
                <span>VERIFIED IMPLEMENTED CAPABILITIES</span>
              </span>
              <ul className="detail-feature-list">
                {project.implementedFeatures.map((feat, i) => (
                  <li key={i}>
                    <span className="feature-check">✓</span>
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="feature-sub-block planned-block">
              <span className="feature-sub-title">
                <span className="bullet-planned" />
                <span>PLANNED ITERATION MILESTONES</span>
              </span>
              <ul className="detail-feature-list planned-list">
                {project.plannedFeatures.map((feat, i) => (
                  <li key={i}>
                    <span className="feature-circle">○</span>
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION D & E — TECHNICAL OVERVIEW & DEVELOPMENT STORY */}
      <section className="detail-deep-section" aria-label="Technical overview and development story">
        <div className="detail-deep-grid">
          {/* Section D: Technical Overview */}
          <div className="deep-card tech-card">
            <div className="deep-card-head">
              <Terminal size={16} />
              <h3><ScrollGradientText as="span" variant="subheading">Technical Overview &amp; Roles</ScrollGradientText></h3>
            </div>
            <p className="deep-card-intro">
              Technologies chosen for this project based on architectural requirements and learning objectives:
            </p>
            <div className="detail-tech-table">
              {project.techOverview.map((tech) => (
                <div key={tech.name} className="tech-row">
                  <div className="tech-col-name">
                    <strong>{tech.name}</strong>
                  </div>
                  <div className="tech-col-role">
                    <span>{tech.role}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section E: Development Story */}
          <div className="deep-card story-card">
            <div className="deep-card-head">
              <Sparkles size={16} />
              <h3><ScrollGradientText as="span" variant="subheading">Development Story &amp; Insights</ScrollGradientText></h3>
            </div>
            <p className="story-text">{project.developmentStory}</p>
            <div className="story-next-callout">
              <span className="callout-label">NEXT TECHNICAL HORIZON:</span>
              <p>{project.next}</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION F — PROJECT ACTIONS & HONEST POSTURE */}
      <section className="detail-actions-section" aria-label="Project actions and inquiries">
        <div className="detail-action-card">
          <div className="action-card-copy">
            <h4>Public Repositories & Live Deployments</h4>
            <p>
              In alignment with portfolio integrity, external demo links, repository URLs, or deployment endpoints are provided strictly when public access is formally confirmed.
            </p>
          </div>
          <div className="action-buttons-wrap">
            <Link href="/contact/" className="button button-primary">
              Inquire About This Project <ArrowUpRight size={14} />
            </Link>
            <Link href="/projects/" className="button button-quiet">
              ← Return to Archive
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION G — RELATED MISSIONS */}
      <section className="detail-related-section" aria-label="Related project missions">
        <div className="related-head-row">
          <span className="related-eyebrow">CONTINUE EXPLORING ARCHIVE</span>
          <h3><ScrollGradientText as="span" variant="secondary">Related Mission Files</ScrollGradientText></h3>
        </div>

        <div className="related-grid">
          {relatedProjects.map((rel) => (
            <Link
              key={rel.slug}
              href={`/projects/${rel.slug}/`}
              className={`related-card ${rel.className}`}
            >
              <div className="related-top">
                <span className="related-num">FILE // {rel.number}</span>
                <span className="related-mark">{rel.mark}</span>
              </div>
              <h4 className="related-title">{rel.title}</h4>
              <p className="related-desc">{rel.description}</p>
              <div className="related-footer">
                <span className="related-cat">{rel.category}</span>
                <ArrowUpRight size={14} />
              </div>
            </Link>
          ))}
        </div>
      </section>
    </InnerPage>
  );
}
