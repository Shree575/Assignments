class Data {

    constructor(students, courses){
        this.students = students;
        this.courses = courses;
    }

}

let dataCollection = null;

exports.initialize= () => {
    return new Promise((resolve, reject) => {
        const fs=require('fs')
        try{
            const dataFromStudentFile = fs.readFileSync('./data/students.json', 'utf8')
            const studentDataFromFile = JSON.parse(dataFromStudentFile)
            const dataFromCourseFile = fs.readFileSync('./data/courses.json', 'utf8')
            const courseDataFromFile = JSON.parse(dataFromCourseFile)
            dataCollection = new Data(studentDataFromFile,courseDataFromFile)
        } catch(err) {
            console.error(err)
        }
        resolve();
    })
}

exports.getAllStudents = () => {
    return new Promise( (resolve, reject) => {
        if (dataCollection.length === 0) {
            reject("no results returned");
        } else{
            resolve(dataCollection.students)
        }
    })
}

exports.getTAs = () => {
    return new Promise( (resolve, reject) => {
        if (dataCollection.length === 0) {
            reject("no results returned");
        } else {
            let TAtrue=[];
            for (let i = 0; i < dataCollection.students.length; i++) {
                if(dataCollection.students[i]["TA"]===true){
                    TAtrue.push(dataCollection.students[i])
                }
              }
              resolve(TAtrue)
        }
})
}

exports.getCourses = () => {
    return new Promise((resolve, reject) => {
        if (dataCollection.length === 0) {
            reject("no results returned");
        }else{
            resolve(dataCollection.courses)
        }
    })
}




