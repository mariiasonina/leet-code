/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    const copyArray = [...s];
    for (let i = 0; i <= s.length - 1; i++) {
        s[i] = copyArray.pop();
    };

    return s;
};
