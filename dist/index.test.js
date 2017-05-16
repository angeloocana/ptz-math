'use strict';

var _ptzAssert = require('ptz-assert');

var _index = require('./index');

describe('Math', function () {
    describe('random', function () {
        it(' 2 < randomNumber < 8', function () {
            var min = 2;
            var max = 8;
            var randomNumber = (0, _index.random)(min, max);
            (0, _ptzAssert.ok)(randomNumber >= min, 'randomNumber: ' + randomNumber + '; min:' + min);
            (0, _ptzAssert.ok)(randomNumber <= max, 'randomNumber: ' + randomNumber + '; max:' + max);
        });
        it(' 0 < randomNumber < 5', function () {
            var min = 0;
            var max = 5;
            var randomNumber = (0, _index.random)(min, max);
            (0, _ptzAssert.ok)(randomNumber >= min, 'randomNumber: ' + randomNumber + '; min:' + min);
            (0, _ptzAssert.ok)(randomNumber <= max, 'randomNumber: ' + randomNumber + '; max:' + max);
        });
        it(' 0 < randomNumber < 100', function () {
            var min = 0;
            var max = 100;
            var randomNumber = (0, _index.random)(min, max);
            (0, _ptzAssert.ok)(randomNumber >= min, 'randomNumber: ' + randomNumber + '; min:' + min);
            (0, _ptzAssert.ok)(randomNumber <= max, 'randomNumber: ' + randomNumber + '; max:' + max);
        });
        it(' -2 < randomNumber < 2', function () {
            var min = -2;
            var max = 2;
            var randomNumber = (0, _index.random)(min, max);
            (0, _ptzAssert.ok)(randomNumber >= min, 'randomNumber: ' + randomNumber + '; min:' + min);
            (0, _ptzAssert.ok)(randomNumber <= max, 'randomNumber: ' + randomNumber + '; max:' + max);
        });
    });
});
//# sourceMappingURL=index.test.js.map
//# sourceMappingURL=index.test.js.map