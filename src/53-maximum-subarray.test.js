function maxSubArray(nums) {
    if (nums.length <= 1) {
        return nums[0];
    }

    const middle = Math.floor(nums.length / 2);
    const left = nums.slice(0, middle);
    const right = nums.slice(middle);

    return Math.max(maxSubArray(left), maxSubArray(right), maximumSplit(nums));
}

function maximumSplit(array) {
    const middle = Math.floor(array.length / 2);

    let leftSum = -Infinity;
    let leftTemp = 0;
    for (let i = middle - 1; i >= 0; i--) {
        leftTemp += array[i];
        leftSum = Math.max(leftSum, leftTemp);
    }
    let rightSum = -Infinity;
    let rightTemp = 0;
    for (let i = middle; i < array.length; i++) {
        rightTemp += array[i];
        rightSum = Math.max(rightSum, rightTemp);
    }

    return Math.max(leftSum + rightSum);
}

test.each([[[-2, 1, -3, 4, -1, 2, 1, -5, 4], 6]])('53. Maximum Subarray', (input, expected) => {
    const result = maxSubArray(input);
    expect(result).toBe(expected);
});
