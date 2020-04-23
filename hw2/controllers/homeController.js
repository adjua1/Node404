const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: "Courses"})
});

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
var courses = [
    {
        name: "John Doe",
        grades: ["300", "400", "500", "600"],
        gpa: 4.0
    },
    {
        name: "Jane Roe",
        grades: ["100", "200", "300", "400"],
        gpa: 3.9
    }
];
console.log('in homeController pass 1');
router.showCourses = (req, res) => {
    res.render("qualifiedstudents", {
        allCourses: courses, title: "Course List"
    });
};
console.log('in homeController pass 2');
router.addCourses = (req, res) => {
    console.log("in homeController addCourses");
    var studentName = req.body.name;
    console.log("name " + studentName);
    var grade1 = req.body.grade1;
    var grade2 = req.body.grade2;
    var grade3 = req.body.grade3;
    var grade4 = req.body.grade4;
    let allCourses = courses;
    var SGPA = GPACalc.getGPA(grade1, grade2, grade3, grade4)

    if(SGPA > 3)
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
    
    res.render("qualifiedstudents", {
        allCourses: courses
    });
};

console.log('in homeController pass 3');
router.getNewCourse = (req, res) => {
    console.log("in homeController getNewCourse");
    res.render("gradeinput", {title: "New Course"});
};
module.exports = router;

