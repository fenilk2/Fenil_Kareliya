"use client";

import { useEffect } from "react";

const CARD_SELECTORS = [
  '[data-motion="tilt"]',
  ".interactive-tilt",
  ".project-archive-card",
  ".featured-card",
  ".spec-card",
  ".deep-card",
  ".related-card",
  ".pathway-card",
  ".next-vector-card",
  ".closing-nav-card",
  ".channel-card",
  ".topic-card",
  ".footer-nav-card",
  ".principle-card",
  ".interest-card",
  ".rep-project-card",
  ".detail-action-card",
  ".closing-signal-card",
  ".inspector-card",
  ".skill-inspector-card"
].join(", ");

const BUTTON_SELECTORS = [
  '[data-motion="button"]',
  ".button",
  ".button-primary",
  ".button-quiet",
  ".toolbar-filter-btn",
  ".skill-filter-btn",
  ".channel-action-btn",
  ".open-file-link",
  ".quick-select-btn",
  ".pathway-skill-chip",
  ".submit-btn",
  ".copy-payload-btn"
].join(", ");

export default function CosmicMotion() {
  useEffect(() => {
    // Check for fine pointer and hover support (desktop/laptop with mouse)
    const hasFinePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (!hasFinePointer || prefersReducedMotion) {
      return;
    }

    let activeCard: HTMLElement | null = null;
    let cardRect: DOMRect | null = null;

    let activeBtn: HTMLElement | null = null;
    let btnRect: DOMRect | null = null;

    let rafId: number | null = null;

    let cardNormX = 0;
    let cardNormY = 0;
    let btnNormX = 0;
    let btnNormY = 0;

    const resetCard = (el: HTMLElement) => {
      el.style.setProperty("--pointer-opacity", "0");
      el.style.setProperty("--tilt-rx", "0deg");
      el.style.setProperty("--tilt-ry", "0deg");
      el.style.setProperty("--tilt-scale", "1");
    };

    const resetBtn = (el: HTMLElement) => {
      el.style.setProperty("--pointer-opacity", "0");
      el.style.setProperty("--tilt-rx", "0deg");
      el.style.setProperty("--tilt-ry", "0deg");
      el.style.setProperty("--tilt-tx", "0px");
      el.style.setProperty("--tilt-ty", "0px");
      el.style.setProperty("--tilt-scale", "1");
    };

    const updateTransforms = () => {
      if (activeCard) {
        // Card tilt: max 5.5deg on X and Y, subtle perspective
        const rotY = (cardNormX * 5.5).toFixed(2);
        const rotX = (-cardNormY * 5.5).toFixed(2);
        activeCard.style.setProperty("--tilt-rx", `${rotX}deg`);
        activeCard.style.setProperty("--tilt-ry", `${rotY}deg`);
        activeCard.style.setProperty("--tilt-scale", "1.015");
      }

      if (activeBtn) {
        // Button tilt: max 3.5deg, translation up to 2.5px towards cursor
        const rotY = (btnNormX * 3.5).toFixed(2);
        const rotX = (-btnNormY * 3.5).toFixed(2);
        const tx = (btnNormX * 2.5).toFixed(2);
        const ty = (btnNormY * 2.5).toFixed(2);
        activeBtn.style.setProperty("--tilt-rx", `${rotX}deg`);
        activeBtn.style.setProperty("--tilt-ry", `${rotY}deg`);
        activeBtn.style.setProperty("--tilt-tx", `${tx}px`);
        activeBtn.style.setProperty("--tilt-ty", `${ty}px`);
      }

      rafId = null;
    };

    const scheduleUpdate = () => {
      if (!rafId) {
        rafId = requestAnimationFrame(updateTransforms);
      }
    };

    const handlePointerOver = (e: PointerEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      // Find nearest interactive card
      const card = target.closest(CARD_SELECTORS) as HTMLElement | null;
      if (card && card !== activeCard) {
        if (activeCard) resetCard(activeCard);
        activeCard = card;
        cardRect = card.getBoundingClientRect();
        card.style.setProperty("--pointer-opacity", "1");
      }

      // Find nearest interactive button
      const btn = target.closest(BUTTON_SELECTORS) as HTMLElement | null;
      if (btn && btn !== activeBtn) {
        if (activeBtn) resetBtn(activeBtn);
        activeBtn = btn;
        btnRect = btn.getBoundingClientRect();
        btn.style.setProperty("--pointer-opacity", "1");
      }
    };

    const handlePointerMove = (e: PointerEvent) => {
      if (activeCard && cardRect) {
        const x = e.clientX - cardRect.left;
        const y = e.clientY - cardRect.top;

        if (x < 0 || x > cardRect.width || y < 0 || y > cardRect.height) {
          resetCard(activeCard);
          activeCard = null;
          cardRect = null;
        } else {
          cardNormX = Math.max(-1, Math.min(1, (x / cardRect.width) * 2 - 1));
          cardNormY = Math.max(-1, Math.min(1, (y / cardRect.height) * 2 - 1));
          activeCard.style.setProperty("--pointer-x", `${x.toFixed(1)}px`);
          activeCard.style.setProperty("--pointer-y", `${y.toFixed(1)}px`);
          scheduleUpdate();
        }
      }

      if (activeBtn && btnRect) {
        const bx = e.clientX - btnRect.left;
        const by = e.clientY - btnRect.top;

        if (bx < 0 || bx > btnRect.width || by < 0 || by > btnRect.height) {
          resetBtn(activeBtn);
          activeBtn = null;
          btnRect = null;
        } else {
          btnNormX = Math.max(-1, Math.min(1, (bx / btnRect.width) * 2 - 1));
          btnNormY = Math.max(-1, Math.min(1, (by / btnRect.height) * 2 - 1));
          activeBtn.style.setProperty("--pointer-x", `${bx.toFixed(1)}px`);
          activeBtn.style.setProperty("--pointer-y", `${by.toFixed(1)}px`);
          scheduleUpdate();
        }
      }
    };

    const handlePointerOut = (e: PointerEvent) => {
      const related = e.relatedTarget as HTMLElement | null;

      if (activeCard && (!related || !activeCard.contains(related))) {
        resetCard(activeCard);
        activeCard = null;
        cardRect = null;
      }

      if (activeBtn && (!related || !activeBtn.contains(related))) {
        resetBtn(activeBtn);
        activeBtn = null;
        btnRect = null;
      }
    };

    const handlePointerDown = (e: PointerEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const btn = target.closest(BUTTON_SELECTORS) as HTMLElement | null;
      if (btn) {
        btn.style.setProperty("--tilt-scale", "0.97");
      }
    };

    const handlePointerUp = () => {
      if (activeBtn) {
        activeBtn.style.setProperty("--tilt-scale", "1.02");
      }
    };

    window.addEventListener("pointerover", handlePointerOver, { passive: true });
    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    window.addEventListener("pointerout", handlePointerOut, { passive: true });
    window.addEventListener("pointerdown", handlePointerDown, { passive: true });
    window.addEventListener("pointerup", handlePointerUp, { passive: true });

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      window.removeEventListener("pointerover", handlePointerOver);
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerout", handlePointerOut);
      window.removeEventListener("pointerdown", handlePointerDown);
      window.removeEventListener("pointerup", handlePointerUp);

      if (activeCard) resetCard(activeCard);
      if (activeBtn) resetBtn(activeBtn);
    };
  }, []);

  return null;
}
