function reverse(n) {
    let negative = n < 0;
    n = negative ? -n : n;
    let reversed = 0;
    while (n > 0) {
        reversed = reversed * 10 + (n % 10);
        n = Math.floor(n / 10);
    }

    if (reversed > 0x7fffffff) {
        return 0;
    }

    return negative ? -reversed : reversed;
}
test.each([[1234, 4321], [-540, -45]])('7. Reverse Integer', (input, expected) => {
    const result = reverse(input);
    expect(result).toEqual(expected);
});
