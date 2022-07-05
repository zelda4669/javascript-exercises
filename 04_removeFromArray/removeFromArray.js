const removeFromArray = function(stuff) {
    const args = Array.from(arguments)
    const array = args.shift()
    const answer = []
    for (let i = 0; i < array.length; i++) {
        if (args.includes(array[i])) {
            continue
        } else {
            answer.push(array[i])
        }
    }
    return answer
};

// Do not edit below this line
module.exports = removeFromArray;
