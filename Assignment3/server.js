

/*********************************************************************************
*  WEB700 – Assignment 2
*  I declare that this assignment is my own work in accordance with Seneca  Academic Policy.  
*  No part of this assignment has been copied manually or electronically from any other source
*  (including web sites) or distributed to other students.
* 
*  Name:Shreedhar Thapaliya Student ID:112749221 Date:2023-02-18
********************************************************************************/ 

var HTTP_PORT = process.env.PORT || 8080;
var express = require("express");
var app = express();
const cd = require('./modules/collegeData.js');



// setup a 'route' to listen on the default url path
app.get("/", (req, res) => {
    res.sendFile(__dirname + '/views/home.html');
});

app.get("/about", (req, res) => {
    res.sendFile(__dirname + '/views/about.html');
});

app.get("/htmlDemo", (req, res) => {
    res.sendFile(__dirname + '/views/htmlDemo.html');
});
app.get("/students",(req,res)=>{
    var course=req.query.course
    if (typeof course !== 'undefined') {
        // The variable has a value
        cd.getStudentsByCourse(course).then(studentData => {
            res.send(studentData);
          });
      } else {
        cd.getAllStudents().then(studentData => {
            res.send(studentData);
          });
      }
});

app.get("/tas",(req,res)=>{
    cd.getAs().then(taData => {
        res.send(taData);
      });
});

app.get("/courses",(req,res)=>{
    cd.getCOurses().then(courseData => {
        res.send(courseData);
      });
});

app.get("/student/:num",(req,res)=>{
    var num = req.params.num;
    var numValue = parseInt(num);
    cd.getStudentByNum(numValue).then(studentData => {
        res.send(studentData);
      });
  
});
app.get('*', function(req, res){
    res.status(404).send('PAGE NOT FOUND');
  });
// setup http server to listen on HTTP_PORT
app.listen(HTTP_PORT, ()=>{console.log("server listening on port: " + HTTP_PORT)
cd.initialize()
});
