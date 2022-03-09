function convertToNumsInArray(arr){
    return arr.map(e => Number(e));
}

function checkForString(arr){
    return !arr.every(x => !isNaN(x));
}

function findMean(arr){
    return (arr.reduce((a, b) => a + b))/2;
}

function findMedian(arr){
    if (!arr.every(x => !isNaN(x))){
        return NaN;
    }
    let order = arr.sort((a, b) => a - b);
    let mid = Math.floor(order.length/2);
    return arr.length % 2 !== 0 ? order[mid] : (order[mid - 1] + order[mid])/2;
}

function findMode(arr){
    let counts = {};
    let mostFrequent = [];
    arr.forEach(function(e) {
        if(counts[e] === undefined){
            counts[e] = 0;
        }
        counts[e] += 1 
    })
    let vals = Object.values(counts);
    let val = Math.max(...vals);
    mostFrequent = Object.keys(counts).filter(key => counts[key] === val)
    mostFrequent = mostFrequent.map(e => Number(e));
    return mostFrequent;
}

module.exports = {findMean, findMedian, findMode, convertToNumsInArray, checkForString};
    