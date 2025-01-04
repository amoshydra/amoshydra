import { patchReadme } from "../libs/readme-patcher.mjs";


/**
 * @param {{
 *   topicRepositories: {
 *     topic: Topic;
 *     items: Project[]
 *   }[]
 *   topics: Topic[]
 * }} param0
 */
export const f002UpdateProjectReadme = async ({ topicRepositories, topics }) => {
  const blocks = topicRepositories.map(({ items }, index) => {
    if (items.length === 0) {
      return "";
    }

    const topic = topics[index];
    const block = createTopicBlock({ topic, projects: items });
    return block;
  });
  const dataString = blocks.join("")

  await patchReadme("projects", dataString);
};

/**
 * @param {{
 *   topic: Topic
 *   projects: Project[]
 * }} param0
 */
const createTopicBlock = ({ topic, projects }) => `

## ${topic.heading}

${topic.overview}

${
  projects
    .sort(sortProject)
    .map(project => {
      return [
        `[${project.name}](${project.html_url})`,
        project.stargazers_count ? `(⭐ ${project.stargazers_count})` : false,
        [
          project.description ? `*${project.description.trim()}*` : false,
        ]
          .filter(Boolean)
          .join(" ")
        ]
        .filter(Boolean)
        .join(" - ")
    })
    .map(line => `- ${line}`)
    .join("\n")
}
`;


/**
 * @param {Project} a 
 * @param {Project} b 
 * @returns {number} 
 */
const sortProject = (a, b) => {
  if (a.stargazers_count === b.stargazers_count) {
    return new Date(b.pushed_at).valueOf() - new Date(a.pushed_at).valueOf();
  }
  return b.stargazers_count - a.stargazers_count;
}

/**
 * @typedef {{
*   topic: string
*   heading: string
*   overview: string
* }} Topic
*/

/**
* @typedef {{
*   name: string
*   description: string
*   homepage: string
*   html_url: string
*   stargazers_count: number
*   pushed_at: string
* }} Project
*/
