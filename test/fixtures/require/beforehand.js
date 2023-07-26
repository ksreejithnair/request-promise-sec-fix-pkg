'use strict';

var request = require('request-sec-fix-pkg');
var rp = require('../../../lib/rp.js');

var requestHasNoThen = request('http://localhost:4000/200').then === undefined;
var rpHasThen = rp('http://localhost:4000/200').then !== undefined;

console.log('request: ' + requestHasNoThen + ', rp: ' + rpHasThen);
