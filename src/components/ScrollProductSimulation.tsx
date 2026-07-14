"use client";

import { useEffect, useRef, useState } from "react";

import { ProductMockup } from "@/components/ProductMockup";

const TIMELINE_TRIGGER_RATIO = 0.4;
const MOCKUP_STICKY_TOP = "7rem";

const STEPS = [
  {
    title: "One-click from connected profile",
    body: "Use your linked channel and clip the latest stream instantly with one button.",
    detail: "Connected channel found · Job queued immediately",
  },
  {
    title: "Premium: clip any stream or video URL",
    body: "Paste a URL from any supported platform and run the same AI clipping pipeline, even outside your profile.",
    detail: "Premium URL accepted · Detecting moments and rendering",
  },
  {
    title: "Review and download",
    body: "Both sources appear in one library so you can review, recut, and export vertical clips.",
    detail: "3 clips ready · Download all or refine each cut",
  },
  {
    title: "Grow!",
    body: "Turn every stream into consistent short-form output and grow your audience with fresh clips.",
    detail: "More posts · more reach · more viewers",
  },
] as const;

export function ScrollProductSimulation() {
  const [activeStep, setActiveStep] = useState(0);
  const [hasUnlockedAfterThird, setHasUnlockedAfterThird] = useState(false);
  const stepRefs = useRef<Array<HTMLDivElement | null>>([]);

  useEffect(() => {
    if (hasUnlockedAfterThird) {
      window.dispatchEvent(new CustomEvent("timeline-third-unlocked"));
    }
  }, [hasUnlockedAfterThird]);

  useEffect(() => {
    const updateActiveStep = () => {
      const introSection = document.getElementById("books-intro-visual");
      if (introSection) {
        const introRect = introSection.getBoundingClientRect();
        // Keep the first state until the title card is fully out of view.
        if (introRect.bottom > 0) {
          setActiveStep(0);
          return;
        }
      }

      const viewCenter = window.innerHeight * TIMELINE_TRIGGER_RATIO;
      let nextIndex = 0;

      stepRefs.current.forEach((el, index) => {
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const cardCenter = rect.top + rect.height / 2;
        if (cardCenter <= viewCenter) {
          nextIndex = index;
        }
      });

      // Move to the next title section as soon as the Grow step is active.
      if (!hasUnlockedAfterThird && nextIndex >= 3) {
        setHasUnlockedAfterThird(true);
      }

      setActiveStep(nextIndex);
    };

    let frameId = 0;
    const onScroll = () => {
      if (frameId) return;
      frameId = window.requestAnimationFrame(() => {
        updateActiveStep();
        frameId = 0;
      });
    };

    updateActiveStep();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", updateActiveStep);

    return () => {
      if (frameId) window.cancelAnimationFrame(frameId);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", updateActiveStep);
    };
  }, [hasUnlockedAfterThird]);

  return (
    <section className="max-w-[1200px] mx-auto px-6 pt-3 md:pt-4 pb-10 md:pb-16">
      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start lg:justify-items-center">
        <div className="w-full max-w-[520px] space-y-6">
          <p className="text-xs text-muted uppercase tracking-[0.2em]">Scroll the timeline</p>
          {STEPS.map((step, index) => {
            const isActive = activeStep === index;
            return (
              <div
                key={step.title}
                ref={(el) => {
                  stepRefs.current[index] = el;
                }}
                className={`min-h-[22vh] md:min-h-[24vh] rounded-lg border bg-surface/70 p-5 transition-all duration-300 ${
                  isActive
                    ? "border-[var(--color-accent)] shadow-[0_10px_30px_rgba(0,0,0,0.12)]"
                    : "border-border opacity-75"
                }`}
              >
                <p className="smallcaps text-[10px] text-accent mb-2">Step {String(index + 1).padStart(2, "0")}</p>
                <h4 className="font-serif text-2xl font-bold text-ink mb-2">{step.title}</h4>
                <p className="text-sm text-muted leading-relaxed">{step.body}</p>
                <p className="mt-4 text-[11px] font-mono text-muted">{step.detail}</p>
              </div>
            );
          })}
        </div>

        <div
          className="w-full max-w-[640px] lg:mx-auto lg:sticky"
          style={{ top: MOCKUP_STICKY_TOP }}
        >
          <div className="relative mx-auto">
            <ProductMockup activeStep={activeStep} />
          </div>
          <p className="mt-4 text-center text-xs text-muted italic">
            Simulated dashboard preview using synthetic clips. Customer video examples will be added as we onboard creators.
          </p>
        </div>
      </div>
    </section>
  );
}
