import { existsSync } from "node:fs";
import { readFile, writeFile } from "node:fs/promises";
import { join } from "node:path";

const cwd = process.cwd();

/**
 * @param  {...string} p 
 * @returns {string}
 */
const fromTmp = (...p) => join(cwd, "tmp", ...p);

export const cache = {
  read: async (key) => {
    const pathName = fromTmp(`${key}.tmp`);
    if (!existsSync(pathName)) {
      return null;
    }
    const stringData = await readFile(pathName, "utf-8");
    return JSON.parse(stringData);
  },
  write: async (key, data) => {
    if (data == undefined) return;
    const stringData = JSON.stringify(data);
    return writeFile(fromTmp(`${key}.tmp`), stringData, "utf-8");
  },
};
