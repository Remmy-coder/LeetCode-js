const nums = [2, 7, 11, 15]
const target = 9

var twoSum = function (nums, target) {
    var map = {}
    for (var i = 0; i < nums.length; i++) {
        var value = nums[i]
        var complementPair = target - value;
        if (map[complementPair] !== undefined) {
            return [map[complementPair], i]
        }
        else {
            map[value] = i
        }
    }
};

console.log(twoSum(nums, target));