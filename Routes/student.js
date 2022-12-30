const express = require("express")
const router = express.Router()

const {addStudent, getAllStudents, getStudent, deleteStudent, updateStudent}=require("../Controllers/student-controller")



// STUDENT FORM

router.post("/add-student", addStudent)

router.get("/get-all-students", getAllStudents)

router.get("/get-student/:reg_no", getStudent , )

router.get("/delete-student/:name", deleteStudent )

router.patch("/update-student/:reg_no", updateStudent)

module.exports = router