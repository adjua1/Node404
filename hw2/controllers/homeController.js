const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: "Courses"})
});
var GPA_CUTOFF = 2.5;
var GPACalc = require('../utilities.js');

const MongoDB = require("mongodb").MongoClient,
    dbURL = "mongodb://localhost:27017",
    dbName = "internshipdb";
const collectionName = "students";
var test = require('assert');
var col;

var studentArr = [];  // define an empty array as a placeholder

MongoDB.connect(dbURL, {useUnifiedTopology: true, 
                        useNewUrlParser: true, 
                        useCreateIndex: true },  
                (error, client) => {
    if (error) throw error;
    let db = client.db(dbName); 
    col = db.collection(collectionName, {safe:false, useUnifiedTechnology: true}, (err, r)=> {
        if (err) {
            console.log("Something is wrong in db.collection");
        }
    } );
   
    col.find()
        .toArray((error, studentData) => {
            if (error) throw error;
            studentArr = studentData; // store all users in the array studentArr[]
            console.log(studentData);
        });
    console.log(`All students: ${studentArr}`);
});

console.log('in homeController pass 1');
router.showCourses = (req, res) => {
    res.render("qualifiedstudents", {
        allCourses: studentArr, title: "Course List"
    });
};
console.log('in homeController pass 2');
router.addCourses = (req, res) => {
    console.log("in homeController addCourses");
    
    // ! WIPING DATABASE !
    col.remove({});
    
    let studentName = req.body.name;
    console.log("name " + studentName);
    let grade1 = req.body.grade1;
    let grade2 = req.body.grade2;
    let grade3 = req.body.grade3;
    let grade4 = req.body.grade4;
    let allCourses = [];
    var SGPA = GPACalc.getGPA(grade1, grade2, grade3, grade4);

    if(SGPA > GPA_CUTOFF)
    {
        col.insertOne({name: studentName, grades: [grade1, grade2, grade3, grade4], gpa: SGPA}, function(err, r) {
            test.equal(null, err);
            test.equal(1, r.insertedCount);
            col.find({}).toArray( (err, studentData) => {
                    console.log("record found: ", studentData);
                    studentArr = studentData;
               });
        });
        allCourses.push({name: studentName, grades: [grade1, grade2, grade3, grade4], gpa: SGPA});
    }
    
    // ! TESTING REDIRECTION !
    //res.render('thanks', {title: "CSC Courses"});
    res.render("test", {
        array: allCourses,
        name: studentName,
        g1: grade1 ,
        g2: grade2 ,
        g3: grade3 ,
        g4: grade4 ,
        gpa: SGPA ,
        cutoff: GPA_CUTOFF, title: "Test"
    });
};

console.log('in homeController pass 3');
router.getNewCourse = (req, res) => {
    console.log("in homeController getNewCourse");
    res.render("gradeinput", {title: "New Course"});
};

// Testing Code
router.showTest = (req, res) => {

    res.render("test", {title: "Test"});
};



module.exports = router;

