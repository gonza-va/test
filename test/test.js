const assert = require('assert').strict;
const { getMessage } = require('../src/index');

assert.equal(getMessage(), 'Hola desde Node');
console.log('Test: OK');
