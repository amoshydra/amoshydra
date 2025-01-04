import { searchRepository } from "../libs/github-api.mjs";

/**
 * @param {{
 *   user: string
 *   topics: {
 *     topic: string
 *     heading: string
 *     overview: string
 *   }[]
 * }} param0
 */
export const f001FetchData = async ({ user, topics }) => {
  const results = topics.map(async (topic) => {
    const { items } = await searchRepository(`topic:${topic.topic} user:${user}`);
    return { topic, items };
  });
  return Promise.all(results);
};
