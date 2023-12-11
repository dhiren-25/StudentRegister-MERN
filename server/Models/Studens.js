const mongoose = require('mongoose')

const studentSchema = new mongoose.Schema({
    firstName: String,
    middleName: String,
    lastName : String,
    email: String,
    rollNo: Number,
    address: String,
    gender : String,
    branch: String,

})

const StudentModel = mongoose.model("students",studentSchema)
module.exports = StudentModel;