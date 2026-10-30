import type { ReactNode } from "react";
import Link from "next/link";
import CosmicCanvas from "@/components/CosmicCanvas";
import { ArrowUpRight } from "@/components/Icons";

const links = [
  ["Home", "/"], ["About", "/about/"], ["Skills", "/skills/"],
  ["Journey", "/journey/"], ["Projects", "/projects/"], ["Contact", "/contact/"],
] as const;

export default function InnerPage({ children, current, eyebrow = "FIELD NOTES / FENIL KARELIYA" }: { children: ReactNode; current: string; eyebrow?: string }) {
  return <main className="site-shell inner-site-shell">
    <CosmicCanvas /><div className="page-grain" aria-hidden="true" />
    <header className="site-header">
      <Link className="wordmark" href="/" aria-label="Fenil Kareliya home"><span className="wordmark-symbol">FK</span><span>FENIL KARELIYA<span className="wordmark-dot">.</span></span></Link>
      <nav className="main-nav" aria-label="Main navigation">{links.slice(1).map(([label, href]) => <Link className={current === label ? "nav-active" : ""} href={href} key={label}>{label}</Link>)}</nav>
      <Link className="header-cta" href="/contact/">Let&apos;s connect <ArrowUpRight size={14} /></Link>
    </header>
    <nav className="mobile-page-nav inner-mobile-nav" aria-label="Explore portfolio pages">{links.map(([label, href]) => <Link className={current === label ? "nav-active" : ""} href={href} key={label}>{label}</Link>)}</nav>
    <div className="inner-page-content section-wrap">
      <div className="inner-eyebrow"><span className="status-pulse" />{eyebrow}</div>
      {children}
      <div className="inner-page-next"><span>KEEP EXPLORING</span><div>{links.filter(([label]) => label !== current && label !== "Home").map(([label, href]) => <Link href={href} key={label}>{label} <ArrowUpRight size={13} /></Link>)}</div></div>
    </div>
    <footer className="site-footer section-wrap"><Link className="wordmark" href="/"><span className="wordmark-symbol">FK</span><span>FENIL KARELIYA<span className="wordmark-dot">.</span></span></Link><span>BUILT WITH CURIOSITY · UPDATED THROUGH ACTION</span><Link href="/" className="back-top">BACK TO HOME ↑</Link></footer>
  </main>;
}
