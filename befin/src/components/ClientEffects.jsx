"use client";

import { useEffect } from "react";

function prefersReducedMotion() {
  if (typeof window === "undefined") return true;
  return window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export default function ClientEffects() {
  useEffect(() => {
    if (prefersReducedMotion() || !("IntersectionObserver" in window)) {
      document.querySelectorAll(".reveal").forEach((el) => {
        el.classList.add("is-visible");
      });
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.14, rootMargin: "0px 0px -6% 0px" }
    );

    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return null;
}
