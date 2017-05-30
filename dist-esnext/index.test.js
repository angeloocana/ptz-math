import * as assert from 'ptz-assert';
import { getRandomItem, random } from './index';
describe('Math', () => {
    describe('random', () => {
        it(' 2 < randomNumber < 8', () => {
            const min = 2;
            const max = 8;
            const randomNumber = random(min, max);
            assert.ok(randomNumber >= min, 'randomNumber: ' + randomNumber + '; min:' + min);
            assert.ok(randomNumber <= max, 'randomNumber: ' + randomNumber + '; max:' + max);
        });
        it(' 0 < randomNumber < 5', () => {
            const min = 0;
            const max = 5;
            const randomNumber = random(min, max);
            assert.ok(randomNumber >= min, 'randomNumber: ' + randomNumber + '; min:' + min);
            assert.ok(randomNumber <= max, 'randomNumber: ' + randomNumber + '; max:' + max);
        });
        it(' 0 < randomNumber < 100', () => {
            const min = 0;
            const max = 100;
            const randomNumber = random(min, max);
            assert.ok(randomNumber >= min, 'randomNumber: ' + randomNumber + '; min:' + min);
            assert.ok(randomNumber <= max, 'randomNumber: ' + randomNumber + '; max:' + max);
        });
        it(' -2 < randomNumber < 2', () => {
            const min = -2;
            const max = 2;
            const randomNumber = random(min, max);
            assert.ok(randomNumber >= min, 'randomNumber: ' + randomNumber + '; min:' + min);
            assert.ok(randomNumber <= max, 'randomNumber: ' + randomNumber + '; max:' + max);
        });
    });
    describe('getRandomItem', () => {
        it('return null for null array', () => {
            assert.notOk(getRandomItem(null));
            assert.notOk(getRandomItem(undefined));
        });
        it('return first item when length equal 1', () => {
            const first = 'first';
            assert.equal(getRandomItem([first]), first);
        });
        it('return random item', () => {
            const list = ['a', 'b', 'c', 'd'];
            const randomItem = getRandomItem(list);
            assert.contains(list, randomItem);
        });
    });
});
//# sourceMappingURL=index.test.js.map