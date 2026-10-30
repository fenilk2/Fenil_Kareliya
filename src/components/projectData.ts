export interface ProjectTech {
  name: string;
  role: string;
}

export interface ProjectItem {
  slug: string;
  number: string;
  title: string;
  category: string;
  focus: string;
  mark: string;
  accent: "cyan" | "violet" | "mint" | "amber";
  className: string;
  description: string;
  detail: string;
  mission: string;
  implementedFeatures: string[];
  plannedFeatures: string[];
  techOverview: ProjectTech[];
  developmentStory: string;
  tags: string[];
  status: string;
  next: string;
  groups: string[];
}

export const projects: ProjectItem[] = [
  {
    slug: "cosmoverse",
    number: "01",
    title: "CosmoVerse",
    category: "SCIENTIFIC SIMULATION",
    focus: "SPACE / PHYSICS",
    mark: "CV",
    accent: "violet",
    className: "project-cosmo",
    description: "An evolving cosmic simulation concept exploring how interactive 3D can make the scale and structure of the universe feel tangible.",
    detail: "CosmoVerse is a web-first scientific simulation project exploring ways to present cosmic-scale ideas through an interactive 3D experience. The project direction centres on a modular architecture, visual clarity, and making complex phenomena easier to explore.",
    mission: "To create an accessible, browser-based cosmic visualization environment that communicates astronomical distances, orbital systems, and stellar distributions through intuitive 3D interaction.",
    implementedFeatures: [
      "Procedural starfield generation rendering depth and cosmic distribution",
      "Interactive orbital camera system allowing free inspection across 3D axes",
      "Scale-relative celestial coordinate mapping for planetary spheres",
      "Adaptive frame-budgeted WebGL canvas rendering for smooth interaction"
    ],
    plannedFeatures: [
      "N-body gravitational physics simulation between active celestial bodies",
      "Interactive planetary telemetry panels with orbital path visualization",
      "Spectral classification shaders representing stellar surface temperatures"
    ],
    techOverview: [
      { name: "Three.js", role: "Scene graphing, lighting models, and 3D camera controls" },
      { name: "WebGL", role: "Hardware-accelerated GPU graphics pipeline in the browser" },
      { name: "TypeScript", role: "Strongly-typed math calculations and coordinate state" },
      { name: "React", role: "Component lifecycle management and HUD overlay integration" }
    ],
    developmentStory: "CosmoVerse originated from a simple question: can cosmic scales be rendered intuitively in a browser without overwhelming the user? The primary technical challenge involved managing logarithmic camera depth planes so nearby planetary models and distant star clusters coexist without z-fighting or spatial distortion.",
    tags: ["Three.js", "WebGL", "Scientific visualization", "Simulation"],
    status: "Active exploration",
    next: "Continue strengthening the simulation architecture and scientific presentation.",
    groups: ["Development", "Simulation"]
  },
  {
    slug: "gravityflip",
    number: "02",
    title: "GravityFlip",
    category: "GAME DEVELOPMENT",
    focus: "PLAY / MECHANICS",
    mark: "GF",
    accent: "cyan",
    className: "project-gravity",
    description: "A gravity-driven game project focused on movement, level feel, and the satisfaction of turning a simple mechanic into a complete experience.",
    detail: "GravityFlip is a game-development project built around a gravity-based mechanic. Its portfolio entry focuses on the design direction and iterative craft behind movement, level feel, and the player experience.",
    mission: "To explore player agency, momentum preservation, and precision collision mechanics through a central gravitational inversion loop where up and down invert dynamically.",
    implementedFeatures: [
      "Dynamic gravity inversion loop toggling acceleration vectors on player input",
      "Axis-Aligned Bounding Box (AABB) collision detection with platform edges",
      "Velocity clamping and horizontal momentum retention across gravitational shifts",
      "Delta-time normalized game loop ensuring consistent physics across refresh rates"
    ],
    plannedFeatures: [
      "Dynamic moving hazard obstacles with parameterized patrol routes",
      "Split-second speedrun timer and death-count telemetry HUD",
      "Synthesized audio feedback triggers linked to velocity and gravity states"
    ],
    techOverview: [
      { name: "Canvas API / WebGL", role: "High-performance 2D sprite and level geometry rendering" },
      { name: "Custom Physics Engine", role: "Discrete Euler integration for gravity and acceleration" },
      { name: "TypeScript", role: "Finite state machine governing player states (grounded, airborne, flipping)" },
      { name: "HTML5 Web Audio", role: "Low-latency audio cue triggering during mechanical shifts" }
    ],
    developmentStory: "The primary design goal was tuning the player feel. Early prototypes felt either too floaty or jarringly instantaneous. Iterating on gravitational acceleration curves and introducing a subtle horizontal velocity dampener gave the mechanic the crisp, responsive precision required for platforming.",
    tags: ["Game systems", "Gameplay", "Physics", "Iteration"],
    status: "Concept & build",
    next: "Document the gameplay loop, mechanics, and tested build details as they are ready to share.",
    groups: ["Development", "Games"]
  },
  {
    slug: "scamshield-india",
    number: "03",
    title: "ScamShield India",
    category: "DIGITAL SAFETY",
    focus: "TRUST / PROTECTION",
    mark: "SS",
    accent: "mint",
    className: "project-shield",
    description: "A scam-awareness and detection project aimed at helping people think more carefully about suspicious messages, links, and online threats.",
    detail: "ScamShield India explores a practical approach to scam awareness and suspicious-message analysis, with a Python and Flask backend direction. The goal is to make digital safety easier to understand while treating detection results carefully and transparently.",
    mission: "To empower everyday users across India to evaluate deceptive SMS appeals, malicious UPI payment requests, and fraudulent links through clear, heuristic-driven threat transparency.",
    implementedFeatures: [
      "Regex-driven heuristic parser identifying common Indian financial scam patterns (fake KYC, lottery claims, urgency hooks)",
      "URL structure analysis flagging misspelled domain spoofing and raw IP destinations",
      "Transparent risk evaluation scoring categorizing messages into Low, Moderate, and High Alert",
      "Plain-language advisory cards explaining why specific text patterns trigger security warnings"
    ],
    plannedFeatures: [
      "Crowdsourced threat pattern database with automated hashing of known scam strings",
      "Offline lightweight rule-set execution for low-bandwidth mobile browsers",
      "Multi-lingual awareness modules available in Hindi, Gujarati, and English"
    ],
    techOverview: [
      { name: "Python", role: "Text parsing, regular expression pipelines, and heuristic scoring" },
      { name: "Flask", role: "Lightweight REST API backend processing inspection requests" },
      { name: "Security Heuristics", role: "Rule-based pattern matching modeled after known phishing vectors" },
      { name: "Responsive UI", role: "Minimalist input console presenting structured threat breakdowns" }
    ],
    developmentStory: "Inspired by seeing family members receive deceptive SMS messages claiming their electricity or bank accounts were suspended. The core development focus was avoiding black-box confidence scores; instead, the system breaks down the exact linguistic signals and deceptive URL structures to educate the user.",
    tags: ["Python", "Flask", "Security awareness", "Threat detection"],
    status: "In development",
    next: "Improve test coverage, clarify detection limits, and document integrations accurately.",
    groups: ["Cybersecurity", "Development"]
  },
  {
    slug: "cinematic-shorts",
    number: "04",
    title: "Cinematic Shorts",
    category: "VISUAL STORYTELLING",
    focus: "FRAME / FEELING",
    mark: "CS",
    accent: "amber",
    className: "project-cinema",
    description: "A creative track for short-form cinematic edits, atmosphere, pacing, and visual storytelling across digital platforms.",
    detail: "Cinematic Shorts is the creative side of the portfolio: a place for exploring mood, rhythm, framing, and visual storytelling through short-form edits. It sits alongside technical projects as a complementary creative practice.",
    mission: "To explore narrative timing, rhythm, colour theory, and sonic atmosphere as a creative counterbalance to software engineering.",
    implementedFeatures: [
      "Disciplined narrative sequencing exploring visual tension, pacing, and emotional beats",
      "Frame-accurate cut transitions synchronized to acoustic peaks and musical transients",
      "Custom cinematic colour grading pipelines utilizing high-contrast atmospheric tones",
      "Multi-format composition optimized for both horizontal widescreen and vertical viewing"
    ],
    plannedFeatures: [
      "Interactive reel player presenting curated short-form sequences with technical breakdowns",
      "Before/After grading comparison sliders revealing color LUT workflows",
      "Case notes detailing sound design, Foley layering, and spatial audio mastering"
    ],
    techOverview: [
      { name: "Premiere Pro", role: "Multi-track timeline editing, audio ducking, and sequence trimming" },
      { name: "DaVinci Resolve", role: "Color wheels, node-based grading, and spectral balance" },
      { name: "After Effects", role: "Kinetic typography, motion graphics, and subtle grain emulation" },
      { name: "Sound Design", role: "Foley layering, environmental reverb, and transient alignment" }
    ],
    developmentStory: "Editing is visual code. Just as well-architected code requires clean syntax, modular structures, and thoughtful flow, compelling video demands rhythmic discipline and intentional transitions. This creative practice sharpens visual design instincts across all digital projects.",
    tags: ["Editing", "Storytelling", "Short-form video", "Colour grading"],
    status: "Creative practice",
    next: "Add selected public work and verified links when they are ready to share.",
    groups: ["Creative Media"]
  }
];
