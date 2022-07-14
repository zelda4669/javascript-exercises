const fibonacci = function(num) {
    if(num < 0) {
        return'OOPS'
    }

    let last = 0
    let current = 1
    for(let i = 0; i < (num-1); i++) {
        let x = last + current
        last = current
        current = x
    }
    return current
};

// Do not edit below this line
module.exports = fibonacci;
