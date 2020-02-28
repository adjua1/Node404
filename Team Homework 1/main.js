var prompt = require('prompt');
const utilities = require('./utilities');
prompt.start();

prompt.get(['name', 'CSC141','CSC142','CSC240','CSC241'], (err, result) => {

    console.log(result.name+" your GPA is " + utilities.getGPA(result.CSC141,result.CSC142,result.CSC241,result.CSC240));

    });