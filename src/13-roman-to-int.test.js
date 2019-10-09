function romanToInt(str) {
    const map = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    };

    const arr = str
        .split('')
        .map(n => map[n])
        .map((n, i, array) => (n < array[i + 1] ? -1 * n : n));

    return arr.reduce((acc, curr) => acc + curr, 0);
}
test.each([['MCMXCIV', 1994]])('13. Roman to Integer', (input, expected) => {
    const result = romanToInt(input);
    expect(result).toEqual(expected);
});
