# deno_string

Deno string utils.

## Usage

```ts
import { stripBom } from "https://deno.land/x/string/mod.ts";
stripBom("\uFEFFjustjavac");
// => 'justjavac'
```

or

```ts
import stripBom from "https://deno.land/x/string/stripBom.ts";
stripBom("\uFEFFjustjavac");
// => 'justjavac'
```

## Supported functions

| function        | Description                                     |
| --------------- | ----------------------------------------------- |
| [`stripBom`][1] | Strip UTF-8 byte order mark (BOM) from a string |

[1]: https://doc.deno.land/https/deno.land/x/string/mod.ts#stripBom

### License

[deno_string](https://github.com/justjavac/deno_string) is released under the
MIT License. See the bundled [LICENSE](./LICENSE) file for details.
