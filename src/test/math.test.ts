import { random } from "../math";
import { ok } from "ptz-assert";

describe("Math", () => {
    describe("random", () => {

        let min = 2;
        let max = 8;
        let randomNumber;

        beforeEach(() => {
            randomNumber = random(min, max);
        });

        it(">= min", () => {
            ok(randomNumber >= min, "randomNumber: " + randomNumber + "; min:"+ min);
        });

        it("<= max", () => {
            ok(randomNumber <= max, "randomNumber: " + randomNumber + "; max:"+ max);
        });
    });
});