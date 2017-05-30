'use strict';

var _ptzAssert = require('ptz-assert');

var assert = _interopRequireWildcard(_ptzAssert);

var _index = require('./index');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

describe('Math', function () {
    describe('random', function () {
        it(' 2 < randomNumber < 8', function () {
            var min = 2;
            var max = 8;
            var randomNumber = (0, _index.random)(min, max);
            assert.ok(randomNumber >= min, 'randomNumber: ' + randomNumber + '; min:' + min);
            assert.ok(randomNumber <= max, 'randomNumber: ' + randomNumber + '; max:' + max);
        });
        it(' 0 < randomNumber < 5', function () {
            var min = 0;
            var max = 5;
            var randomNumber = (0, _index.random)(min, max);
            assert.ok(randomNumber >= min, 'randomNumber: ' + randomNumber + '; min:' + min);
            assert.ok(randomNumber <= max, 'randomNumber: ' + randomNumber + '; max:' + max);
        });
        it(' 0 < randomNumber < 100', function () {
            var min = 0;
            var max = 100;
            var randomNumber = (0, _index.random)(min, max);
            assert.ok(randomNumber >= min, 'randomNumber: ' + randomNumber + '; min:' + min);
            assert.ok(randomNumber <= max, 'randomNumber: ' + randomNumber + '; max:' + max);
        });
        it(' -2 < randomNumber < 2', function () {
            var min = -2;
            var max = 2;
            var randomNumber = (0, _index.random)(min, max);
            assert.ok(randomNumber >= min, 'randomNumber: ' + randomNumber + '; min:' + min);
            assert.ok(randomNumber <= max, 'randomNumber: ' + randomNumber + '; max:' + max);
        });
    });
    describe('getRandomItem', function () {
        it('return null for null array', function () {
            assert.notOk((0, _index.getRandomItem)(null));
            assert.notOk((0, _index.getRandomItem)(undefined));
        });
        it('return first item when length equal 1', function () {
            var first = 'first';
            assert.equal((0, _index.getRandomItem)([first]), first);
        });
        it('return random item', function () {
            var list = ['a', 'b', 'c', 'd'];
            var randomItem = (0, _index.getRandomItem)(list);
            assert.contains(list, randomItem);
        });
    });
});
//# sourceMappingURL=index.test.js.map
//# sourceMappingURL=index.test.js.map