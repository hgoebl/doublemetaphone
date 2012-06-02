/*jshint indent:4, browser:true, node:true, devel:true*/

"use strict";
var fs = require('fs'),
    rawdata = fs.readFileSync(__dirname + '/linux-credits.txt', 'utf-8'),
    runTest = require('./test-doublemetaphone.js');

runTest(require('../doublemetaphone.js'), rawdata, function (diffs) {
    var assert = require('assert');
    assert.strictEqual(diffs, 0, 'Differences to commons-codec. Count=' + diffs);
});
