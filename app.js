const express=require("express")
const app = express()
const mongoose = require('mongoose')
mongoose.connect("mongodb+srv://uglymallu:123@cluster0.jonxpqi.mongodb.net/demodb?retryWrites=true&w=majority")
const UserModel = mongoose.model('user', { name: String });


app.use(express.urlencoded({
    extended:false
}))
app.use(express.json())

// app.get("/",(req,res)=>{
//     res.send("request working")
// })

app.get("/index",(req,res)=>{
    res.sendfile("index.html")
})

app.post("/index",(req,res)=>{
    console.log(req.body);
    const u1 = new UserModel({ name: req.body.name });
    u1.save()
    res.send()
})

app.listen(3000,(err)=>{
    if(err){
        console.log("error");
    }else{
        console.log("success");
    }
})