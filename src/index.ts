/**
 * Takes min and max then returns
 * an random number between them.
 */
const random = (min: number, max: number) =>
    Math.floor(Math.random() * max) + min;

export {
    random
};
