function binarySearch(array, value) {
    function search(array, value, left, right) {
        while (left <= right) {
            const mid = left + Math.floor((right - left) / 2);
            if (array[mid] === value) {
                return mid;
            }
            if (array[mid] < value) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }

        return -1;
    }

    if (array == null) {
        return -1;
    }

    return search(array, value, 0, array.length - 1);
}

test('binary search', () => {
    const array = Array(10 ** 4)
        .fill(0)
        .map((_) => Math.floor(Math.random() * 10 ** 5));

    array.sort((a, b) => a - b);

    const results = [
        binarySearch(array, array[0]),
        binarySearch(array, array[10]),
        binarySearch(array, array[1000]),
        binarySearch(array, array[array.length / 2]),
        binarySearch(array, array[array.length - 1]),
    ];

    const notFound = [
        binarySearch(undefined, 1),
        binarySearch(null, 1),
        binarySearch([], 1),
        binarySearch([1, 2, 3, 4, 5], 100),
        binarySearch(undefined),
        binarySearch(null),
        binarySearch([]),
        binarySearch([1, 2, 3, 4, 5]),
    ];

    expect(results).toEqual([0, 10, 1000, Math.floor(array.length / 2), array.length - 1]);
    expect(notFound.every((e) => e === -1)).toBe(true);
});
