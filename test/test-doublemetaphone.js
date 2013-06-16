/*jshint indent:4, browser:true, node:true, devel:true*/

// some extra work for my favorite browser IE :-(
if (typeof console === 'undefined') {
    (function (global) {
        var nop = function(){};
        global.console = {
            log: nop, info: nop, error: nop,
            dir: nop, time: nop, timeEnd: nop
        };
    } (window));
}
if (typeof String.prototype.trim !== 'function') {
    String.prototype.trim = function () {
        return this.replace(/^\s+|\s+$/, '');
    };
}

function runTest(DoubleMetaphone, refdata, callback) {
    "use strict";

    var diffs = 0,
        doubleMetaphone = new DoubleMetaphone(),
        i, len, line, tokens;

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

    for (i = 0, len = refdata.length; i < len; ++i) { // forEach not possible, should run in browser
        tokens = refdata[i];

        if (tokens.length !== 6) {
            console.log('unexpected line: ' + line);
        }
        diffs += compareWithCommons(tokens[0], tokens[2], tokens[3]);
        diffs += compareWithCommons(tokens[1], tokens[4], tokens[5]);
    }
    callback(diffs);
}

if (typeof module !== "undefined" && module.exports) {
    module.exports = runTest;
}
