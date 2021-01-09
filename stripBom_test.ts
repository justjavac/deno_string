import { assertEquals } from "https://deno.land/std@0.83.0/testing/asserts.ts";

import stripBom from "./stripBom.ts";

Deno.test("no BOM", (): void => {
  assertEquals(stripBom("abc"), "abc");
});
