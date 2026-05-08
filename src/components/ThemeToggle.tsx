"use client";

import { useEffect, useState } from "react";

type Theme = "light" | "dark";

const STORAGE_KEY = "encyclipedia-theme";

function applyTheme(theme: Theme) {
  document.documentElement.setAttribute("data-theme", theme);
}

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    const stored = (localStorage.getItem(STORAGE_KEY) as Theme | null) ?? null;
    const initial: Theme = stored ?? (document.documentElement.getAttribute("data-theme") as Theme | null) ?? "light";
    setTheme(initial);
    applyTheme(initial);
  }, []);

  function toggle() {
    const next: Theme = theme === "dark" ? "light" : "dark";
    setTheme(next);
    applyTheme(next);
    try { localStorage.setItem(STORAGE_KEY, next); } catch { /* ignore */ }
  }

  const isDark = theme === "dark";
  const label = isDark ? "Light" : "Dark";
  const symbol = isDark ? "☀" : "☾";

  return (
    <button
      type="button"
      onClick={toggle}
      title={`Switch to ${label.toLowerCase()} mode`}
      aria-label={`Switch to ${label.toLowerCase()} mode`}
      className="btn-ghost px-2.5 py-1.5"
    >
      <span aria-hidden className="text-base leading-none">{symbol}</span>
      <span className="smallcaps text-[10px]">{label}</span>
    </button>
  );
}
