function reverse(n) {
    let abs = n < 0 ? -n : n;
    let reversed = 0;
    while (abs > 0) {
        reversed = reversed * 10 + (abs % 10);
        abs = Math.floor(abs / 10);
    }

    if (reversed < -0x80000000 || reversed > 0x7fffffff) {
        return 0;
    }

    return n < 0 ? -reversed : reversed;
}
test.each([[1234, 4321], [-540, -45]])('7. Reverse Integer', (input, expected) => {
    const result = reverse(input);
    expect(result).toEqual(expected);
});
