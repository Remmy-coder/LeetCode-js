// var strStr = (string, substring) => {
//     if (substring === "") return 0
//     for (let i = 0; i <= string.length - substring.length; i++) {
//         //check match
//         let j = 0
//         for (; j < substring.length; j++) {
//             if (substring[j] !== string[i + j]) break
//         }

//         //if match
//         if (j === substring.length) return i
//     }
//     return -1
// }

// string = "abcabcd"

// substring = "abcd"

// console.log(strStr(string, substring))



//   string = a b c a b c d
//substring =          a b c d 
//
//
//
//

const string = "abcabcd"

const result = string.indexOf("zxy")

console.log(result);