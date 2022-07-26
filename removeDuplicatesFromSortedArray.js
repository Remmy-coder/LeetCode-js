var removeDuplicates = function (nums) {
    if (nums.length === 0) {
        return 0;
    }

    let x = 0;

    for (let y = 1; y < nums.length; y++) {
        if (nums[x] !== nums[y]) {
            x++;
            nums[x] = nums[y]
        }
    }
    return x + 1;
};