const express = require("express")
const app = express()
const mongoose = require('mongoose')
mongoose.connect("mongodb+srv://uglymallu:123@cluster0.jonxpqi.mongodb.net/demodb?retryWrites=true&w=majority")
const UserModel = mongoose.model('user', { name: String });
const StudentModel = mongoose.model('student', { reg_no: String, name: String, mark: String, dob: String });


app.use(express.urlencoded({
    extended: false
}))
app.use(express.json())

// app.get("/",(req,res)=>{ 
//     res.send("request working")
// })

app.get("/index", (req, res) => {
    res.sendfile("index.html")
})

app.post("/index", (req, res) => {
    console.log(req.body);
    const u1 = new UserModel({ name: req.body.name });
    u1.save()
    res.send()
})

app.get("/get-all-users", async (req, res) => {
    let allUsers = await UserModel.find()
    res.json(allUsers)
})

app.put("/update-user/:id", async (req, res) => {
    // console.log(req.params.id)   
    // console.log(req.body)
    let newUser = await UserModel.findOneAndUpdate({ _id: req.params.id }, req.body)
    console.log(newUser)
    res.json({
        success: true,
        message: "Updated Name Successfully"
    })
})

// STUDENT FORM

app.post("/add-student", (req, res) => {
    // console.log("first : ", { reg_no: req.body.reg_no, name: req.body.name, mark: req.body.mark, dob: req.body.dob });
    // console.log("second : ", req.body);
    let data = StudentModel.create(req.body)
    res.json({
        success: true,
        message: "Added student successfully"
    })
})

app.get("/get-all-students", async (req, res) => {
    let allStudents = await StudentModel.find()
    res.json(allStudents)
})

app.get("/get-student/:reg_no", async (req, res) => {
    let student = await StudentModel.findOne({ reg_no: req.params.reg_no })
    res.json(student)
})

app.get("/delete-student/:name", async(req,res)=>{
    let student=await StudentModel.findOneAndDelete({name:req.params.name})
    res.json(student)
})

app.patch("/update-student/:reg_no", async(req,res)=>{
    let newstudent=await StudentModel.findOneAndUpdate({reg_no:req.params.reg_no},req.body)
    res.json({
        success:true,
        message:"Update Successfull"
    })
})

app.listen(3000, (err) => {
    if (err) {
        console.log("error");
    } else {
        console.log("success");
    }
})