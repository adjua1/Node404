"use strict";

var test = require('./utilities.js');

//console.log(test.getGPA('A', 'A', 'A', 'A'));

const testCases = [['A', 'A', 'A', 'A', 4], ['B', 'B', 'B', 'B', 3], ['C', 'C', 'C', 'C', 2], ['D', 'D', 'D', 'D', 1], ['F', 'F', 'F', 'F', 0], ['A', 'A', 'A', 'Q', -1], ['A', 'A', 'Q', 'Q', -1],
['A', 'B', 'C', 'D', (10/4)],['F', 'D', 'C', 'B', (6/4)]];

const results = [];

var i;

for(i = 0; i < testCases.length; i++)
{
    results.push([testCases[i][4], (test.getGPA(testCases[i][0],testCases[i][1],testCases[i][2],testCases[i][3]))]);
}

//console.log(results);

var j;
var errors = 0;
var errorCases = [];
for(j = 0; j < results.length; j++)
{
    if(results[j][0] != results[j][1])
    {
        errors += 1;
        errorCases.push(testCases[j]);
    }
}

var errorRate = (errors/(results.length))*100;

console.log("We have an error rate of "+ errorRate + "%. The error cases are as follows:\n" + errorCases);