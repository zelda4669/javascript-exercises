const sumAll = function(x, y) {
    const nums = []

    if (x > y) {
        [x, y] = [y, x]
    } else if (x < 0 || y < 0) {
        return 'ERROR'
    } else if (typeof x != 'number' || typeof y != 'number') {
        return 'ERROR'
    }

    for (let i = x; i <= y; i++) {
        nums.push(i)
    }

    let sum = nums.reduce(function (p, c) {
        return p + c
    })

    return sum
};

// Do not edit below this line
module.exports = sumAll;
