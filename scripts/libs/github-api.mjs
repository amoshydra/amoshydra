/**
 * @param {URL} requestInfo
 * @param {RequestInit=} init
 * @template T {unknown}
 * @returns {Promise<T>}
 */
const request = async (requestInfo, init) => {
  const r = await fetch(requestInfo, init)
  return /** @type {Promise<T>} */(r.json());
};

/**
 * @param {string} query 
 * @example "topic:pet-project user:amoshydra"
 * @returns {Promise<import("./github.scheme.d.ts").CollectionResponse<import("./github.scheme.d.ts").Repository>>}
 */
export const searchRepository = (query) => {
  const url = new URL("https://api.github.com/search/repositories");
  url.searchParams.set("q", query);
  return request(url);
};
