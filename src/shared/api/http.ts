/**
 * Creates a URL query string from an object, filtering out null and undefined values.
 * @param params - The object to serialize.
 * @returns A URL query string.
 *
 * @example
 * createQueryString({ a: 1, b: 'hello', c: null, d: undefined, e: 0, f: '' })
 * // returns "a=1&b=hello&e=0&f="
 */
export const createQueryString = (
  params: Record<string, string | number | null | undefined>
): string => {
  const searchParams = new URLSearchParams();
  for (const [key, value] of Object.entries(params)) {
    if (value !== null && value !== undefined) {
      searchParams.append(key, String(value));
    }
  }
  return searchParams.toString();
};
