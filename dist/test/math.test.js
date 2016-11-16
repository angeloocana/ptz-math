"use strict";

var _math = require("../math");

var _ptzAssert = require("ptz-assert");

describe("Math", function () {
    describe("random", function () {
        var min = 2;
        var max = 8;
        var randomNumber = void 0;
        beforeEach(function () {
            randomNumber = (0, _math.random)(min, max);
        });
        it(">= min", function () {
            (0, _ptzAssert.ok)(randomNumber >= min, "randomNumber: " + randomNumber + "; min:" + min);
        });
        it("<= max", function () {
            (0, _ptzAssert.ok)(randomNumber <= max, "randomNumber: " + randomNumber + "; max:" + max);
        });
    });
});