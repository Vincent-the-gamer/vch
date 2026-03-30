# verch

verch: ***Ver***sion ***Ch***ecker

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![bundle][bundle-src]][bundle-href]
[![JSDocs][jsdocs-src]][jsdocs-href]
[![License][license-src]][license-href]

Quickly check versions of your toolchains.

## Why verch?

I think I'm a little obsessive-compulsive about keeping my dev toolchains newest(or at latest LTS version), like node, uv, git and etc. I'm always checking versions from the official sites of them.

So, why not to check them together?

## Usage

No need to install, run it with npx.

See `npx verch --help` for usage.

Example:

```bash
# list all supported tools
# alias for list: ls
npx verch list

# check all supported tools.
# alias for check: chk
npx verch check

# check specific tool, -n: --name
npx verch check -n rust
```

### Use as a library

You can also use it as a library:

```bash
npm i verch
```

```ts
import { getGitVersions, getNodeVersions, getRustVersions } from "verch";

// get value: { current: 'xxx', latest: 'xxx', latestLTS(if exists): 'xxx' }
const gitVersions = await getGitVersions()
const nodeVersions = await getNodeVersions()
const rustVersions = await getRustVersions()
...
```

## License

[MIT](./LICENSE) License © 2026-PRESENT [Vincent-the-gamer](https://github.com/Vincent-the-gamer)

<!-- Badges -->

[npm-version-src]: https://img.shields.io/npm/v/verch?style=flat&colorA=080f12&colorB=1fa669
[npm-version-href]: https://npmjs.com/package/verch
[npm-downloads-src]: https://img.shields.io/npm/dm/verch?style=flat&colorA=080f12&colorB=1fa669
[npm-downloads-href]: https://npmjs.com/package/verch
[bundle-src]: https://img.shields.io/bundlephobia/minzip/verch?style=flat&colorA=080f12&colorB=1fa669&label=minzip
[bundle-href]: https://bundlephobia.com/result?p=verch
[license-src]: https://img.shields.io/github/license/Vincent-the-gamer/verch.svg?style=flat&colorA=080f12&colorB=1fa669
[license-href]: https://github.com/Vincent-the-gamer/verch/blob/main/LICENSE
[jsdocs-src]: https://img.shields.io/badge/jsdocs-reference-080f12?style=flat&colorA=080f12&colorB=1fa669
[jsdocs-href]: https://www.jsdocs.io/package/verch
