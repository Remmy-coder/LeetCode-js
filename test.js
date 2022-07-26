// var addTwoNumbers = function (l1, l2) {
//     let dummy = new ListNode(0)
//     let p1 = l1;
//     let p2 = l2;
//     let current = dummy;
//     let carry = 0;
//     while (p1 !== null || p2 !== null) {
//         let sum = carry;
//         if (p1) {
//             sum += p1.val;
//             p1 = p1.next;
//         }
//         if (p2) {
//             sum += p2.val;
//             p2 = p2.next;
//         }
//         carry = Math.floor(sum / 10);
//         current.next = new ListNode(sum % 10);
//         current = current.next;
//     }
//     if (carry > 0) {
//         current.next = new ListNode(carry)
//     }
//     return dummy.next;
// }

// ---------------------------------------------------------------------------
// var addTwoNumbers = function (l1, l2) {
//     let dummy = new ListNode(0)
//     let p1 = l1;
//     let p2 = l2;
//     let current = dummy;
//     let carry = 0;

//     while (p1 !== null || p2 !== null) {
//         let x = (p1 !== null) ? p1.val : 0
//         let y = (p2 !== null) ? p2.val : 0
//         let sum = x + y + carry

//         carry = Math.floor(sum / 10);
//         current.next = new ListNode(sum % 10);
//         current = current.next;

//         if (p1 !== null) {
//             p1 = p1.next
//         }
//         if (p2 !== null) {
//             p2 = p2.next
//         }

//     }
//     if (carry > 0) {
//         current.next = new ListNode(1)
//     }

//     return dummy.next;

// }

// ---------------------------------------------------------------------------
// function lengthOfLongestSubstring(string) {

//     var max = 0
//     let current_string = ""

//     for (let i = 0; i < string.length; i += 1) {
//         let char = string.charAt(i);
//         let pos = current_string.indexOf(char);


//         if (pos !== -1) {
//             // cut "dv" to "v" when you see another "d"
//             current_string = current_string.substring(pos + 1);
//         }


//         current_string += char;
//         max = Math.max(max, current_string.length);
//     }


//     return max;
// }
// console.log(lengthOfLongestSubstring("dvdf")) // 3


// ------------------------------------------------------------------------
var x = 12

var str = x.toString();

var completeArr = str.split()

var reverseArr = completeArr.reverse()

var reverseStr = reverseArr.join()

if (str !== reverseStr) {
    console.log('not PALINDROME')
}
if (str == reverseStr) {
    console.log('PALINDROME')
}