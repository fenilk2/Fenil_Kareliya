"use client";

import { useState } from "react";
import Link from "next/link";
import ScrollGradientText from "@/components/ScrollGradientText";
import {
  ArrowUpRight,
  ArrowDownRight,
  Mail,
  Send,
  Check,
  AlertCircle,
  Copy,
  Radio,
  ShieldCheck,
  Sparkles,
  Compass,
  Code2,
  Film,
  Brain
} from "@/components/Icons";

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export default function ContactExperience() {
  const [formData, setFormData] = useState<FormState>({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isDispatched, setIsDispatched] = useState(false);
  const [copiedPayload, setCopiedPayload] = useState(false);

  // Email regex validation
  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Please enter your name or callsign.";
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters.";
    } else if (formData.name.trim().length > 80) {
      newErrors.name = "Name must not exceed 80 characters.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Please enter a contact email address.";
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Please enter a valid email format (e.g., name@domain.com).";
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Please provide a subject line.";
    } else if (formData.subject.trim().length < 3) {
      newErrors.subject = "Subject must be at least 3 characters.";
    } else if (formData.subject.trim().length > 120) {
      newErrors.subject = "Subject must not exceed 120 characters.";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Please enter your message text.";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters to provide sufficient context.";
    } else if (formData.message.trim().length > 2000) {
      newErrors.message = "Message must not exceed 2000 characters.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (
    field: keyof FormState,
    value: string
  ) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);

    // Prepare email transmission payload
    const destinationEmail = "fenilkareliya1909@gmail.com";
    const mailSubject = encodeURIComponent(`[Portfolio Signal] ${formData.subject.trim()}`);
    const mailBody = encodeURIComponent(
      `Hello Fenil,\n\n${formData.message.trim()}\n\n---\nTransmitted by: ${formData.name.trim()}\nSender Email: ${formData.email.trim()}`
    );
    const mailtoUrl = `mailto:${destinationEmail}?subject=${mailSubject}&body=${mailBody}`;

    setTimeout(() => {
      setIsSubmitting(false);
      setIsDispatched(true);
      window.location.href = mailtoUrl;
    }, 450);
  };

  const handleCopyPayload = () => {
    const rawText = `Subject: [Portfolio Signal] ${formData.subject}\nFrom: ${formData.name} <${formData.email}>\n\n${formData.message}`;
    navigator.clipboard.writeText(rawText);
    setCopiedPayload(true);
    setTimeout(() => setCopiedPayload(false), 2500);
  };

  const handleReset = () => {
    setFormData({ name: "", email: "", subject: "", message: "" });
    setErrors({});
    setIsDispatched(false);
  };

  return (
    <div className="contact-terminal-experience">
      {/* HERO SECTION */}
      <section className="contact-hero-section" aria-label="Contact terminal introduction">
        <div className="contact-hero-layout">
          <div className="contact-hero-copy">
            <div className="contact-kicker-pill">
              <span className="status-pulse" />
              <span>COMMUNICATION CHANNEL / 014</span>
            </div>
            <h1 className="contact-display-headline">
              Let&apos;s Connect Beyond<br />
              <ScrollGradientText as="span" variant="primary">the Ordinary.</ScrollGradientText>
            </h1>
            <p className="contact-hero-statement">
              <em><ScrollGradientText as="span" variant="subheading">Have an idea, a project, a question, or an opportunity to collaborate? Send a message and let&apos;s start a conversation.</ScrollGradientText></em>
            </p>
            <p className="contact-hero-summary">
              Welcome to the direct communication console. Whether you want to discuss cybersecurity research, collaborate on software or 3D experiments, share feedback on my projects, or exchange ideas—all genuine signals are received and valued.
            </p>

            <div className="contact-vitals-bar">
              <div className="vital-item">
                <span className="vital-label">CHANNEL STATUS</span>
                <span className="vital-val live">OPEN // READY</span>
              </div>
              <div className="vital-item">
                <span className="vital-label">ENCRYPTION</span>
                <span className="vital-val">TLS STANDARD</span>
              </div>
              <div className="vital-item">
                <span className="vital-label">DIRECT ROUTE</span>
                <span className="vital-val">DISPATCH CONSOLE</span>
              </div>
            </div>

            <div className="contact-hero-actions">
              <a href="#transmission-form" className="button button-primary">
                Compose Transmission <ArrowDownRight size={15} />
              </a>
              <a href="#direct-channels" className="button button-quiet">
                Direct Channels <ArrowDownRight size={14} />
              </a>
            </div>
          </div>

          <div className="contact-hero-visual" aria-hidden="true">
            <div className="contact-beacon-card">
              <div className="beacon-header">
                <Radio size={14} />
                <span>SIGNAL_BEACON // COMM_ARRAY</span>
              </div>
              <div className="beacon-stage">
                <div className="beacon-ring ring-1" />
                <div className="beacon-ring ring-2" />
                <div className="beacon-ring ring-3" />
                <div className="beacon-core-symbol">
                  <Mail size={24} />
                  <span>TRANSMIT</span>
                </div>
              </div>
              <div className="beacon-footer">
                <span>FREQUENCY: PORTFOLIO_DIRECT</span>
                <span>AUTHENTIC CONVERSATIONS</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION A — DIRECT CONTACT CHANNELS */}
      <section id="direct-channels" className="contact-channels-section" aria-label="Direct contact channels">
        <div className="section-header-block">
          <div className="section-eyebrow-tag">
            <Sparkles size={13} />
            <span>COMMUNICATION ROUTES</span>
          </div>
          <h2 className="section-title-sm"><ScrollGradientText as="span" variant="secondary">Direct Contact Channels</ScrollGradientText></h2>
          <p className="section-lede">
            Verified channels for direct correspondence and professional networking. External links open securely in a new tab.
          </p>
        </div>

        <div className="channels-grid">
          {/* Instagram */}
          <div className="channel-card">
            <div className="channel-top">
              <div className="channel-icon-wrap">
                <Film size={20} />
              </div>
              <span className="channel-tag">CREATIVE & SOCIAL</span>
            </div>
            <h3 className="channel-title">Instagram</h3>
            <p className="channel-desc">
              Visual storytelling, short-form cinematic video edits, and creative media updates.
            </p>
            <div className="channel-meta">
              <span>HANDLE // @fenilkareliya</span>
            </div>
            <a
              href="https://www.instagram.com/fenilkareliya/"
              target="_blank"
              rel="noopener noreferrer"
              className="channel-action-btn"
            >
              <span>Connect on Instagram</span>
              <ArrowUpRight size={14} />
            </a>
          </div>

          {/* Direct Email Transmission */}
          <div className="channel-card highlighted-channel">
            <div className="channel-top">
              <div className="channel-icon-wrap">
                <Mail size={20} />
              </div>
              <span className="channel-tag primary">PRIMARY ROUTE</span>
            </div>
            <h3 className="channel-title">Direct Email</h3>
            <p className="channel-desc">
              Best for project inquiries, technical discussions, cybersecurity collaborations, or detailed messages.
            </p>
            <div className="channel-meta">
              <span>TRANSMISSION // PRE-COMPOSED</span>
            </div>
            <a
              href="#transmission-form"
              className="channel-action-btn"
            >
              <span>Open Message Console</span>
              <ArrowDownRight size={14} />
            </a>
          </div>

          {/* GitHub */}
          <div className="channel-card">
            <div className="channel-top">
              <div className="channel-icon-wrap">
                <Code2 size={20} />
              </div>
              <span className="channel-tag">CODE REPOSITORIES</span>
            </div>
            <h3 className="channel-title">GitHub</h3>
            <p className="channel-desc">
              Public code repositories, experiment sources, and open-source contributions.
            </p>
            <div className="channel-meta">
              <span>PROFILE // GITHUB_HUB</span>
            </div>
            <a
              href="https://github.com/fenilk2"
              target="_blank"
              rel="noopener noreferrer"
              className="channel-action-btn"
            >
              <span>Visit GitHub Hub</span>
              <ArrowUpRight size={14} />
            </a>
          </div>

          {/* LinkedIn */}
          <div className="channel-card">
            <div className="channel-top">
              <div className="channel-icon-wrap">
                <Compass size={20} />
              </div>
              <span className="channel-tag">PROFESSIONAL</span>
            </div>
            <h3 className="channel-title">LinkedIn</h3>
            <p className="channel-desc">
              Academic milestones, professional connections, and cybersecurity industry discussions.
            </p>
            <div className="channel-meta">
              <span>NETWORK // LINKEDIN</span>
            </div>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="channel-action-btn"
            >
              <span>Connect on LinkedIn</span>
              <ArrowUpRight size={14} />
            </a>
          </div>
        </div>
      </section>

      {/* SECTION B & C — INTERACTIVE MESSAGE FORM */}
      <section id="transmission-form" className="contact-form-section" aria-label="Interactive contact message form">
        <div className="form-container-card">
          <div className="form-header-bar">
            <div className="form-signal-indicator">
              <span className="signal-dot" />
              <span>TRANSMISSION CONSOLE // DIRECT DISPATCH</span>
            </div>
            <span className="form-integrity-label">STRICT ZERO-SPAM POSTURE</span>
          </div>

          {!isDispatched ? (
            <form onSubmit={handleSubmit} noValidate className="contact-form" aria-label="Send a direct message">
              <div className="form-intro">
                <h3><ScrollGradientText as="span" variant="subheading">Compose Direct Message</ScrollGradientText></h3>
                <p>
                  Fill out the parameters below to stage a direct communication. When submitted, this console opens a structured draft in your default email client for seamless delivery.
                </p>
              </div>

              <div className="form-fields-grid">
                {/* Name Field */}
                <div className={`form-group ${errors.name ? "has-error" : ""}`}>
                  <label htmlFor="contact-name" className="form-label">
                    <span>NAME / CALLSIGN</span>
                    <strong className="req-marker">*</strong>
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    required
                    maxLength={80}
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    placeholder="Your name or handle"
                    className="form-input"
                    aria-invalid={!!errors.name}
                    aria-describedby={errors.name ? "name-error" : undefined}
                  />
                  {errors.name && (
                    <span id="name-error" className="field-error-msg" role="alert">
                      <AlertCircle size={12} />
                      <span>{errors.name}</span>
                    </span>
                  )}
                </div>

                {/* Email Field */}
                <div className={`form-group ${errors.email ? "has-error" : ""}`}>
                  <label htmlFor="contact-email" className="form-label">
                    <span>YOUR EMAIL ADDRESS</span>
                    <strong className="req-marker">*</strong>
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    placeholder="name@example.com"
                    className="form-input"
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? "email-error" : undefined}
                  />
                  {errors.email && (
                    <span id="email-error" className="field-error-msg" role="alert">
                      <AlertCircle size={12} />
                      <span>{errors.email}</span>
                    </span>
                  )}
                </div>

                {/* Subject Field */}
                <div className={`form-group full-width ${errors.subject ? "has-error" : ""}`}>
                  <label htmlFor="contact-subject" className="form-label">
                    <span>SUBJECT / TOPIC</span>
                    <strong className="req-marker">*</strong>
                  </label>
                  <input
                    id="contact-subject"
                    name="subject"
                    type="text"
                    required
                    maxLength={120}
                    value={formData.subject}
                    onChange={(e) => handleInputChange("subject", e.target.value)}
                    placeholder="Brief summary of inquiry or collaboration idea"
                    className="form-input"
                    aria-invalid={!!errors.subject}
                    aria-describedby={errors.subject ? "subject-error" : undefined}
                  />
                  {errors.subject && (
                    <span id="subject-error" className="field-error-msg" role="alert">
                      <AlertCircle size={12} />
                      <span>{errors.subject}</span>
                    </span>
                  )}
                </div>

                {/* Message Field */}
                <div className={`form-group full-width ${errors.message ? "has-error" : ""}`}>
                  <div className="label-row">
                    <label htmlFor="contact-message" className="form-label">
                      <span>TRANSMISSION BODY</span>
                      <strong className="req-marker">*</strong>
                    </label>
                    <span className="char-counter" aria-live="polite">
                      {formData.message.length} / 2000
                    </span>
                  </div>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={6}
                    required
                    maxLength={2000}
                    value={formData.message}
                    onChange={(e) => handleInputChange("message", e.target.value)}
                    placeholder="Detail your question, project idea, or discussion points..."
                    className="form-textarea"
                    aria-invalid={!!errors.message}
                    aria-describedby={errors.message ? "message-error" : undefined}
                  />
                  {errors.message && (
                    <span id="message-error" className="field-error-msg" role="alert">
                      <AlertCircle size={12} />
                      <span>{errors.message}</span>
                    </span>
                  )}
                </div>
              </div>

              {/* Privacy and Consent Notice */}
              <div className="form-privacy-note">
                <ShieldCheck size={16} />
                <p>
                  <strong>Privacy Notice:</strong> Information submitted here is processed locally on your client machine and formatted directly into an email draft. No data is harvested, analyzed by advertising trackers, or sold to third parties.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="form-actions-bar">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="button button-primary submit-btn"
                >
                  <Send size={15} />
                  <span>{isSubmitting ? "Staging Transmission..." : "Dispatch Transmission"}</span>
                </button>
                <span className="dispatch-note">
                  Opens a pre-filled draft in your default email client.
                </span>
              </div>
            </form>
          ) : (
            /* STAGED DISPATCH CONFIRMATION CARD */
            <div className="staged-confirmation-card" aria-live="polite">
              <div className="confirmation-beacon">
                <Check size={28} />
              </div>
              <span className="confirmation-badge">TRANSMISSION STAGED</span>
              <h3>Email Draft Prepared Successfully</h3>
              <p className="confirmation-text">
                Your transmission payload has been formatted and directed to your default email client. Please verify the draft and click <strong>Send</strong> in your email application to complete the transmission.
              </p>

              <div className="payload-preview-box">
                <div className="payload-header">
                  <span>PREVIEWED PAYLOAD // RAW</span>
                  <button
                    type="button"
                    className="copy-payload-btn"
                    onClick={handleCopyPayload}
                  >
                    {copiedPayload ? <Check size={12} /> : <Copy size={12} />}
                    <span>{copiedPayload ? "Copied!" : "Copy Payload"}</span>
                  </button>
                </div>
                <div className="payload-content">
                  <p><strong>To:</strong> fenilkareliya1909@gmail.com</p>
                  <p><strong>Subject:</strong> [Portfolio Signal] {formData.subject}</p>
                  <p><strong>From:</strong> {formData.name} &lt;{formData.email}&gt;</p>
                  <div className="payload-divider" />
                  <p className="payload-msg">{formData.message}</p>
                </div>
              </div>

              <div className="confirmation-actions">
                <button
                  type="button"
                  className="button button-primary"
                  onClick={handleReset}
                >
                  Compose Another Message
                </button>
                <a
                  href={`mailto:fenilkareliya1909@gmail.com?subject=${encodeURIComponent(
                    `[Portfolio Signal] ${formData.subject}`
                  )}&body=${encodeURIComponent(formData.message)}`}
                  className="button button-quiet"
                >
                  Re-open Email Client
                </a>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* SECTION D — AVAILABILITY & COLLABORATION TOPICS */}
      <section className="contact-topics-section" aria-label="Welcomed conversation topics">
        <div className="section-header-block">
          <div className="section-eyebrow-tag">
            <Compass size={13} />
            <span>EXCHANGE TOPICS</span>
          </div>
          <h2 className="section-title-sm"><ScrollGradientText as="span" variant="secondary">Conversations I Welcome</ScrollGradientText></h2>
          <p className="section-lede">
            As a student and active builder, I welcome thoughtful dialogues across these core areas of interest:
          </p>
        </div>

        <div className="topics-grid">
          <div className="topic-card">
            <div className="topic-icon">
              <ShieldCheck size={18} />
            </div>
            <h4>Cybersecurity & Digital Defense</h4>
            <p>
              Discussions surrounding threat modeling, scam awareness heuristics, Linux security configurations, and ethical learning labs.
            </p>
          </div>

          <div className="topic-card">
            <div className="topic-icon">
              <Code2 size={18} />
            </div>
            <h4>Software & Systems Development</h4>
            <p>
              Clean modular Python, Java architectures, accessible web development, and algorithmic problem-solving.
            </p>
          </div>

          <div className="topic-card">
            <div className="topic-icon">
              <Brain size={18} />
            </div>
            <h4>Creative Problem-Solving & AI</h4>
            <p>
              Disciplined prompt engineering, rapid technical prototyping, and responsible verification of AI outputs.
            </p>
          </div>

          <div className="topic-card">
            <div className="topic-icon">
              <Film size={18} />
            </div>
            <h4>Visual Storytelling & Edits</h4>
            <p>
              Atmospheric pacing, cinematic video editing, color grading, and creative multimedia composition.
            </p>
          </div>

          <div className="topic-card">
            <div className="topic-icon">
              <Sparkles size={18} />
            </div>
            <h4>Project Feedback & Ideas</h4>
            <p>
              Constructive critique on CosmoVerse, GravityFlip, or ScamShield India, plus ideas combining technology with creativity.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION E — COSMIC CLOSING VISUAL & NAVIGATION */}
      <section className="contact-closing-section" aria-label="Closing communication signal">
        <div className="closing-signal-card">
          <div className="closing-signal-stage">
            <div className="closing-signal-ring" />
            <div className="closing-signal-core">
              <Radio size={22} />
            </div>
          </div>

          <div className="closing-signal-copy">
            <div className="closing-kicker">FINAL TRANSMISSION</div>
            <h2 className="closing-title">Every great connection starts with a signal.</h2>
            <p className="closing-statement">
              <em>Have something worth exploring? Send a message and let&apos;s see where the conversation leads.</em>
            </p>
            <div className="closing-actions">
              <a href="#transmission-form" className="button button-primary">
                Return to Transmission Form <ArrowUpRight size={14} />
              </a>
              <a
                href="https://www.instagram.com/fenilkareliya/"
                target="_blank"
                rel="noopener noreferrer"
                className="button button-quiet"
              >
                Instagram Direct <ArrowUpRight size={14} />
              </a>
            </div>
          </div>
        </div>

        {/* Directional Navigation */}
        <div className="contact-nav-footer">
          <span className="footer-nav-label">CONTINUE EXPLORING PORTFOLIO</span>
          <div className="footer-nav-grid">
            <Link href="/about/" className="footer-nav-card">
              <div>
                <span className="nav-eyebrow">PROFILE</span>
                <strong>Beyond the Interface</strong>
                <p>Learn about Fenil&apos;s story and principles.</p>
              </div>
              <ArrowUpRight size={14} />
            </Link>

            <Link href="/skills/" className="footer-nav-card">
              <div>
                <span className="nav-eyebrow">CAPABILITIES</span>
                <strong>The Constellation</strong>
                <p>Inspect the 7 active technical skills.</p>
              </div>
              <ArrowUpRight size={14} />
            </Link>

            <Link href="/journey/" className="footer-nav-card">
              <div>
                <span className="nav-eyebrow">EVOLUTION</span>
                <strong>The Evolution Timeline</strong>
                <p>Trace the 5 evolutionary milestones.</p>
              </div>
              <ArrowUpRight size={14} />
            </Link>

            <Link href="/projects/" className="footer-nav-card">
              <div>
                <span className="nav-eyebrow">ARCHIVE</span>
                <strong>The Mission Archive</strong>
                <p>Explore all 4 classified project files.</p>
              </div>
              <ArrowUpRight size={14} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
