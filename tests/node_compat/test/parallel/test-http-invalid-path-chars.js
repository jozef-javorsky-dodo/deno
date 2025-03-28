// deno-fmt-ignore-file
// deno-lint-ignore-file

// Copyright Joyent and Node contributors. All rights reserved. MIT license.
// Taken from Node 23.9.0
// This file is automatically generated by `tests/node_compat/runner/setup.ts`. Do not modify this file manually.

'use strict';

require('../common');
const assert = require('assert');
const http = require('http');

const theExperimentallyDeterminedNumber = 39;

for (let i = 0; i <= theExperimentallyDeterminedNumber; i++) {
  const prefix = 'a'.repeat(i);
  for (let i = 0; i <= 32; i++) {
    assert.throws(() => {
      http.request({ path: prefix + String.fromCodePoint(i) }, assert.fail);
    }, {
      code: 'ERR_UNESCAPED_CHARACTERS',
      name: 'TypeError',
      message: 'Request path contains unescaped characters'
    });
  }
}
