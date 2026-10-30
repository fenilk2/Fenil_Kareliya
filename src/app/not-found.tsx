import InnerPage from "@/components/InnerPage";
import Link from "next/link";
import ScrollGradientText from "@/components/ScrollGradientText";
import { ArrowUpRight } from "@/components/Icons";

export default function NotFound() {
  return (
    <InnerPage current="404" eyebrow="TELEMETRY / 404 SIGNAL LOST">
      <div style={{ padding: "4rem 0", textAlign: "center", maxWidth: "600px", margin: "0 auto" }}>
        <div style={{
          display: "inline-block",
          fontSize: "0.8rem",
          letterSpacing: "0.2em",
          color: "var(--accent-cyan)",
          fontFamily: "var(--mono)",
          border: "1px solid rgba(114, 229, 255, 0.2)",
          padding: "4px 12px",
          borderRadius: "999px",
          marginBottom: "1.5rem"
        }}>
          COORDINATES UNRESOLVED
        </div>
        <h1 style={{ fontSize: "clamp(2.5rem, 6vw, 4rem)", fontWeight: 700, margin: "0 0 1rem", letterSpacing: "-0.03em" }}>
          <ScrollGradientText as="span" variant="primary">Sector Not Found.</ScrollGradientText>
        </h1>
        <p style={{ color: "var(--text-muted)", fontSize: "1.1rem", lineHeight: 1.6, marginBottom: "2.5rem" }}>
          The requested coordinate lies beyond mapped portfolio space. Check the navigational telemetry or return to home base.
        </p>
        <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="/" className="button button-primary">
            Return to Home Base <ArrowUpRight size={14} />
          </Link>
          <Link href="/about/" className="button button-quiet">
            About Fenil <ArrowUpRight size={14} />
          </Link>
          <Link href="/projects/" className="button button-quiet">
            Explore Projects <ArrowUpRight size={14} />
          </Link>
        </div>
      </div>
    </InnerPage>
  );
}
