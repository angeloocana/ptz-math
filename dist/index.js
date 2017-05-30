"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
/**
 * Takes min and max then returns
 * an random number between them.
 */
var random = function random(min, max) {
    return Math.floor(Math.random() * max) + min;
};
/**
 * Gets some random item from the given array.
 * @param list
 */
function getRandomItem(list) {
    if (!list) return null;
    if (list.length === 0) return list[0];
    var randomIndex = random(1, list.length) - 1;
    return list[randomIndex];
}
exports.random = random;
exports.getRandomItem = getRandomItem;
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map