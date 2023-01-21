/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
    if (s.length === t.length) {
        const tArray = t.split("");
        const sArray = s.split("");
        const sLettersObject = {};
        const tLettersObject = {};

        sArray.forEach((letter) => {
            if (!sLettersObject[letter]) {
                sLettersObject[letter] = 1;
            } else {
                sLettersObject[letter] = sLettersObject[letter] + 1;
            }
        });

        tArray.forEach((letter) => {
            if (!tLettersObject[letter]) {
                tLettersObject[letter] = 1;
            } else {
                tLettersObject[letter] = tLettersObject[letter] + 1;
            }
        });

        for (const key in tLettersObject) {
            if (sLettersObject[key] !== tLettersObject[key]) {
                return false;
            }
        }

        return true;
    } else {
        return false;
    }
};

console.log(isAnagram("rat", "cat"));
