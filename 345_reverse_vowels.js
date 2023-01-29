/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
    const vowels = ["a", "e", "i", "o", "u"];
    const lettersArr = [...s];
    const vowelsArr = [];

    for (let i = 0; i < lettersArr.length; i++) {
        if (vowels.includes(lettersArr[i].toLowerCase())) {
            vowelsArr.push(lettersArr[i]);
            lettersArr[i] = null;
        }
    }

    return lettersArr.reduce(
        (prev, cur) => (cur ? prev + cur : prev + vowelsArr.pop()),
        ""
    );
};
