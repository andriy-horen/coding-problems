function longestPalindrome(str) {
    let longest = [0, 0];
    for (let i = 0; i < str.length; i++) {
        const p = findPalindrome(str, i);
        const pLength = p[1] - p[0] + 1;
        const longestLength = longest[1] - longest[0] + 1;
        if (pLength > longestLength) {
            longest = p;
        }
    }

    return str.substring(longest[0], longest[1] + 1);
}

function findPalindrome(str, index) {
    let i = index;
    let j = index;

    while (str[i] === str[j + 1]) {
        j++;
    }

    while (i > 0 && j < str.length - 1 && str[i - 1] === str[j + 1]) {
        i--;
        j++;
    }

    return [i, j];
}

test.each([['fooanddnayo', 'anddna']])('5. Longest Palindromic Substring', (input, expected) => {
    const result = longestPalindrome(input);
    expect(result).toEqual(expected);
});
