"use client";

import { useEffect, useState } from "react";

const LATEST_RELEASE_MANIFEST =
  "https://storage.googleapis.com/production-496405-librarian-downloads/librarian/latest.json";

interface DownloadAsset {
  name: string;
  url: string;
  sha256: string;
  size: number;
}

interface LatestRelease {
  schemaVersion: 1;
  version: string;
  tag: string;
  publishedAt: string;
  releaseNotesUrl: string;
  downloads: {
    macos: DownloadAsset;
    windows: DownloadAsset;
    linux: DownloadAsset;
  };
}

const platforms = [
  {
    key: "macos",
    name: "macOS",
    detail: "Universal Apple Silicon + Intel installer",
  },
  {
    key: "windows",
    name: "Windows",
    detail: "64-bit Windows installer",
  },
  {
    key: "linux",
    name: "Linux",
    detail: "64-bit AppImage",
  },
] as const;

export function LatestLibrarianDownloads() {
  const [release, setRelease] = useState<LatestRelease | null>(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    void fetch(LATEST_RELEASE_MANIFEST, {
      headers: { Accept: "application/json" },
      signal: controller.signal,
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Download service returned ${response.status}`);
        }
        return response.json() as Promise<LatestRelease>;
      })
      .then(setRelease)
      .catch(() => {
        if (!controller.signal.aborted) setFailed(true);
      });

    return () => controller.abort();
  }, []);

  return (
    <div>
      <div className="grid gap-4 sm:grid-cols-3">
        {platforms.map((platform) => {
          const asset = release?.downloads[platform.key];

          return (
            <a
              key={platform.name}
              href={asset?.url}
              aria-disabled={!asset}
              className={`group rounded-lg border border-border bg-surface px-5 py-5 text-center transition ${
                asset
                  ? "hover:border-accent hover:-translate-y-0.5"
                  : "pointer-events-none opacity-60"
              }`}
            >
              <span className="smallcaps text-[10px] text-accent">
                Download for
              </span>
              <strong className="mt-1 block font-serif text-xl text-ink">
                {platform.name}
              </strong>
              <span className="mt-2 block text-xs leading-relaxed text-muted">
                {platform.detail}
              </span>
            </a>
          );
        })}
      </div>
      <p className="mt-4 text-center text-xs text-muted">
        {release ? (
          <>
            Latest stable release: v{release.version}{" "}
            <a
              href={release.releaseNotesUrl}
              className="text-accent hover:underline"
            >
              Release details
            </a>
          </>
        ) : failed ? (
          "Downloads are temporarily unavailable. Please try again shortly."
        ) : (
          "Resolving the latest stable Librarian release…"
        )}
      </p>
    </div>
  );
}
