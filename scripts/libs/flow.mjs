import { cache } from "./cache.mjs";

/**
 * @param {FlowInit<T, R>} flow
 * @template {unknown} T
 * @template {unknown} R
 */
export const run = async (flow) => {
  const [ fn, arg ] = flow;

  const cacheKey = fn.name;
  const cached = await cache.read(cacheKey);
  if (cached) {
    return cached;
  } else {
    const result = await fn(arg);
    await cache.write(cacheKey, result);
    return result;
  }
}

/**
 * @typedef {[(arg: T, previousResult?: R) => Promise<R>, T]} FlowInit
 * @template {unknown} T
 * @template {unknown} R
 */
