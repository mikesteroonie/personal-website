import { getEssays } from "app/essays/utils";

export const baseUrl = "https://portfolio-blog-starter.vercel.app";

export default async function sitemap() {
  let essays = getEssays().map((post) => ({
    url: `${baseUrl}/essays/${post.slug}`,
    lastModified: post.metadata.publishedAt,
  }));

  let routes = ["", "/essays"].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split("T")[0],
  }));

  return [...routes, ...essays];
}
