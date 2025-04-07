
const students=require('./studentdb') //importing studentdb

function getstudents() {
    return students;
}

function getStudent(id){
    return students.find((student) => student.registrationNumber==id)
}

function getBygender(gend)
{
    return students.filter((student) => student.gender==gend)
}

function getbyCourse(crs){
    return students.filter((student) => student.course==crs )
}

module.exports={getstudents,getStudent,getBygender,getbyCourse} //exporting module