const StudentModel = require("../models/student-model")

const addStudent= (req, res) => {
    // console.log("first : ", { reg_no: req.body.reg_no, name: req.body.name, mark: req.body.mark, dob: req.body.dob });
    // console.log("second : ", req.body);
    let data = StudentModel.create(req.body)
    res.json({
        success: true,
        message: "Added student successfully"
    })
}

const getAllStudents=async (req, res) => {
    let allStudents = await StudentModel.find()
    res.json(allStudents)
}

const getStudent =  async (req, res) => {
    let student = await StudentModel.findOne({ reg_no: req.params.reg_no })
    res.json(student)
}

const deleteStudent = async (req, res) => {
    let student = await StudentModel.findOneAndDelete({ name: req.params.name })
    res.json(student)
}

const updateStudent = async (req, res) => {
    let newstudent = await StudentModel.findOneAndUpdate({ reg_no: req.params.reg_no }, req.body)
    res.json({
        success: true,
        message: "Update Successfull"
    })
}

module.exports={addStudent,getAllStudents,getStudent,deleteStudent,updateStudent}