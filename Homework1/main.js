/* Antony Adamovich
*  main.js for Homework #1
*  Dr. Cheer-Sun Yang - CSC 404 - West Chester University
*  Created: 20-FEB-2020 - Last Edited: 20-FEB-2020
*  Description: 
*/

'use strict'

var prompt = require('prompt');
var gpa = 0;
var studentList = [];
 
// Start the prompt

prompt.start();

console.log('Please enter your name: ');
prompt.get(
// Acquire all requested inputs in one get statement
[{
    name: 'name',
    required: true
}, {
    name: 'csc141Grade',
    required: true
}, {
    name: 'csc142Grade',
    required: true
}, {
    name: 'csc240Grade',
    required: true
}, {
    name: 'csc241Grade',
    required: true
}], 
// Run GPA calculations and display result
function (err, result){
    studentList.push(new Student(result.name, result.csc141Grade, result.csc142Grade, result.csc240Grade, result.csc241Grade));
    console.log('Given Input: ' + result.name + ' ' + result.csc141Grade + ' ' + result.csc142Grade + ' ' + result.csc240Grade + ' ' + result.csc241Grade);
    console.log('Estimated GPA: ' + toGPA(result.csc141Grade) + ' ' + toGPA(result.csc142Grade) + ' ' + toGPA(result.csc240Grade) + ' ' + toGPA(result.csc241Grade));
    console.log('Estimated GPA Function: ' + (studentList[0].getPartialGPA()));
}
)

function Student(name, csc141Grade, csc142Grade, csc240Grade, csc241Grade){
    var numGrades = 4;
    this.name = name;
    this.csc141Grade = csc141Grade;
    this.csc142Grade = csc142Grade;
    this.csc240Grade = csc240Grade;
    this.csc241Grade = csc241Grade;
    
    this.getPartialGPA = function (){
        return ((toGPA(this.csc141Grade) + toGPA(this.csc142Grade) + toGPA(this.csc240Grade) + toGPA(this.csc241Grade)) / numGrades);
    }
    
}

// Accepts a string letterGrade and outputs an integer corresponding to the
// GPA (Grade Point Average) of the "letter" (letterGrade)
function toGPA(letterGrade){
    switch(letterGrade){
        case 'A':
            return 4;
            break;
        case 'B':
            return 3;
            break;
        case 'C':
            return 2;
            break;
        case 'D':
            return 1;
            break;
        case 'F':
            return 0;
            break;
        default:
            console.log('Error in toGPA. letterGrade is: ' + letterGrade);
            return -1;
            break;
    }
}
