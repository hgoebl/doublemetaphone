/*jshint indent:4, node:true, devel:true, globalstrict:true*/
"use strict";

var DoubleMetaphone = require('../doublemetaphone.js'),
    doubleMetaphone = new DoubleMetaphone(),
    assert = require('assert'),
    fs = require('fs'),
    refdata,
    diffs = 0;

function compareWithCommons(name, refPrimary, refAlternate) {
    var result, diffs = 0;

    result = doubleMetaphone.doubleMetaphone(name);

    if (result === null) {
        console.log('commons-codec has result, mine is null; name=' + name);
        return 1;
    }

    if (result.primary !== refPrimary) {
        console.log('cc-diff in primary: Input=' + name +
            ' ref=' + refPrimary + ' me=' + result.primary);
        diffs += 1;
    }
    if (result.alternate !== refAlternate) {
        console.log('cc-diff in alternate: Input=' + name +
            ' ref=' + refAlternate + ' me=' + result.alternate);
        diffs += 1;
    }
    return diffs;
}

refdata = fs.readFileSync(__dirname + '/linux-credits.txt', 'utf-8');
refdata = refdata.split('\n');
refdata.forEach(function (line) {
    var tokens;

    if (line.trim().length === 0 || line.charAt(0) === '#') {
        return;
    }

    tokens = line.split('\t');
    if (tokens.length !== 6) {
        console.log('unexpected line: ' + line);
    }
    diffs += compareWithCommons(tokens[0], tokens[2], tokens[3]);
    diffs += compareWithCommons(tokens[1], tokens[4], tokens[5]);
});

assert.strictEqual(diffs, 0, 'Differences to commons-codec. Count=' + diffs);