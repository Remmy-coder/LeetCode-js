var isPalindrome = function (x) {

};

// var str = x.toString();

// var completeArr = str.split('')
if (x < 0) return false;
let reverse = 0;
for (let i = x; i >= 1; i = Math.floor(i / 10))
    reverse = reverse * 10 + i % 10
return reverse === x;
// var reverseArr = array.reverse(completeArr)

// var reverseStr = reverseArr.join()

// if (str !== reverseStr) {
//     return false
// }
// return true