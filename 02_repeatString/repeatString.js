const repeatString = function(string, num) {
    let answer = ''

    if (num < 0) {
        return 'ERROR'
    } else {
        for (let i = 0; i < (num); i++) {
            answer = answer + string
        }
        return answer
    }
};

// Do not edit below this line
module.exports = repeatString;
