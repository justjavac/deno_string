# deno_string

[![tag](https://img.shields.io/github/release/denomod/deno_string)](https://github.com/denomod/deno_string/releases)
[![Build Status](https://github.com/denomod/deno_string/workflows/ci/badge.svg?branch=master)](https://github.com/denomod/deno_string/actions)
[![license](https://img.shields.io/github/license/denomod/deno_string)](https://github.com/denomod/deno_string/blob/master/LICENSE)

Deno string utils.


## Usage

```ts
import { camelCase } from "https://deno.land/x/case/mod.ts";
camelCase("test string");
// => 'testString'
```

or

```ts
import camelCase from "https://deno.land/x/case/camelCase.ts";
camelCase("test string");
// => 'testString'
```

## Supported functions

| function         | Description                                                                     |
|------------------|---------------------------------------------------------------------------------|
| [`stripBom`][1]  | Strip UTF-8 byte order mark (BOM) from a string                                 |

[1]: https://doc.deno.land/https/deno.land/x/string/mod.ts#stripBom

### License

[deno_string](https://github.com/denomod/deno_string) is released under the MIT License. See the bundled [LICENSE](./LICENSE) file for details.
