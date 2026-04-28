import { useEffect, useRef } from "react";

/**
 * Adds `.in-view` to the element once it enters the viewport.
 * Combine with `.reveal` utility class for fade-up animation.
 */
export function useScrollReveal<T extends HTMLElement = HTMLDivElement>(
  options: IntersectionObserverInit = { threshold: 0.15 },
) {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          observer.unobserve(entry.target);
        }
      });
    }, options);

    observer.observe(el);
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return ref;
}

/**
 * Reveals direct children one after another with a stagger.
 * Apply `.reveal` to each child.
 */
export function useStaggerReveal<T extends HTMLElement = HTMLDivElement>(
  staggerMs = 100,
) {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const children = Array.from(el.children) as HTMLElement[];
    children.forEach((child, i) => {
      child.style.transitionDelay = `${i * staggerMs}ms`;
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            children.forEach((c) => c.classList.add("in-view"));
            observer.disconnect();
          }
        });
      },
      { threshold: 0.1 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [staggerMs]);

  return ref;
}
