function sIP(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] >= target) {
            return i;
        }
    }
    return nums.length;
};

nums = [1,3,5,6]
target = 7

console.log(sIP(nums, target))