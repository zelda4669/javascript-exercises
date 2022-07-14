const getTheTitles = function(dict) {
    let titles = []
    for(let i = 0; i < dict.length; i++) {
        titles.push(dict[i]['title'])
    }
    return titles
};

// Do not edit below this line
module.exports = getTheTitles;
