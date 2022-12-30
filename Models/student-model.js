const mongoose = require('mongoose')
const StudentModel = mongoose.model('student', { reg_no: String, name: String, mark: String, dob: String });


module.exports=StudentModel