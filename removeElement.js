// var removeElement = function (nums, val) {
//     let x = 0;

//     for (let y = 0; y < nums.length; y++) {
//         if (nums[y] !== val) {
//             nums[x] = nums[y]
//             x++
//         }
//     }
//     return x;
// };

const removeElement = (nums, val) => {
    var newArr = new Array()

    nums.forEach((x) => {
        if (x !== val) {
            newArr.push(x)
        }
    })
    return newArr
}
let nums = [3, 2, 2, 3]
let val = 3
console.log(removeElement(nums, val));