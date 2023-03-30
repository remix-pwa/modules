'use strict';

const sw = require('..');
const assert = require('assert').strict;

assert.strictEqual(sw(), 'Hello from sw');
console.info('sw tests passed');
