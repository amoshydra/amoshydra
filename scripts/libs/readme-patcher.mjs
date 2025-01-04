import { readFile, writeFile } from "node:fs/promises";
import { join } from "node:path";

const readmePath = join(process.cwd(), "README.md");

/**
 * @param {string} id
 * @param {string} data
 * @param {string} readmePathname
 */
export const patchReadme = async (id, data, readmePathname = readmePath) => {
  const readme = await readFile(readmePathname, "utf-8");

  const startTag = tag.Start(id);
  const endTag = tag.End(id);

  const lines = readme.split("\n");
  const startIndex = lines.findIndex(line => line === startTag);
  const endIndex = lines.findIndex(line => line === endTag);

  const updatedReadmeLines = [
    ...lines.slice(0, startIndex + 1),
    data,
    ...lines.slice(endIndex),
  ];
  const updatedReadmeData = updatedReadmeLines.join("\n");

  return writeFile(readmePathname, updatedReadmeData, "utf-8");
}

const tag = {
  /**
   * @param {string} id 
   */
  Start: (id) => `<!-- START:${id} -->`,
  /**
   * @param {string} id 
   */
  End: (id) => `<!-- END:${id} -->`,
};
