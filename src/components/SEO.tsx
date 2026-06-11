import { useEffect } from "react";

const SITE_URL = "https://grandpasheritage.com";
const SITE_NAME = "GrandpasHeritage";
const DEFAULT_IMAGE = `${SITE_URL}/apple-touch-icon.png?v=gh-20260611`;

type SEOProps = {
  title: string;
  description: string;
  canonicalPath?: string;
  image?: string;
  type?: "website" | "product";
  robots?: string;
  jsonLd?: Record<string, unknown> | Record<string, unknown>[];
};

export function SEO({
  title,
  description,
  canonicalPath = "/",
  image = DEFAULT_IMAGE,
  type = "website",
  robots = "index, follow",
  jsonLd,
}: SEOProps) {
  useEffect(() => {
    const canonicalUrl = toAbsoluteUrl(canonicalPath);
    const imageUrl = toAbsoluteUrl(image);

    document.title = title;
    setMeta("description", description);
    setMeta("robots", robots);
    setMeta("author", SITE_NAME);
    setMeta("keywords", "vintage ure, vintage watches, Tradera ure, brugte ure, armbandsure, lommeure, samlerure, GrandpasHeritage");

    setProperty("og:site_name", SITE_NAME);
    setProperty("og:title", title);
    setProperty("og:description", description);
    setProperty("og:type", type);
    setProperty("og:url", canonicalUrl);
    setProperty("og:image", imageUrl);

    setMeta("twitter:card", "summary_large_image");
    setMeta("twitter:title", title);
    setMeta("twitter:description", description);
    setMeta("twitter:image", imageUrl);

    setCanonical(canonicalUrl);
    setJsonLd(jsonLd);
  }, [canonicalPath, description, image, jsonLd, robots, title, type]);

  return null;
}

export { SITE_NAME, SITE_URL };

function toAbsoluteUrl(value: string) {
  if (/^https?:\/\//i.test(value)) {
    return value;
  }

  return `${SITE_URL}${value.startsWith("/") ? value : `/${value}`}`;
}

function setMeta(name: string, content: string) {
  let element = document.querySelector<HTMLMetaElement>(`meta[name="${name}"]`);
  if (!element) {
    element = document.createElement("meta");
    element.setAttribute("name", name);
    document.head.appendChild(element);
  }
  element.setAttribute("content", content);
}

function setProperty(property: string, content: string) {
  let element = document.querySelector<HTMLMetaElement>(`meta[property="${property}"]`);
  if (!element) {
    element = document.createElement("meta");
    element.setAttribute("property", property);
    document.head.appendChild(element);
  }
  element.setAttribute("content", content);
}

function setCanonical(url: string) {
  let element = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!element) {
    element = document.createElement("link");
    element.setAttribute("rel", "canonical");
    document.head.appendChild(element);
  }
  element.setAttribute("href", url);
}

function setJsonLd(value: SEOProps["jsonLd"]) {
  const id = "page-json-ld";
  const existing = document.getElementById(id);

  if (!value) {
    existing?.remove();
    return;
  }

  const element = existing || document.createElement("script");
  element.id = id;
  element.setAttribute("type", "application/ld+json");
  element.textContent = JSON.stringify(value);

  if (!existing) {
    document.head.appendChild(element);
  }
}
