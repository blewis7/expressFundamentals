const fs = require('fs');
const process = require('process');
const express = require('express');
const {findMean, findMedian, findMode, convertToNumsInArray, checkForString} = require("./calculations")
const ExpressError = require("./expressError")

const app = express();

app.get('/mean', (req, res, next) =>{
    try {
        numbers = req.query['q'].split(",");
        const map1 = convertToNumsInArray(numbers);
        if (checkForString(map1) === true) throw new ExpressError("Must put in numbers separated by commas only in the query!", 400);
        let result = {
            operation: "mean",
            value: findMean(map1)
        }
        return res.send(result);
    } catch (err){
        return next(err)
    }
});

app.get('/median', (req, res, next) =>{
    try {
        numbers = req.query['q'].split(",");
        const map1 = convertToNumsInArray(numbers);
        if (checkForString(map1) === true) throw new ExpressError("Must put in numbers separated by commas only in the query!", 400);
        let result = {
            operation: "median",
            value: findMedian(map1)
        }
        return res.send(result);
    } catch (err){
        return next(err)
    } 
});

app.get('/mode', (req, res, next) =>{
    try {
        numbers = req.query['q'].split(",");
        const map1 = convertToNumsInArray(numbers);
        if (checkForString(map1) === true) throw new ExpressError("Must put in numbers separated by commas only in the query!", 400);
        let result = {
            operation: "mode",
            value: findMode(map1)
        }
        return res.send(result);
    } catch (err){
        return next(err)
    }
});

// 404 handler
app.use(function (req, res, next) {
    const notFoundError = new ExpressError("Not Found", 404);
    return next(notFoundError)
  });
  
// generic error handler
app.use(function(err, req, res, next) {
    // the default status is 500 Internal Server Error
    let status = err.status || 500;
    let message = err.message;
  
    // set the status and alert the user
    return res.status(status).json({
        error: {message, status}
    });
});

app.listen(3000, function () {
  console.log('App on port 3000');
})