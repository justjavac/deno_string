// Copyright Sindre Sorhus(@sindresorhus). and other strip-bom contributors. MIT license.
/**
 * Strip UTF-8 [byte order mark](https://en.wikipedia.org/wiki/Byte_order_mark#UTF-8) (BOM) from a string.
 * 
 * @example
 * 
 * ```
 * import { stripBom } from "https://deno.land/x/string/mod.ts";
 * stripBom('\uFEFFunicorn');
 * //=> 'unicorn'
 * ```
 */
export default function stripBom(str: string): string {
  if (typeof str !== "string") {
    throw new TypeError(`Expected a string, got ${typeof str}`);
  }

  // Catches EFBBBF (UTF-8 BOM) because the buffer-to-string
  // conversion translates it to FEFF (UTF-16 BOM)
  if (str.charCodeAt(0) === 0xFEFF) {
    return str.slice(1);
  }

  return str;
}
