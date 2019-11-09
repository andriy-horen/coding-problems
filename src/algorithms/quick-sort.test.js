function quickSort(array, left, right) {
    if (right <= left) {
        return;
    }

    const pivotAt = partition(array, left, right);
    quickSort(array, left, pivotAt - 1);
    quickSort(array, pivotAt + 1, right);
}

function partition(array, left, right) {
    const pivot = array[right];
    let i = left;

    for (let j = left; j < right; j++) {
        if (array[j] <= pivot) {
            [array[i], array[j]] = [array[j], array[i]];
            i++;
        }
    }

    [array[i], array[right]] = [array[right], array[i]];

    return i;
}

test('quick sort', () => {
    const array = Array(10 ** 6)
        .fill(0)
        .map(_ => Math.floor(Math.random() * 10 ** 7));

    quickSort(array, 0, array.length - 1);
    const isSorted = array.every((_, i, arr) => arr[i] <= (arr[i + 1] || Infinity));

    expect(isSorted).toBe(true);
});
