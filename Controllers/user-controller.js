const UserModel = require("../models/user-model")

const renderIndexPage = (req, res) => {
    res.sendfile("index.html")
}
const addUser = async (req, res) => {
    console.log(req.body);
    try {
        await UserModel.create(req.body)
        res.send("data added")
    } catch (error) {
        res.json("Data cannot be added")
    }
}

const getAllUser = async (req, res) => {
    try {
        let allUsers = await UserModel.find()
        res.send(allUsers)
    } catch (error) {
        res.json("Error")
    }
    
    
}

const updateUser = async (req, res) => {
    try {
        let newUser = await UserModel.findOneAndUpdate({ _id: req.params.id }, req.body,{new:true,runValidators:true})
    res.send(newUser)
    } catch (error) {
        res.json("Error")
    }
    
    
}
module.exports = { renderIndexPage, addUser, getAllUser, updateUser }