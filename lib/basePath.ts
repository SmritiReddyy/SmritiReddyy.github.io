/**
 * Prefix for assets referenced by plain <a href> / <img src> tags.
 *
 * This repo is a GitHub *user* site (SmritiReddyy.github.io), served from the
 * domain root, so no prefix is needed. Kept as a seam so the source stays
 * interchangeable with the upstream smriti-portfolio repo.
 */
export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? '';

/** Absolute path to a file in `public/`. */
export function asset(path: string): string {
  return `${BASE_PATH}${path}`;
}
