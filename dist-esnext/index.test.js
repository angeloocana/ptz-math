import { ok } from 'ptz-assert';
import { random } from './index';
describe('Math', () => {
    describe('random', () => {
        it(' 2 < randomNumber < 8', () => {
            const min = 2;
            const max = 8;
            const randomNumber = random(min, max);
            ok(randomNumber >= min, 'randomNumber: ' + randomNumber + '; min:' + min);
            ok(randomNumber <= max, 'randomNumber: ' + randomNumber + '; max:' + max);
        });
        it(' 0 < randomNumber < 5', () => {
            const min = 0;
            const max = 5;
            const randomNumber = random(min, max);
            ok(randomNumber >= min, 'randomNumber: ' + randomNumber + '; min:' + min);
            ok(randomNumber <= max, 'randomNumber: ' + randomNumber + '; max:' + max);
        });
        it(' 0 < randomNumber < 100', () => {
            const min = 0;
            const max = 100;
            const randomNumber = random(min, max);
            ok(randomNumber >= min, 'randomNumber: ' + randomNumber + '; min:' + min);
            ok(randomNumber <= max, 'randomNumber: ' + randomNumber + '; max:' + max);
        });
        it(' -2 < randomNumber < 2', () => {
            const min = -2;
            const max = 2;
            const randomNumber = random(min, max);
            ok(randomNumber >= min, 'randomNumber: ' + randomNumber + '; min:' + min);
            ok(randomNumber <= max, 'randomNumber: ' + randomNumber + '; max:' + max);
        });
    });
});
//# sourceMappingURL=index.test.js.map