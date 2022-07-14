const findTheOldest = function(obj) {
    return obj.reduce((oldest, current) => {
        let currentAge = age(current.yearOfBirth, current.yearOfDeath)
        let oldestAge = age(oldest.yearOfBirth, oldest.yearOfDeath)

        if(currentAge > oldestAge){
            return current
        } else return oldest
    })

    function age(birth, death = 2022) {
        return death - birth
    }
};

// Do not edit below this line
module.exports = findTheOldest;