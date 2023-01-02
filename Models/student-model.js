const mongoose = require('mongoose')
const studentSchema= new mongoose.Schema({
    name:{type:String,maxLength:20,default:"New User"},reg_no:{type:String,maxLength:[6,"Limit Exceeded"]},mark:{type:String},dob:{type:String}
})
const StudentModel = mongoose.model('student', { reg_no: String, name: String, mark: String, dob: String });


module.exports=StudentModel