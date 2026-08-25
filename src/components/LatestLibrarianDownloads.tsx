"use client";

import { useEffect, useState } from "react";

const LATEST_RELEASE_URL =
  "https://github.com/encyclipedia-ai/encyclipedia-agent/releases/latest";
const LATEST_RELEASE_API =
  "https://api.github.com/repos/encyclipedia-ai/encyclipedia-agent/releases/latest";

interface ReleaseAsset {
  name: string;
  browser_download_url: string;
}

interface LatestRelease {
  tag_name: string;
  html_url: string;
  assets: ReleaseAsset[];
}

const platforms = [
  {
    name: "macOS",
    detail: "Universal Apple Silicon + Intel installer",
    extension: ".dmg",
  },
  {
    name: "Windows",
    detail: "64-bit Windows installer",
    extension: ".exe",
  },
  {
    name: "Linux",
    detail: "64-bit AppImage",
    extension: ".AppImage",
  },
] as const;

export function LatestLibrarianDownloads() {
  const [release, setRelease] = useState<LatestRelease | null>(null);

  useEffect(() => {
    const controller = new AbortController();

    void fetch(LATEST_RELEASE_API, {
      headers: { Accept: "application/vnd.github+json" },
      signal: controller.signal,
    })
      .then((response) => {
        if (!response.ok) throw new Error(`GitHub returned ${response.status}`);
        return response.json() as Promise<LatestRelease>;
      })
      .then(setRelease)
      .catch(() => {
        // Every button retains the stable latest-release fallback below.
      });

    return () => controller.abort();
  }, []);

  return (
    <div>
      <div className="grid gap-4 sm:grid-cols-3">
        {platforms.map((platform) => {
          const asset = release?.assets.find(
            (candidate) =>
              candidate.name.endsWith(platform.extension) &&
              !candidate.name.endsWith(".blockmap"),
          );

          return (
            <a
              key={platform.name}
              href={asset?.browser_download_url ?? LATEST_RELEASE_URL}
              className="group rounded-lg border border-border bg-surface px-5 py-5 text-center transition hover:border-accent hover:-translate-y-0.5"
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
        {release
          ? `Latest stable release: ${release.tag_name}`
          : "Resolving the latest stable release from GitHub…"}{" "}
        <a
          href={release?.html_url ?? LATEST_RELEASE_URL}
          className="text-accent hover:underline"
        >
          View release notes
        </a>
      </p>
    </div>
  );
}
