# Learn to Code with BASIC

This is a GitHub pages site with learn-to-code content using an [8-bit computer emulator](https://floooh.github.io/tiny8bit/)
and the BASIC programming language that I learnt to code with.

* [Print](https://karlvr.github.io/learn-to-code-basic/print.html)

## Developing

The pages exist in the [`src`](./src) directory. The static website is built using [`eleventy`](https://www.11ty.dev/).

Setup:

```shell
nvm use
pnpm install
```

Then run the dev server:

```shell
pnpm dev
```

## Floooh

We use the floooh project, which provides the emulator for the CPC6128. A compiled version of the emulator
is already provided in the [`js`](./js) folder so you don't need to build floooh yourself unless you want to.

We've create a workspace in `floooh-workspace` and added the [`chips-test`](https://github.com/floooh/chips-test) project as a submodule.

To clean the workspace after updating `chips-test`, if you need to, delete all of the folders except `chips-test` in the workspace.

### Setup

To setup the build environment

```shell
cd floooh-workspace/chips-test
./fips setup emscripten
```

### Building

```shell
cd floooh-workspace/chips-test
./fips set config wasm-ninja-release
./fips build
```

The build will download a bunch of dependencies into the workspace if this is a clean build. The next builds will be faster.

### Installing

To use the version you just built:

```shell
cp ../fips-deploy/chips-test/wasm-ninja-release/cpc* ../../static/js/floooh/
```
