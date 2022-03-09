const {findMean, findMedian, findMode, convertToNumsInArray, checkForString} = require("./calculations")

describe('findMean function', function(){

    test('test findMean', function(){
        let testMean = findMean([1, 2, 3, 4, 5]);
        expect(testMean).toEqual(7.5);
    });
    
    test('test findMean with an invalid number', function(){
        let testMean = findMean([1, 2, 3, 4, 5, 'foo']);
        expect(testMean).toEqual(NaN);
    });

})

describe('findMedian function', function(){

    test('test findMedian', function(){
        let testMedian = findMedian([1, 2, 3, 4, 5]);
        expect(testMedian).toEqual(3);
    });
    
    test('test findMedian with an invalid number', function(){
        let testMedian = findMedian([1, 2, 3, 4, 5, 'foo']);
        expect(testMedian).toEqual(NaN);
    });
    
})

describe('findMode function', function(){

    test('test findMode', function(){
        let testMode = findMode([1, 2, 3, 4, 5, 2]);
        expect(testMode).toEqual([2]);
    });
    
    test('test findMode with an invalid number', function(){
        let testMode = findMean([1, 2, 3, 4, 5, 'foo']);
        expect(testMode).toEqual(NaN);
    });

})

describe('covertToNumsInArray function', function(){

    test('test convertToNumsInArray', function(){
        let testConvertToNums = convertToNumsInArray(['1', '2', '3', '4', '5']);
        expect(testConvertToNums).toEqual([1, 2, 3, 4, 5]);
    });
    
    test('test convertToNumsInArray with an invalid number', function(){
        let testConvertToNums = convertToNumsInArray(['1', '2', '3', '4', '5', 'foo']);
        expect(testConvertToNums).toEqual([1, 2, 3, 4, 5, NaN]);
    });

})

describe('checkForString function', function(){

    test('test checkForString', function(){
        let testCheckForString = checkForString([1, 2, 3, 4, 5]);
        expect(testCheckForString).toEqual(false);
    });
    
    test('test checkForString with an invalid number', function(){
        let testCheckForString = checkForString([1, 2, 3, 4, 5, NaN]);
        expect(testCheckForString).toEqual(true);
    });

})
