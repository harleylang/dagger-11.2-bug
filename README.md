# Dagger - 11.2 Bug Report

This repository provides code to reproduce an upstream error.

## Steps to reproduce:

1. Clone this repo.
2. Run `yarn`
3. Start your dagger engine (in my environment I'm using a custom engine pinned to v0.11.1).
4. Run `yarn start`

## Error observed:

```
$ yarn start
yarn run v1.22.22
warning ../package.json: No license field
$ dagger -m demo call --dir=. bug
✘ demo(
    dir: ✔ blob(digest: "sha256:fa474445ec46181df24cd11c1b2a24676c5bad5af0e5acbfcd2d4fb0ddc29565", mediaType: "application/vnd.oci.image.layer.v1.tar+zstd", size: 10707417, uncompressed: "sha256:0eccfa1e3e11c831c45a14a72aace07f9b62dadfd3541e8e0825ee099d3cf3a0"): Directory! 0.0s
  ): Demo! 2.9s
! call constructor: process "tsx --no-deprecation --tsconfig /src/tsconfig.json /src/src/__dagger.entrypoint.ts" did not complete successfully: exit code: 1
┃ node:internal/process/promises:289
┃             triggerUncaughtException(err, true /* fromPromise */);
┃             ^
┃ TypeError [ERR_UNKNOWN_FILE_EXTENSION]: Unknown file extension ".ts" for /src/src/index.ts
┃     at Object.getFileProtocolModuleFormat [as file:] (node:internal/modules/esm/get_format:160:9)
┃     at defaultGetFormat (node:internal/modules/esm/get_format:203:36)
┃     at defaultLoad (node:internal/modules/esm/load:143:22)
┃     at async nextLoad (node:internal/modules/esm/hooks:749:22)
┃     at async x (file:///usr/local/lib/node_modules/tsx/dist/esm/index.mjs?1714870275019:2:1744)
┃     at async nextLoad (node:internal/modules/esm/hooks:749:22)
┃     at async Hooks.load (node:internal/modules/esm/hooks:382:20)
┃     at async handleMessage (node:internal/modules/esm/worker:199:18) {
┃   code: 'ERR_UNKNOWN_FILE_EXTENSION'
┃ }
┃
┃ Node.js v21.3.0
  ✘ exec tsx --no-deprecation --tsconfig /src/tsconfig.json /src/src/__dagger.entrypoint.ts 2.7s
  ! process "tsx --no-deprecation --tsconfig /src/tsconfig.json /src/src/__dagger.entrypoint.ts" did not complete successfully: exit code: 1

Error: response from query: input: demo resolve: call constructor: process "tsx --no-deprecation --tsconfig /src/tsconfig.json /src/src/__dagger.entrypoint.ts" did not complete successfully: exit code: 1

Stderr:
node:internal/process/promises:289
            triggerUncaughtException(err, true /* fromPromise */);
            ^
TypeError [ERR_UNKNOWN_FILE_EXTENSION]: Unknown file extension ".ts" for /src/src/index.ts
    at Object.getFileProtocolModuleFormat [as file:] (node:internal/modules/esm/get_format:160:9)
    at defaultGetFormat (node:internal/modules/esm/get_format:203:36)
    at defaultLoad (node:internal/modules/esm/load:143:22)
    at async nextLoad (node:internal/modules/esm/hooks:749:22)
    at async x (file:///usr/local/lib/node_modules/tsx/dist/esm/index.mjs?1714870275019:2:1744)
    at async nextLoad (node:internal/modules/esm/hooks:749:22)
    at async Hooks.load (node:internal/modules/esm/hooks:382:20)
    at async handleMessage (node:internal/modules/esm/worker:199:18) {
  code: 'ERR_UNKNOWN_FILE_EXTENSION'
}

Node.js v21.3.0
error Command failed with exit code 1.
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
```

Logs for this bug should also be available in the GitHub Actions menu attached to this repository.
