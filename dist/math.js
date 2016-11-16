"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var random = function random(min, max) {
    return Math.floor(Math.random() * max) + min;
};
exports.random = random;