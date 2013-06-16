/*jshint indent:4, browser:true, node:true, devel:true*/

"use strict";
var fs = require('fs'),
    rawdata = require(__dirname + '/linux-credits.js'),
    runTest = require('./test-doublemetaphone.js');

runTest(require('../doublemetaphone.js'), rawdata, function (diffs) {
    var assert = require('assert');
    assert.strictEqual(diffs, 0, 'Differences to commons-codec. Count=' + diffs);
});
