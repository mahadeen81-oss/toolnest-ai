import { readdirSync } from "node:fs";
import { join } from "node:path";
import type { MetadataRoute } from "next";

const SITE_URL = "https://toolnest-ai-three.vercel.app";
const PAGE_FILES = new Set(["page.ts", "page.tsx", "page.js", "page.jsx"]);

function findPageRoutes(directory: string, routePrefix: string): string[] {
  return readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    if (!entry.isDirectory() || entry.name.startsWith("[")) {
      return [];
    }

    const entryDirectory = join(directory, entry.name);
    const route = `${routePrefix}/${entry.name}`;
    const hasPage = readdirSync(entryDirectory, { withFileTypes: true }).some(
      (child) => child.isFile() && PAGE_FILES.has(child.name),
    );

    return [
      ...(hasPage ? [route] : []),
      ...findPageRoutes(entryDirectory, route),
    ];
  });
}

export default function sitemap(): MetadataRoute.Sitemap {
  const appDirectory = join(process.cwd(), "app");
  const routes = new Set([
    "/",
    "/tools",
    ...findPageRoutes(join(appDirectory, "tools"), "/tools"),
    "/blog",
    ...findPageRoutes(join(appDirectory, "blog"), "/blog"),
    "/about",
    "/contact",
    "/privacy-policy",
    "/terms-of-service",
  ]);

  return Array.from(routes).map((route) => ({
    url: `${SITE_URL}${route}`,
    changeFrequency: route === "/" ? "weekly" : "monthly",
    priority:
      route === "/"
        ? 1
        : route === "/tools"
          ? 0.9
          : route.startsWith("/tools/")
            ? 0.8
            : route.startsWith("/blog/")
              ? 0.7
              : 0.6,
  }));
}