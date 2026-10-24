"use client";

import { useEffect, useRef, useState } from "react";

type Theme = "light" | "dark";

function applyTheme(theme: Theme) {
  const root = document.documentElement;
  root.classList.toggle("dark", theme === "dark");
  root.setAttribute("data-theme", theme);
}

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);
  const explicitChoice = useRef(false);
  const removeMediaListener = useRef<(() => void) | null>(null);

  useEffect(() => {
    setIsDark(document.documentElement.classList.contains("dark"));

    const stopFollowingSystem = () => {
      if (removeMediaListener.current) {
        removeMediaListener.current();
        removeMediaListener.current = null;
      }
    };

    const followSystem = () => {
      try {
        const query = window.matchMedia("(prefers-color-scheme: dark)");
        const update = (event: MediaQueryListEvent) => {
          if (explicitChoice.current) return;
          const nextTheme = event.matches ? "dark" : "light";
          applyTheme(nextTheme);
          setIsDark(nextTheme === "dark");
        };
        if (query.addEventListener) {
          query.addEventListener("change", update);
          removeMediaListener.current = () => query.removeEventListener("change", update);
        } else {
          query.addListener(update);
          removeMediaListener.current = () => query.removeListener(update);
        }
        const nextTheme = query.matches ? "dark" : "light";
        applyTheme(nextTheme);
        setIsDark(nextTheme === "dark");
      } catch {
        // Keep the already-applied page theme if media preferences are unavailable.
      }
    };

    try {
      const savedTheme = window.localStorage.getItem("theme");
      if (savedTheme === "light" || savedTheme === "dark") {
        explicitChoice.current = true;
        applyTheme(savedTheme);
        setIsDark(savedTheme === "dark");
      } else {
        followSystem();
      }
    } catch {
      followSystem();
    }

    const handleStorage = (event: StorageEvent) => {
      if (event.key !== "theme") return;
      if (event.newValue === "light" || event.newValue === "dark") {
        explicitChoice.current = true;
        stopFollowingSystem();
        applyTheme(event.newValue);
        setIsDark(event.newValue === "dark");
      } else {
        explicitChoice.current = false;
        stopFollowingSystem();
        followSystem();
      }
    };
    window.addEventListener("storage", handleStorage);

    return () => {
      stopFollowingSystem();
      window.removeEventListener("storage", handleStorage);
    };
  }, []);

  function toggleTheme() {
    const nextTheme: Theme = isDark ? "light" : "dark";
    explicitChoice.current = true;
    if (removeMediaListener.current) {
      removeMediaListener.current();
      removeMediaListener.current = null;
    }
    applyTheme(nextTheme);
    setIsDark(nextTheme === "dark");
    try {
      window.localStorage.setItem("theme", nextTheme);
    } catch {
      // The selection remains active for this page session when storage is blocked.
    }
  }

  return (
    <button
      type="button"
      aria-label="Toggle theme"
      aria-pressed={isDark}
      title={isDark ? "Switch to light theme" : "Switch to dark theme"}
      onClick={toggleTheme}
      className="theme-toggle inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-violet-100 bg-slate-50 text-slate-700 transition duration-200 hover:border-violet-200 hover:bg-violet-50 active:scale-95"
    >
      {isDark ? (
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          fill="none"
          className="h-5 w-5"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2m0 16v2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M2 12h2m16 0h2M4.93 19.07l1.42-1.42m11.3-11.3 1.42-1.42" />
        </svg>
      ) : (
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          fill="none"
          className="h-5 w-5"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M20.3 15.3A8.5 8.5 0 0 1 8.7 3.7 8.5 8.5 0 1 0 20.3 15.3Z" />
        </svg>
      )}
    </button>
  );
}
