# au2-bun

This project is bootstrapped by [aurelia/new](https://github.com/aurelia/new).

Demo of Aurelia 2 using [bun](https://bun.sh).
Everything is fast with bun.

Note, this demo uses outdated au2 2.0.0-beta.8. The old version uses legacy JS
decorators, latest au2 uses stage 3 decorators which bun has not supported yet.
https://github.com/oven-sh/bun/issues/4122


## Install deps

    bun install

## Start dev web server

    bun start

CSS is not working yet.
bun bundler replaced webpack/parcel/dumber.

## Run unit tests

    bun test

bun tester replaced jest/jasmine/mocha.

Note bun tester shares same au2 plugin with bun bundler.
