const reverseString = function(text) {
    const splitString = text.split('')
    const newString = []
    while (splitString.length > 0) {
        newString.push(splitString.pop())
    }

    return newString.join('')
};

// Do not edit below this line
module.exports = reverseString;
