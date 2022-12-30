const express = require("express")
const app = express()
const userRouter = require("./Routes/user")
const studentRouter = require("./Routes/student")
const mongoose = require('mongoose')
mongoose.connect("mongodb+srv://uglymallu:123@cluster0.jonxpqi.mongodb.net/demodb?retryWrites=true&w=majority")



app.use(express.urlencoded({
    extended: false
}))
app.use(express.json())

// app.get("/",(req,res)=>{ 
//     res.send("request working")
// })

app.use("/", userRouter)
app.use("/", studentRouter)



app.listen(3000, (err) => {
    if (err) {
        console.log("error");
    } else {
        console.log("success");
    }
})
