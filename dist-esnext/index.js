/**
 * Takes min and max then returns
 * an random number between them.
 */
const random = (min, max) => Math.floor(Math.random() * max) + min;
/**
 * Gets some random item from the given array.
 * @param list
 */
function getRandomItem(list) {
    if (!list)
        return null;
    if (list.length === 0)
        return list[0];
    const randomIndex = random(1, list.length) - 1;
    return list[randomIndex];
}
export { random, getRandomItem };
//# sourceMappingURL=index.js.map