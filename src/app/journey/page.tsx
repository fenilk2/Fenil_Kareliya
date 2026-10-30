import type { Metadata } from "next";
import Link from "next/link";
import InnerPage from "@/components/InnerPage";
import JourneyExperience from "@/components/JourneyExperience";
import ScrollGradientText from "@/components/ScrollGradientText";
import { ArrowDownRight, ArrowUpRight, Orbit, Sparkles } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Journey — The Evolution | Fenil Kareliya",
  description:
    "The evolution timeline of Fenil Kareliya — from curious beginnings to programming fundamentals, projects, cybersecurity focus, and future ambitions.",
};

export default function JourneyPage() {
  return (
    <InnerPage current="Journey" eyebrow="PERSONAL TRANSMISSION / 010">
      {/* SECTION A: Cinematic Introduction */}
      <section className="journey-cinematic-intro" id="evolution-intro" aria-label="Journey introduction">
        <div className="journey-intro-copy">
          <div className="section-kicker">
            <span>010</span> / THE EVOLUTION TIMELINE
          </div>
          <h1 className="inner-title journey-hero-title">
            The Evolution
            <br />
            <ScrollGradientText as="span" variant="primary">Through Code &amp; Curiosity.</ScrollGradientText>
          </h1>
          <p className="inner-lede inner-lede-wide journey-hero-statement">
            <em><ScrollGradientText as="span" variant="subheading">Every system begins with curiosity. Every breakthrough begins with a question.</ScrollGradientText></em>
          </p>
          <p className="journey-hero-description">
            This timeline documents personal growth as an honest trajectory: from initial curiosity about
            digital mechanics, through disciplined BSc IT foundations, to applied missions, a dedicated
            cybersecurity posture, and long-term ambitions.
          </p>

          <div className="journey-hero-actions">
            <a className="button button-primary" href="#journey-root">
              Explore The Timeline <ArrowDownRight size={15} />
            </a>
            <Link className="button button-quiet" href="/projects/">
              View Project Archive <ArrowUpRight size={14} />
            </Link>
          </div>

          <div className="journey-hero-signals" aria-label="Evolution phases">
            <span>
              <i className="status-pulse" /> 01 CURIOSITY
            </span>
            <span>
              <i className="status-pulse" /> 02 FUNDAMENTALS
            </span>
            <span>
              <i className="status-pulse" /> 03 PROJECTS
            </span>
            <span>
              <i className="status-pulse" /> 04 CYBERSECURITY
            </span>
            <span>
              <i className="status-pulse" /> 05 FUTURE DIRECTION
            </span>
          </div>
        </div>

        {/* Cinematic Animated Orbital & Signal Art */}
        <div className="journey-orbital-stage" aria-label="Animated evolution orbital art">
          <div className="journey-orbit-halo halo-alpha" />
          <div className="journey-orbit-halo halo-beta" />
          <div className="journey-orbit-halo halo-gamma" />
          <div className="journey-orbit-core">
            <div className="journey-core-badge">
              <Orbit size={26} />
              <span>EVOLUTION</span>
              <small>010 // TIMELINE</small>
            </div>
          </div>
          <span className="journey-orbit-satellite satellite-1" />
          <span className="journey-orbit-satellite satellite-2" />
          <span className="journey-orbit-sparkle sparkle-1">
            <Sparkles size={14} />
          </span>
          <div className="journey-stage-badge-top">SIGNAL / ONLINE</div>
          <div className="journey-stage-badge-bottom">CONTINUOUS TRAJECTORY</div>
        </div>

        {/* Clear Scroll Cue */}
        <a href="#journey-root" className="journey-scroll-cue" aria-label="Scroll down to timeline">
          <span className="cue-line" />
          <span>SCROLL TO EXPLORE TIMELINE</span>
          <span className="cue-arrow">↓</span>
        </a>
      </section>

      {/* Interactive Experience */}
      <JourneyExperience />
    </InnerPage>
  );
}
