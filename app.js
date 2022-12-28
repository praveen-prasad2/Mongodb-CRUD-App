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

app.get("/get-all-users",async(req,res) =>{
    let allUsers= await UserModel.find()
    res.json(allUsers)
})

app.put("/update-user/:id",async(req,res)=>{
    // console.log(req.params.id)   
    // console.log(req.body)
    let newUser=await UserModel.findOneAndUpdate({_id:req.params.id},req.body)
    console.log(newUser)
    res.json({
        success:true,
        message:"Updated Name Successfully"
    })
})

app.listen(3000,(err)=>{
    if(err){
        console.log("error");
    }else{
        console.log("success");
    }
})