const mongoose = require('mongoose')
const userSchema= new mongoose.Schema({
    name:{type:String, maxLength: 30,minLength:8},
})
const UserModel = mongoose.model('user', userSchema);

module.exports=UserModel