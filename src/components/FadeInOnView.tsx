"use client";

import { useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";

type FadeInOnViewProps = {
  children: ReactNode;
  className?: string;
  threshold?: number;
  rootMargin?: string;
  unlockEventName?: string;
};

export function FadeInOnView({
  children,
  className = "",
  threshold = 0.2,
  rootMargin = "0px 0px -10% 0px",
  unlockEventName,
}: FadeInOnViewProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);
  const [unlocked, setUnlocked] = useState(!unlockEventName);

  useEffect(() => {
    if (!unlockEventName) return;

    const onUnlock = () => setUnlocked(true);
    window.addEventListener(unlockEventName, onUnlock);

    return () => {
      window.removeEventListener(unlockEventName, onUnlock);
    };
  }, [unlockEventName]);

  useEffect(() => {
    if (!unlocked) return;

    const node = ref.current;
    if (!node) return;

    // If already in viewport when unlock fires, show immediately
    const rect = node.getBoundingClientRect();
    if (rect.top < window.innerHeight) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold, rootMargin, unlocked]);

  const isReady = visible && unlocked;

  return (
    <section
      ref={ref}
      className={[
        "transition-[opacity,transform] duration-700 ease-out",
        isReady ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
        className,
      ].join(" ")}
      // visibility:hidden keeps layout space intact (no page-height jump on unlock)
      // once ready we clear it so the section is interactive
      style={isReady ? undefined : { visibility: "hidden" as const }}
    >
      {children}
    </section>
  );
}
