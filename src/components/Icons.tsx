import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & { size?: number };

function IconBase({ size = 18, children, ...props }: IconProps) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>{children}</svg>;
}

export function ArrowDownRight(props: IconProps) {
  return <IconBase {...props}><path d="M7 7 17 17M8 17h9V8" /></IconBase>;
}
export function ArrowUpRight(props: IconProps) {
  return <IconBase {...props}><path d="M7 17 17 7M7 7h10v10" /></IconBase>;
}
export function Code2(props: IconProps) {
  return <IconBase {...props}><path d="m8 17-5-5 5-5M16 7l5 5-5 5M14 4l-4 16" /></IconBase>;
}
export function Fingerprint(props: IconProps) {
  return <IconBase {...props}><path d="M12 11a2 2 0 0 0-2 2c0 2.3-.3 4.5-1 6.5M14 13c0 3.2-.5 5.8-1.5 8M8 15c-.1 1.5-.4 2.8-.9 4M12 7a6 6 0 0 0-6 6M12 3a10 10 0 0 0-10 10M16 9a5 5 0 0 1 1 3c0 1.1-.1 2.2-.2 3.2M12 5a8 8 0 0 1 8 8c0 1.3-.1 2.6-.3 3.8M4 16c.2 2.1.8 3.8 1.7 5" /></IconBase>;
}
export function Orbit(props: IconProps) {
  return <IconBase {...props}><circle cx="12" cy="12" r="2.2" /><ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(-32 12 12)" /><ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(32 12 12)" /></IconBase>;
}
export function ShieldCheck(props: IconProps) {
  return <IconBase {...props}><path d="M12 22s8-4 8-11V5l-8-3-8 3v6c0 7 8 11 8 11Z" /><path d="m9 12 2 2 4-4" /></IconBase>;
}
export function Sparkles(props: IconProps) {
  return <IconBase {...props}><path d="m12 3 1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3ZM19 15l1.1 2.9L23 19l-2.9 1.1L19 23l-1.1-2.9L15 19l2.9-1.1L19 15Z" /></IconBase>;
}
export function Compass(props: IconProps) {
  return <IconBase {...props}><circle cx="12" cy="12" r="10" /><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" /></IconBase>;
}
export function Layers(props: IconProps) {
  return <IconBase {...props}><polygon points="12 2 2 7 12 12 22 7 12 2" /><polyline points="2 17 12 22 22 17" /><polyline points="2 12 12 17 22 12" /></IconBase>;
}
export function Lock(props: IconProps) {
  return <IconBase {...props}><rect width="18" height="11" x="3" y="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></IconBase>;
}
export function Terminal(props: IconProps) {
  return <IconBase {...props}><polyline points="4 17 10 11 4 5" /><line x1="12" x2="20" y1="19" y2="19" /></IconBase>;
}
export function ChevronRight(props: IconProps) {
  return <IconBase {...props}><path d="m9 18 6-6-6-6" /></IconBase>;
}
export function ChevronLeft(props: IconProps) {
  return <IconBase {...props}><path d="m15 18-6-6 6-6" /></IconBase>;
}
export function Activity(props: IconProps) {
  return <IconBase {...props}><path d="M22 12h-4l-3 9L9 3l-3 9H2" /></IconBase>;
}
export function Film(props: IconProps) {
  return <IconBase {...props}><rect width="20" height="20" x="2" y="2" rx="2.18" ry="2.18" /><line x1="7" x2="7" y1="2" y2="22" /><line x1="17" x2="17" y1="2" y2="22" /><line x1="2" x2="22" y1="12" y2="12" /><line x1="2" x2="7" y1="7" y2="7" /><line x1="2" x2="7" y1="17" y2="17" /><line x1="17" x2="22" y1="7" y2="7" /><line x1="17" x2="22" y1="17" y2="17" /></IconBase>;
}
export function Brain(props: IconProps) {
  return <IconBase {...props}><path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z" /><path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z" /><path d="M12 5v14" /></IconBase>;
}
export function Target(props: IconProps) {
  return <IconBase {...props}><circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" /></IconBase>;
}

export function Mail(props: IconProps) {
  return <IconBase {...props}><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></IconBase>;
}
export function Send(props: IconProps) {
  return <IconBase {...props}><path d="m22 2-7 20-4-9-9-4Z" /><path d="M22 2 11 13" /></IconBase>;
}
export function Check(props: IconProps) {
  return <IconBase {...props}><polyline points="20 6 9 17 4 12" /></IconBase>;
}
export function AlertCircle(props: IconProps) {
  return <IconBase {...props}><circle cx="12" cy="12" r="10" /><line x1="12" x2="12" y1="8" y2="12" /><line x1="12" x2="12.01" y1="16" y2="16" /></IconBase>;
}
export function Copy(props: IconProps) {
  return <IconBase {...props}><rect width="14" height="14" x="8" y="8" rx="2" ry="2" /><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" /></IconBase>;
}
export function Radio(props: IconProps) {
  return <IconBase {...props}><circle cx="12" cy="12" r="2" /><path d="M16.24 7.76a6 6 0 0 1 0 8.49m-8.48-.01a6 6 0 0 1 0-8.49m11.31-2.82a10 10 0 0 1 0 14.14m-14.14 0a10 10 0 0 1 0-14.14" /></IconBase>;
}
