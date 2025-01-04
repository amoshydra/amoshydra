import { readdir } from "node:fs/promises";
import { join } from "node:path";

const cwd = process.cwd();
const tmpFolder = join(cwd, "tmp");

export const f000CheckTmp = async () => {
  const files = await readdir(tmpFolder);
  console.log(files);
};
