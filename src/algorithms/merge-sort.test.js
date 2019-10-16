function mergeSort(array) {
    if (array.length <= 1) {
        return array;
    }

    const middle = Math.floor(array.length / 2);
    const left = array.slice(0, middle);
    const right = array.slice(middle);

    return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
    const result = [];
    let l = 0;
    let r = 0;

    while (l < left.length && r < right.length) {
        if (left[l] <= right[r]) {
            result.push(left[l++]);
        } else {
            result.push(right[r++]);
        }
    }
    while (l < left.length) {
        result.push(left[l++]);
    }
    while (r < right.length) {
        result.push(right[r++]);
    }
    return result;
}

test('merge sort', () => {
    const array = Array(10 ** 4)
        .fill(0)
        .map(_ => Math.floor(Math.random() * 10 ** 5));
    const sorted = mergeSort(array);
    const isSorted = sorted.every((_, i, arr) => arr[i] <= (arr[i + 1] || Infinity));

    expect(isSorted).toBe(true);
});
