const palindromes = function (str) {
    newStr = str.toLowerCase().replace(/[^a-z]/g, "")

    return newStr.split("").reverse().join("") === newStr
};

// Do not edit below this line
module.exports = palindromes;
