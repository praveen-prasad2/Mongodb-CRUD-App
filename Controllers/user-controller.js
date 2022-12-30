const UserModel = require("../models/user-model")

const renderIndexPage=(req, res) => {
    res.sendfile("index.html")
}
const addUser = (req, res) => {
    console.log(req.body);
    const u1 = new UserModel({ name: req.body.name });
    u1.save()
    res.send()
}

const getAllUser=async (req, res) => {
    let allUsers = await UserModel.find()
    res.json(allUsers)
}

const updateUser=async (req, res) => {
    let newUser = await UserModel.findOneAndUpdate({ _id: req.params.id }, req.body)
    console.log(newUser)
    res.json({
        success: true,
        message: "Updated Name Successfully"
    })
}
module.exports={renderIndexPage ,addUser,getAllUser,updateUser}