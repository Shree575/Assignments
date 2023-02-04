const collegeData = require('./modules/collegedata.js');

/*********************************************************************************
*  WEB700 – Assignment 2
*  I declare that this assignment is my own work in accordance with Seneca  Academic Policy.  
*  No part of this assignment has been copied manually or electronically from any other source
*  (including web sites) or distributed to other students.
* 
*  Name:Shreedhar Thapaliya Student ID:112749221 Date:2023-02-03
********************************************************************************/ 

collegeData.initialize()
collegeData.getAllStudents().then(data => {
  console.log("Successfully retrieved " + data.length + " students");
}).catch(e => {
    console.error(e)
  });
collegeData.getCourses().then(data => {
  console.log("Successfully retrieved " + data.length + " courses");
}).catch(e => {
  console.error(e)
});
collegeData.getTAs().then(data => {
  console.log("Successfully retrieved " + data.length + " TAs");
}).catch(e => {
  console.error(e)
});