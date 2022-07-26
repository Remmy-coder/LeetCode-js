function lengthOfLongestSubstring(string) {

    var max = 0
    let current_string = ""

    for (let i = 0; i < string.length; i += 1) {
        let char = string.charAt(i);
        let pos = current_string.indexOf(char);


        if (pos !== -1) {
            // cut "lv" to "v" when you see another "l"
            current_string = current_string.substring(pos + 1);
        }


        current_string += char;
        max = Math.max(max, current_string.length);
    }


    return max;
}
console.log(lengthOfLongestSubstring("lvlf")) 