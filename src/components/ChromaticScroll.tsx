"use client";

import { useEffect } from "react";

const CHROMATIC_SELECTORS = [
  "[data-chromatic]",
  ".chromatic-text",
  ".gradient-text",
  ".detail-display-title",
  ".section-title",
  ".closing-title"
].join(", ");

export default function ChromaticScroll() {
  useEffect(() => {
    // Respect prefers-reduced-motion
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const activeElements = new Set<HTMLElement>();
    let rafId: number | null = null;

    const updateActiveElements = () => {
      const windowHeight = window.innerHeight;
      activeElements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        // Calculate progress across viewport travel
        const totalDistance = windowHeight + rect.height;
        const currentPosition = windowHeight - rect.top;
        const rawProgress = currentPosition / totalDistance;
        const progress = Math.max(0, Math.min(1, rawProgress));
        el.style.setProperty("--chromatic-progress", progress.toFixed(3));
      });
      rafId = null;
    };

    const scheduleUpdate = () => {
      if (!rafId && activeElements.size > 0) {
        rafId = requestAnimationFrame(updateActiveElements);
      }
    };

    const handleScroll = () => {
      scheduleUpdate();
    };

    // IntersectionObserver tracks elements currently in or entering the viewport
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const el = entry.target as HTMLElement;
          if (entry.isIntersecting) {
            activeElements.add(el);
            const rect = el.getBoundingClientRect();
            const total = window.innerHeight + rect.height;
            const current = window.innerHeight - rect.top;
            const progress = Math.max(0, Math.min(1, current / total));
            el.style.setProperty("--chromatic-progress", progress.toFixed(3));
          } else {
            activeElements.delete(el);
          }
        });
        scheduleUpdate();
      },
      {
        root: null,
        rootMargin: "80px 0px 80px 0px",
        threshold: [0, 0.25, 0.5, 0.75, 1],
      }
    );

    const observeAll = () => {
      const elements = document.querySelectorAll<HTMLElement>(CHROMATIC_SELECTORS);
      elements.forEach((el) => observer.observe(el));
      scheduleUpdate();
    };

    observeAll();

    // Re-observe if DOM mutates (e.g., client navigation between routes)
    let mutationTimer: ReturnType<typeof setTimeout> | null = null;
    const mutationObserver = new MutationObserver(() => {
      if (mutationTimer) clearTimeout(mutationTimer);
      mutationTimer = setTimeout(() => {
        observeAll();
      }, 60);
    });

    mutationObserver.observe(document.body, { childList: true, subtree: true });

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      if (mutationTimer) clearTimeout(mutationTimer);
      observer.disconnect();
      mutationObserver.disconnect();
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
      activeElements.clear();
    };
  }, []);

  return null;
}
